import { NavbarContainer } from "@/sections/Navbar/components/NavbarContainer";

export type NavbarProps = {
  /** Use black text for nav (e.g. when page background is white) */
  lightBackground?: boolean;
};

export const Navbar = ({ lightBackground }: NavbarProps) => {
  return (
    <div className="fixed backdrop-blur-sm bg-transparent box-border caret-transparent flex justify-center w-full z-[100] px-5 py-4 top-0 md:px-[30px]">
      <NavbarContainer lightBackground={lightBackground} />
    </div>
  );
};
