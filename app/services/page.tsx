"use client";

import { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  // Updated categories to include your new skills
  category: "Data Analytics" | "Machine Learning" | "Cloud Computing" | "Web Development" | "Networking" | "Education & Training";
  servicesList: string[];
}

const services: ServiceItem[] = [
  // 1. DATA ANALYTICS (Your Major - Priority #1)
  {
    id: "data-analytics",
    title: "Business Data Analytics & Reporting",
    description:
      "Transforming raw data into actionable business insights. I help organizations make data-driven decisions through clear visualization and accurate analysis.",
    category: "Data Analytics",
    servicesList: [
      "Interactive Dashboards (Power BI, Tableau, Excel)",
      "Data Cleaning & Preprocessing",
      "Automated Reporting Systems",
      "KPI Tracking & Performance Analysis",
      "Survey Data Analysis & Interpretation",
      "Advanced Excel & Google Sheets Automation"
    ]
  },
  // 2. MACHINE LEARNING
  {
    id: "ml-ai",
    title: "Machine Learning & Predictive Modeling",
    description:
      "Building intelligent models to predict trends, classify information, and uncover hidden patterns in your data.",
    category: "Machine Learning",
    servicesList: [
      "Predictive Analytics (Forecasting trends)",
      "Classification Models (Customer churn, Risk assessment)",
      "Python-based ML Development (Scikit-learn, Pandas)",
      "Exploratory Data Analysis (EDA)",
      "Model Training & Deployment"
    ]
  },
  // 3. CLOUD COMPUTING (New!)
  {
    id: "cloud-computing",
    title: "Cloud Computing Solutions (AWS)",
    description:
      "Leveraging AWS knowledge to help businesses understand, migrate to, and manage cloud resources efficiently.",
    category: "Cloud Computing",
    servicesList: [
      "AWS Cloud Practitioner Essentials",
      "Cloud Concept Fundamentals & Security",
      "Basic Cloud Migration Strategies",
      "AWS Billing & Cost Management",
      "Cloud Storage & Compute Basics (S3, EC2)"
    ]
  },
  // 4. WEB DEVELOPMENT
  {
    id: "web-dev",
    title: "Web Development & Brand Identity",
    description:
      "Creating fast, responsive, and modern websites that serve as the digital face of your business.",
    category: "Web Development",
    servicesList: [
      "Custom Website Development (Next.js, React)",
      "Responsive & Mobile-First Design",
      "SEO Optimization & Performance Tuning",
      "Brand Identity (Logo & UI Design)",
      "Content Management Systems (CMS)"
    ]
  },
  // 5. NETWORKING (New!)
  {
    id: "networking",
    title: "Network Infrastructure & Management",
    description:
      "Setting up and managing reliable small-scale networks to ensure your office or home stays connected.",
    category: "Networking",
    servicesList: [
      "Small Office/Home Office (SOHO) Network Setup",
      "Router Configuration",
      "Wi-Fi Optimization & Troubleshooting",
      "IP Addressing & Subnetting Management",
      "Network Cabling & Hardware Installation"
    ]
  },
  // 6. EDUCATION & TRAINING (Updated!)
  {
    id: "education-training",
    title: "IT Education & Corporate Training",
    description:
      "Comprehensive IT education tailored for all levels-from Upper Primary students to Tertiary graduates and corporate staff.",
    category: "Education & Training",
    servicesList: [
      "ICT Tuition (Upper Primary to High School)",
      "Tertiary Level IT & Data Tutoring",
      "Corporate Software Training (Google Workspace, Office 365)",
      "Digital Literacy Workshops",
    ]
  },
];

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background-dark text-gray-800 dark:text-gray-200 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* --- BACKGROUND PATTERN --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] z-0"
        style={{
          backgroundImage: 'radial-gradient(#d15e11ff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">

        {/* --- HEADER --- */}
        <section className="space-y-6">
          <div className="inline-block">
            <span className="text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full border border-primary/10">
              What I Offer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            Data Analytics & <br />
            <span className="text-primary">IT Services</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed">
            From advanced Data Analytics and Machine Learning to essential Networking and IT Education.
            I provide a comprehensive suite of technical services tailored to your needs.
          </p>
        </section>

        {/* --- SERVICES LIST --- */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Service Catalog
            </h2>
            <span className="text-sm text-gray-500">
              {services.length} Core Areas
            </span>
          </div>

          <div className="space-y-4">
            {services.map((service) => {
              const isOpen = openId === service.id;

              return (
                <div
                  key={service.id}
                  className={`
                    group rounded-2xl border transition-all duration-300 overflow-hidden
                    ${isOpen
                      ? "bg-white dark:bg-gray-900 border-primary/30 shadow-lg ring-1 ring-primary/10"
                      : "bg-white/60 dark:bg-gray-900/60 border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-md"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleOpen(service.id)}
                    className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-6 text-left"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Category Label with Color Coding */}
                      <span className={`
                        text-xs font-bold uppercase tracking-wider w-fit px-2 py-0.5 rounded
                        ${service.category === 'Data Analytics' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                          service.category === 'Machine Learning' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' :
                            service.category === 'Cloud Computing' ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400' :
                              service.category === 'Web Development' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                service.category === 'Networking' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                  'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}
                      `}>
                        {service.category}
                      </span>

                      <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <div className={`
                      flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${isOpen ? "bg-primary text-white rotate-180" : "bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"}
                    `}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div className={`
                    grid transition-[grid-template-rows] duration-300 ease-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}>
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-8 pt-2">

                        <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* --- SERVICE LIST --- */}
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Includes:
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.servicesList.map((item, index) => (
                              <li key={index} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                {/* Checkmark Icon */}
                                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* ------------------------- */}

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}