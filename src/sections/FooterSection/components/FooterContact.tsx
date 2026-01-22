export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[250px]">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
        Our Services
      </div>
      <nav className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3">
        <a
          href="/services"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Mechanical Service
        </a>
        <a
          href="/services"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Quartz Service
        </a>
        <a
          href="/services"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Chronograph Service
        </a>
        <a
          href="/services"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Part Repairs
        </a>
        <a
          href="/services"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Rolex Servicing
        </a>
        <a
          href="/services"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Vintage Watch Service
        </a>
      </nav>
    </div>
  );
};
