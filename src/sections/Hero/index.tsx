import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-background.jpeg')` }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1204px] flex-col justify-end px-5 pb-8 pt-20 supports-[min-height:100dvh]:min-h-[100dvh] md:px-8 md:pb-12 md:pt-28">
        <HeroContent />
      </div>
    </section>
  );
};
