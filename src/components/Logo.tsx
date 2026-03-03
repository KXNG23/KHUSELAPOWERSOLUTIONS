import { Zap } from "lucide-react";

export const Logo = ({ className = "", light = false, forceShowText = false }: { className?: string, light?: boolean, forceShowText?: boolean }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <div className="flex items-center font-black text-4xl md:text-5xl tracking-tighter leading-none">
      <span className={light ? "text-white" : "text-kps-blue dark:text-slate-100"}>K</span>
      <div className="relative flex items-center justify-center">
        <span className={light ? "text-white" : "text-kps-blue dark:text-slate-100"}>P</span>
        <Zap className="absolute w-6 h-6 md:w-8 md:h-8 text-kps-orange fill-kps-orange animate-pulse" />
      </div>
      <span className={light ? "text-white" : "text-kps-blue dark:text-slate-100"}>S</span>
    </div>
    <span className={`${forceShowText ? "block" : "hidden lg:block"} text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase -mt-1 ${light ? "text-white/80" : "text-kps-blue dark:text-slate-300"}`}>
      Khusela Power Solutions
    </span>
  </div>
);
