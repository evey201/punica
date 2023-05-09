import { FullContainer } from "./comingSoon.styled";

export const ComingSoon = ({ logo }) => {
  return (
    <>
      <FullContainer className="h-screen">
        <div className="m-0">
          <span>{logo}</span>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="font-bold text-[2.125rem] md:text-7xl text-[#AE1F23] tracking-widest">Coming Soon</div>
        </div>
        <footer className="text-center w-full bg-slate-100">Punica</footer>
      </FullContainer>
    </>
  );
};
