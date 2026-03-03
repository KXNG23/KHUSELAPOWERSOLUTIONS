import { motion } from "motion/react";
import { ShieldCheck, Zap, CheckCircle2, FileText, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { VALUES, slideUp } from "../constants";

export const About = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-kps-dark py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Khusela Power Solutions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Bringing the power to you with safety, reliability, and technical excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding overflow-hidden bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Technician"
                className="rounded-2xl shadow-lg w-full h-64 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
                alt="Electrical Box"
                className="rounded-2xl shadow-lg w-full h-64 sm:h-80 object-cover sm:mt-12"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Refined Years Experience Callout */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white dark:bg-slate-800 p-1 rounded-3xl shadow-2xl z-10">
              <div className="bg-kps-orange p-6 sm:p-8 rounded-[22px] text-white flex flex-col items-center text-center border-4 border-white dark:border-slate-800">
                <Award className="w-8 h-8 mb-2 opacity-80" />
                <p className="text-4xl sm:text-5xl font-black mb-1">15+</p>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-tight">
                  Years of<br />Excellence
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-kps-blue font-bold text-sm uppercase tracking-widest mb-3">Our Story</h2>
            <h3 className="text-4xl font-bold mb-6 dark:text-white">Bringing the Power to You</h3>
            <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">
              Khusela Power Solutions is a South African-based electrical services company delivering reliable, compliant, and cost-effective electrical and power solutions to residential, commercial, and industrial clients.
            </p>
            <p className="text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
              The name Khusela, meaning "to protect," reflects our core mission: protecting people, property, and operations through safe and dependable electrical systems. We are committed to safeguarding infrastructure, improving energy efficiency, and ensuring uninterrupted power.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
              <Link to="/profile" className="btn-secondary flex items-center gap-2">
                <FileText className="w-4 h-4" />
                View Company Profile
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700">
                <h4 className="font-bold text-kps-blue dark:text-kps-orange mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Our Vision
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-400">To be a trusted leader in electrical and power solutions in Gauteng and beyond, known for technical excellence, reliability, and innovation.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700">
                <h4 className="font-bold text-kps-blue dark:text-kps-orange mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" /> Our Mission
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-400">To provide safe, efficient, and future-ready electrical solutions that protect assets, reduce downtime, and support sustainable growth.</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <h4 className="font-bold text-lg mb-4 dark:text-white">Our Core Values</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {VALUES.map((value, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-kps-orange w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-gray-800 dark:text-slate-200">{value.title}</p>
                      <p className="text-xs text-gray-500 dark:text-slate-500">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-kps-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-kps-orange font-bold text-sm uppercase tracking-widest mb-3">Leadership</h2>
              <h3 className="text-4xl font-bold mb-6">Meet Our Founder</h3>
              <div className="w-20 h-1 bg-kps-orange mb-8 rounded-full" />
              <p className="text-xl font-bold text-white mb-2">Mr C PHILANE</p>
              <p className="text-kps-orange font-medium mb-6">Founder & Managing Director</p>
              <p className="text-gray-400 leading-relaxed mb-8">
                With over 15 years of hands-on experience in the electrical engineering sector, Mr C PHILANE established Khusela Power Solutions with a vision to provide world-class electrical services that prioritize safety and technical integrity. 
              </p>
              <p className="text-gray-400 leading-relaxed">
                His leadership is defined by a commitment to excellence, ensuring that every project—whether a residential repair or a large-scale industrial installation—meets the highest standards of compliance and quality.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-square rounded-full border-8 border-kps-orange/20 p-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mr C PHILANE"
                  className="rounded-full w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-kps-orange p-6 rounded-2xl shadow-2xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <h2 className="text-kps-blue font-bold text-sm uppercase tracking-widest mb-3">Why Choose Us</h2>
              <h3 className="text-4xl font-bold mb-8 text-kps-dark dark:text-white leading-tight">Advantages of Booking Our Team</h3>
              <p className="text-gray-600 dark:text-slate-400 mb-10">
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
                    className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-kps-orange/30 transition-colors group"
                  >
                    <CheckCircle2 className="text-kps-orange w-6 h-6 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
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
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <p className="text-kps-blue dark:text-kps-orange font-bold text-lg mb-2">"Protecting people, property, and operations."</p>
                <p className="text-gray-500 dark:text-slate-400 text-sm">— Khusela Power Solutions Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
