import Link from "next/link";

const socialColumn1 = [
  { name: "GITHUB", href: "https://github.com/ayoubmoali27-lgtm" },
  { name: "INSTAGRAM", href: "https://instagram.com/ayoubdev27" },
  { name: "TIKTOK", href: "https://www.tiktok.com/@ayoub.dev61" },
];

const socialColumn2 = [
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/ayoub-moali-708325400/" },
  
];

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Bloc gauche : logo + description */}
          <div className="max-w-md">
            <h2 className="text-white text-2xl font-bold mb-4">AD</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web Developer &amp; Automation Engineer specializing in
              high-performance digital experiences, scalable web
              applications, and intelligent automation.
            </p>
          </div>

          {/* Bloc droite : liens sociaux en 2 colonnes */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              {socialColumn1.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs tracking-[0.15em] font-semibold hover:text-[#a78bfa] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {socialColumn2.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs tracking-[0.15em] font-semibold hover:text-[#a78bfa] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Ligne de séparation + copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-gray-500 text-xs tracking-[0.1em]">
            © 2024 WEB DEVELOPER PORTFOLIO. BUILT WITH PRECISION.
          </p>
        </div>
      </div>
    </footer>
  );
}