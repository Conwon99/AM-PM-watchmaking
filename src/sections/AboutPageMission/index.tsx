export const AboutPageMission = () => {
  return (
    <section className="box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-7 flex flex-col justify-center md:justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          <div className="box-border caret-transparent blur-0 basis-[0%] grow max-w-none md:max-w-[544px]">
            <div className="box-border caret-transparent inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
              <div className="font-medium box-border caret-transparent leading-[22px]">
                Our Mission
              </div>
            </div>
            <div className="box-border caret-transparent mt-[18px] mb-4 md:mt-5">
              <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                Preserving{" "}
                <span className="text-3xl box-border caret-transparent leading-[35px] font-figtree md:text-[52px] md:leading-[62px]">
                  Watches
                </span>
              </h2>
            </div>
            <div className="text-gray-700 box-border caret-transparent space-y-4">
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                Our workshop is based in the popular seaside town of Troon, South Ayrshire, and we receive watches for repair from clients across the UK.
              </div>
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                As watch enthusiasts ourselves, we fully appreciate the value, and often deep sentimental importance that watches can hold. Every watch is treated with the utmost care and respect.
              </div>
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                Being fully independent means you deal directly with the watchmaker—no intermediaries—allowing for clear communication, transparent explanations of recommended work, and consistently tighter turnaround times, typically 3–5 weeks.
              </div>
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                Every gear, spring, and movement is handled with precision and pride. On time, accurate, and always professional. Authentic parts, traditional methods, timeless craftsmanship. Your satisfaction is our top priority—every watch, every time.
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-[500px]">
            <img
              src="/about1.jpeg"
              sizes="(max-width: 767px) 100vw, 500px"
              alt="Watch Repair Mission"
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
