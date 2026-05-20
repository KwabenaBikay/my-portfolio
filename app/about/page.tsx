"use client";

import Image from "next/image";
import Link from "next/link";

// --- SVG ICON HELPERS FOR THE WATERMARK WALL ---
const icons = [
  <path key="1" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />, // Code
  <path key="2" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />, // Database
  <path key="3" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />, // Cloud
  <path key="4" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />, // Chart
  <path key="5" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 17l6-6-6-6M12 19h8" />, // Terminal
  <path key="6" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /> // CPU
];

// Generates exactly 54 watermarks with slightly randomized rotations and sizes
const watermarkArray = Array.from({ length: 54 }).map((_, i) => ({
  icon: icons[i % icons.length],
  rotation: (i * 47) % 360,
  scale: 0.5 + ((i * 13) % 50) / 100,
}));

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-white pt-24 pb-24">

      {/* --- MASTER ALIGNMENT CONTAINER --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8">

        {/* --- BANNER SECTION --- */}
        {/* Preserves the rounded-2xl boundaries and layout shape from before */}
        <div className="relative w-full h-40 sm:h-64 bg-[#04060A] rounded-2xl sm:rounded-t-2xl sm:rounded-b-none overflow-visible shadow-sm">

          {/* New Interactive Graphic Banner Image */}
          <Image
            src="/images/about5.jpg"
            alt="Technical Banner Graphics"
            fill
            className="object-cover opacity-85 dark:opacity-70 rounded-2xl sm:rounded-t-2xl"
            priority
          />

          {/* Shadow Overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent rounded-2xl sm:rounded-t-2xl"></div>

          {/* THE 54 WATERMARKS WALL (Kept for rich geometric texture overlay) */}
          <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-15 dark:opacity-20 pointer-events-none rounded-2xl sm:rounded-t-2xl">
            <div className="w-full h-full grid grid-cols-9 grid-rows-6 gap-2 p-2">
              {watermarkArray.map((mark, i) => (
                <div key={i} className="flex items-center justify-center">
                  <svg
                    className="text-gray-900 dark:text-white"
                    style={{ transform: `rotate(${mark.rotation}deg) scale(${mark.scale})`, width: '20px', height: '20px' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {mark.icon}
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Small Name Container - Cleanly pinned to bottom left corner */}
          <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 z-10 pointer-events-none max-w-[60%] sm:max-w-[50%]">
            <span className="text-[9px] font-mono tracking-[0.3em] text-primary font-black uppercase mb-1 block">
              // PROFILE
            </span>
            <h2 className="text-white text-lg sm:text-2xl font-black tracking-tight uppercase leading-tight mix-blend-overlay opacity-95">
              Bismark Kwabena Amanpene
            </h2>
          </div>

          {/* Profile Image - LinkedIn Style on Right */}
          <div className="absolute bottom-0 right-4 sm:right-8 transform translate-y-1/2 z-20">
            <div className="relative">
              <div className="relative w-28 h-28 sm:w-48 sm:h-48">
                <div className="absolute inset-0 rounded-full bg-white dark:bg-background-dark p-1 shadow-lg transition-transform duration-500 hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <Image
                      src="/images/bikay1.jpg"
                      alt="Bismark Amanpene"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TINTED EDITORIAL WRAPPER WITH U-SHAPE CUTOUT --- */}
        <div className="relative mt-12 sm:mt-16 bg-primary/5 dark:bg-primary/10 border border-primary/20 p-8 sm:p-12 rounded-none mb-12 shadow-sm">

          {/* --- THE U-SHAPE CUTOUT MAGIC --- */}
          <div className="absolute -inset-[1px] z-0 overflow-hidden pointer-events-none rounded-none">
            <div className="absolute w-[136px] sm:w-[216px] h-[136px] sm:h-[216px] -top-[115px] sm:-top-[171px] right-[5px] sm:right-[21px] rounded-full bg-background-light dark:bg-background-dark border border-primary/20" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10">

            {/* Header Section */}
            <div className="mb-10">
              <h1 className="text-slate-800 dark:text-white text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
                A bit about me.
              </h1>
            </div>

            {/* EDITORIAL TEXT LAYOUT */}
            <div>
              {/* The Lead (Dek) */}
              <p className="text-xl sm:text-2xl font-light text-gray-900 dark:text-white leading-relaxed border-l-4 border-primary pl-6 mb-10 max-w-3xl">
                <strong className="font-black">I am a passionate IT professional</strong> with a knack for solving complex problems across data, development, and infrastructure. With a diverse background spanning Data Analytics, Software Development, Networking, and IT Support, I thrive on building robust technological solutions.
              </p>

              {/* Two-Column Body Text on Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">

                {/* Column 1 */}
                <div className="space-y-6">
                  <p>
                    My journey in tech is driven by curiosity and a desire to create efficient, scalable, and human-centered systems. As a graduate in Information Technology, I’ve developed a strong technical foundation that cuts across both theoretical and practical areas of computing.
                  </p>
                  <p>
                    I have hands-on experience working with data analytics tools, database systems, cloud technologies, modern programming languages, and enterprise-level security concepts.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  <p>
                    My training also strengthened my abilities in systems administration, IT governance, software engineering principles, project management, and understanding how technology supports real business operations. I’m comfortable working across the full IT spectrum whether it’s analyzing data, designing applications, securing systems, or optimizing networks.
                  </p>
                  <p>
                    I pay attention to detail, learn quickly, and approach every task with professionalism. I enjoy turning complex ideas into practical solutions, and I’m constantly exploring new ways to grow, adapt, and contribute positively to the tech ecosystem.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* --- SKILLS & EXPERTISE SECTION --- */}
        <div className="bg-gray-50 dark:bg-[#121214] p-8 sm:p-10 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
          <h3 className="text-slate-800 dark:text-white text-xl sm:text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            Skills & Expertise
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Data Analytics",
              "Software Development",
              "Networking",
              "IT Support",
              "Cloud Infrastructure",
              "Machine Learning",
              "Web Architecture",
              "Database Management",
              "Problem-Solving",
              "Adaptability",
              "Team Collaboration",
              "Communication",
              "Time Management",
              "Critical Thinking",
              "Creativity",
              "Leadership",
              "Teamwork",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold tracking-wide text-slate-700 dark:text-slate-200 bg-white dark:bg-[#1A1A1C] border border-gray-200 dark:border-gray-800 shadow-sm hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* --- ACTION BUTTONS (CV & Portfolio) --- */}
        <div className="mt-12 flex flex-wrap items-center gap-6">

          {/* Download CV Button */}
          <a
            href="/Bismark_Amanpene_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-sm font-black uppercase tracking-[0.2em] rounded-none hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black transition-colors duration-300 shadow-lg shadow-primary/20"
          >
            <span>Download CV</span>
            <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          {/* View My Work Button */}
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-black text-sm uppercase tracking-[0.2em] rounded-none overflow-hidden transition-all"
          >
            <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">View My Work</span>
            <div className="absolute inset-0 h-full w-full bg-gray-900 dark:bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] z-0" />
          </Link>

        </div>

      </div>
    </main>
  );
}