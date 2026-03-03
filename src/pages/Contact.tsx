import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { slideUp } from "../constants";

export const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-kps-orange py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 -skew-y-6 origin-top-left" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">Contact Us</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            We are here to help with all your electrical and power needs. Reach out today for expert assistance!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="grid lg:grid-cols-2 gap-24"
          >
            <div>
              <h2 className="text-kps-blue dark:text-kps-orange font-bold text-base uppercase tracking-widest mb-4">Get In Touch</h2>
              <h3 className="text-4xl font-black mb-8 text-kps-blue dark:text-white">Ready to Start Your Project?</h3>
              <p className="text-gray-600 dark:text-slate-400 mb-12 text-lg md:text-xl leading-relaxed">
                Have an emergency or planning a new installation? Our team is ready to assist you with expert advice and professional service.
              </p>
              
              <div className="space-y-10 mb-16">
                <div className="flex items-start gap-6">
                  <div className="bg-kps-orange/10 p-5 rounded-2xl">
                    <Phone className="text-kps-orange w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Anytime</p>
                    <p className="text-2xl font-black text-kps-blue dark:text-white">076 071 1438</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-kps-orange/10 p-5 rounded-2xl">
                    <Mail className="text-kps-orange w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Support</p>
                    <p className="text-2xl font-black text-kps-blue dark:text-white">CHAMANEPHILA@GMAIL.COM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-kps-orange/10 p-5 rounded-2xl">
                    <MapPin className="text-kps-orange w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-2xl font-black text-kps-blue dark:text-white">Kwa Zulu Natal, South Africa</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 dark:bg-slate-800 p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-700 mb-12">
                <h4 className="text-2xl font-black text-kps-blue dark:text-white mb-6">Office Hours</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-slate-700 pb-3">
                    <span className="text-gray-600 dark:text-slate-400 font-bold">Monday - Friday</span>
                    <span className="text-kps-blue dark:text-kps-orange font-black">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-slate-700 pb-3">
                    <span className="text-gray-600 dark:text-slate-400 font-bold">Saturday</span>
                    <span className="text-kps-blue dark:text-kps-orange font-black">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-slate-400 font-bold">Sunday & Holidays</span>
                    <span className="text-red-500 font-black">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-12 shadow-2xl border border-gray-100 dark:border-slate-700 self-start">
              <h3 className="text-3xl font-black text-kps-blue dark:text-white mb-10">Send Us a Message</h3>
              <form className="space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white focus:border-kps-orange focus:ring-0 outline-none transition-all text-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white focus:border-kps-orange focus:ring-0 outline-none transition-all text-lg" placeholder="john@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Service Required</label>
                  <select className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white focus:border-kps-orange focus:ring-0 outline-none transition-all text-lg appearance-none">
                    <option>Residential Electrical</option>
                    <option>Commercial Power</option>
                    <option>Industrial Maintenance</option>
                    <option>Handyman Services</option>
                    <option>Emergency Repair</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 dark:text-white focus:border-kps-orange focus:ring-0 outline-none transition-all text-lg" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-kps-orange text-white py-5 rounded-2xl font-black text-xl hover:bg-opacity-90 transition-all shadow-xl">Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
