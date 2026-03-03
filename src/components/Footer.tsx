import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-kps-blue text-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-8">
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <Link to="/" className="inline-block">
              <Logo light className="scale-110 origin-left" />
            </Link>
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Protecting people, property, and operations through safe and dependable electrical systems. Your trusted partner in electrical engineering and power solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-xl uppercase tracking-widest mb-8 text-white">Company Info</h4>
            <ul className="space-y-4 text-base text-white/80">
              <li><span className="font-black text-white">REG:</span> 2025/903575/07</li>
              <li><span className="font-black text-white">TAX:</span> 9094518298</li>
              <li><span className="font-black text-white">BBBEE:</span> Level 1 Contributor (100%)</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 text-sm text-white/60 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-sm text-white/60 font-bold">
            © {new Date().getFullYear()} Khusela Power Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
