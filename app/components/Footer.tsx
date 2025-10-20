"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Solar?", href: "#why-solar" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Solar",
    "Commercial Solar", 
    "Subsidy Assistance",
    "Bank Loan Help"
  ];

  const contactInfo = [
    {
      icon: "📞",
      label: "Call Us",
      value: "6394067351",
      href: "tel:6394067351"
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "6394067351", 
      href: "https://wa.me/6394067351"
    },
    {
      icon: "📍",
      label: "Office",
      value: "Amethi, Uttar Pradesh",
      href: "#"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-white to-slate-50/80 border-t border-slate-200">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-orange-50/40 to-green-50/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C00] to-[#0B8457] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">ALOK Enterprises</h3>
                <p className="text-sm text-slate-600">आलोक एंटरप्राइजेज़</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Uttar Pradesh&apos;s trusted solar partner. Government-approved installations with subsidy and bank loan facilities.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 border border-green-200">
              <span className="text-green-600 text-sm">✅</span>
              <span className="text-sm text-slate-700">MNRE Certified</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-slate-800 font-[Hind,system-ui]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-600 hover:text-[#FF6A00] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1 h-1 bg-[#0B8457] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-slate-800 font-[Hind,system-ui]">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="text-slate-600 hover:text-[#0B8457] transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-1 h-1 bg-[#FF8C00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-slate-800 font-[Hind,system-ui]">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-slate-600 hover:text-slate-800 transition-colors group text-sm"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-200 group-hover:shadow-md transition-all">
                    <span className="text-lg">{contact.icon}</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700">{contact.label}</div>
                    <div className="text-slate-600">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Government Scheme Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6 border border-orange-200 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C00] to-[#FF6A00] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 font-[Hind,system-ui]">PM Surya Ghar Muft Bijli Yojana</h4>
                <p className="text-slate-600 text-sm">Government solar subsidy available with ALOK Enterprises</p>
              </div>
            </div>
            <motion.a
              href="https://wa.me/6394067351?text=Namaste!%20I%20want%20information%20about%20PM%20Surya%20Ghar%20subsidy."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap text-sm"
            >
              Apply for Subsidy
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="w-full flex justify-center">
              <div className="text-slate-500 text-sm text-center">
                © {currentYear} ALOK Enterprises. All rights reserved.
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="text-green-500">✅</span>
              <span>MNRE Certified</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="text-blue-500">🏠</span>
              <span>10,000+ Installations</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="text-orange-500">⭐</span>
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6394067351"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white text-xl z-50 hover:bg-green-600 transition-colors"
      >
        💬
      </motion.a>
    </footer>
  );
}