import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURES, SERVICES, slideUp, staggerContainer } from "../constants";

const HERO_TEXTS = [
  {
    heading: "LEADING ELECTRICAL AND POWER SOLUTIONS",
    subheading: "Khusela Power Solutions provides top-tier electrical, handyman, and maintenance services for industrial, commercial, and residential projects."
  },
  {
    heading: "EXPERT MAINTENANCE & FAULT FINDING",
    subheading: "Proactive electrical maintenance and rapid fault finding to minimize downtime and ensure safety for your operations."
  },
  {
    heading: "RELIABLE BACKUP POWER SOLUTIONS",
    subheading: "Keep your business running during outages with our professional inverter, UPS, and generator installations."
  }
];

export const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % HERO_TEXTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/api/images/1" 
            alt="Electrical Work"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-kps-dark/80 to-transparent z-1" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTextIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kps-orange/20 border border-kps-orange/30 text-kps-orange text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kps-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-kps-orange"></span>
                </span>
                Trusted Power Experts
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 uppercase">
                {HERO_TEXTS[currentTextIndex].heading.split('ELECTRICAL AND POWER').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-kps-orange">ELECTRICAL AND POWER</span>}
                  </span>
                ))}
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-lg">
                {HERO_TEXTS[currentTextIndex].subheading}
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
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_TEXTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTextIndex(idx)}
              className={`w-12 h-1 rounded-full transition-all ${
                currentTextIndex === idx ? "bg-kps-orange" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats/Features Bar - Changed to Orange */}
      <div className="bg-kps-orange py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 text-white">
              <div className="bg-white/20 p-3 rounded-full text-white">
                {feature.icon}
              </div>
              <span className="text-base md:text-lg font-bold tracking-tight">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brief Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <h2 className="text-kps-blue dark:text-kps-orange font-bold text-base uppercase tracking-widest mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black text-kps-blue dark:text-white mb-8">Core Electrical Services</h3>
              <p className="text-gray-600 dark:text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                We provide a comprehensive range of electrical solutions designed to protect your assets and ensure operational continuity.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div
                key={idx}
                variants={slideUp}
                className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-2xl transition-all group"
              >
                <div className="mb-8 p-5 bg-kps-orange/10 dark:bg-slate-800 rounded-2xl w-fit group-hover:bg-kps-orange group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-5 text-kps-blue dark:text-white">{service.title}</h4>
                <p className="text-gray-600 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="text-kps-orange font-bold text-base flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link to="/services" className="btn-primary px-10 py-4 text-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - New Section */}
      <section className="section-padding bg-kps-orange text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <h2 className="text-white/80 font-bold text-base uppercase tracking-widest mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Unmatched Quality & Safety</h3>
              <div className="space-y-6">
                {[
                  "Fully Certified & Insured Electrical Contractors",
                  "Rapid Response Times for Emergency Call-outs",
                  "Transparent Pricing with No Hidden Costs",
                  "Commitment to SANS Compliance & Safety Standards"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-white/20 p-1 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg md:text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/contact" className="bg-white text-kps-orange px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-block">
                  Get Started Today
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/api/images/1" 
                alt="Quality Work"
                className="rounded-[3rem] shadow-2xl border-8 border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <h2 className="text-kps-blue font-bold text-base uppercase tracking-widest mb-4">Welcome to KPS</h2>
            <h3 className="text-4xl font-black mb-8 text-kps-blue dark:text-white">Reliable, Compliant, and Cost-Effective</h3>
            <p className="text-gray-600 dark:text-slate-400 mb-10 text-lg md:text-xl leading-relaxed">
              Based in KWA ZULU NATAL South Africa, Khusela Power Solutions delivers expert electrical and power solutions tailored to your needs. We protect your assets and ensure uninterrupted power through high-quality workmanship.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg">
              Learn More About Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="/api/images/2" 
              alt="Technician"
              className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
