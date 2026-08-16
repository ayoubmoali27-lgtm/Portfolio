import { Syne, Inter } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const skillCategories = [
  {
    number: "01",
    title: "Frontend",
    skills: [
      { name: "React & Next.js", detail: "Server Components, Suspense, ISR" },
      { name: "TypeScript", detail: "Advanced Generics, Strict Mode" },
      { name: "CSS Architecture", detail: "Tailwind, CSS Modules" },
    ],
  },
  {
    number: "02",
    title: "Backend",
    skills: [
      { name: "Node.js", detail: "ExpressJS" },
      { name: "Databases", detail: "SqlServer, MongoDB" },
      { name: "API Design", detail: "RESTful, GraphQL, tRPC" },
    ],
  },
  {
    number: "03",
    title: "AI & Automation",
    skills: [
      { name: "Workflows", detail: "n8n" },
      { name: "Scripting", detail: "Claude" },
      { name: "Integration", detail: "API's, Webhooks, OAuth" },
    ],
  },
];

export default function Skills() {
  return (
    <section className={`max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32 ${inter.className}`}>
      <div className="mb-16">
        <p className="text-xs tracking-[0.15em] text-[#8e8fa1] font-semibold mb-4">
          WHAT I KNOW
        </p>
        <h2 className={`${syne.className} text-white text-3xl md:text-5xl font-bold tracking-[-0.01em]`}>
          Skills
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.number}
            className="bg-[#141414] border border-gray-800 rounded-2xl p-8 hover:border-[#4361EE] transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`${syne.className} text-white text-2xl font-bold`}>
                {category.title}
              </h3>
              <span className={`${syne.className} text-[#4361EE] text-sm font-bold`}>
                {category.number}
              </span>
            </div>

            <div className="border-t border-gray-800 mb-6" />

            <div className="flex flex-col gap-5">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <p className="text-white text-[15px] font-semibold mb-1">
                    {skill.name}
                  </p>
                  <p className="text-gray-500 text-sm">{skill.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}