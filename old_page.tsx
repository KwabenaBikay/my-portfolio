"use client";

import Image from "next/image";
import Link from "next/link";

// --- SOCIAL LINKS DATA WITH BRAND HOVER COLORS ---
const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/yourprofile",
    label: "LinkedIn",
    hoverColor: "hover:text-[#0A66C2]",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  {
    href: "https://github.com/KwabenaBikay",
    label: "GitHub",
    hoverColor: "hover:text-black dark:hover:text-white",
    path: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
    clipRule: "evenodd",
    fillRule: "evenodd"
  },
  {
    href: "https://x.com/yourprofile",
    label: "X (Twitter)",
    hoverColor: "hover:text-black dark:hover:text-white",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  },
  {
    href: "https://instagram.com/yourprofile",
    label: "Instagram",
    hoverColor: "hover:text-[#E1306C]",
    fillRule: "evenodd",
    clipRule: "evenodd",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    href: "https://wa.me/+233554722203",
    label: "WhatsApp",
    hoverColor: "hover:text-[#25D366]",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
  }
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans overflow-hidden">

      {/* --- HERO SECTION (Untouched) --- */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] pt-24 pb-20 px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto w-full gap-12 lg:gap-20">

        {/* === LEFT: FULL RECTANGULAR IMAGE WITH GEOMETRIC ACCENTS === */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10">
          <div className="absolute -top-6 -left-6 w-full h-full border border-gray-200 dark:border-gray-800/50 z-0 hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 z-0 hidden md:block"></div>
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-24 h-48 opacity-30 z-20 pointer-events-none hidden md:block"
            style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '12px 12px' }}>
          </div>
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white dark:bg-black z-10 border border-gray-200 dark:border-gray-800 p-2 rounded-none shadow-xl">
            <div className="relative w-full h-full overflow-hidden rounded-none bg-gray-100 dark:bg-gray-900">
              <Image
                src="/images/profile.jpg"
                alt="Bismark Amanpene"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* === RIGHT: TEXT CONTENT === */}
        <div className="w-full md:w-1/2 flex flex-col gap-10 z-10 relative text-left">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A1A1A] rounded-none w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-none animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Status: Available
              </span>
            </div>
            <h1 className="text-[4rem] sm:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 dark:text-white">
              WELCOME.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed border-l-2 border-primary pl-6 py-1">
              A passionate and dedicated professional with a diverse skill set in{" "}
              <span className="text-gray-900 dark:text-white font-semibold">Data Analytics</span>,{" "}
              <span className="text-gray-900 dark:text-white font-semibold">Software Development</span>,{" "}
              <span className="text-gray-900 dark:text-white font-semibold">Networking</span>, and{" "}
              <span className="text-gray-900 dark:text-white font-semibold">IT Support</span>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="flex items-center justify-center px-8 h-14 bg-primary text-white font-bold text-sm uppercase tracking-[0.1em] rounded-none hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 h-14 bg-transparent border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white font-bold text-sm uppercase tracking-[0.1em] rounded-none hover:border-gray-900 dark:hover:border-white transition-colors duration-300"
            >
              Hire Me
            </Link>
          </div>
          <div className="flex pt-4">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center justify-center w-12 h-12 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 text-gray-400 rounded-none transition-all duration-300 hover:border-current hover:bg-gray-50 dark:hover:bg-black ${link.hoverColor}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={link.path} fillRule={link.fillRule as any} clipRule={link.clipRule as any} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* --- SECTION 01: CORE DISCIPLINES (Sharp Editorial Cards) --- */}
      <section className="relative z-20 py-24 bg-gray-50 dark:bg-[#0A0A0C] border-t border-gray-200 dark:border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">

          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-primary flex-grow max-w-[40px]"></div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white">What I Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Sharp Card 1 */}
            <div className="group bg-white dark:bg-[#121214] p-8 sm:p-10 rounded-none border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6 rounded-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-4">Data Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Transforming raw datasets into predictive models and actionable business insights to drive smart decision-making.
              </p>
            </div>

            {/* Sharp Card 2 */}
            <div className="group bg-white dark:bg-[#121214] p-8 sm:p-10 rounded-none border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6 rounded-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-4">Web Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Designing, building, and deploying highly performant, secure web platforms using modern frameworks like React and Next.js.
              </p>
            </div>

            {/* Sharp Card 3 */}
            <div className="group bg-white dark:bg-[#121214] p-8 sm:p-10 rounded-none border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6 rounded-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-4">IT Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Configuring robust enterprise networks, providing high-level technical support, and managing cloud integrations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 02: FEATURED WORKS (Compact 3-Column Grid) --- */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto w-full relative z-20">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="h-px bg-primary flex-grow w-[40px]"></div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white">Featured Works</h2>
          </div>
          <Link href="/projects" className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors">
            View full archive
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* Sharp 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Project 1 */}
          <div className="group relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-colors hover:border-primary dark:hover:border-primary">
            <div className="relative w-full aspect-video overflow-hidden border-b border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0A0A0C]">
              <Image
                src="/images/FYP.png"
                alt="Student Final CGPA Predictor"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">ML & AI</span>
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-3">Student Final CGPA Predictor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6 flex-grow">Predictive analytics study using 10 years of data to examine SHS subject performance effects. Built MLR and ANN models.</p>
              <Link href="/projects#FYP" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-gray-900 dark:text-white group-hover:text-primary transition-colors mt-auto">
                Explore Project <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-colors hover:border-primary dark:hover:border-primary">
            <div className="relative w-full aspect-video overflow-hidden border-b border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0A0A0C]">
              <Image
                src="/images/West3.png"
                alt="West 3 Hotel"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Web</span>
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-3">West 3 Hotel</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6 flex-grow">A premium hotel web architecture to showcase rooms, complete with seamless booking management and a custom admin dashboard.</p>
              <Link href="/projects#west-3-hotel" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-gray-900 dark:text-white group-hover:text-primary transition-colors mt-auto">
                Explore Project <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-colors hover:border-primary dark:hover:border-primary">
            <div className="relative w-full aspect-video overflow-hidden border-b border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0A0A0C]">
              <Image
                src="/images/excel.png"
                alt="Corporate Sales Dashboard"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Data</span>
              <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-3">Corporate Sales Dashboard</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6 flex-grow">A comprehensive Excel dashboard visualizing sales trends, profit by segment, and advanced filtering logic.</p>
              <Link href="/projects#Sales-Dashboard" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-gray-900 dark:text-white group-hover:text-primary transition-colors mt-auto">
                Explore Project <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 03: THE FINAL PUSH (Sharp Architectural CTA) --- */}
      <section className="relative z-20 pb-24 px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto w-full">
        {/* Clean, sharp bordered box instead of a massive solid block or rounded pill */}
        <div className="relative bg-white dark:bg-[#0A0A0C] border border-gray-200 dark:border-white/10 p-12 sm:p-20 text-center flex flex-col items-center rounded-none shadow-sm overflow-hidden">

          {/* Architectural Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6">
            Ready to build?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium mb-10 max-w-xl">
            Whether you have a specific project in mind or just want to chat about data and development, I am ready to help.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-black text-sm uppercase tracking-[0.2em] rounded-none hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
          >
            <span>Let's Talk</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
