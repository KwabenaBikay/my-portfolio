import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-white pt-24">
      <div className="max-w-5xl mx-auto">

        {/* --- BANNER SECTION --- */}
        <div className="relative w-[90%] sm:w-full mx-auto h-40 sm:h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-gray-200 dark:from-primary/30 dark:via-primary/20 dark:to-gray-800 rounded-2xl sm:rounded-t-2xl sm:rounded-b-none overflow-visible">

          {/* Banner Background Pattern */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5 rounded-2xl sm:rounded-t-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>

          {/* Name in Banner - Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold tracking-wide uppercase text-center px-4">
              Bismark Kwabena Amanpene
            </h2>
          </div>

          {/* Profile Image - LinkedIn Style on Right */}
          {/* Mobile: slightly smaller image (w-28 h-28) to match the shorter banner */}
          <div className="absolute bottom-0 right-4 sm:right-8 transform translate-y-1/2">
            <div className="relative">
              {/* Circular Profile Image */}
              <div className="relative w-28 h-28 sm:w-48 sm:h-48">
                {/* White border ring */}
                <div className="absolute inset-0 rounded-full bg-white dark:bg-background-dark p-1 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden">
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

        {/* --- CONTENT SECTION --- */}
        {/* Adjusted top margin slightly for mobile since the banner is shorter */}
        <div className="mt-20 sm:mt-24 px-4 sm:px-8 pb-20">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-slate-800 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
              A bit about me.
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-8 text-sm sm:text-base">
            <p className="text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              I'm a passionate IT professional with a knack for solving complex problems across data, development, and infrastructure.
              With a diverse background spanning Data Analytics, Software Development, Networking, and IT Support, I thrive on building and maintaining robust technological solutions.
            </p>

            <p className="text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              My journey in tech is driven by curiosity and a desire to create efficient, scalable, and human-centered systems.
              As a graduate in Information Technology, I’ve developed a strong technical foundation that cuts across both theoretical and practical areas of computing. I have hands-on experience working with data analytics tools, database systems, cloud technologies, modern programming languages, and enterprise-level security concepts.
            </p>

            <p className="text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              My training also strengthened my abilities in systems administration, IT governance, software engineering principles, project management, and understanding how technology supports real business operations.
              I’m comfortable working across the full IT spectrum whether it’s analyzing data to support decision making, designing websites and applications, securing systems, optimizing networks, or managing digital infrastructures.
            </p>

            <p className="text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              I pay attention to detail, learn quickly, and approach every task with professionalism and a commitment to delivering quality results.
              Beyond the technical side, I value innovation, ethical computing, teamwork, and creating digital experiences that are intuitive and meaningful. I enjoy turning complex ideas into practical solutions, and I’m constantly exploring new ways to grow, adapt, and contribute positively to the tech ecosystem.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-10">
            <h3 className="text-slate-800 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Data Analytics", "Software Development", "Networking", "IT Support", "Cloud Infrastructure"].map((skill) => (
                <span key={skill} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-200/60 dark:bg-slate-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-base font-bold rounded-lg hover:bg-primary/90 transition shadow-lg shadow-primary/20"
            >
              <span>View My Work</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}