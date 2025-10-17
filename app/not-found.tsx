"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAF8] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <motion.img
          src="https://img.icons8.com/color/240/solar-panel.png"
          alt="Solar Panel"
          className="mx-auto mb-6 w-28 h-28"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        <h1 className="text-5xl font-extrabold text-[#FF6A00] mb-4 font-[Hind,system-ui]">
          404 - पेज नहीं मिला
        </h1>
        <p className="text-lg text-slate-700 mb-6 font-[Poppins,system-ui]">
          लगता है सूरज की रौशनी इस पेज तक नहीं पहुंची ☀️ <br />
          Don’t worry — let’s take you back to the main page.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/"
            className="bg-gradient-to-r from-[#0B8457] to-[#00AEEF] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-semibold"
          >
            🔙 वापस जाएँ / Go Home
          </Link>
        </motion.div>

        <div className="mt-10">
          <p className="text-sm text-slate-500 font-[Hind,system-ui]">
            या आप हमारी सेवाओं को फिर से देखें —{" "}
            <Link
              href="/#services"
              className="text-[#FF6A00] underline hover:text-[#0B8457]"
            >
              सोलर सर्विसेज़ देखें
            </Link>
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-4 w-full flex justify-center">
        <span className="h-1 w-20 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#00AEEF]"></span>
      </div>
    </section>
  );
}
