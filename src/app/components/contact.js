import Link from "next/link";
import { Syne, Inter } from "next/font/google";
import { Mail, Phone, MapPin } from "lucide-react";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const contactInfo = [
  {
    icon: Mail,
    label: "Email Address",
    value: "Ayoubdev27@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "0793660592",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Algeria, Algiers",
  },
];

export default function Contact() {
  return (
    <section className={`max-w-6xl mx-auto px-6 py-24 md:py-32 ${inter.className}`}>
      <div className="bg-[#141414] border border-gray-800 rounded-[2rem] px-6 md:px-16 py-16 flex flex-col items-center text-center">
        <span
          className={`${syne.className} text-xs tracking-[0.1em] uppercase text-white bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8`}
        >
          Contact Us
        </span>

        <h2
          className={`${syne.className} text-white text-3xl md:text-5xl font-bold tracking-[-0.01em] mb-14 max-w-2xl`}
        >
          Get in touch, let us know how we can help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-gray-900 border border-gray-800 rounded-2xl px-6 py-5 flex items-center gap-4 text-left"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4361EE] shrink-0">
                <Icon size={18} className="text-white" />
              </span>
              <div>
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contacts"
          className={`${syne.className} mt-12 text-sm font-bold text-black bg-white rounded-full px-8 py-3.5 hover:bg-white/90 transition-colors`}
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}