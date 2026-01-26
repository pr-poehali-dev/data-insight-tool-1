export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#4d7c3f]">
        <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/bucket/bf020442-abe8-438c-a06a-ccd1f6b9281b.jpeg" 
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
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              УПАКОВКА
              <br />
              ДЛЯ БИЗНЕСА
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-xl">
              Стретч. Скотч. Коробки. Надёжные упаковочные материалы для маркетплейсов, складов и логистики. Качество, которое защищает ваш товар.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-[#4d7c3f]">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#d4772f]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="products" className="py-20 px-4 md:px-8 bg-[#4d7c3f] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12">ПРОДУКЦИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-[#d4772f] transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">01</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Стретч-пленка</h3>
              <p className="text-neutral-400">Промышленная и ручная. Прозрачная и черная. От 1 до 500 кг под заказ.</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-[#d4772f] transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Скотч упаковочный</h3>
              <p className="text-neutral-400">Прозрачный, цветной, с логотипом. Любые размеры для складов и маркетплейсов.</p>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-[#d4772f] transition-colors duration-300">
                  <span className="text-black text-8xl font-bold">03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Картонные коробки</h3>
              <p className="text-neutral-400">Гофрокартон под любые товары. Стандартные и индивидуальные размеры.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8">О КОМПАНИИ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-[#4d7c3f]"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-base sm:text-lg md:text-xl mb-6">
                УПАКОВКА PRO — производитель и поставщик упаковочных материалов для бизнеса. Мы понимаем, что надежная упаковка — это защита товара, скорость логистики и доверие клиентов.
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
      <section id="contact" className="py-20 px-4 md:px-8 bg-[#d4772f] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8">КОНТАКТЫ</h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">Нужна упаковка для вашего бизнеса? Оставьте заявку — рассчитаем стоимость и сроки.</p>
              <div className="space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="w-24 text-xs sm:text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:order@upakovkapro.ru" className="hover:underline">
                    order@upakovkapro.ru
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="w-24 text-xs sm:text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+78001234567" className="hover:underline">
                    +7 (800) 123-45-67
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="w-24 text-xs sm:text-sm uppercase tracking-widest">Адрес</span>
                  <span className="text-sm sm:text-base">Производство и склад в Московской области</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#4d7c3f] placeholder-white/50"
                    placeholder="Название вашей компании"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Контакты
                  </label>
                  <input
                    type="email"
                    id="email"
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
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-[#4d7c3f] placeholder-white/50"
                    placeholder="Опишите задачу: что нужно, объёмы, сроки"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-[#4d7c3f] text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[#4d7c3f] transition-colors"
                >
                  Получить расчёт
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2025 GRIDFORM Studio. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Behance
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}