import { motion } from "motion/react";
import { SERVICES, INDUSTRIES, slideUp, staggerContainer } from "../constants";

export const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-kps-blue py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Comprehensive electrical and power solutions for every sector.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-kps-blue dark:text-kps-orange font-bold text-sm uppercase tracking-widest mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Comprehensive Solutions for Every Need</h3>
            <p className="text-gray-600 dark:text-slate-400">From complex industrial installations to simple home repairs, our team of certified professionals delivers excellence in every task.</p>
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
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="mb-6 bg-kps-blue/5 dark:bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-kps-blue/10 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 dark:text-white group-hover:text-kps-blue transition-colors">{service.title}</h4>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
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
            className="mt-20 bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">Industries We Service</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDUSTRIES.map((industry, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl transition-colors hover:bg-kps-blue/5"
                >
                  <div className="w-2 h-2 bg-kps-orange rounded-full" />
                  <span className="text-sm font-medium text-gray-700 dark:text-slate-300">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
