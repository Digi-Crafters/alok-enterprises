"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const subsidyData = [
  { capacity: "1 KW", cost: 80000, stateAid: 15000, centralAid: 30000, savings: "₹2,500/month", payback: "2-3 Years" },
  { capacity: "2 KW", cost: 135000, stateAid: 30000, centralAid: 60000, savings: "₹5,000/month", payback: "2-3 Years" },
  { capacity: "3 KW", cost: 185000, stateAid: 30000, centralAid: 78000, savings: "₹7,500/month", payback: "2-3 Years" },
  { capacity: "4 KW", cost: 245000, stateAid: 30000, centralAid: 78000, savings: "₹10,000/month", payback: "2-3 Years" },
  { capacity: "5 KW", cost: 285000, stateAid: 30000, centralAid: 78000, savings: "₹12,500/month", payback: "2-3 Years" },
  { capacity: "6 KW", cost: 335000, stateAid: 30000, centralAid: 78000, savings: "₹15,000/month", payback: "2-3 Years" },
  { capacity: "7 KW", cost: 390000, stateAid: 30000, centralAid: 78000, savings: "₹17,500/month", payback: "2-3 Years" },
  { capacity: "8 KW", cost: 405000, stateAid: 30000, centralAid: 78000, savings: "₹20,000/month", payback: "2-3 Years" },
  { capacity: "9 KW", cost: 455000, stateAid: 30000, centralAid: 78000, savings: "₹22,500/month", payback: "2-3 Years" },
  { capacity: "10 KW", cost: 500000, stateAid: 30000, centralAid: 78000, savings: "₹25,000/month", payback: "2-3 Years" },
];

const services = [
  {
    icon: "🏠",
    title: "Residential Solar",
    description: "Ghar ke liye complete solar solutions - rooftop installation with subsidy",
    features: ["1-10 KW Systems", "Subsidy Available", "25 Years Warranty"]
  },
  {
    icon: "🏢",
    title: "Commercial Solar",
    description: "Shops, offices, factories ke liye commercial solar systems",
    features: ["10+ KW Systems", "Tax Benefits", "Quick ROI"]
  },
  {
    icon: "🌾",
    title: "Agricultural Solar",
    description: "Kheti ke liye solar water pumps and farm solutions",
    features: ["Solar Pumps", "Subsidy up to 90%", "Free Daytime Power"]
  },
  {
    icon: "🔧",
    title: "Maintenance & Repair",
    description: "Regular maintenance and repair services for existing systems",
    features: ["Annual Maintenance", "24x7 Support", "Genuine Parts"]
  }
];

export default function OurServices() {
  const [selectedCapacity, setSelectedCapacity] = useState("3 KW");

  return (
    <section id="services" className="relative bg-gradient-to-br from-white via-blue-50/20 to-green-50/20 py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-green-100 rounded-full px-4 py-2 mb-6 border border-orange-200">
            <span className="text-orange-600">⭐</span>
            <span className="text-sm font-medium text-slate-700">Authorized Government Partner</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4 font-[Hind,system-ui]">
            हमारी सेवाएँ / 
            <span className="bg-gradient-to-r from-[#FF6A00] to-[#0B8457] bg-clip-text text-transparent"> Our Services</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-[Poppins,system-ui]"
          >
            प्रधानमंत्री सूर्य घर मुफ़्त बिजली योजना के अंतर्गत — 
            <span className="font-semibold text-slate-800"> बैंक लोन सुविधा और सब्सिडी</span> के साथ आसान इंस्टालेशन
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-green-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-[Hind,system-ui]">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Subsidy Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 mb-12 border border-green-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-3 font-[Hind,system-ui]">
              Subsidy Calculator
            </h3>
            <p className="text-slate-600">
              Apni capacity choose karein aur dekhein kitna subsidy milega
            </p>
          </div>

          {/* Capacity Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {subsidyData.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCapacity(item.capacity)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCapacity === item.capacity
                    ? "bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] text-white shadow-lg"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-green-300"
                }`}
              >
                {item.capacity}
              </motion.button>
            ))}
          </div>

          {/* Selected Plan Display */}
          {subsidyData.filter(item => item.capacity === selectedCapacity).map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center"
            >
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-green-500">
                <div className="text-2xl font-bold text-slate-800">{plan.capacity}</div>
                <div className="text-sm text-slate-500">System Capacity</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-blue-500">
                <div className="text-xl font-bold text-slate-800">₹{(plan.cost - plan.stateAid - plan.centralAid).toLocaleString()}</div>
                <div className="text-sm text-slate-500">Your Investment</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-orange-500">
                <div className="text-xl font-bold text-green-600">₹{(plan.stateAid + plan.centralAid).toLocaleString()}</div>
                <div className="text-sm text-slate-500">Total Subsidy</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-purple-500">
                <div className="text-xl font-bold text-slate-800">{plan.savings}</div>
                <div className="text-sm text-slate-500">Monthly Savings</div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-cyan-500">
                <div className="text-xl font-bold text-slate-800">{plan.payback}</div>
                <div className="text-sm text-slate-500">Payback Period</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Subsidy Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden mb-12"
        >
          <div className="bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] p-6 text-white">
            <h3 className="text-2xl font-bold text-center font-[Hind,system-ui]">
              सब्सिडी विवरण / Subsidy Details
            </h3>
            <p className="text-center opacity-90 mt-2">
              प्रधानमंत्री सूर्य घर योजना के अंतर्गत उपलब्ध अनुदान
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-700 border-b">Capacity (KW)</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-700 border-b">Total Cost</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-700 border-b">State Aid</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-700 border-b">Central Aid</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-700 border-b">Your Cost</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-700 border-b">Monthly Savings</th>
                </tr>
              </thead>
              <tbody>
                {subsidyData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`border-b hover:bg-green-50 transition-colors ${
                      index % 2 === 0 ? "bg-slate-50/50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-[#0B8457]">{row.capacity}</td>
                    <td className="px-6 py-4">₹{row.cost.toLocaleString()}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹{row.stateAid.toLocaleString()}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">₹{row.centralAid.toLocaleString()}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">
                      ₹{(row.cost - row.stateAid - row.centralAid).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 font-semibold text-orange-600">{row.savings}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg border-l-4 border-orange-500"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 font-[Hind,system-ui]">
              📄 आवश्यक दस्तावेज़ / Required Documents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["आधार कार्ड", "पैन कार्ड", "बैंक पासबुक", "बिजली बिल", "मोबाइल नंबर", "ई-मेल आईडी"].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/60 rounded-lg p-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-slate-700">{doc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 font-[Hind,system-ui]">
              🏦 बैंक लोन सुविधा / Bank Loan Facility
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-xl">💰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Zero Down Payment</h4>
                  <p className="text-sm text-slate-600">EMI starts from ₹1,999/month</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Quick Approval</h4>
                  <p className="text-sm text-slate-600">24-48 hours processing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] rounded-3xl p-8 lg:p-12 text-white shadow-2xl"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-[Hind,system-ui]">
            उत्तर प्रदेश सरकार द्वारा अधिकृत विक्रेता
          </h3>
          <p className="text-xl mb-2 opacity-90">आलोक एंटरप्राइजेज़</p>
          <p className="text-lg mb-6 opacity-80">ALOK Enterprises - Your Trusted Solar Partner</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="tel:6394067351"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0B8457] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              📞 Call Now: 6394067351
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
            >
              🏢 Visit Office
            </motion.a>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            📍 कार्यालय: आवास विकास के सामने, अमेठी | ⏰ समय: सुबह 9:00 - शाम 7:00
          </p>
        </motion.div>
      </div>
    </section>
  );
}