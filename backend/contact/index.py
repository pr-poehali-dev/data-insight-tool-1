import json
import os
import psycopg2
import urllib.request
import urllib.parse


def send_telegram_notification(company: str, contact: str, message: str):
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return
    
    text = f"""🔔 Новая заявка с сайта БазаУпаковки

🏢 Компания: {company}
📞 Контакты: {contact}
💬 Запрос:
{message}"""
    
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode('utf-8')
    
    req = urllib.request.Request(url, data=data)
    urllib.request.urlopen(req, timeout=5)


def handler(event: dict, context) -> dict:
    '''Обработка заявок с контактной формы, сохранение в БД и отправка в Telegram'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        company = body.get('company', '').strip()
        contact = body.get('contact', '').strip()
        message = body.get('message', '').strip()
        
        if not company or not contact or not message:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Заполните все поля'}),
                'isBase64Encoded': False
            }
        
        database_url = os.environ.get('DATABASE_URL')
        
        if not database_url:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'База данных не настроена'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        cursor.execute(
            "INSERT INTO contact_requests (company, contact, message) VALUES (%s, %s, %s)",
            (company, contact, message)
        )
        
        conn.commit()
        cursor.close()
        conn.close()
        
        try:
            send_telegram_notification(company, contact, message)
        except Exception:
            pass
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.'
            }),
            'isBase64Encoded': False
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Некорректный формат данных'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'}),
            'isBase64Encoded': False
        }