"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/*
  PROFESSIONAL WHY SOLAR Section - Enterprise-grade UI/UX
  Color theme: Sustainable Green (#0B8457), Orange (#FF6A00), Water Blue (#00AEEF).
  Font pairing: Hind (for Hinglish headings), Poppins (for content).
*/

const features = [
  {
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
    title: "Up to 40% Subsidy",
    desc: "Government yojana ke under ghar pe solar lagane par milegi heavy subsidy.",
    gradient: "from-green-500 to-emerald-600",
    delay: 0.1
  },
  {
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    title: "Save on Bijli Bills",
    desc: "Har mahine ke electricity bill mein noticeable savings — 100% green energy!",
    gradient: "from-orange-500 to-amber-600",
    delay: 0.2
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    title: "Eco-Friendly Future",
    desc: "Apne ghar ke saath environment ka bhi khayal rakhiye — sustainable power use karein.",
    gradient: "from-blue-500 to-cyan-600",
    delay: 0.3
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    title: "Low Maintenance",
    desc: "Solar panels ke liye minimum upkeep chahiye — 25+ saal tak reliable output.",
    gradient: "from-purple-500 to-indigo-600",
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
          viewport={{ once: true }}
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
            viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
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

        {/* Features Grid with Professional Image Cards */}
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
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative bg-white h-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200/60">
                {/* Image Container with Next.js Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 mix-blend-multiply`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon Badge on Image */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg border border-white/30`}>
                      <span className="text-2xl">
                        {i === 0 ? '💰' : i === 1 ? '⚡' : i === 2 ? '🌍' : '🔧'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 font-[Hind,system-ui]">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-[Poppins,system-ui] text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
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
                <a href="#services">Calculate Your Savings</a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                <a href="#contact">Free Site Inspection</a>
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