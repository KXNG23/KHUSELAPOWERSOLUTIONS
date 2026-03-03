import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { slideUp } from "../constants";

export const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-kps-orange py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            We are here to help with all your electrical and power needs. Reach out today!
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
            className="grid lg:grid-cols-2 gap-20"
          >
            <div>
              <h2 className="text-kps-blue dark:text-kps-orange font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</h2>
              <h3 className="text-4xl font-bold mb-8 dark:text-white">Ready to Start Your Project?</h3>
              <p className="text-gray-600 dark:text-slate-400 mb-12">
                Have an emergency or planning a new installation? Our team is ready to assist you with expert advice and professional service.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="bg-kps-blue/10 p-4 rounded-xl">
                    <Phone className="text-kps-blue dark:text-kps-orange w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mb-1">Call Us Anytime</p>
                    <p className="text-xl font-bold dark:text-white">076 071 1438</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-kps-blue/10 p-4 rounded-xl">
                    <Mail className="text-kps-blue dark:text-kps-orange w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mb-1">Email Support</p>
                    <p className="text-xl font-bold dark:text-white">CHAMANEPHILA@GMAIL.COM</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-kps-blue/10 p-4 rounded-xl">
                    <MapPin className="text-kps-blue dark:text-kps-orange w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mb-1">Our Location</p>
                    <p className="text-xl font-bold dark:text-white">Kwa Zulu Natal, South Africa</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="w-full h-80 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-2xl">
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

            <div className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-10 text-kps-dark shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all appearance-none">
                    <option>Residential Electrical</option>
                    <option>Commercial Power</option>
                    <option>Industrial Maintenance</option>
                    <option>Handyman Services</option>
                    <option>Emergency Repair</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:border-kps-blue focus:ring-2 focus:ring-kps-blue/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
