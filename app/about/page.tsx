"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- SVG ICON HELPERS ---
const icons = [
  <path key="1" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  <path key="2" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />,
  <path key="3" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
  <path key="4" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  <path key="5" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 17l6-6-6-6M12 19h8" />,
  <path key="6" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
];

const watermarkArray = Array.from({ length: 54 }).map((_, i) => ({
  icon: icons[i % icons.length],
  rotation: (i * 47) % 360,
  scale: 0.5 + ((i * 13) % 50) / 100,
}));

// --- SCATTER PLOT DATA CORRELATION MODEL ---
const SCATTER_CLUSTERS = [
  { label: "Data Analytics", strategy: 88, execution: 92, focus: "Enterprise Insights", metrics: "Dashboards, Cleaning, EDA" },
  { label: "Software Dev", strategy: 78, execution: 82, focus: "Full-Stack Web Systems", metrics: "Next.js, Next API Routing" },
  { label: "Cloud & Security", strategy: 68, execution: 74, focus: "Infrastructure SOHO", metrics: "AWS Identity, IP Subnets" },
  { label: "IT Support", strategy: 42, execution: 86, focus: "Systems Reliability", metrics: "Workstation Fixes, OS Tuning" }
];

// --- PIPELINE FLOW SCHEMATIC ---
const PIPELINE_FLOW = [
  { step: "01", name: "Ingestion", focus: "Data Gathering", val: "92%" },
  { step: "02", name: "Sanitization", focus: "Data Cleaning", val: "96%" },
  { step: "03", name: "Exploration", focus: "EDA & Trends", val: "95%" },
  { step: "04", name: "Modeling", focus: "Patterns & ML", val: "84%" },
  { step: "05", name: "Synthesis", focus: "Storytelling", val: "90%" }
];

// --- STEPHEN FEW BULLET GRAPH QUANTITATIVE DATA ---
const BULLET_METRICS = [
  { metric: "Problem-Solving", actual: 98, qualitative: [60, 85, 100], display: "9.8 / 10" },
  { metric: "Critical Thinking", actual: 95, qualitative: [50, 80, 100], display: "95%" },
  { metric: "Adaptability Index", actual: 92, qualitative: [70, 85, 100], display: "A+" },
  { metric: "Team Synergy", actual: 100, qualitative: [60, 80, 100], display: "100%" }
];

export default function AboutPage() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-white pt-24 pb-24 relative overflow-hidden">

      {/* --- BLUEPRINT GRID BACKGROUND --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015] z-0"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* SECTION A: EDITORIAL FOCUS AREA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 mb-16">

        {/* --- BANNER SECTION --- */}
        <div className="relative w-full h-40 sm:h-64 bg-[#04060A] rounded-2xl sm:rounded-t-2xl sm:rounded-b-none overflow-visible shadow-sm">
          <Image
            src="/images/about5.jpg"
            alt="Technical Banner Graphics"
            fill
            className="object-cover opacity-85 dark:opacity-70 rounded-2xl sm:rounded-t-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent rounded-2xl sm:rounded-t-2xl"></div>

          {/* WATERMARK OVERLAY */}
          <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-15 dark:opacity-20 pointer-events-none rounded-2xl sm:rounded-t-2xl">
            <div className="w-full h-full grid grid-cols-9 grid-rows-6 gap-2 p-2">
              {watermarkArray.map((mark, i) => (
                <div key={i} className="flex items-center justify-center">
                  <svg className="text-gray-900 dark:text-white" style={{ transform: `rotate(${mark.rotation}deg) scale(${mark.scale})`, width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mark.icon}
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 z-10 pointer-events-none max-w-[60%] sm:max-w-[50%]">
            <span className="text-xs font-mono tracking-[0.3em] text-primary font-black uppercase mb-1 block">PROFILE</span>
            <h2 className="text-white text-lg sm:text-2xl font-black tracking-tight uppercase leading-tight mix-blend-overlay opacity-95">
              Bismark Kwabena Amanpene
            </h2>
          </div>

          <div className="absolute bottom-0 right-4 sm:right-8 transform translate-y-1/2 z-20">
            <div className="relative">
              <div className="relative w-28 h-28 sm:w-48 sm:h-48">
                <div className="absolute inset-0 rounded-full bg-white dark:bg-background-dark p-1 shadow-lg transition-transform duration-500 hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <Image src="/images/bikay1.jpg" alt="Bismark Amanpene" width={200} height={200} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TINTED EDITORIAL WRAPPER --- */}
        <div className="relative mt-12 sm:mt-16 bg-primary/5 dark:bg-primary/10 border border-primary/20 p-8 sm:p-12 rounded-none shadow-sm">
          <div className="absolute -inset-[1px] z-0 overflow-hidden pointer-events-none rounded-none">
            <div className="absolute w-[136px] sm:w-[216px] h-[136px] sm:h-[216px] -top-[115px] sm:-top-[171px] right-[5px] sm:right-[21px] rounded-full bg-background-light dark:bg-background-dark border border-primary/20" />
          </div>

          <div className="relative z-10">
            <div className="mb-10">
              <h1 className="text-slate-800 dark:text-white text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">A bit about me.</h1>
            </div>

            <div>
              <p className="text-xl sm:text-2xl font-light text-gray-900 dark:text-white leading-relaxed border-l-4 border-primary pl-6 mb-10 max-w-3xl">
                <strong className="font-black">I am a passionate IT professional</strong> with a knack for solving complex problems across data, development, and infrastructure. With a diverse background spanning Data Analytics, Software Development, Networking, and IT Support, I thrive on building robust technological solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                <div className="space-y-6">
                  <p>My journey in tech is driven by curiosity and a desire to create efficient, scalable, and human-centered systems. As a graduate in Information Technology, I’ve developed a strong technical foundation that cuts across both theoretical and practical areas of computing.</p>
                  <p>I have hands-on experience working with data analytics tools, database systems, cloud technologies, modern programming languages, and enterprise-level security concepts.</p>
                </div>
                <div className="space-y-6">
                  <p>My training also strengthened my abilities in systems administration, IT governance, software engineering principles, project management, and understanding how technology supports real business operations. I’m comfortable working across the full IT spectrum whether it’s analyzing data, designing applications, securing systems, or optimizing networks.</p>
                  <p>I pay attention to detail, learn quickly, and approach every task with professionalism. I enjoy turning complex ideas into practical solutions, and I’m constantly exploring new ways to grow, adapt, and contribute positively to the tech ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION B: CORE ANALYTICS COMMAND CENTER (WIDE LAYOUT) */}
      <section className="w-full max-w-[1350px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 my-20">

        <div className="bg-[#042138] p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl flex flex-col gap-12 relative text-white rounded-xl">

          {/* Section Diagnostic Header */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-primary font-black uppercase">SYSTEM TELEMETRY</span>
              <h3 className="text-white text-xl sm:text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                Core Competency Matrices
              </h3>
            </div>
            <div className="text-left sm:text-right font-mono text-xs sm:text-sm tracking-widest text-blue-300/60 uppercase">
              Viewport: Expanded Data-Dense Mode
            </div>
          </header>

          {/* Main Visual Display Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">

            {/* INFOGRAPHIC 01: COORDINATE SCATTER ANALYSIS MATRIX */}
            <div className="flex flex-col gap-6 lg:col-span-7 pr-2 border-r-0 lg:border-r border-white/5">
              <div>
                <span className="text-xs sm:text-sm font-mono tracking-widest text-primary uppercase block mb-1">Matrix 01</span>
                <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-white">Domain Core Mapping Model</h4>
                <p className="text-sm text-blue-200/60 mt-1">Strategic Architecture Mastery (Y-Axis) correlated against Practical Application Execution (X-Axis).</p>
              </div>

              {/* Box Axis Container with structural interior quadrant colors */}
              <div className="h-[340px] border-b border-l border-white/30 relative w-full bg-black/30 mt-4 overflow-visible rounded-tr-lg">

                {/* --- QUADRANT COLOR BACKGROUND BOXES --- */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-900/10 border-r border-b border-dashed border-white/5 pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/[0.03] border-b border-dashed border-white/5 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-black/20 border-r border-dashed border-white/5 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-950/20 pointer-events-none" />

                {/* Axis Labels */}
                <span className="absolute left-3 top-3 font-mono text-xs font-bold text-blue-200/50 uppercase tracking-widest z-10">High Strategy ↑</span>
                <span className="absolute right-3 bottom-3 font-mono text-xs font-bold text-blue-200/50 uppercase tracking-widest z-10">High Execution →</span>

                {/* Plotting Scatter Clusters */}
                {SCATTER_CLUSTERS.map((node, idx) => {
                  return (
                    <div
                      key={idx}
                      className="absolute transform -translate-x-1/2 translate-y-1/2 transition-all duration-300 z-20"
                      style={{ left: `${node.execution}%`, bottom: `${node.strategy}%` }}
                      onMouseEnter={() => setActiveNode(idx)}
                      onMouseLeave={() => setActiveNode(null)}
                    >
                      {/* Target Core Dot */}
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center cursor-crosshair border-2 border-[#042138] shadow-lg transition-transform duration-300 ${activeNode === idx ? "scale-125 bg-primary" : "bg-white"}`}>
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      </div>

                      {/* Text label - Constrained cleanly inside chart box */}
                      <span className="absolute left-5 -top-1.5 font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-[#042138]/95 border border-white/10 px-2 py-0.5 shadow-md">
                        {node.label}
                      </span>

                      {/* Tooltip Configuration */}
                      <div className={`absolute top-6 left-0 min-w-[220px] bg-white text-black p-4 border border-gray-200 shadow-2xl transition-all duration-300 flex flex-col gap-1.5 z-30 ${activeNode === idx ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none"}`}>
                        <span className="text-xs font-mono font-bold text-primary tracking-wider block uppercase">// {node.focus}</span>
                        <div className="flex justify-between font-mono text-xs border-b border-black/10 pb-1 mb-1 font-bold text-gray-500">
                          <span>Exec: {node.execution}%</span>
                          <span>Strat: {node.strategy}%</span>
                        </div>
                        <span className="text-xs sm:text-sm leading-tight font-semibold text-gray-800">{node.metrics}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* INFOGRAPHIC 02: LIFE-CYCLE SYSTEM PIPELINE DIAGRAM */}
            <div className="flex flex-col gap-6 lg:col-span-5 lg:pl-2">
              <div>
                <span className="text-xs sm:text-sm font-mono tracking-widest text-primary uppercase block mb-1">Matrix 02</span>
                <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-white">Data Lifecycle Pipeline Schematic</h4>
                <p className="text-sm text-blue-200/60 mt-1">Operational throughput proficiency structured across execution stages.</p>
              </div>

              {/* Connected Process Tree Workspace */}
              <div className="flex flex-col justify-between h-full py-2 gap-5 mt-2 relative">
                {PIPELINE_FLOW.map((node, index) => (
                  <div key={index} className="flex items-center gap-5 group relative w-full z-10">

                    {/* Numerical Identity Block */}
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-sm font-black shrink-0 bg-black/20 text-blue-100 group-hover:border-primary group-hover:text-primary transition-colors">
                      {node.step}
                    </div>

                    {/* Meta Payload Container */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-baseline">
                        <span className="text-base font-black uppercase tracking-tight text-white">{node.name}</span>
                        <span className="font-mono text-sm font-black text-primary">{node.val}</span>
                      </div>

                      {/* Tracking bar framework */}
                      <div className="relative w-full h-2.5 bg-black/40 mt-1.5 overflow-hidden border-t border-white/5">
                        <div className="absolute top-0 bottom-0 left-0 bg-primary/40 group-hover:bg-primary transition-all duration-700" style={{ width: node.val }} />
                      </div>
                      <span className="text-xs sm:text-sm text-blue-200/60 uppercase font-bold tracking-wider mt-1">{node.focus}</span>
                    </div>

                    {/* Connecting line architecture */}
                    {index < PIPELINE_FLOW.length - 1 && (
                      <div className="absolute left-[23px] top-12 h-6 w-px bg-white/10 -z-10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* INFOGRAPHIC 03: STEPHEN FEW HIGH-SPECIFICATION BULLET GRAPHS */}
          <div className="border-t border-white/10 pt-10 mt-4">
            <div className="mb-6">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-primary uppercase block mb-1"> Performance Matrices</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-10">
              {BULLET_METRICS.map((bullet, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 w-full">

                  {/* Title Frame */}
                  <div className="min-w-[160px] shrink-0">
                    <span className="block text-sm sm:text-base font-black uppercase tracking-wider text-white">{bullet.metric}</span>
                    <span className="block font-mono text-xs sm:text-sm text-primary font-bold mt-0.5">{bullet.display}</span>
                  </div>

                  {/* Horizontal Multi-Band Tracking Bar - AMPLIFIED SIZE AND HEIGHT */}
                  <div className="relative w-full h-10 bg-black/30 border border-white/5 flex items-center rounded-none overflow-visible">

                    {/* Quantitative Threshold Ranges */}
                    <div className="absolute top-0 bottom-0 left-0 bg-white/[0.02]" style={{ width: `${bullet.qualitative[0]}%` }} />
                    <div className="absolute top-0 bottom-0 bg-white/[0.05]" style={{ left: `${bullet.qualitative[0]}%`, width: `${bullet.qualitative[1] - bullet.qualitative[0]}%` }} />
                    <div className="absolute top-0 bottom-0 bg-white/[0.08]" style={{ left: `${bullet.qualitative[1]}%`, width: `${bullet.qualitative[2] - bullet.qualitative[1]}%` }} />

                    {/* Thickened Central Performance Bar */}
                    <div
                      className="h-4 bg-white relative z-10 transition-all duration-1000 ease-out origin-left"
                      style={{ width: `${bullet.actual}%` }}
                    />

                    {/* Target marker Line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-primary z-20"
                      style={{ left: `${bullet.qualitative[1]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION C: ACTION SYSTEM CONTROLS */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="mt-12 flex flex-wrap items-center gap-6">
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