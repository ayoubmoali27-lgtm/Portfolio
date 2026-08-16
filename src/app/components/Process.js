"use client";

import { Syne, Inter } from "next/font/google";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your goals, requirements, and constraints before writing a single line of code or workflow.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Mapping out the architecture, interface, and automation flow so every decision has a clear purpose.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building the solution with clean code and solid structure, whether it's a web app or an automation pipeline.",
  },
  {
    number: "04",
    title: "Testing & Delivery",
    description:
      "Testing thoroughly, refining based on feedback, and delivering a product that's ready to scale.",
  },
];

export default function Process() {
  return (
    <section
      className={`max-w-3xl mx-auto px-6 py-24 md:py-32 ${inter.className}`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-16"
      >
        <p className="text-xs tracking-[0.15em] text-[#8e8fa1] font-semibold mb-4">
          HOW I WORK
        </p>

        <h2
          className={`${syne.className} text-white text-3xl md:text-5xl font-bold tracking-[-0.01em]`}
        >
          My Process
        </h2>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -40 : 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex gap-6"
          >
            {/* Number + line */}
            <div className="flex flex-col items-center">
              <motion.span
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
                className={`
                  ${syne.className}
                  flex items-center justify-center
                  w-12 h-12
                  rounded-full
                  bg-[#141414]
                  border border-gray-800
                  text-[#4361EE]
                  text-sm
                  font-bold
                  shrink-0
                  transition-colors
                  duration-300
                  hover:border-[#4361EE]
                `}
              >
                {step.number}
              </motion.span>

              {index < steps.length - 1 && (
                <div className="w-px flex-1 bg-gray-800 my-2" />
              )}
            </div>

            {/* Card */}
            <div
              className={`
                bg-[#141414]
                border border-gray-800
                rounded-2xl
                p-8
                w-full
                transition-all
                duration-300
                hover:border-[#4361EE]/70
                hover:-translate-y-1
                group
                ${index < steps.length - 1 ? "mb-6" : ""}
              `}
            >
              <h3
                className={`
                  ${syne.className}
                  text-white
                  text-xl
                  font-bold
                  mb-3
                  transition-colors
                  duration-300
                  group-hover:text-[#bac3ff]
                `}
              >
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}