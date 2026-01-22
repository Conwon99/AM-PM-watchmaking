export const AboutPageAbout = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent max-w-[988px]">
              <div className="text-3xl font-medium box-border caret-transparent blur-0 tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                At{" "}
                <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
                  AM|PM Watch Repair{" "}
                </span>
                we've been restoring and repairing timepieces with masterful craftsmanship{" "}
                <span className="text-neutral-400 text-3xl box-border caret-transparent leading-[35px] md:text-[52px] md:leading-[62px]">
                  since 2015, with 100+ watches serviced
                </span>
              </div>
            </div>
          </div>
          <div className="items-center md:items-end box-border caret-transparent gap-x-7 flex flex-col justify-center md:justify-between gap-y-7 mt-[18px] md:gap-x-10 md:flex-row md:gap-y-10 md:mt-5">
            <div className="box-border caret-transparent gap-x-[18px] flex blur-0 flex-col max-w-[488px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
              <div className="box-border caret-transparent flex">
                <div className="text-4xl font-semibold box-border caret-transparent leading-[48px] md:text-5xl md:leading-[60px]">
                  10+
                </div>
                <div className="text-gray-700 box-border caret-transparent ml-2">
                  <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                    Years of Experience
                  </div>
                </div>
              </div>
              <div className="text-gray-700 box-border caret-transparent">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  AM|PM Watch Repair is an independent watchmaking workshop specialising in the repair and servicing of luxury watches. Our experience spans leading brands including Omega, Rolex, TAG Heuer, Cartier, Breitling, Seiko, and more. With over a decade of professional horological experience, we have worked for major Swiss brands and served as in-house watchmakers for well-known high-street jewellers.
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full max-w-full md:max-w-none md:flex-row md:gap-y-0 md:w-auto">
              <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-[240px]">
                <img
                  src="/about1.jpeg"
                  sizes="(max-width: 767px) 100vw, 240px"
                  alt="Professional Watch Repair"
                  className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                />
              </div>
              <div className="box-border caret-transparent gap-y-4 flex flex-col w-full md:gap-y-4 md:w-auto">
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src="/about2.jpeg"
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="Watch Repair Workshop"
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                </div>
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src="/about3.jpeg"
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="Watchmaking Craftsmanship"
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
