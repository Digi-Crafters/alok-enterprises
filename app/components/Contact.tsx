"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    capacity: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const { name, phone, location, capacity, message } = formData;
    return `Namaste! I'm interested in Solar Installation from ALOK Enterprises.

👤 Name: ${name}
📞 Phone: ${phone}
📍 Location: ${location}
⚡ Required Capacity: ${capacity}
💬 Message: ${message}

Please contact me for free consultation.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "9236830000"; // Replace with actual number
    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const quickReplies = [
    {
      icon: "💰",
      text: "Subsidy Details",
      message: "I want to know about government subsidy for solar installation"
    },
    {
      icon: "🏠",
      text: "Home Solar",
      message: "I need solar system for my home, please share details"
    },
    {
      icon: "⚡",
      text: "Free Consultation",
      message: "I want free site inspection and consultation"
    },
    {
      icon: "🏦",
      text: "Loan Facility",
      message: "I want information about bank loan for solar system"
    }
  ];

  const sendQuickMessage = (quickMessage: string) => {
    const whatsappNumber = "9236830000";
    const message = encodeURIComponent(`Namaste! ${quickMessage}`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-white via-green-50/30 to-blue-50/30 py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-6 border border-green-200">
            <span className="text-green-600">💬</span>
            <span className="text-sm font-medium text-slate-700">24x7 WhatsApp Support</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4 font-[Hind,system-ui]">
            संपर्क करें / 
            <span className="bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] bg-clip-text text-transparent"> Contact Us</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-[Poppins,system-ui]"
          >
            WhatsApp pe directly message bhejein aur free consultation, subsidy details aur site inspection book karein
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6 font-[Hind,system-ui]">
              WhatsApp Message Bhejein
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    आपका नाम / Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    मोबाइल नंबर / Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="9236830000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  आपका स्थान / Your Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="City, Area, Pincode"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  अपनी जरूरत / Required Capacity
                </label>
                <select
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Capacity</option>
                  <option value="1 KW">1 KW - Small Home</option>
                  <option value="2 KW">2 KW - Medium Home</option>
                  <option value="3 KW">3 KW - Large Home</option>
                  <option value="4-5 KW">4-5 KW - Big Home/Shop</option>
                  <option value="5+ KW">5+ KW - Commercial</option>
                  <option value="Not Sure">Not Sure - Need Advice</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  संदेश / Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
              >
                <span>📱</span>
                Send WhatsApp Message
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Contact & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Message Buttons */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-blue-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-[Hind,system-ui]">
                Quick Messages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickReplies.map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => sendQuickMessage(item.message)}
                    className="bg-white rounded-xl p-4 text-left hover:shadow-lg transition-all border border-slate-200 hover:border-green-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <span className="font-semibold text-slate-800">{item.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Direct Contact Methods */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg border border-orange-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-[Hind,system-ui]">
                Direct Contact
              </h3>
              <div className="space-y-4">
                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/9236830000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-green-200"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-xl">💬</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">WhatsApp</div>
                    <div className="text-sm text-slate-600">Instant Reply - 24x7</div>
                  </div>
                  <div className="text-green-600 font-bold">9236830000</div>
                </motion.a>

                {/* Phone Call */}
                <motion.a
                  href="tel:9236830000"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-blue-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📞</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Direct Call</div>
                    <div className="text-sm text-slate-600">9:00 AM - 7:00 PM</div>
                  </div>
                  <div className="text-blue-600 font-bold">Call Now</div>
                </motion.a>
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg border border-green-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-[Hind,system-ui]">
                Office Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600">🏢</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">ALOK Enterprises</div>
                    <div className="text-sm text-slate-600">आलोक एंटरप्राइजेज़</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Office Address</div>
                    <div className="text-sm text-slate-600">आवास विकास के सामने, अमेठी</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600">⏰</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Business Hours</div>
                    <div className="text-sm text-slate-600">सुबह 9:00 - शाम 7:00 (Monday-Saturday)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-bold text-slate-800 mb-2">Instant Response</h4>
              <p className="text-sm text-slate-600">
                WhatsApp messages get replied within <span className="font-semibold text-green-600">5-10 minutes</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 font-[Hind,system-ui]">
              Abhi WhatsApp Karein, Kal Free Inspection Book Karein!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Don&apos;t wait! Send a message now and get free site inspection within 24 hours.
            </p>
            <motion.a
              href="https://wa.me/9236830000?text=Namaste!%20I%20want%20free%20solar%20site%20inspection%20from%20ALOK%20Enterprises."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#0B8457] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>💬</span>
              Click to Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}