import { Logo } from "@/components/Logo";
import { FooterLinks } from "./components/FooterLinks";
import { FooterContact } from "./components/FooterContact";
import { FooterSocial } from "./components/FooterSocial";

export const FooterSection = () => {
  return (
    <section className="text-white bg-amber-900 box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-6 flex flex-wrap justify-between gap-y-6 md:gap-x-8 md:gap-y-8">
            <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[300px]">
              <Logo />
              <div className="box-border caret-transparent mt-6">
                <div className="text-[15px] box-border caret-transparent leading-6 text-white/80 md:text-base">
                  Independent watchmaking workshop in Troon, South Ayrshire. Specialising in luxury watch repair and servicing for Omega, Rolex, TAG Heuer, Cartier, Breitling, Seiko, and more. Over 10 years of professional horological experience.
                </div>
              </div>
            </div>
            <FooterLinks />
            <FooterContact />
            <FooterSocial />
          </div>
          <div className="box-border caret-transparent mt-10 w-full md:mt-14">
            <div className="font-medium text-white mb-3 text-[15px] md:text-base">Find us</div>
            <div className="rounded-lg overflow-hidden border border-white/20 aspect-video max-h-[280px] md:max-h-[320px]">
              <iframe
                title="AM/PM Watch Repair location - Troon, South Ayrshire"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.70%2C55.52%2C-4.62%2C55.56&layer=mapnik&marker=55.539%2C-4.659"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full min-h-[200px]"
              />
            </div>
          </div>
          <div className="box-border caret-transparent border-t border-white/20 mt-10 pt-6 md:mt-14 md:pt-8">
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-y-0">
              <div className="text-[15px] box-border caret-transparent leading-6 text-white/60 md:text-base">
                © {new Date().getFullYear()} AM|PM Watch Repair. All rights reserved.
              </div>
              <div className="box-border caret-transparent gap-x-6 flex gap-y-0">
                <a
                  href="/privacy"
                  className="text-[15px] box-border caret-transparent leading-6 text-white/60 hover:text-white md:text-base"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-[15px] box-border caret-transparent leading-6 text-white/60 hover:text-white md:text-base"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
