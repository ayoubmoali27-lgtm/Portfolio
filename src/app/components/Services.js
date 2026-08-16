import { Syne, Inter } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const services = [
  {
    number: "01",
    title: "Web Architecture",
    description:
      "Designing and building high-performance digital experiences with React, Next.js, and modern frontend architecture.",
  },
  {
    number: "02",
    title: "Automation Engineering",
    description:
      "Designing intelligent workflows and automation systems that eliminate repetitive tasks and improve operational efficiency.",
  },
  {
    number: "03",
    title: "Desktop Applications",
    description:
      "Building reliable desktop applications and internal tools tailored to specific business workflows and operational needs.",
  },
];

export default function Services() {
  return (
    <section
      className={`max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32 ${inter.className}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <p className="text-xs tracking-[0.2em] text-[#8e8fa1] font-semibold mb-4">
            WHAT I DO
          </p>

          <h2
            className={`${syne.className} text-white text-3xl md:text-5xl font-bold tracking-[-0.02em]`}
          >
            Services
          </h2>
        </div>

        <p className="text-[#8e8fa1] text-sm md:text-base max-w-sm leading-relaxed">
          From architecture to automation, I build digital systems designed
          around performance, clarity, and scalability.
        </p>
      </div>

      {/* Services */}
      <div className="grid md:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service.number}
            className="
              relative
              overflow-hidden
              min-h-[300px]
              border border-white/10
              rounded-2xl
              p-8
              bg-[#141414]
              group
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:border-[#4361EE]/60
              hover:bg-[#171717]
            "
          >
            {/* Large background number */}
            <span
              className={`
                ${syne.className}
                absolute
                -right-3
                -top-8
                text-[150px]
                leading-none
                font-bold
                text-white/[0.025]
                select-none
                transition-all
                duration-500
                group-hover:text-[#4361EE]/10
                group-hover:scale-110
              `}
            >
              {service.number}
            </span>

            {/* Number */}
            <div className="relative z-10 flex items-center justify-between">
              <span
                className={`${syne.className} text-[#4361EE] text-sm font-bold tracking-wide`}
              >
                {service.number}
              </span>

              <span className="w-2 h-2 rounded-full bg-[#4361EE] opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-20">
              <h3
                className={`
                  ${syne.className}
                  text-white
                  text-xl
                  font-bold
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-[#bac3ff]
                `}
              >
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                {service.description}
              </p>
            </div>

            {/* Bottom line */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                bg-[#4361EE]
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}