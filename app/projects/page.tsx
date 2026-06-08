"use client";

import { useState } from "react";
import Image from "next/image";

// --- TYPES ---
type Category = "Web" | "Data" | "ML & AI";

interface Project {
  id: string;
  category: Category;
  title: string;
  description: string;
  image: string;
  techs: string[];
  link: string;
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Web");
  const categories: Category[] = ["Web", "Data", "ML & AI"];

  // --- DATA ---
  const projects: Project[] = [
    {
      id: "B-wehSchools",
      category: "Web",
      title: "B-wehSchools Montessori",
      description: "A modern, professional, secure brochure website and portal layout for the Montessori institution.",
      image: "/images/bws.png",
      techs: ["TypeScript", "Next.js 14", "Tailwind CSS", "Shell"],
      link: "https://bwehschools.com/",
    },
    {
      id: "west-3-hotel",
      category: "Web",
      title: "West 3 Hotel",
      description: "A hotel Website to showcase the hotel and its rooms with booking management and also an admin/user dashboard.",
      image: "/images/West3.png",
      techs: ["Swiper.js", "Vanilla JS", "Tailwind CSS", "PHP", "MySQL", "PDO"],
      link: "https://west3hotel.great-site.net/?i=1",
    },
    {
      id: "DHL",
      category: "Web",
      title: "DHL-Bweh",
      description: "A modern, professional, secure brochure website and portal layout for the DHL-Bweh institution.",
      image: "/images/dhl-bweh.jpg",
      techs: ["HTML", "CSS", "JavaScript"],
      link: "https://www.dhl-bweha.com/?i=1#home",
    },
    {
      id: "breeze",
      category: "Data",
      title: "Spa Management System",
      description: "A Spa Management system with portals for Admin, Staff and Supervisor. The Main aim of this system is to automatic reporting of daily activities and records.",
      image: "/images/breeze.png",
      techs: ["HTML", "CSS", "JavaScript"],
      link: " "
    },
    {
      id: "Personal Portfolio",
      category: "Web",
      title: "My Personal Portfolio",
      description: "The underlying architecture of this very portfolio, built for maximum performance and brutalist editorial design.",
      image: "/images/port.png",
      techs: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      link: "https://my-portfolio-431714537301.us-central1.run.app/projects",
    },
    {
      id: "AI",
      category: "ML & AI",
      title: "PerfectFarm",
      description: "An intelligent agricultural assistant offering real-time crop disease diagnostics, localized weather advisories, and multi-language support through simple image uploads.",
      image: "/images/perfectfarm.png",
      techs: ["Jupyter", "Python", "Streamlit", "Machine Learning"],
      link: "https://perfectfarm-434286480857.europe-west2.run.app/",
    },
    {
      id: "FYP",
      category: "ML & AI",
      title: "Student Final CGPA Predictor",
      description: "Predictive analytics study using 10 years of data to examine SHS subject performance effects. Built MLR and ANN models (MLR R² = 0.93) to drive data-driven admissions.",
      image: "/images/FYP.png",
      techs: ["Jupyter", "Python", "Streamlit", "Machine Learning"],
      link: "https://fypmodels.streamlit.app/",
    },
    {
      id: "Dashboard",
      category: "Data",
      title: "Automotive Sales Intelligence",
      description: "PowerBI Dashboard for a Car company indicating Regional Total Sales and YoY growth, featuring deep interactive filtering.",
      image: "/images/car.png",
      techs: ["Power BI", "DAX Functions", "Data Viz"],
      link: "https://app.powerbi.com/links/Hq9kk-Kd59?ctid=3d201cb4-7cd6-4e02-aee3-191d7a26d1ea&pbi_source=linkShare",
    },
    {
      id: "Sales Dashboard",
      category: "Data",
      title: "Corporate Sales Dashboard",
      description: "A comprehensive Excel dashboard visualizing sales trends, profit by segment, category breakdowns, and advanced filtering logic.",
      image: "/images/excel.png",
      techs: ["Advanced Excel", "Data Modeling", "Pivot Automations"],
      link: " ",
    },
    {
      id: "Dashboard1",
      category: "Data",
      title: "Electronics Retail Analytics",
      description: "Sales Dashboard tracking KPIs like Avg Quantity, Sales per Transaction, Regional Map distribution, and Customer ID tracking.",
      image: "/images/good.png",
      techs: ["Power BI", "DAX Functions", "KPI Tracking"],
      link: " ",
    },
    {
      id: "Dashboard2",
      category: "Data",
      title: "Sales Trend Analysis",
      description: "Demonstration charts focusing purely on time-series analysis and historical sales trend projections.",
      image: "/images/salest.png",
      techs: ["Power BI", "Time-Series", "DAX"],
      link: " ",
    },
    {
      id: "Dashboard3",
      category: "Data",
      title: "Brand Performance Dashboard",
      description: "Projects the sum of sales across various automotive brands with complex chart visuals and cross-filtering capabilities.",
      image: "/images/bka.png",
      techs: ["Power BI", "DAX", "Interactive Filtering"],
      link: " ",
    },
  ];

  const displayedProjects = projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 pt-32 pb-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden selection:bg-primary selection:text-white">

      {/* Massive Background Typography Accent */}
      <div className="absolute top-20 right-0 -z-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none overflow-hidden flex justify-end w-full select-none">
        <span className="text-[15vw] font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white whitespace-nowrap">
          {activeCategory}
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 relative z-10">

        {/* --- CENTERED TINTED HEADER WITH EXPANDED WATERMARKS --- */}
        <section className="relative flex flex-col items-center text-center py-16 px-6 border border-primary/20 bg-primary/5 dark:bg-primary/10 rounded-none z-10 overflow-hidden">

          {/* Scattered Tech Watermarks Container */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-5 dark:opacity-10 text-gray-900 dark:text-white">
            <svg className="absolute top-8 left-4 lg:left-24 w-20 h-20 rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            <svg className="absolute bottom-6 left-12 lg:left-1/4 w-16 h-16 -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <svg className="absolute top-12 right-6 lg:right-1/4 w-24 h-24 rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            <svg className="absolute bottom-10 right-10 lg:right-24 w-16 h-16 -rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
            <svg className="absolute top-4 right-1/2 translate-x-32 w-14 h-14 rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
            <svg className="absolute top-1/2 -translate-y-1/2 left-2 lg:left-12 w-20 h-20 rotate-[15deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 17l6-6-6-6M12 19h8" /></svg>
            <svg className="absolute top-1/4 right-8 lg:right-16 w-14 h-14 -rotate-[20deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <svg className="absolute bottom-4 left-1/3 w-16 h-16 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          </div>

          <div className="max-w-3xl z-10 relative">
            <h1 className="text-[3rem] sm:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.9] text-gray-900 dark:text-white">
              My <br className="sm:hidden" />
              <span className="text-primary">Projects.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mt-6">
              A curated selection of projects spanning advanced Data Analytics, Machine Learning, and Full-Stack Engineering.
            </p>
          </div>

          {/* Centered Stat Block */}
          <div className="mt-10 flex items-center gap-4 py-3 px-8 bg-white/80 dark:bg-[#1A1A1C]/80 backdrop-blur-md border border-primary/20 shadow-sm z-10 relative shrink-0">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <div className="flex flex-col items-start border-l-2 border-primary/20 pl-4 text-left">
              <span className="block text-2xl font-black text-gray-900 dark:text-white leading-none">
                0{displayedProjects.length}
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-1">
                Projects Shown
              </span>
            </div>
          </div>

        </section>

        {/* --- INTERACTIVE FILTER MENU (Left-Aligned) --- */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 rounded-none border border-transparent
                ${activeCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white dark:bg-[#1A1A1A] text-gray-500 hover:text-gray-900 dark:hover:text-white border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- PREMIUM EDITORIAL PROJECT GRID --- */}
        <section key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="group relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-primary/5 scroll-mt-32 h-full"
            >

              {/* Animated Top Border Reveal */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0A0A0C] shrink-0">
                <Image
                  src={project.image || "/images/placeholder.jpg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Wrapper */}
              <div className="flex flex-col flex-grow p-5 sm:p-6">

                <h2 className={`text-lg sm:text-xl font-black tracking-tight leading-tight text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300 ${project.title === "PerfectFarm" ? "" : "uppercase"}`}>
                  {project.title}
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* --- COMPACT ACTION BUTTON OR INTERNAL USE FALLBACK --- */}
                <div className="flex justify-start mt-auto pt-5 border-t border-gray-100 dark:border-white/10">
                  {project.link && project.link.trim() !== "" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-4 py-2 bg-primary border border-primary text-white hover:bg-gray-100 dark:hover:bg-[#1A1A1C] hover:text-gray-900 dark:hover:text-white hover:border-gray-200 dark:hover:border-gray-800 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-none transition-colors duration-300 shrink-0"
                    >
                      <span>Visit</span>
                      <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-[#0A0A0C] border border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-600 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-none shrink-0 cursor-not-allowed select-none">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Internal Use</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </section>

      </div>
    </main>
  );
}