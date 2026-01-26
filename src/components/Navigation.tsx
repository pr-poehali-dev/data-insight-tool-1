export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#4d7c3f]">
      <div className="container mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/projects/159f7eb9-0961-46af-b214-32ed9420a8d0/bucket/63017d72-f0fc-43be-bc97-95dd7c64213c.png" 
              alt="БазаУпаковки" 
              className="h-14 sm:h-16 md:h-18 w-auto object-contain" 
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
  );
}