"use client";

import { useState } from "react";
import Image from "next/image";
import { Syne, Inter } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const projects = [
  {
    title: "PrimeEstate",
    description:
      "A modern real estate platform designed to showcase premium properties with an elegant interface, advanced property browsing, and a seamless user experience.",
    image: "/projects/realEstate.png",
    sourceUrl: "#",
    liveUrl: "https://real-state-344p.vercel.app/",
  },
  {
    title: "MyWatch",
    description:
      "A refined e-commerce experience designed to showcase premium timepieces with elegant product presentation, intuitive navigation, and a seamless shopping experience.",
    image: "/projects/mywatch.png",
    sourceUrl: "#",
    liveUrl: "https://watch-three-smoky.vercel.app/",
  },
  {
    title: "Framer Website",
    description:
      "A modern marketing website built with Framer, combining expressive visual design, smooth interactions, and a responsive layout to create a polished digital experience.",
    image: "/projects/framer.png",
    sourceUrl: "#",
    liveUrl: "https://ayoubdev.framer.website/",
  },
  {
    title: "Landing Page",
    description:
      "A modern, conversion-focused landing page built to communicate a brand clearly through strong visual hierarchy, responsive design, and smooth user interactions.",
    image: "/projects/landing.png",
    sourceUrl: "#",
    liveUrl: "https://landingpage-rouge-rho.vercel.app/",
  },
];

export default function ProjectsShipped() {
  const [openingProject, setOpeningProject] = useState(null);

  const handleProjectClick = (project) => {
    if (!project.liveUrl || project.liveUrl === "#") return;

    setOpeningProject(project.title);

    setTimeout(() => {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
      setOpeningProject(null);
    }, 350);
  };

  return (
    <section
      className={`max-w-5xl mx-auto px-6 py-24 md:py-32 ${inter.className}`}
    >
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[11px] tracking-[0.15em] uppercase text-black bg-white rounded-full px-3 py-1 mb-5">
          Projects
        </span>

        <h2
          className={`${syne.className} text-white text-3xl md:text-5xl font-bold`}
        >
          Projects I&apos;ve Shipped
        </h2>

        <p className="text-[#8e8fa1] text-base leading-relaxed max-w-md">
          A range of projects demonstrating how I turn ideas into functional
          experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {projects.map((project) => {
          const isOpening = openingProject === project.title;

          return (
            <div
              key={project.title}
              onClick={() => handleProjectClick(project)}
              className={`
                bg-[#141414]
                border border-gray-800
                rounded-2xl
                overflow-hidden
                flex flex-col
                h-full
                cursor-pointer
                group
                transition-all
                duration-300
                ease-out
                hover:border-[#4361EE]
                hover:-translate-y-1
                hover:shadow-2xl
                ${
                  isOpening
                    ? "scale-[0.97] opacity-0"
                    : "scale-100 opacity-100"
                }
              `}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-7 flex flex-col flex-1 gap-4">
                <h3
                  className={`${syne.className} text-white text-xl font-bold group-hover:text-[#bac3ff] transition-colors duration-300`}
                >
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-1">
                  {project.sourceUrl && project.sourceUrl !== "#" && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-semibold text-white border border-white/15 rounded-full px-5 py-2.5 hover:bg-white/5 transition-colors"
                    >
                      Source Code
                    </a>
                  )}

                  <span className="text-sm font-semibold text-black bg-white rounded-full px-5 py-2.5 flex items-center gap-1.5 group-hover:bg-[#bac3ff] transition-colors duration-300">
                    View Project
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}