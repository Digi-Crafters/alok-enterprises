"use client";

import React from "react";
import { motion } from "framer-motion";

/*
  ENHANCED WHY SOLAR Section - Beautiful UI/UX with interactive elements
  Color theme: Sustainable Green, Orange, Water Blue.
  Font pairing: Hind (for Hinglish headings), Poppins (for content).
*/

const features = [
  {
    icon: "💰",
    title: "Up to 40% Subsidy",
    desc: "Government yojana ke under ghar pe solar lagane par milegi heavy subsidy.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    delay: 0.1
  },
  {
    icon: "⚡",
    title: "Save on Bijli Bills",
    desc: "Har mahine ke electricity bill mein noticeable savings — 100% green energy!",
    gradient: "from-orange-500 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
    delay: 0.2
  },
  {
    icon: "🌍",
    title: "Eco-Friendly Future",
    desc: "Apne ghar ke saath environment ka bhi khayal rakhiye — sustainable power use karein.",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    delay: 0.3
  },
  {
    icon: "🔧",
    title: "Low Maintenance",
    desc: "Solar panels ke liye minimum upkeep chahiye — 25+ saal tak reliable output.",
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
    delay: 0.4
  },
];

const stats = [
  { number: "40%", label: "Average Savings", sublabel: "on electricity bills" },
  { number: "25+", label: "Years Warranty", sublabel: "on solar panels" },
  { number: "5-7", label: "Years Payback", sublabel: "return on investment" },
  { number: "100%", label: "Green Energy", sublabel: "clean & renewable" },
];

export default function WhySolar() {
  return (
    <section id="why-solar" className="relative bg-gradient-to-br from-white via-[#F9FAF8] to-blue-50/30 py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-green-100 rounded-full px-4 py-2 mb-6 border border-orange-200">
            <span className="text-orange-600">🌞</span>
            <span className="text-sm font-medium text-slate-700">Why Choose Solar Energy?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4 font-[Hind,system-ui]">
            Solar - Ek Smart
            <span className="bg-gradient-to-r from-[#FF6A00] to-[#0B8457] bg-clip-text text-transparent"> Investment</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-[Poppins,system-ui]"
          >
            Solar sirf bijli bachane ka option nahi, balki ek intelligent investment hai aapke 
            <span className="font-semibold text-slate-800"> ghar, future, aur environment</span> ke liye.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-slate-100"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#0B8457] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="font-semibold text-slate-800 mt-2 font-[Hind,system-ui]">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className={`relative bg-gradient-to-br ${item.bgGradient} to-white rounded-2xl p-6 h-full border border-slate-200/60 shadow-md hover:shadow-2xl transition-all duration-300 group-hover:border-transparent`}>
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg`}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center font-[Hind,system-ui]">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-center font-[Poppins,system-ui]">
                  {item.desc}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#0B8457] rounded-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-[Hind,system-ui]">
              Abhi Solar Lagwayein, Kal se Bijli Bill Bachayein!
            </h3>
            <p className="text-lg lg:text-xl opacity-90 mb-8 font-[Poppins,system-ui]">
              Join 50,000+ Indian families who have already switched to solar and are saving thousands every month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B8457] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Calculate Your Savings
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                Free Site Inspection
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">✓</span>
                </div>
                <span className="text-sm">MNRE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">🏠</span>
                </div>
                <span className="text-sm">10,000+ Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">⭐</span>
                </div>
                <span className="text-sm">4.8/5 Customer Rating</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#0B8457]"></span>
            <span className="text-slate-400 text-sm">Har Ghar Solar - Har Ghar Swayatt</span>
            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[#0B8457] to-[#00AEEF]"></span>
          </div>
        </div>
      </div>
    </section>
  );
}