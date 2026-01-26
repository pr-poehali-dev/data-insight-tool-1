import json
import os
import psycopg2
import urllib.request
import urllib.parse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


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


def send_email_notification(company: str, contact: str, message: str):
    smtp_server = os.environ.get('SMTP_SERVER')
    smtp_port = os.environ.get('SMTP_PORT')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    from_email = os.environ.get('SMTP_FROM_EMAIL')
    to_email = os.environ.get('SMTP_TO_EMAIL')
    
    if not all([smtp_server, smtp_port, smtp_password, from_email, to_email]):
        return
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта БазаУпаковки'
    msg['From'] = from_email
    msg['To'] = to_email
    
    html = f"""
    <html>
      <body style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #d4772f;">🔔 Новая заявка с сайта</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Компания:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{company}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Контакты:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{contact}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Запрос:</td>
            <td style="padding: 10px;">{message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">Это автоматическое уведомление с сайта bazaupak.ru</p>
      </body>
    </html>
    """
    
    part = MIMEText(html, 'html', 'utf-8')
    msg.attach(part)
    
    with smtplib.SMTP(smtp_server, int(smtp_port)) as server:
        server.starttls()
        server.login(from_email, smtp_password)
        server.send_message(msg)


def handler(event: dict, context) -> dict:
    '''Обработка заявок с контактной формы, сохранение в БД и отправка в Telegram и на почту'''
    
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
        
        try:
            send_email_notification(company, contact, message)
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