import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white border-1 border-black/10 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[60px] lg:rounded-tr-[60px] ">
      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* COLUMN 1: BRAND & ABOUT (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black font-extrabold text-xl shadow-md">
                  <img
                    src="/Logo/OrbisLogo.webp"
                    alt="Orbis Logo"
                    className="h-15 w-auto object-contain mix-blend-multiply lg:h-20"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-wider text-white">
                    Orbis Nexa
                  </h3>
                  <p className="text-xs font-semibold tracking-wide text-gray-400">
                    Building Futures Globally
                  </p>
                </div>
              </div>

              {/* Tagline / Description */}
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
                Honest, profile-led guidance for Pakistani students planning
                their university, application and visa journey abroad.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  icon: FaFacebook,
                  href: "#",
                  hoverClass:
                    "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white",
                },
                {
                  icon: FaInstagram,
                  href: "#",
                  hoverClass:
                    "hover:border-[#E4405F] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white",
                },
                {
                  icon: FaLinkedin,
                  href: "#",
                  hoverClass:
                    "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
                },
                {
                  icon: Phone,
                  href: "tel:+923070474920",
                  hoverClass:
                    "hover:border-[#25D366] hover:bg-[#25D366] hover:text-white",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-sm transition-all duration-300 ${item.hoverClass}`}
                  >
                    <Icon size={17} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <div className="mt-2 h-[2px] w-8 bg-[#0265aa]" />

            <ul className="mt-6 space-y-3.5 text-sm text-gray-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Destinations", href: "/destinations" },
                { label: "Blogs", href: "/blogs" },
                { label: "IELTS Preparation", href: "/ielts-preparation" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#7ed9fd]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: TOP DESTINATIONS (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white tracking-wide">
              Top Destinations
            </h4>
            <div className="mt-2 h-[2px] w-8 bg-[#0265aa]" />

            <ul className="mt-6 space-y-3.5 text-sm text-gray-400">
              {[
                "United Kingdom",
                "Australia",
                "Canada",
                "United States",
                "Italy",
                "Germany",
              ].map((country, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                  <Link
                    href={`/destinations/${country.toLowerCase().replace(/\s+/g, "-")}`}
                    className="transition-colors hover:text-[#7ed9fd]"
                  >
                    {country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Contact Us
            </h4>
            <div className="mt-2 h-[2px] w-8 bg-[#0265aa]" />

            <div className="mt-6 space-y-5 text-sm">
              {/* Lahore Office */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#0265aa]/30 bg-[#0265aa]/10 text-[#0265aa]">
                  <MapPin size={17} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">
                    Lahore Head Office
                  </h5>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-400">
                    Lahore, Pakistan
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    +92 301 2345678
                  </p>
                </div>
              </div>

              {/* Burewala Office */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#0265aa]/30 bg-[#0265aa]/10 text-[#0265aa]">
                  <MapPin size={17} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">
                    Iqbal Town Branch
                  </h5>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-400">
                    Lahore, Pakistan
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-300">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#0265aa]/30 bg-[#0265aa]/10 text-[#0265aa]">
                  <Mail size={17} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Email</h5>
                  <a
                    href="mailto:info@studyapexglobal.com"
                    className="mt-0.5 block text-xs text-gray-400 hover:text-[#7ed9fd]"
                  >
                    info@orbisnexa.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#0265aa]/30 bg-[#0265aa]/10 text-[#0265aa]">
                  <Clock size={17} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Office Hours</h5>
                  <p className="mt-0.5 text-xs text-gray-400">
                    Monday - Saturday, 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-white/10 bg-black py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-gray-400 sm:flex-row sm:px-10 lg:px-12">
          <p>© 2026 Orbis Nexa. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:text-white transition">
              Student Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
