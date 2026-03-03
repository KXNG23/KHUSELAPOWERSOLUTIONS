import { motion } from "motion/react";
import { FileText, Download, ShieldCheck, Zap, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "../components/Logo";

export const Profile = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Actions */}
        <div className="flex justify-end mb-8 gap-4 no-print">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* Digital Profile Document */}
        <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 print:shadow-none print:border-none">
          {/* Cover Page */}
          <div className="relative h-[700px] bg-kps-orange flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069" 
                className="w-full h-full object-cover"
                alt="Background"
              />
            </div>
            <div className="relative z-10 text-center px-12">
              <Logo light className="scale-[2] mb-24" />
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6">COMPANY</h1>
              <h2 className="text-6xl md:text-8xl font-black text-kps-blue tracking-tight">PROFILE</h2>
              <div className="mt-16 w-32 h-3 bg-white mx-auto rounded-full" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content Pages */}
          <div className="p-12 md:p-24 space-y-32">
            {/* Company Details */}
            <section>
              <div className="flex items-center gap-6 mb-16">
                <div className="w-16 h-16 bg-kps-orange rounded-2xl flex items-center justify-center text-white">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-kps-blue dark:text-white">Company Details</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-10">
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-kps-orange mb-2">Company Name</p>
                    <p className="text-2xl font-black text-kps-blue dark:text-white">Khusela Power Solutions</p>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-kps-orange mb-2">Industry</p>
                    <p className="text-2xl font-black text-kps-blue dark:text-white">Electrical Engineering & Power Solutions</p>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-kps-orange mb-2">Location</p>
                    <p className="text-2xl font-black text-kps-blue dark:text-white">Kwa Zulu Natal, South Africa</p>
                  </div>
                </div>
                <div className="space-y-8 bg-gray-50 dark:bg-slate-800 p-12 rounded-[3rem] border border-gray-100 dark:border-slate-700 shadow-sm">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">REG NUMBER</p>
                    <p className="text-xl font-black text-kps-blue dark:text-white">2025/903575/07</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">TAX NUMBER</p>
                    <p className="text-xl font-black text-kps-blue dark:text-white">9094518298</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">BBBEE STATUS</p>
                    <p className="text-xl font-black text-kps-blue dark:text-white">100% BBBEE LEVEL 1 CONTRIBUTOR</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Description */}
            <section>
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-kps-orange mb-6">A Brief Description</h3>
              <h4 className="text-5xl font-black mb-10 text-kps-blue dark:text-white">Bringing the Power to You</h4>
              <div className="prose prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-slate-400 leading-relaxed space-y-8">
                <p className="text-xl">
                  Khusela Power Solutions is a South African-based electrical services company delivering reliable, compliant, and cost-effective electrical and power solutions to residential, commercial, and industrial clients.
                </p>
                <p className="text-xl">
                  The company is committed to safeguarding infrastructure, improving energy efficiency, and ensuring uninterrupted power through high-quality workmanship and adherence to South African electrical standards.
                </p>
                <p className="text-xl">
                  The name Khusela, meaning "to protect," reflects the company's core mission: protecting people, property, and operations through safe and dependable electrical systems.
                </p>
              </div>
            </section>

            {/* Vision & Mission */}
            <section className="grid md:grid-cols-2 gap-12">
              <div className="bg-kps-orange p-12 rounded-[3rem] text-white shadow-xl shadow-kps-orange/20">
                <ShieldCheck className="w-16 h-16 mb-8 text-white" />
                <h4 className="text-3xl font-black mb-6">Our Vision</h4>
                <p className="text-xl leading-relaxed text-white/90">
                  To be a trusted leader in electrical and power solutions in Gauteng and beyond, known for technical excellence, reliability, and innovation in energy systems.
                </p>
              </div>
              <div className="bg-kps-blue p-12 rounded-[3rem] text-white shadow-xl shadow-kps-blue/20">
                <Zap className="w-16 h-16 mb-8 text-kps-orange" />
                <h4 className="text-3xl font-black mb-6">Our Mission</h4>
                <p className="text-xl leading-relaxed text-white/90">
                  To provide safe, efficient, and future-ready electrical solutions that protect assets, reduce downtime, and support sustainable growth for our clients.
                </p>
              </div>
            </section>

            {/* Services List */}
            <section>
              <h3 className="text-4xl font-black mb-16 text-kps-blue dark:text-white">Our Core Services</h3>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
                {[
                  "Electrical installations (residential, commercial, and industrial)",
                  "Electrical maintenance and fault finding",
                  "Distribution boards (DB) installation and upgrades",
                  "Power reticulation and cabling",
                  "Lighting design, installation, and upgrades",
                  "Backup power solutions (inverters, UPS, generators)",
                  "Solar power installations and hybrid energy systems",
                  "Electrical compliance certificates (COCs)",
                  "Energy efficiency audits and load management",
                  "Emergency electrical repairs and call-outs"
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-6 py-5 border-b border-gray-100 dark:border-slate-800 group hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors px-4 rounded-xl">
                    <div className="w-3 h-3 bg-kps-orange rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-lg font-bold text-gray-700 dark:text-slate-300">{service}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Footer */}
            <section className="bg-kps-orange/5 dark:bg-slate-800 rounded-[3rem] p-16 text-center border-2 border-kps-orange/10">
              <h3 className="text-3xl font-black mb-12 text-kps-blue dark:text-white">Contact Us Anytime</h3>
              <div className="flex flex-wrap justify-center gap-16">
                <div className="flex items-center gap-4">
                  <Phone className="text-kps-orange w-6 h-6" />
                  <p className="text-xl font-black text-kps-blue dark:text-white">076 071 1438</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-kps-orange w-6 h-6" />
                  <p className="text-xl font-black text-kps-blue dark:text-white">CHAMANEPHILA@GMAIL.COM</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-kps-orange w-6 h-6" />
                  <p className="text-xl font-black text-kps-blue dark:text-white">Kwa Zulu Natal, South Africa</p>
                </div>
              </div>
            </section>

            {/* Thank You */}
            <section className="text-center py-20">
              <Logo className="scale-[1.5] mb-12" />
              <h3 className="text-7xl font-black text-kps-blue dark:text-white tracking-tighter">Thank You</h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
