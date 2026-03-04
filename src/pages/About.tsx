import { motion } from "motion/react";
import { ShieldCheck, Zap, CheckCircle2, FileText, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { VALUES, slideUp } from "../constants";
import { WorkInProgress } from "../components/WorkInProgress";

export const About = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-kps-orange py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 -skew-y-6 origin-top-left" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">About KPS</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Leading the way in electrical excellence and innovative power solutions across South Africa.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding overflow-hidden bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              <div className="aspect-square rounded-full bg-kps-orange flex items-center justify-center p-16 shadow-2xl border-8 border-white dark:border-slate-800 animate-pulse-slow">
                <div className="text-center">
                  <Zap className="w-32 h-32 text-white mx-auto mb-4 fill-white" />
                  <span className="text-7xl font-black text-white tracking-tighter">KPS</span>
                  <p className="text-xs text-white/80 font-bold uppercase tracking-[0.4em] mt-3">Khusela Power</p>
                </div>
              </div>
              
              {/* Refined Years Experience Callout */}
              <div className="absolute -bottom-10 -right-4 sm:-right-10 bg-white dark:bg-slate-800 p-2 rounded-[2.5rem] shadow-2xl z-10">
                <div className="bg-kps-blue p-8 sm:p-10 rounded-[2rem] text-white flex flex-col items-center text-center border-4 border-white dark:border-slate-800">
                  <Award className="w-10 h-10 mb-3 text-kps-orange" />
                  <p className="text-5xl sm:text-6xl font-black mb-2">15+</p>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] leading-tight">
                    Years of<br />Excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-kps-blue font-bold text-base uppercase tracking-widest mb-4">Our Story</h2>
            <h3 className="text-4xl font-black mb-8 text-kps-blue dark:text-white">Bringing the Power to You</h3>
            <p className="text-gray-600 dark:text-slate-400 mb-8 leading-relaxed text-lg md:text-xl">
              Khusela Power Solutions is a South African-based electrical services company delivering reliable, compliant, and cost-effective electrical and power solutions to residential, commercial, and industrial clients.
            </p>
            <p className="text-gray-600 dark:text-slate-400 mb-10 leading-relaxed text-lg md:text-xl">
              The name Khusela, meaning "to protect," reflects our core mission: protecting people, property, and operations through safe and dependable electrical systems.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <Link to="/contact" className="btn-primary px-10 py-4 text-lg">Get a Quote</Link>
              <Link to="/profile" className="px-10 py-4 border-2 border-kps-orange text-kps-orange rounded-xl font-bold text-lg hover:bg-kps-orange hover:text-white transition-all flex items-center gap-3">
                <FileText className="w-6 h-6" />
                View Company Profile
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - New Section */}
      <section className="section-padding bg-kps-orange text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white/10 p-12 rounded-[3rem] backdrop-blur-sm border border-white/20"
            >
              <h3 className="text-4xl font-black text-white mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed text-white/90">
                To provide superior electrical and power solutions that exceed client expectations through innovation, safety, and unmatched workmanship. We aim to be the most trusted partner for all power needs in South Africa.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-kps-blue p-12 rounded-[3rem] shadow-2xl border border-white/10"
            >
              <h3 className="text-4xl font-black text-white mb-6">Our Vision</h3>
              <p className="text-xl leading-relaxed text-white/90">
                To lead the electrical services industry by setting the standard for quality and reliability, while empowering communities and fostering sustainable energy solutions for a brighter future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-kps-blue font-bold text-base uppercase tracking-widest mb-4">Leadership</h2>
              <h3 className="text-4xl font-black mb-8 text-kps-blue dark:text-white">Meet Our Founder</h3>
              <div className="w-24 h-2 bg-kps-orange mb-10 rounded-full" />
              <p className="text-2xl font-black text-kps-blue dark:text-white mb-2">Mr C PHILANE</p>
              <p className="text-kps-orange font-bold text-lg mb-8">Founder & Managing Director</p>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-8 text-lg md:text-xl">
                With over 15 years of hands-on experience in the electrical engineering sector, Mr C PHILANE established Khusela Power Solutions with a vision to provide world-class electrical services that prioritize safety and technical integrity. 
              </p>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-lg md:text-xl">
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
              <div className="aspect-square rounded-[3rem] border-8 border-kps-orange/20 p-12 flex items-center justify-center bg-kps-orange/5 shadow-2xl">
                <div className="text-center">
                  <Zap className="w-32 h-32 text-kps-orange mx-auto mb-4 fill-kps-orange" />
                  <span className="text-7xl font-black text-kps-blue dark:text-white tracking-tighter">KPS</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-kps-blue p-8 rounded-3xl shadow-2xl">
                <Award className="w-10 h-10 text-white" />
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
                src="/api/images/3" 
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
      {/* Work In Progress Gallery */}
      <WorkInProgress />
    </div>
  );
};
