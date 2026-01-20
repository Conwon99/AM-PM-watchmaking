export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[250px]">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
        Services
      </div>
      <nav className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3">
        <a
          href="/service/repair"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Watch Repair
        </a>
        <a
          href="/service/restoration"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Vintage Restoration
        </a>
        <a
          href="/service/custom"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Custom Watchmaking
        </a>
        <a
          href="/service/maintenance"
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base"
        >
          Maintenance
        </a>
      </nav>
    </div>
  );
};
