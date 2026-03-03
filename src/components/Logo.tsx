import { Zap } from "lucide-react";

export const Logo = ({ className = "", light = false }: { className?: string, light?: boolean }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <div className="flex items-center font-black text-3xl md:text-4xl tracking-tighter leading-none">
      <span className={light ? "text-white" : "text-kps-blue dark:text-slate-100"}>K</span>
      <div className="relative flex items-center justify-center">
        <span className={light ? "text-white" : "text-kps-blue dark:text-slate-100"}>P</span>
        <Zap className="absolute w-5 h-5 md:w-6 md:h-6 text-kps-orange fill-kps-orange animate-pulse" />
      </div>
      <span className={light ? "text-white" : "text-kps-blue dark:text-slate-100"}>S</span>
    </div>
    <span className={`text-[8px] md:text-[10px] font-bold tracking-[0.25em] uppercase -mt-1 ${light ? "text-white/80" : "text-kps-blue dark:text-slate-300"}`}>
      Khusela Power Solutions
    </span>
  </div>
);
