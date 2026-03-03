import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2,
  Clock,
  HardHat,
  Sun,
  Moon,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const Logo = ({ className = "", light = false }: { className?: string, light?: boolean }) => (
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

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo className="scale-150" />
      </motion.div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="h-1 bg-gray-100 mt-12 rounded-full overflow-hidden"
      >
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-kps-blue"
        />
      </motion.div>
    </motion.div>
  );
};

const SERVICES = [
  {
    title: "Electrical Installations",
    description: "Expert installations for residential, commercial, and industrial properties, ensuring safety and compliance.",
    icon: <Zap className="w-8 h-8 text-kps-blue" />,
  },
  {
    title: "Maintenance & Fault Finding",
    description: "Proactive electrical maintenance and rapid fault finding to minimize downtime and ensure safety.",
    icon: <ShieldCheck className="w-8 h-8 text-kps-blue" />,
  },
  {
    title: "Backup Power Solutions",
    description: "Reliable inverters, UPS systems, and generators to keep your operations running during outages.",
    icon: <Clock className="w-8 h-8 text-kps-blue" />,
  },
  {
    title: "Solar & Hybrid Energy",
    description: "Sustainable solar power installations and hybrid energy systems for reduced costs and green energy.",
    icon: <Zap className="w-8 h-8 text-kps-orange" />,
  },
  {
    title: "DB Upgrades & Reticulation",
    description: "Distribution board installations, upgrades, and comprehensive power reticulation and cabling.",
    icon: <HardHat className="w-8 h-8 text-kps-blue" />,
  },
  {
    title: "Compliance Certificates (COC)",
    description: "Professional electrical compliance audits and issuance of COCs for property transfers and safety.",
    icon: <CheckCircle2 className="w-8 h-8 text-kps-blue" />,
  },
];

const INDUSTRIES = [
  "Residential Properties & Housing Developments",
  "Commercial Buildings & Retail Spaces",
  "Industrial Facilities & Warehouses",
  "Offices & Corporate Environments",
  "Public & Private Infrastructure Projects",
];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const VALUES = [
  { title: "Safety and Compliance", description: "Adhering to SANS and local regulatory standards." },
  { title: "Integrity and Accountability", description: "Transparent and honest business practices." },
  { title: "Quality Workmanship", description: "High-quality results through skilled expertise." },
  { title: "Customer-Centric Service", description: "Tailored solutions focused on client needs." },
  { title: "Innovation", description: "Continuous improvement and future-ready systems." },
];

const FEATURES = [
  { title: "Certified Professionals", icon: <CheckCircle2 className="w-5 h-5" /> },
  { title: "24/7 Emergency Support", icon: <Clock className="w-5 h-5" /> },
  { title: "Safety First Approach", icon: <ShieldCheck className="w-5 h-5" /> },
  { title: "Transparent Pricing", icon: <Zap className="w-5 h-5" /> },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navbar */}
        <nav className="glass-nav">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <Logo className="scale-75 origin-left" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-kps-blue transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium hover:text-kps-blue transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium hover:text-kps-blue transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium hover:text-kps-blue transition-colors">Contact</a>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-5 h-5 text-kps-orange" /> : <Moon className="w-5 h-5 text-kps-blue" />}
              </button>

              <button className="btn-primary text-sm py-2 px-5">Get a Quote</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-kps-orange" /> : <Moon className="w-5 h-5 text-kps-blue" />}
              </button>
              <button 
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  <a href="#home" onClick={() => setIsMenuOpen(false)} className="font-medium">Home</a>
                  <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-medium">Services</a>
                  <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-medium">About</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-medium">Contact</a>
                  <button className="btn-primary w-full">Get a Quote</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
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
                <button className="btn-secondary flex items-center justify-center gap-2 group">
                  Request Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  Our Projects
                </button>
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

        {/* Services Section */}
        <section id="services" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-kps-blue font-bold text-sm uppercase tracking-widest mb-3">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Solutions for Every Need</h3>
              <p className="text-gray-600">From complex industrial installations to simple home repairs, our team of certified professionals delivers excellence in every task.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={slideUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  <div className="mb-6 bg-kps-blue/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-kps-blue/10 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-kps-blue transition-colors">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="mt-20 bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Industries We Service</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {INDUSTRIES.map((industry, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl transition-colors hover:bg-kps-blue/5"
                  >
                    <div className="w-2 h-2 bg-kps-orange rounded-full" />
                    <span className="text-sm font-medium text-gray-700">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About / Mockup Section */}
        <section id="about" className="section-padding overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technician"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Electrical Box"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-kps-orange p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-xs font-medium uppercase tracking-widest">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-kps-blue font-bold text-sm uppercase tracking-widest mb-3">About KPS</h2>
              <h3 className="text-4xl font-bold mb-6">Bringing the Power to You</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Khusela Power Solutions is a South African-based electrical services company delivering reliable, compliant, and cost-effective electrical and power solutions to residential, commercial, and industrial clients.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The name Khusela, meaning "to protect," reflects our core mission: protecting people, property, and operations through safe and dependable electrical systems. We are committed to safeguarding infrastructure, improving energy efficiency, and ensuring uninterrupted power.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-kps-blue mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Our Vision
                  </h4>
                  <p className="text-sm text-gray-600">To be a trusted leader in electrical and power solutions in Gauteng and beyond, known for technical excellence, reliability, and innovation.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-kps-blue mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5" /> Our Mission
                  </h4>
                  <p className="text-sm text-gray-600">To provide safe, efficient, and future-ready electrical solutions that protect assets, reduce downtime, and support sustainable growth.</p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <h4 className="font-bold text-lg mb-4">Our Core Values</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {VALUES.map((value, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="text-kps-orange w-5 h-5 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-gray-800">{value.title}</p>
                        <p className="text-xs text-gray-500">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <h2 className="text-kps-blue font-bold text-sm uppercase tracking-widest mb-3">Why Choose Us</h2>
              <h3 className="text-4xl font-bold mb-8 text-kps-dark leading-tight">Advantages of Booking Our Team</h3>
              <p className="text-gray-600 mb-10">
                We pride ourselves on delivering excellence through technical proficiency and a customer-first mindset. Here is why clients trust us with their power needs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Qualified Experts", desc: "Qualified and experienced electrical professionals." },
                  { title: "SANS Compliant", desc: "Full compliance with SANS and local regulatory standards." },
                  { title: "Safety First", desc: "Safety-first approach on all projects." },
                  { title: "Reliable Delivery", desc: "Reliable project delivery and clear communication." },
                  { title: "Scalable Solutions", desc: "Scalable solutions tailored to client needs and budgets." },
                  { title: "Energy Focused", desc: "Strong focus on energy efficiency and sustainability." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-kps-orange/30 transition-colors group"
                  >
                    <CheckCircle2 className="text-kps-orange w-6 h-6 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Team"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kps-blue/40 to-transparent rounded-3xl" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <p className="text-kps-blue font-bold text-lg mb-2">"Protecting people, property, and operations."</p>
                <p className="text-gray-500 text-sm">— Khusela Power Solutions Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-kps-dark text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid lg:grid-cols-2 gap-20"
            >
              <div>
                <h2 className="text-kps-orange font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</h2>
                <h3 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h3>
                <p className="text-gray-400 mb-12">
                  Have an emergency or planning a new installation? Our team is ready to assist you with expert advice and professional service.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <Phone className="text-kps-orange w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Call Us Anytime</p>
                      <p className="text-xl font-bold">076 071 1438</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <Mail className="text-kps-orange w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email Support</p>
                      <p className="text-xl font-bold">CHAMANEPHILA@GMAIL.COM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <MapPin className="text-kps-orange w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Our Location</p>
                      <p className="text-xl font-bold">Kwa Zulu Natal, South Africa</p>
                    </div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.505624131!2d31.0218!3d-29.8587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa0000000001%3A0x0!2zMjnCsDUxJzMxLjMiUyAzMcKwMDEnMTguNSJF!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KZN CBD Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-10 text-kps-dark shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all appearance-none bg-white">
                      <option>Residential Electrical</option>
                      <option>Commercial Power</option>
                      <option>Industrial Maintenance</option>
                      <option>Handyman Services</option>
                      <option>Emergency Repair</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-16 px-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 lg:col-span-2">
                <a href="#home" className="inline-block mb-6">
                  <Logo className="scale-75 origin-left" />
                </a>
                <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                  Protecting people, property, and operations through safe and dependable electrical systems. Your trusted partner in electrical engineering and power solutions.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company Info</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><span className="font-bold text-gray-700">REG:</span> 2025/903575/07</li>
                  <li><span className="font-bold text-gray-700">TAX:</span> 9094518298</li>
                  <li><span className="font-bold text-gray-700">BBBEE:</span> Level 1 Contributor (100%)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#home" className="hover:text-kps-blue">Home</a></li>
                  <li><a href="#services" className="hover:text-kps-blue">Services</a></li>
                  <li><a href="#about" className="hover:text-kps-blue">About Us</a></li>
                  <li><a href="#contact" className="hover:text-kps-blue">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
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

        {/* Floating WhatsApp Button */}
        <motion.a 
          href="https://wa.me/27760711438" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-kps-dark dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100 dark:border-slate-700">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>
    </>
  );
}
