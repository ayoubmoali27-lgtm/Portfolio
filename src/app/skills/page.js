"use client";

import { Syne, Inter } from "next/font/google";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const skillGroups = [
  {
    category: "Web Development",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "SQL Server", level: 70 },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "n8n", level: 80 },
      { name: "OpenAI API / LLMs", level: 75 },
      { name: "Python", level: 70 },
      { name: "Zapier / Make", level: 65 },
    ],
  },
  {
    category: "Design & Tools",
    skills: [
      { name: "Photoshop", level: 75 },
      { name: "Illustrator", level: 70 },
      { name: "After Effects", level: 60 },
      { name: "Delphi", level: 60 },
      { name: "PC Repair / Hardware", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      className={`max-w-6xl mx-auto px-6 py-24 md:py-32 ${inter.className}`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center text-center mb-20"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className={`${syne.className} text-xs tracking-[0.15em] uppercase text-white bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6`}
        >
          What I Know
        </motion.span>

        <h1
          className={`${syne.className} text-white text-4xl md:text-5xl font-bold tracking-[-0.01em] mb-4`}
        >
          Skills &amp; Expertise
        </h1>

        <p className="text-[#8e8fa1] text-base leading-relaxed max-w-md">
          A breakdown of the tools and technologies I use to build, automate,
          and design digital experiences.
        </p>
      </motion.div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3 + groupIndex * 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
            }}
            className="bg-[#141414] border border-gray-800 rounded-2xl p-8 hover:border-[#4361EE] transition-colors"
          >
            <h2
              className={`${syne.className} text-white text-xl font-bold mb-8`}
            >
              {group.category}
            </h2>

            <div className="flex flex-col gap-6">
              {group.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <p className="text-white text-sm font-semibold mb-2">
                    {skill.name}
                  </p>

                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        delay:
                          0.7 +
                          groupIndex * 0.15 +
                          skillIndex * 0.08,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full bg-[#4361EE] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}