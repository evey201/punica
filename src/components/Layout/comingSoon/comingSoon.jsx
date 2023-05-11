import { Logo } from "../../Logo";
import { FullContainer } from "./comingSoon.styled";


export const ComingSoon = () => {
  return (
    <>
      <FullContainer className="h-screen flex flex-col">
        <div className="mt-4 ml-8">
          <span><Logo size="lg" variant="primary" /></span>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="font-bold text-[2.125rem] md:text-7xl text-[#AE1F23] tracking-widest">Coming Soon</div>
        </div>
        <footer className="text-center w-full bg-slate-100"> &copy; Punica 2023</footer>
      </FullContainer>
    </>
  );
};
