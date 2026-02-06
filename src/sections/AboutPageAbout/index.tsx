export const AboutPageAbout = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent max-w-[988px]">
              <div className="text-3xl font-medium box-border caret-transparent blur-0 tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                Repairing and restoring watches since 2015
              </div>
            </div>
          </div>
          <div className="items-center md:items-end box-border caret-transparent gap-x-7 flex flex-col justify-center md:justify-between gap-y-7 mt-[18px] md:gap-x-10 md:flex-row md:gap-y-10 md:mt-5">
            <div className="box-border caret-transparent gap-x-[18px] flex blur-0 flex-col max-w-[488px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
              <div className="text-gray-700 box-border caret-transparent space-y-4">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  AM|PM Watch Repair is an independent watchmaking workshop specialising in the repair and servicing of a wide range of luxury watches. Our experience spans many leading brands, including Omega, Rolex, TAG Heuer, Cartier, Breitling, Seiko, Ebel, and more.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  We work on both modern and vintage watches, carrying out everything from glass replacements to complete mechanical services. We have previously worked for major Swiss brands including Omega, Longines, Tissot & Hamilton, and have also served as in-house watchmakers for well-known high-street jewellers.  Our expertise and experience allows us to work on almost any brand that comes in for repair with no job too small.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  In addition, we are passionate about British watchmaking and collaborate with several British micro-brands, providing assembly services, warranty repairs, and technical consultation on forthcoming releases.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  Our workshop is based in the popular seaside town of Troon, South Ayrshire, and we receive watches for repair from clients across the UK.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  As watch enthusiasts ourselves, we fully appreciate the value, and often deep sentimental importance that watches can hold. Every watch is treated with the utmost care and respect.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  Being fully independent means you deal directly with the watchmaker—no intermediaries—allowing for clear communication, transparent explanations of recommended work, and consistently tighter turnaround times, typically 3–5 weeks.
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto">
              <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-[500px]">
                <img
                  src="/ampm1.jpeg"
                  sizes="(max-width: 767px) 100vw, 500px"
                  alt="Watchmaking Workshop"
                  className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                />
              </div>
              <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full md:flex-row md:gap-y-0 md:w-auto">
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
