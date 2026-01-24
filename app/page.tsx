import Image from "next/image";
import Link from "next/link";
import Skills from '../components/Skills' 

// --- SOCIAL LINKS DATA ---
const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/bismark-amanpene", 
    label: "LinkedIn",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  {
    href: "https://github.com/KwabenaBikay", 
    label: "GitHub",
    path: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
    clipRule: "evenodd",
    fillRule: "evenodd"
  },
  {
    href: "https://x.com/_kwabenaOman", 
    label: "X (Twitter)",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  },
  {
    href: "https://instagram.com/_Kwabenaoman", 
    label: "Instagram",
    // Added 'fillRule' and 'clipRule' to fix the broken look
    fillRule: "evenodd",
    clipRule: "evenodd",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    href: "https://wa.me/+233554722203", 
    label: "WhatsApp",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
  }
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50 dark:bg-background-dark text-gray-800 dark:text-gray-200 overflow-hidden">
      
      {/* --- BACKGROUND PATTERN: The "Plus" Grid --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
           style={{
             backgroundImage: 'radial-gradient(#135bec 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }}>
      </div>
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between pt-48 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-16">
        
        {/* === LEFT: IMAGE & DECORATION (The Circle Design) === */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative order-2 lg:order-1">
          
          {/* Container for the composition */}
          <div className="relative w-[350px] h-[350px] sm:w-[520px] sm:h-[520px]">
            
            {/* 1. DECORATION: The "Plus" symbols in the corner */}
            <div className="absolute -top-10 -left-10 w-24 h-24 flex flex-wrap gap-4 text-primary opacity-50 z-0">
               <span className="text-3xl font-bold">+</span>
               <span className="text-3xl font-bold">+</span>
               <span className="text-3xl font-bold">+</span>
               <span className="text-3xl font-bold">+</span>
            </div>

            {/* 2. MAIN CIRCLE BACKGROUND (The Light Blue/Gray Circle) */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-full z-0"></div>

            {/* 3. THE IMAGE ITSELF (Circular Mask) */}
            <div className="absolute inset-2 sm:inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl z-10 bg-white">
               <Image
                src="/images/bikay2.jpg"
                alt="Bismark Amanpene"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* 4. DECORATION: Hollow Ring (Top Right) */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-[12px] border-primary/20 rounded-full z-0 animate-pulse-slow"></div>

            {/* 5. DECORATION: Solid Orange/Primary Circle (Bottom Left) */}
            <div className="absolute bottom-10 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl z-20 animate-bounce-slow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            {/* 6. Changed 'top-1/2' to 'bottom-20' to push it down */}
          <div className="absolute bottom-20 -right-8 sm:-right-12 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 z-30 animate-float border border-gray-100 dark:border-gray-700">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Status</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">Available </span>
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT: TEXT CONTENT === */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2 text-center lg:text-left z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-block">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                Welcome
              </span>
            </div>
            
            <h1 className="text-gray-900 dark:text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
              IT Personnel &{" "}
              <span className="text-primary">Innovator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A passionate and dedicated IT professional with a diverse skill set in{" "}
              <span className="text-primary font-semibold">Data Analytics</span>,{" "}
              <span className="text-primary font-semibold">Software Development</span>,{" "}
              <span className="text-primary font-semibold">Networking</span>, and{" "}
              <span className="text-primary font-semibold">IT Support</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="/projects"
              className="flex min-w-[160px] h-12 items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all"
            >
              View My Work
            </Link>
            <a
              href="https://drive.google.com/file/d/1vGIJNPjPctR-tjzc7fQq71dVHwSze-qd/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[160px] h-12 items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-all"
            >
              Get My Resume
            </a>
          </div>

          {/* Social Links Toolbar */}
          <div className="flex justify-center lg:justify-start pt-4">
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg transition-all hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path 
                      d={link.path} 
                      fillRule={link.fillRule as any} 
                      clipRule={link.clipRule as any} 
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

      </section>
      
      {/* Skills Section */}
      <Skills />
    </div>
  );
}