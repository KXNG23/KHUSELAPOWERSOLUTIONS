import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES, INDUSTRIES, slideUp, staggerContainer } from "../constants";

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const prevService = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-kps-orange py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-white/5 skew-y-6 origin-top-right" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">Our Services</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Comprehensive electrical and power solutions for every sector, delivered with precision and care.
          </p>
        </div>
      </section>

      {/* Services Section - Carousel */}
      <section id="services" className="section-padding bg-gray-50 dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-kps-blue dark:text-kps-orange font-bold text-base uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-kps-blue dark:text-white">Comprehensive Solutions for Every Need</h3>
            <p className="text-gray-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">From complex industrial installations to simple home repairs, our team of certified professionals delivers excellence in every task.</p>
          </motion.div>

          <div className="relative group">
            {/* Carousel Container */}
            <div className="relative min-h-[600px] lg:min-h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) nextService();
                    if (info.offset.x > 50) prevService();
                  }}
                  className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-slate-800 flex flex-col lg:flex-row overflow-hidden cursor-grab active:cursor-grabbing"
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2 h-64 lg:h-auto relative">
                    <img 
                      src={SERVICES[currentIndex].image} 
                      alt={SERVICES[currentIndex].title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/kpsservice${currentIndex}/1200/800`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kps-blue/60 to-transparent lg:bg-gradient-to-r" />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="mb-8 bg-kps-orange text-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-kps-orange/20">
                      {SERVICES[currentIndex].icon}
                    </div>
                    <h4 className="text-3xl md:text-4xl font-black mb-6 text-kps-blue dark:text-white leading-tight">
                      {SERVICES[currentIndex].title}
                    </h4>
                    <p className="text-gray-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
                      {SERVICES[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevService}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-slate-800 p-4 rounded-full shadow-xl text-kps-blue dark:text-white hover:bg-kps-orange hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextService}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-slate-800 p-4 rounded-full shadow-xl text-kps-blue dark:text-white hover:bg-kps-orange hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
              aria-label="Next Service"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                      ? "w-10 h-3 bg-kps-orange" 
                      : "w-3 h-3 bg-gray-300 dark:bg-slate-700 hover:bg-kps-orange/50"
                  }`}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Our Process - New Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-kps-blue font-bold text-base uppercase tracking-widest mb-4">How We Work</h2>
              <h3 className="text-4xl font-black text-kps-blue dark:text-white">Our Seamless Process</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "We discuss your needs and assess the project requirements." },
                { step: "02", title: "Planning", desc: "Our experts design a tailored solution and provide a detailed quote." },
                { step: "03", title: "Execution", desc: "Certified technicians perform the work with precision and safety." },
                { step: "04", title: "Handover", desc: "Final inspection, testing, and issuance of compliance certificates." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
                  <span className="text-6xl font-black text-kps-orange/10 absolute top-4 right-4">{item.step}</span>
                  <h4 className="text-xl font-bold mb-4 text-kps-blue dark:text-white relative z-10">{item.title}</h4>
                  <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="mt-32 grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 shadow-sm border border-gray-100 dark:border-slate-800">
              <h3 className="text-3xl font-black mb-10 text-kps-blue dark:text-white">Industries We Service</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {INDUSTRIES.map((industry, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-slate-800 rounded-2xl transition-colors hover:bg-kps-orange/10 group"
                  >
                    <div className="w-3 h-3 bg-kps-orange rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-base font-bold text-gray-700 dark:text-slate-300">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/images/4" 
                alt="Industrial Site"
                className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover border-8 border-white/10"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/seed/kpsindustrial/1200/800";
                }}
              />
              <div className="absolute inset-0 bg-kps-orange/10 rounded-[3rem]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
