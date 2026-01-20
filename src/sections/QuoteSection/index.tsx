import { QuoteForm } from "./components/QuoteForm";
import { TermsAndConditions } from "./components/TermsAndConditions";

export type QuoteSectionProps = {
  showTerms?: boolean;
};

export const QuoteSection = ({ showTerms = true }: QuoteSectionProps) => {
  return (
    <section id="contact" className="relative bg-cover bg-center bg-no-repeat py-[60px] md:py-[100px]" style={{ backgroundImage: `url('/g1.jpeg')` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center gap-y-8 md:gap-y-12">
          <div className="text-center">
            <div className="inline-block border border-white/30 px-3 py-1 rounded-[1000px] mb-4">
              <div className="font-medium text-white leading-[22px]">
                Get a Quote
              </div>
            </div>
            <h2 className="text-[44px] font-medium text-white tracking-[-1.44px] leading-[52px] md:text-7xl md:leading-[80px]">
              Request a{" "}
              <span className="text-[44px] italic leading-[52px] font-playfair_display md:text-7xl md:leading-[80px]">
                Free Quote
              </span>
            </h2>
            <p className="text-white/90 text-[15px] leading-6 mt-4 max-w-[600px] mx-auto md:text-base">
              Fill out the form below and we'll get back to you with a personalized quote for your watch repair or service needs.
            </p>
          </div>
          <QuoteForm />
          {showTerms && <TermsAndConditions />}
        </div>
      </div>
    </section>
  );
};
