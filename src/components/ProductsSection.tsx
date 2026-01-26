import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import PhoneInput from '@/components/ui/phone-input';

export default function ProductsSection() {
  const { toast } = useToast();
  const [isQuickFormSubmitting, setIsQuickFormSubmitting] = useState(false);

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-[#4d7c3f] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 sm:mb-8 md:mb-12">ПРОДУКЦИЯ</h2>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 sm:mb-6">Пленки</h3>
          <div className="overflow-x-auto -mx-4 md:-mx-8 px-4 md:px-8">
            <div className="flex gap-6 sm:gap-8 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0">
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/2d760fa7-a581-4ab5-9cca-0534d23ddcff.jpg" 
                    alt="Стретч-пленка" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Стретч-пленка</h4>
                <p className="text-neutral-400 text-sm">Промышленная и ручная. Прозрачная и черная. От 1 до 500 кг.</p>
              </div>
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/b6e2f005-bc1c-4d1a-a267-e179cca946ca.jpg" 
                    alt="Пузырчатая пленка" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Пузырчатая пленка</h4>
                <p className="text-neutral-400 text-sm">Защита хрупких товаров. Разная плотность под ваши задачи.</p>
              </div>
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/6ee2df4e-1d8d-4599-ae28-a908186443f7.jpg" 
                    alt="Термоусадочная пленка" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Термоусадочная пленка</h4>
                <p className="text-neutral-400 text-sm">Для упаковки паллет. Надежная фиксация груза.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 sm:mb-6">Скотч</h3>
          <div className="overflow-x-auto -mx-4 md:-mx-8 px-4 md:px-8">
            <div className="flex gap-6 sm:gap-8 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0">
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/a6235816-183f-4e4b-93e2-e705bf2752ae.jpg" 
                    alt="Прозрачный скотч" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Прозрачный скотч</h4>
                <p className="text-neutral-400 text-sm">Универсальный. Для склейки коробок и упаковки товаров.</p>
              </div>
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/7e65e8ef-81c7-4380-95b0-58d3e7b0dea8.jpg" 
                    alt="Цветной скотч" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Цветной скотч</h4>
                <p className="text-neutral-400 text-sm">С логотипом и без. Брендирование упаковки для маркетплейсов.</p>
              </div>
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/d8e3f2d3-25b4-4349-ac79-1807d6c96b63.jpg" 
                    alt="Армированный скотч" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Армированный скотч</h4>
                <p className="text-neutral-400 text-sm">Повышенная прочность. Для тяжелых и крупногабаритных грузов.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 sm:mb-6">Коробки</h3>
          <div className="overflow-x-auto -mx-4 md:-mx-8 px-4 md:px-8">
            <div className="flex gap-6 sm:gap-8 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0">
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/b7ec4c96-b043-4e69-8bcf-d3928303830a.jpg" 
                    alt="Картонные коробки" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Картонные коробки</h4>
                <p className="text-neutral-400 text-sm">Стандартные размеры. Быстрая отгрузка со склада.</p>
              </div>
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/de25e8a3-fe57-4417-bee1-6e59bb9b9b07.jpg" 
                    alt="Гофрокартон" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Гофрокартон</h4>
                <p className="text-neutral-400 text-sm">Листовой материал. Для производства упаковки любых форм.</p>
              </div>
              <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                <div className="aspect-square bg-white mb-4 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/ec250492-b2b9-4b35-bed5-a72daae72ded.jpg" 
                    alt="Нестандартные коробки" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Нестандартные коробки</h4>
                <p className="text-neutral-400 text-sm">Под заказ. Любые размеры и формы для ваших товаров.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 bg-white/10 backdrop-blur-sm rounded-sm p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Нужна консультация?</h3>
            <p className="text-neutral-300 text-sm sm:text-base">Оставьте номер — перезвоним за 5 минут</p>
          </div>
          <form 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsQuickFormSubmitting(true);
              
              const formData = new FormData(e.currentTarget);
              const data = {
                company: 'Быстрая заявка',
                contact: formData.get('phone') as string,
                message: 'Запрос на консультацию',
              };

              try {
                const response = await fetch('https://functions.poehali.dev/bbfa06f8-eaaa-4af2-b609-1566130b6067', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });

                console.log('Response status:', response.status);
                console.log('Response ok:', response.ok);

                if (!response.ok) {
                  console.error('Response not ok, status:', response.status);
                  toast({
                    title: 'Ошибка',
                    description: 'Попробуйте позвонить нам.',
                    variant: 'destructive',
                  });
                  return;
                }

                toast({
                  title: 'Заявка отправлена!',
                  description: 'Мы перезвоним вам в ближайшее время.',
                });
                e.currentTarget.reset();
              } catch (error) {
                console.error('Fetch error:', error);
                toast({
                  title: 'Ошибка',
                  description: 'Попробуйте позвонить нам: +7 (992) 029-44-44',
                  variant: 'destructive',
                });
              } finally {
                setIsQuickFormSubmitting(false);
              }
            }}
          >
            <PhoneInput
              name="phone"
              required
              placeholder="+7 (___) ___-__-__"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#d4772f] text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={isQuickFormSubmitting}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#d4772f] text-white text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-white hover:text-[#4d7c3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isQuickFormSubmitting ? 'Отправка...' : 'Получить консультацию'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}