import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-950 py-16 px-6 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <Logo className="scale-75 origin-left" />
            </Link>
            <p className="text-gray-500 dark:text-slate-400 text-sm max-w-md leading-relaxed">
              Protecting people, property, and operations through safe and dependable electrical systems. Your trusted partner in electrical engineering and power solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 dark:text-white">Company Info</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-slate-400">
              <li><span className="font-bold text-gray-700 dark:text-slate-200">REG:</span> 2025/903575/07</li>
              <li><span className="font-bold text-gray-700 dark:text-slate-200">TAX:</span> 9094518298</li>
              <li><span className="font-bold text-gray-700 dark:text-slate-200">BBBEE:</span> Level 1 Contributor (100%)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 dark:text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-kps-blue transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-kps-blue transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-kps-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-kps-blue transition-colors">Contact</Link></li>
              <li><Link to="/profile" className="hover:text-kps-blue transition-colors">Company Profile</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-xs text-gray-400 font-medium">
            <a href="#" className="hover:text-kps-blue">Privacy Policy</a>
            <a href="#" className="hover:text-kps-blue">Terms of Service</a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Khusela Power Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
