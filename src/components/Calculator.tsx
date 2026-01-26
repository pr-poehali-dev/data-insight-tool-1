import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CalculatorItem {
  id: string;
  name: string;
  quantity: number;
}

export default function Calculator() {
  const { toast } = useToast();
  const [items, setItems] = useState<CalculatorItem[]>([
    { id: '1', name: '', quantity: 0 }
  ]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), name: '', quantity: 0 }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: 'name' | 'quantity', value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleCalculate = () => {
    const hasItems = items.some(item => item.name.trim() && item.quantity > 0);
    if (!hasItems) {
      toast({
        title: 'Заполните данные',
        description: 'Добавьте хотя бы один товар с количеством',
        variant: 'destructive',
      });
      return;
    }
    setShowContactForm(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const itemsList = items
      .filter(item => item.name.trim() && item.quantity > 0)
      .map(item => `${item.name} - ${item.quantity} шт.`)
      .join('\n');

    const data = {
      company: formData.get('company') as string,
      contact: `Email: ${formData.get('email')}, Тел: ${formData.get('phone')}`,
      message: `ЗАПРОС РАСЧЕТА СТОИМОСТИ:\n\n${itemsList}`,
    };

    try {
      const response = await fetch('https://functions.poehali.dev/bbfa06f8-eaaa-4af2-b609-1566130b6067', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: 'Запрос отправлен!',
          description: 'Мы рассчитаем стоимость и свяжемся с вами в ближайшее время.',
        });
        setItems([{ id: '1', name: '', quantity: 0 }]);
        setShowContactForm(false);
        e.currentTarget.reset();
      } else {
        toast({
          title: 'Ошибка',
          description: result.error || 'Не удалось отправить запрос.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка соединения',
        description: 'Проверьте интернет или позвоните нам.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Калькулятор упаковки</h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Укажите нужные товары и их количество — мы рассчитаем стоимость и вышлем коммерческое предложение
        </p>

        <Card className="p-6 md:p-8 max-w-3xl mx-auto">
          {!showContactForm ? (
            <div className="space-y-6">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id} className="flex gap-3 items-end">
                    <div className="flex-1">
                      <Label htmlFor={`item-${item.id}`}>Товар {index + 1}</Label>
                      <Input
                        id={`item-${item.id}`}
                        placeholder="Например: Гофрокартон 600x400x400"
                        value={item.name}
                        onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                      />
                    </div>
                    <div className="w-32">
                      <Label htmlFor={`qty-${item.id}`}>Кол-во</Label>
                      <Input
                        id={`qty-${item.id}`}
                        type="number"
                        min="0"
                        placeholder="0"
                        value={item.quantity || ''}
                        onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                      />
                    </div>
                    {items.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Icon name="X" size={20} />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={addItem}
                className="w-full"
              >
                <Icon name="Plus" size={20} className="mr-2" />
                Добавить товар
              </Button>

              <Button
                type="button"
                onClick={handleCalculate}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Получить расчет стоимости
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-neutral-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Ваш заказ:</h3>
                <ul className="space-y-1 text-sm text-neutral-600">
                  {items
                    .filter(item => item.name.trim() && item.quantity > 0)
                    .map(item => (
                      <li key={item.id}>• {item.name} — {item.quantity} шт.</li>
                    ))}
                </ul>
              </div>

              <div>
                <Label htmlFor="company">Название компании</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  placeholder="ООО «Ваша компания»"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="mail@company.ru"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1"
                >
                  Назад
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
