export default function AboutSection() {
  return (
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
  );
}
