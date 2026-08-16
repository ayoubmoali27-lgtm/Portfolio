import Link from "next/link";
import Image from "next/image";
import { Syne, Inter } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const techIcons = [
  { name: "HTML", src: "/icons/html1.png" },
  { name: "CSS", src: "/icons/css1.png" },
  { name: "JavaScript", src: "/icons/js.png" },
  { name: "Next.js", src: "/icons/next.png" },
  { name: "React", src: "/icons/react.png" },
  { name: "SQL Server", src: "/icons/sql.png" },
];

export default function Hero() {
  return (
    <section
      className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-16 py-24 items-center ${inter.className}`}
    >
      {/* Colonne gauche */}
      <div className="flex flex-col">
        <div className="inline-flex items-center gap-2 self-start bg-[#1c1b1b] border border-gray-800 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-sm text-gray-300">Available for work</span>
        </div>

        <h1
          className={`${syne.className} text-white text-4xl md:text-5xl font-semibold mb-6`}
        >
          WEB DEVELOPER & DIGITAL CREATOR
        </h1>

        <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
          Hi, I&apos;m Ayoub Moali, i specialize in Building high-performance
          digital experiences with precision and purpose. Focused on clean
          design, seamless interactions, and scalable web solutions.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/projects"
            className="bg-white text-black text-sm font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            See my works
          </Link>
          <Link
            href="/contacts"
            className="bg-transparent border border-gray-700 text-white text-sm font-semibold px-5 py-3 rounded-full hover:border-gray-500 transition-colors flex items-center gap-2"
          >
            Contact Me →
          </Link>
        </div>

        {/* Icônes défilantes */}
        <div className="relative overflow-hidden max-w-md [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
  <div className="flex gap-4 animate-marquee w-max">
    {[...techIcons, ...techIcons].map((icon, i) => (
      <div
        key={i}
        className="w-16 h-16 flex-shrink-0 rounded-xl bg-[#1c1b1b] border border-gray-800 flex items-center justify-center"
      >
        <Image src={icon.src} alt={icon.name} width={28} height={28} />
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Colonne droite : photo */}
      <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-[#1c1b1b]">
        <Image
  src="/profile.png"
  alt="Ayoub Moali"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
  priority
/>
      </div>
    </section>
  );
}
