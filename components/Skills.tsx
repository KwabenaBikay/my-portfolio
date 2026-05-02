import React from 'react';

const SKILL_CATEGORIES = [
  {
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights for better decision making.",
    skills: ["Python (Pandas/NumPy)", "SQL", "Power BI", "Tableau", "Excel", "Data Visualization"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "Interest in Software Development",
    description: "Building robust web and mobile applications using modern frameworks and other languages.",
    skills: ["React & Next.js", "TypeScript", "Python", "Tailwind CSS", "PHP", "SQL"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Networking",
    description: "Managing and configuring internet systems such as routers.",
    skills: ["Network Security", "System Admin",],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "IT Support",
    description: "Providing technical assistance and troubleshooting for hardware and software.",
    skills: ["Hardware Repair", "OS Troubleshooting", "Remote Support", "User Training", "Software Installing & Updates"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            My Areas of <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Combining technical depth with problem-solving skills to deliver comprehensive IT solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border-t-4 border-primary group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {category.title}
                </h3>

                {/* This was the broken line before */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-md border border-primary/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}