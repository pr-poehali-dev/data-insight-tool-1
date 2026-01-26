import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      company: formData.get('company') as string,
      contact: formData.get('contact') as string,
      message: formData.get('message') as string,
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
          description: result.message || 'Мы свяжемся с вами в ближайшее время.',
        });
        e.currentTarget.reset();
      } else {
        toast({
          title: 'Ошибка',
          description: result.error || 'Не удалось отправить заявку. Попробуйте позвонить нам.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка соединения',
        description: 'Проверьте интернет или позвоните нам по телефону.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#4d7c3f]">
        <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/bucket/63017d72-f0fc-43be-bc97-95dd7c64213c.png" 
                alt="БазаУпаковки" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
              />
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-sm uppercase tracking-widest hover:text-[#d4772f] transition-colors">
                Продукция
              </a>
              <a href="#about" className="text-sm uppercase tracking-widest hover:text-[#d4772f] transition-colors">
                О компании
              </a>
              <a href="#contact" className="text-sm uppercase tracking-widest hover:text-[#d4772f] transition-colors">
                Контакты
              </a>
            </div>
            <div className="md:hidden flex gap-4">
              <a href="#products" className="text-xs uppercase tracking-wider hover:text-[#d4772f] transition-colors">
                Продукция
              </a>
              <a href="#contact" className="text-xs uppercase tracking-wider hover:text-[#d4772f] transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-7 mb-6 md:mb-0">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-4 sm:mb-6">
              УПАКОВКА
              <br />
              ДЛЯ БИЗНЕСА
              <br />
              <span className="text-[#d4772f]">ЗА 4 ЧАСА</span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8">
              Стретч. Скотч. Коробки. Надёжные упаковочные материалы для маркетплейсов, складов и логистики. Доставка по Уфе за 4 часа.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a 
                href="#contact" 
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#4d7c3f] text-white text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-[#d4772f] transition-colors text-center"
              >
                Получить прайс-лист
              </a>
              <a 
                href="#products" 
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#4d7c3f] text-[#4d7c3f] text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest hover:bg-[#4d7c3f] hover:text-white transition-colors text-center"
              >
                Наша продукция
              </a>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
              <div className="flex items-start gap-3">
                <div className="text-[#d4772f] text-2xl">⚡</div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base mb-1">Быстрая доставка</h3>
                  <p className="text-xs sm:text-sm text-neutral-600">За 4 часа по Уфе</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#d4772f] text-2xl">📦</div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base mb-1">Всегда в наличии</h3>
                  <p className="text-xs sm:text-sm text-neutral-600">Склад в Уфе</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#d4772f] text-2xl">💰</div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base mb-1">Оптовые цены</h3>
                  <p className="text-xs sm:text-sm text-neutral-600">От производителя</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md md:max-w-none aspect-square overflow-hidden rounded-sm">
              <img 
                src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/files/1edc3352-f6f6-4de1-9ce4-3c65c89ca5f3.jpg" 
                alt="Склад упаковочных материалов" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#d4772f] opacity-90"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="products" className="py-12 sm:py-16 md:py-20 bg-[#4d7c3f] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 sm:mb-8 md:mb-12">ПРОДУКЦИЯ</h2>

          {/* Пленки */}
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
                  <div className="aspect-square bg-white mb-4 overflow-hidden flex items-center justify-center">
                    <div className="text-6xl">🫧</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Пузырчатая пленка</h4>
                  <p className="text-neutral-400 text-sm">Защита хрупких товаров. Разная плотность под ваши задачи.</p>
                </div>
                <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                  <div className="aspect-square bg-white mb-4 overflow-hidden flex items-center justify-center">
                    <div className="text-6xl">🔥</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Термоусадочная пленка</h4>
                  <p className="text-neutral-400 text-sm">Для упаковки паллет. Надежная фиксация груза.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Скотч */}
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
                  <div className="aspect-square bg-white mb-4 overflow-hidden flex items-center justify-center">
                    <div className="text-6xl">🎨</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Цветной скотч</h4>
                  <p className="text-neutral-400 text-sm">С логотипом и без. Брендирование упаковки для маркетплейсов.</p>
                </div>
                <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                  <div className="aspect-square bg-white mb-4 overflow-hidden flex items-center justify-center">
                    <div className="text-6xl">💪</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Армированный скотч</h4>
                  <p className="text-neutral-400 text-sm">Повышенная прочность. Для тяжелых и крупногабаритных грузов.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Коробки */}
          <div>
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
                  <div className="aspect-square bg-white mb-4 overflow-hidden flex items-center justify-center">
                    <div className="text-6xl">📐</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Гофрокартон</h4>
                  <p className="text-neutral-400 text-sm">Листовой материал. Для производства упаковки любых форм.</p>
                </div>
                <div className="group w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
                  <div className="aspect-square bg-white mb-4 overflow-hidden flex items-center justify-center">
                    <div className="text-6xl">✨</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Нестандартные коробки</h4>
                  <p className="text-neutral-400 text-sm">Под заказ. Любые размеры и формы для ваших товаров.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6 md:mb-8">О КОМПАНИИ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/bucket/63017d72-f0fc-43be-bc97-95dd7c64213c.png" 
                  alt="БазаУпаковки логотип" 
                  className="w-3/4 h-auto object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-base sm:text-lg md:text-xl mb-6">
                БазаУпаковки — производитель и поставщик упаковочных материалов для бизнеса. Мы понимаем, что надежная упаковка — это защита товара, скорость логистики и доверие клиентов.
              </p>
              <p className="mb-6">
                Наши клиенты — селлеры на маркетплейсах, фулфилмент-центры, склады, транспортные и производственные компании. Мы работаем с теми, кому важны качество, стабильность поставок и гибкость под задачи.
              </p>
              <p className="mb-6">
                Производим стретч-пленку, упаковочный скотч и гофрокартонные коробки. Работаем как с крупными партиями, так и с небольшими заказами. Доставка по России.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Преимущества</h3>
                  <ul className="space-y-2">
                    <li>Собственное производство</li>
                    <li>Гибкие объёмы заказа</li>
                    <li>Доставка по России</li>
                    <li>Индивидуальные решения</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Для кого</h3>
                  <ul className="space-y-2">
                    <li>Селлеры маркетплейсов</li>
                    <li>Фулфилмент-центры</li>
                    <li>Склады и логистика</li>
                    <li>Производители</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="company" className="block text-sm uppercase tracking-widest mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#4d7c3f] placeholder-white/50"
                    placeholder="Название вашей компании"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm uppercase tracking-widest mb-2">
                    Контакты
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#4d7c3f] placeholder-white/50"
                    placeholder="Email или телефон"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Что нужно
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#4d7c3f] placeholder-white/50"
                    placeholder="Опишите задачу: что нужно, объёмы, сроки"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 px-8 py-3 bg-[#4d7c3f] text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[#4d7c3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправка...' : 'Получить расчёт'}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white/10 rounded-sm overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8e3c5a4f8b9d2c1a0f7e6d5c4b3a2918&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта офиса БазаУпаковки"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2025 БазаУпаковки. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-[#d4772f] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-[#d4772f] transition-colors">
              VK
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-[#d4772f] transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}