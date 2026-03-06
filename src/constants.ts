import { Zap, ShieldCheck, Clock, HardHat, CheckCircle2 } from "lucide-react";
import React from 'react';

export const SERVICES = [
  {
    title: "Electrical Installations",
    description: "Expert installations for residential, commercial, and industrial properties, ensuring safety and compliance.",
    icon: React.createElement(Zap, { className: "w-8 h-8 text-kps-blue" }),
    image: "/api/images/9"
  },
  {
    title: "Maintenance & Fault Finding",
    description: "Proactive electrical maintenance and rapid fault finding to minimize downtime and ensure safety.",
    icon: React.createElement(ShieldCheck, { className: "w-8 h-8 text-kps-blue" }),
    image: "/api/images/10"
  },
  {
    title: "Backup Power Solutions",
    description: "Reliable inverters, UPS systems, and generators to keep your operations running during outages.",
    icon: React.createElement(Clock, { className: "w-8 h-8 text-kps-blue" }),
    image: "/api/images/8"
  },
  {
    title: "Solar & Hybrid Energy",
    description: "Sustainable solar power installations and hybrid energy systems for reduced costs and green energy.",
    icon: React.createElement(Zap, { className: "w-8 h-8 text-kps-orange" }),
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "DB Upgrades & Reticulation",
    description: "Distribution board installations, upgrades, and comprehensive power reticulation and cabling.",
    icon: React.createElement(HardHat, { className: "w-8 h-8 text-kps-blue" }),
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
  },
  {
    title: "Compliance Certificates (COC)",
    description: "Professional electrical compliance audits and issuance of COCs for property transfers and safety.",
    icon: React.createElement(CheckCircle2, { className: "w-8 h-8 text-kps-blue" }),
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
  },
];

export const INDUSTRIES = [
  "Residential Properties & Housing Developments",
  "Commercial Buildings & Retail Spaces",
  "Industrial Facilities & Warehouses",
  "Offices & Corporate Environments",
  "Public & Private Infrastructure Projects",
];

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const VALUES = [
  { title: "Safety and Compliance", description: "Adhering to SANS and local regulatory standards." },
  { title: "Integrity and Accountability", description: "Transparent and honest business practices." },
  { title: "Quality Workmanship", description: "High-quality results through skilled expertise." },
  { title: "Customer-Centric Service", description: "Tailored solutions focused on client needs." },
  { title: "Innovation", description: "Continuous improvement and future-ready systems." },
];

export const FEATURES = [
  { title: "Certified Professionals", icon: React.createElement(CheckCircle2, { className: "w-5 h-5" }) },
  { title: "24/7 Emergency Support", icon: React.createElement(Clock, { className: "w-5 h-5" }) },
  { title: "Safety First Approach", icon: React.createElement(ShieldCheck, { className: "w-5 h-5" }) },
  { title: "Transparent Pricing", icon: React.createElement(Zap, { className: "w-5 h-5" }) },
];
