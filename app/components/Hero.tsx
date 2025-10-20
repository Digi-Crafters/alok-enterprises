"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/*
  HeroSection - Next.js client component with TailwindCSS (v4-compatible classes) + Framer Motion
  - Images used are from Unsplash (free to use with attribution). Replace URLs if you prefer other images.
  - How to use: place this file in your components/ folder and import <HeroSection /> in a page.
  - Make sure you have framer-motion installed: npm i framer-motion
  - Tailwind setup: this assumes Tailwind is configured in your Next.js project.
*/

const solarImg1 =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1472";
const solarImg2 =
  "https://thevoxsolar.com/wp-content/uploads/2024/09/PM-Surya-Ghar-Yojana.jpg";

export default function HeroSection() {
  return (
    <header className="bg-[#FAF9F6]" id="home">
      {/* Off-white background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Enterprise Branding */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF8C00] to-[#0B8457] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 font-[Hind,system-ui]">
                    ALOK Enterprise
                  </h2>
                  <p className="text-sm text-slate-600 font-[Hind,system-ui]">
                    आलोक एंटरप्राइज
                  </p>
                </div>
              </div>
              <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
              <div className="text-sm text-slate-500">
                Trusted Solar Solutions Since 2010
              </div>
            </motion.div>

            {/* Eye-catching Offer Badges */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm0 4v10h10V6H5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>0% Down Payment</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B8457] to-[#1AAE7F] text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Home Loan ki Suvidha</span>
              </motion.div>
            </div>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFB347]/30 to-[#00AEEF]/20 rounded-full px-3 py-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FF8C00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5 6.5L19 19m-14 0l-1.5 1.5M19 5l1.5-1.5M6.5 6.5 5 5"
                />
              </svg>
              <span className="text-sm text-slate-700">
                Govt Subsidy · Reliable Installers · Across India
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#FF6A00] font-[Hind,system-ui]">
              Apne Ghar ko Banaiye{" "}
              <span className="text-[#0B8457]">Solar Smart</span>
            </h1>

            <p className="text-lg text-slate-700 max-w-xl font-[Poppins,system-ui]">
              <span className="font-semibold text-[#0B8457]">
                ALOK Enterprise
              </span>{" "}
              ke through sarkari subsidy ke saath apne ghar pe solar panel
              lagwaayein. Bijli ke bill kam karein aur prakriti ko bachayein —
              <span className="font-semibold">
                {" "}
                aasan process, certified installers.
              </span>
            </p>

            {/* Quick Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg border border-green-200 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Zero Down Payment
                    </h3>
                    <p className="text-xs text-slate-600">
                      Home Loan Options Available
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg border border-orange-200 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Free Installation
                    </h3>
                    <p className="text-xs text-slate-600">No Hidden Charges</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border-2 border-[#FF8C00] text-[#FF8C00] bg-white hover:bg-[#FFF6EE] transition-all"
              >
                Free Consultation
              </motion.a>
                <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border-2 border-[#FF8C00] text-[#FF8C00] bg-white hover:bg-[#FFF6EE] transition-all"
              >
                Get Your Solar Connection
              </motion.a>
            </div>

            {/* Loan Feature Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🏠</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">
                    Home Loan ki Special Suvidha!
                  </h3>
                  <p className="text-sm text-slate-600">
                    EMI starts from ₹1,999/month • Low Interest Rates • Quick
                    Approval
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-sm text-slate-500">
              Lagbhag{" "}
              <span className="font-semibold text-slate-700">40% tak</span> tak
              sarkari sahayata uplabdh — state-wise alag ho sakta hai.{" "}
              <span className="text-xs text-slate-400">*Estimate</span>
            </p>

            {/* Small trust badges */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Image
                  src="https://imgs.search.brave.com/hpSTxUbteo4wTlsWhwrEgMB8GoT3yYBlvgJirL-AW1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWct/Y2RuLnB1YmxpdmUu/b25saW5lL2ZpdC1p/bi81ODB4MzQ4L2Zp/bHRlcnM6Zm9ybWF0/KHdlYnApL3NhdXIt/ZW5lcmd5L21lZGlh/L3Bvc3RfYXR0YWNo/bWVudHMvMjAyMC8w/NC9tbnJlLW1pbmlz/dHJ5LW9mLW5ldy1h/bmQtcmVuZXdhYmxl/LWVuZXJneS5qcGc"
                  alt="cert"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm text-slate-600">MNRE Registered</span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="https://imgs.search.brave.com/hbvvMBPfP2y5FDf_7tb5YYzkYLsIzDrBIs4I4bDNexc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9uZW9uLWxp/Z2h0LXR1YmUtbnVt/YmVyLTItMjYwbnct/MjE2ODk5MjY5My5q/cGc"
                  alt="support"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm text-slate-600">
                  2 Year Installation Warranty
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            {/* ALOK Enterprise Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-slate-200"
            >
              <div className="text-center">
                <div className="font-bold text-[#0B8457] text-sm">
                  ALOK Enterprise
                </div>
                <div className="text-xs text-slate-600 font-[Hind,system-ui]">
                  आलोक एंटरप्राइज
                </div>
              </div>
            </motion.div>

            {/* Loan Offer Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-1/4 -right-4 z-10 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-lg shadow-xl"
            >
              <div className="text-center">
                <div className="font-bold text-sm">HOME LOAN</div>
                <div className="text-xs">Available</div>
                <div className="text-[10px] mt-1">EMI ₹1,999/month*</div>
              </div>
            </motion.div>

            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="aspect-[4/3] sm:aspect-[3/4]">
                  <Image
                    src={solarImg1}
                    alt="solar panels on rooftop"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden sm:block aspect-[3/4]">
                  <Image
                    src={solarImg2}
                    alt="rooftop landscape"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Sun badge overlay */}
              <div className="absolute -top-6 -right-6 p-3 rounded-full">
                <Image
                  src={'/logo.png'}
                  height={100}
                  alt="Logo"
                  width={100}
                />
              </div>
            </div>

            {/* Additional Offer Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
                <span className="text-yellow-600 text-sm">⭐</span>
                <span className="text-xs text-slate-700">
                  Zero Down Payment
                </span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                <span className="text-green-600 text-sm">🏠</span>
                <span className="text-xs text-slate-700">
                  Home Loan Available
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1">
                <span className="text-blue-600 text-sm">⚡</span>
                <span className="text-xs text-slate-700">
                  Free Installation
                </span>
              </div>
            </div>

            {/* Decorative: subtle orange-blue underline */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-slate-500">
                <span className="font-semibold text-[#0B8457]">
                  ALOK Enterprise
                </span>{" "}
                - Trusted solar installations across urban & rural India
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
