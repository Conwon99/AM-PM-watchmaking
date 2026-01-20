import { ServicePageCard } from "./components/ServicePageCard";

export const ServicePageServices = () => {
  return (
    <section className="bg-white box-border caret-transparent pb-[60px] md:pb-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-[740px] gap-y-4">
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                [Our Services]
              </div>
              <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                Browse All Our{" "}
                <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
                  Services
                </span>
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent">
            <div
              role="list"
              className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-7 mt-10 md:grid-cols-[1fr_1fr] md:gap-y-4 md:mt-14"
            >
              <ServicePageCard
                href="/services"
                imageUrl="/w3.jpeg"
                title="Part Repairs"
                description="From battery replacements to glass repairs, we handle all watch part repairs with precision and care."
              />
              <ServicePageCard
                href="/services"
                imageUrl="/w4.jpeg"
                title="Servicing"
                description="Complete mechanical and quartz watch servicing to keep your timepieces running accurately."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
