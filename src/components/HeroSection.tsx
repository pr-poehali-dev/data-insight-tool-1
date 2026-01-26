export default function HeroSection() {
  return (
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
          
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8 max-w-3xl">
            <div className="flex flex-row xs:flex-col items-center xs:text-center gap-3 xs:gap-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 xs:mb-3 sm:mb-4 flex items-center justify-center bg-[#d4772f] rounded-full flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base mb-1">Быстрая доставка</h3>
                <p className="text-xs sm:text-sm text-neutral-600">За 4 часа по Уфе</p>
              </div>
            </div>
            <div className="flex flex-row xs:flex-col items-center xs:text-center gap-3 xs:gap-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 xs:mb-3 sm:mb-4 flex items-center justify-center bg-[#d4772f] rounded-full flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base mb-1">Всегда в наличии</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Склад в Уфе</p>
              </div>
            </div>
            <div className="flex flex-row xs:flex-col items-center xs:text-center gap-3 xs:gap-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 xs:mb-3 sm:mb-4 flex items-center justify-center bg-[#d4772f] rounded-full flex-shrink-0">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
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
  );
}