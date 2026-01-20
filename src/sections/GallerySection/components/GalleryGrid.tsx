export const GalleryGrid = () => {
  const images = [
    { src: "/g1.jpeg", alt: "AM|PM Watch Repair Gallery 1" },
    { src: "/g2.jpeg", alt: "AM|PM Watch Repair Gallery 2" },
    { src: "/g3.jpeg", alt: "AM|PM Watch Repair Gallery 3" },
    { src: "/g4.jpeg", alt: "AM|PM Watch Repair Gallery 4" },
  ];

  return (
    <div className="box-border caret-transparent gap-x-[18px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[18px] mt-10 md:gap-x-5 md:grid-cols-[1fr_1fr_1fr] md:gap-y-5 md:mt-14">
      <div className="relative box-border caret-transparent blur-0 col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[400px] overflow-hidden rounded-lg md:row-end-[span_2] md:row-start-[span_2] md:h-auto md:rounded-xl">
        <img
          src={images[0].src}
          sizes="100vw"
          alt={images[0].alt}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          loading="eager"
          onError={(e) => {
            console.error("Failed to load image:", images[0].src);
          }}
        />
      </div>
      <div className="relative box-border caret-transparent blur-0 h-[277px] overflow-hidden rounded-lg md:rounded-xl">
        <img
          src={images[1].src}
          sizes="100vw"
          alt={images[1].alt}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          loading="lazy"
          onError={(e) => {
            console.error("Failed to load image:", images[1].src);
          }}
        />
      </div>
      <div className="relative box-border caret-transparent blur-0 h-[277px] overflow-hidden rounded-lg md:rounded-xl">
        <img
          src={images[2].src}
          sizes="100vw"
          alt={images[2].alt}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          loading="lazy"
          onError={(e) => {
            console.error("Failed to load image:", images[2].src);
          }}
        />
      </div>
      <div className="relative box-border caret-transparent blur-0 col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[277px] overflow-hidden rounded-lg md:col-end-[span_2] md:col-start-[span_2] md:rounded-xl">
        <img
          src={images[3].src}
          sizes="100vw"
          alt={images[3].alt}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          loading="lazy"
          onError={(e) => {
            console.error("Failed to load image:", images[3].src);
          }}
        />
      </div>
    </div>
  );
};
