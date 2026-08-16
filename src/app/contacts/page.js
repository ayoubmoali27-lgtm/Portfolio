"use client";

import { motion } from "framer-motion";
import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-[#141414] min-h-screen px-6 md:px-16 pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-between mb-16"
        >
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tight">
            CONTACT
          </h1>

          <div className="hidden md:flex gap-2">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="w-2 h-2 rounded-full bg-pink-500"
            />

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="w-2 h-2 rounded-full bg-[#a78bfa]"
            />

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
          </div>
        </motion.div>

        {/* Line */}
        <motion.div
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-t border-gray-800 mb-16"
        />

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-10">
              Available for freelance opportunities, consulting, and
              collaboration on technically demanding projects. Let&apos;s
              build something exceptional.
            </p>

            <div className="flex flex-col gap-6">

              <div>
                <p className="text-gray-500 text-xs tracking-[0.15em] font-semibold mb-1">
                  EMAIL
                </p>
                <p className="text-white text-sm">
                  Ayoubdev27@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs tracking-[0.15em] font-semibold mb-1">
                  LOCATION
                </p>
                <p className="text-white text-sm">
                  Algiers
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs tracking-[0.15em] font-semibold mb-1">
                  SOCIAL
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/ayoubmoali27-lgtm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-[#a78bfa] transition-colors"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ayoub-moali-708325400/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-[#a78bfa] transition-colors"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://www.tiktok.com/@ayoub.dev61"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-[#a78bfa] transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8"
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}