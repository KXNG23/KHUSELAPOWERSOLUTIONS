import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURES } from "../constants";

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "linear" 
            }}
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069" 
            alt="Electrical Work"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kps-orange/20 border border-kps-orange/30 text-kps-orange text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kps-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-kps-orange"></span>
              </span>
              Trusted Power Experts
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Your <span className="text-kps-orange">World</span> with Professional Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg">
              Khusela Power Solutions provides top-tier electrical, handyman, and maintenance services for industrial, commercial, and residential projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 group">
                Request Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features Bar */}
      <div className="bg-kps-blue py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white/90">
              <div className="bg-white/10 p-2 rounded-full text-kps-orange">
                {feature.icon}
              </div>
              <span className="text-sm font-semibold">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick About Preview */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-kps-blue font-bold text-sm uppercase tracking-widest mb-3">Welcome to KPS</h2>
            <h3 className="text-4xl font-bold mb-6 dark:text-white">Reliable, Compliant, and Cost-Effective</h3>
            <p className="text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
              Based in South Africa, Khusela Power Solutions delivers expert electrical and power solutions tailored to your needs. We protect your assets and ensure uninterrupted power through high-quality workmanship.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
              alt="Technician"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
