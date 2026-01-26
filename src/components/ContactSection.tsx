import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import PhoneInput from '@/components/ui/phone-input';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const phone = formData.get('phone') as string;

    if (!phone || phone.length < 10) {
      toast({
        title: 'Ошибка',
        description: 'Введите корректный номер телефона',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    const data = {
      company: 'Заявка с сайта',
      contact: phone,
      message: 'Заявка на обратный звонок',
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
          title: 'Заявка отправлена!',
          description: 'Мы перезвоним вам в ближайшее время.',
        });
        e.currentTarget.reset();
      } else {
        toast({
          title: 'Ошибка',
          description: result.error || 'Попробуйте позвонить нам.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Попробуйте позвонить нам: +7 (992) 029-44-44',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-[#d4772f] text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 sm:mb-8 md:mb-12">КОНТАКТЫ</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">Нужна упаковка для вашего бизнеса? Оставьте заявку — рассчитаем стоимость и сроки.</p>
            <div className="space-y-4">
              <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="w-24 text-xs sm:text-sm uppercase tracking-widest">Почта</span>
                <a href="mailto:info@bazaupak.ru" className="hover:underline">
                  info@bazaupak.ru
                </a>
              </p>
              <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="w-24 text-xs sm:text-sm uppercase tracking-widest">Телефон</span>
                <a href="tel:+79920294444" className="hover:underline">
                  +7 (992) 029-44-44
                </a>
              </p>
              <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="w-24 text-xs sm:text-sm uppercase tracking-widest">Адрес</span>
                <span className="text-sm sm:text-base">Республика Башкортостан, г. Уфа, ул. Менделеева д. 177, 5 эт.</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-base sm:text-lg mb-6">Оставьте номер — перезвоним за 5 минут</p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4" onSubmit={handleSubmit}>
              <PhoneInput
                name="phone"
                required
                placeholder="+7 (___) ___-__-__"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#4d7c3f] text-white text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-white hover:text-[#4d7c3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-8 md:pt-12 border-t border-white/20">
          <p className="text-xs sm:text-sm text-white/80">© 2025 БазаУпаковки. Упаковочные материалы для бизнеса.</p>
        </div>
      </div>
    </section>
  );
}