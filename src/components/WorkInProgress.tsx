import { motion } from "motion/react";
import { slideUp } from "../constants";

export const WorkInProgress = () => {
  const images = [
    "/api/images/2",
    "/api/images/3",
    "/api/images/4",
    "/api/images/5"
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <h2 className="text-kps-blue dark:text-kps-orange font-bold text-base uppercase tracking-widest mb-4">Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-black text-kps-blue dark:text-white mb-8">Our Work in Progress</h3>
            <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              A glimpse into our daily operations, showcasing our commitment to quality and safety on every site.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3]"
            >
              <img
                src={src}
                alt={`Work in progress ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-kps-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-kps-orange animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
