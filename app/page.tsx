"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ROLES = ["Data Analyst", "Web Architect", "IT Specialist"];

// --- SOCIAL LINKS DATA WITH BRAND HOVER COLORS ---
const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/bismark-amanpene",
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
    href: "https://x.com/_kwabenaOman",
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
    href: "https://discord.com/users/yourdiscordid",
    label: "Discord",
    hoverColor: "hover:text-[#5865F2]",
    path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"
  }
];

const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Data Science" },
  { name: "SQL", category: "Database" },
  { name: "Cisco Networking", category: "IT Infrastructure" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "VCS" },
  { name: "Excel", category: "Data Analytics" },
  { name: "Tableau", category: "Data Viz" },
  { name: "PowerBI", category: "Data Viz" },
  { name: "Linux", category: "OS / Admin" },
  { name: "Pandas", category: "Data Science" },
  { name: "Active Directory", category: "SysAdmin" }
];

const getTechIcon = (name: string) => {
  switch (name) {
    case "React":
      return (
        <svg className="w-12 h-12 text-[#61DAFB] fill-current animate-[spin_20s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg className="w-12 h-12 text-black dark:text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 18.5v-13h2.4l5.1 7.1v-7.1h1.5v13h-2.1l-5.4-7.6v7.6h-1.5z"/>
        </svg>
      );
    case "TypeScript":
      return (
        <svg className="w-12 h-12 text-[#3178C6] fill-current" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M2 2h20v20H2z" fill="#3178C6"/>
          <path d="M22 2v20H2V2h20zM12.23 18.52v-2.02h-1.68v-6.98H8.87v6.98H7.19v2.02h5.04zm7.25-4.01c-.1-.95-.62-1.62-1.48-1.62-.75 0-1.16.4-1.27 1.04h-1.99c.18-1.7 1.36-2.77 3.25-2.77 2.16 0 3.4 1.32 3.4 3.63 0 2.33-1.27 3.58-3.42 3.58-1.89 0-3.1-1.08-3.24-2.84h1.99c.11.64.53 1.06 1.28 1.06.9 0 1.46-.71 1.52-2.07l-.02-.01z" fill="#fff"/>
        </svg>
      );
    case "Python":
      return (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M11.89 2c-3.19 0-2.99 1.38-2.99 1.38l.01 1.44h3.01v.42H7.41S5.03 5.09 5.03 8.35c0 3.27 2.1 3.16 2.1 3.16h1.26v-1.79c0-1.99 1.73-3.72 3.72-3.72h3.69s1.38-.07 1.38-1.45c0-1.39-1.23-2.55-3.17-2.55H11.89zm1.3 1.15c.38 0 .69.31.69.69 0 .38-.31.69-.69.69a.69.69 0 1 1 0-1.38z" fill="#3776AB"/>
          <path d="M12.11 22c3.19 0 2.99-1.38 2.99-1.38l-.01-1.44H12.1v-.42h4.51s2.38.15 2.38-3.11c0-3.27-2.1-3.16-2.1-3.16h-1.26v1.79c0 1.99-1.73 3.72-3.72 3.72H9.22s-1.38.07-1.38 1.45c0 1.39 1.23 2.55 3.17 2.55h1.1zm-1.3-1.15c-.38 0-.69-.31-.69-.69 0-.38.31-.69.69-.69a.69.69 0 1 1 0 1.38z" fill="#FFE052"/>
        </svg>
      );
    case "Pandas":
      return (
        <svg className="w-12 h-12 animate-[pulse_3s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="5" height="5" rx="1.5" fill="#150458" />
          <rect x="16" y="3" width="5" height="5" rx="1.5" fill="#150458" />
          <path d="M5 8h14v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8z" fill="#FAFAFA" stroke="#150458" strokeWidth="1.5" />
          <rect x="7" y="10" width="4" height="5" rx="1" fill="#150458" transform="rotate(-15 9 12.5)" />
          <rect x="13" y="10" width="4" height="5" rx="1" fill="#150458" transform="rotate(15 15 12.5)" />
          <circle cx="9" cy="12" r="1" fill="#FFCA28" />
          <circle cx="15" cy="12" r="1" fill="#FFCA28" />
          <polygon points="11,15 13,15 12,16.5" fill="#E1007E" />
        </svg>
      );
    case "SQL":
      return (
        <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
          <path fill="#336791" d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z" />
        </svg>
      );
    case "Cisco Networking":
      return (
        <svg className="w-12 h-12 text-[#00B4E5] fill-current" viewBox="0 0 100 80">
          <rect x="6" y="34" width="6" height="12" rx="3" />
          <rect x="16" y="24" width="6" height="22" rx="3" />
          <rect x="26" y="10" width="6" height="36" rx="3" />
          <rect x="36" y="24" width="6" height="22" rx="3" />
          <rect x="46" y="2" width="6" height="44" rx="3" />
          <rect x="56" y="24" width="6" height="22" rx="3" />
          <rect x="66" y="10" width="6" height="36" rx="3" />
          <rect x="76" y="24" width="6" height="22" rx="3" />
          <rect x="86" y="34" width="6" height="12" rx="3" />
        </svg>
      );
    case "Docker":
      return (
        <svg className="w-12 h-12 text-[#2496ED] fill-current" viewBox="0 0 24 24">
          <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-3.625 0h2.119v-2.006H7.621v2.006zm-2.737 0h2.119v-2.006H4.884v2.006zm0-2.439h2.119V6.633H4.884v2.006zm2.737 0h2.119V6.633H7.621v2.006zm2.737 0h2.119V6.633h-2.119v2.006zm2.737 0h2.119V6.633h-2.119v2.006zM22.314 11.748c-.027-.03-.056-.062-.085-.093-.251-.27-.729-.786-1.38-1.026.04-.33.029-.683-.075-1.023-.195-.64-.598-1.2-1.17-1.621l-.223-.16-.179.22c-.62.77-.85 1.7-.84 2.68-.07.03-.13.06-.2.1h-1.61v2.33h2.36v.04c.03.35.09.7.25 1.02.19.36.45.68.73.96.32.32.68.6 1.07.82.39.22.81.38 1.25.47.45.09.9.11 1.35.07.45-.04.88-.15 1.29-.32.41-.18.78-.42 1.11-.71.3-.26.54-.57.73-.91.19-.34.3-.71.34-1.1.04-.38.01-.77-.08-1.14-.1-.37-.28-.72-.51-1.03zm-9.578 3.994c-1.05-.33-2.2-.5-3.35-.5-1.15 0-2.3.17-3.35.5-.53.17-1.02.42-1.44.75-.42.33-.76.74-.99 1.22-.23.48-.35 1-.36 1.55 0 .1.02.2.06.29.04.09.1.17.18.23.08.06.18.1.28.11.1.01.2 0 .29-.03.53-.17 1.02-.42 1.44-.75.42-.33.76-.74.99-1.22.23-.48.35-1 .36-1.55zM2.384 14.5c.02-.4.1-.8.25-1.18.15-.38.37-.73.65-1.03.28-.3.62-.54.99-.71.37-.17.77-.26 1.18-.26.41 0 .81.09 1.18.26.37.17.71.41.99.71.28.3.5.65.65 1.03.15.38.23.78.25 1.18h-6.14z"/>
        </svg>
      );
    case "Git":
      return (
        <svg className="w-12 h-12 text-[#F05032] fill-current" viewBox="0 0 24 24">
          <path d="M23.384 11.372l-10.75-10.75c-.815-.815-2.146-.815-2.962 0l-2.073 2.072 3.018 3.019c.772-.26 1.637-.085 2.253.53.623.624.793 1.5.513 2.28l3.012 3.012c.78-.28 1.656-.11 2.28.514.814.815.814 2.146 0 2.96-.815.816-2.145.816-2.96 0-.638-.638-.805-1.54-.492-2.327l-2.92-2.92v6.236c.264.128.5.313.684.548.815.815.815 2.146 0 2.96-.815.816-2.145.816-2.96 0-.814-.814-.814-2.145 0-2.96.184-.236.42-.42.684-.547v-6.33c-.264-.126-.5-.31-.684-.546-.192-.24-.316-.52-.36-.816l-3.033-3.033-4.945 4.945c-.815.815-.815 2.146 0 2.962l10.75 10.75c.815.815 2.146.815 2.962 0l10.75-10.75c.815-.815.815-2.146 0-2.962z"/>
        </svg>
      );
    case "Excel":
      return (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 2H22c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H12V2z" fill="#107C41" />
          <path d="M14 6H21V10H14V6ZM14 11H21V15H14V11ZM14 16H21V20H14V16Z" fill="#FFF" fillOpacity="0.2" />
          <path d="M1 4h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H1c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#0E6C38" />
          <path d="M3.5 7.5l2.5 3.5-2.5 3.5h1.8l1.6-2.5 1.6 2.5h1.8L7.8 11l2.5-3.5H8.5L7 9.8 5.5 7.5H3.5z" fill="#FFF" />
        </svg>
      );
    case "Tableau":
      return (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" stroke="#E97627" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3" fill="#E97627"/>
          <circle cx="12" cy="4" r="2.5" fill="#78B9E6"/>
          <circle cx="12" cy="20" r="2.5" fill="#78B9E6"/>
          <circle cx="4" cy="12" r="2.5" fill="#78B9E6"/>
          <circle cx="20" cy="12" r="2.5" fill="#78B9E6"/>
          <circle cx="7" cy="7" r="2" fill="#E15759"/>
          <circle cx="17" cy="17" r="2" fill="#E15759"/>
          <circle cx="17" cy="7" r="2" fill="#E15759"/>
          <circle cx="7" cy="17" r="2" fill="#E15759"/>
        </svg>
      );
    case "PowerBI":
      return (
        <svg className="w-12 h-12 text-[#F2C811] fill-current" viewBox="0 0 24 24">
          <path d="M18.8 0H14a1.2 1.2 0 0 0-1.2 1.2v21.6c0 .7.5 1.2 1.2 1.2h4.8a1.2 1.2 0 0 0 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zm-6 4.8H8a1.2 1.2 0 0 0-1.2 1.2v16.8c0 .7.5 1.2 1.2 1.2h4.8a1.2 1.2 0 0 0 1.2-1.2V6c0-.7-.5-1.2-1.2-1.2zm-6 4.8H1.2A1.2 1.2 0 0 0 0 10.8v12c0 .7.5 1.2 1.2 1.2h4.8A1.2 1.2 0 0 0 7.2 22.8v-12c0-.7-.5-1.2-1.2-1.2z"/>
        </svg>
      );
    case "Linux":
      return (
        <svg className="w-12 h-12 animate-[bounce_3s_infinite]" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.5 2 6 4.5 6 8C6 11 7 13 8 15C6.5 16 5 18 5 20C5 21 6 22 7 22H17C18 22 19 21 19 20C19 18 17.5 16 16 15C17 13 18 11 18 8C18 4.5 15.5 2 12 2Z" fill="#18181B" />
          <path d="M12 9C10.3 9 9 10.5 9 12.5C9 14.5 10 17 12 17C14 17 15 14.5 15 12.5C15 10.5 13.7 9 12 9Z" fill="#FFFFFF" />
          <path d="M6 21C6 21 4 22 5 23C7 23 8 22 9 22" stroke="#FCC624" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 21C18 21 20 22 19 23C17 23 16 22 15 22" stroke="#FCC624" strokeWidth="2" strokeLinecap="round" />
          <path d="M10.5 7.5H13.5L12 9L10.5 7.5Z" fill="#FCC624" />
          <circle cx="10" cy="5.5" r="1.2" fill="#FFFFFF" />
          <circle cx="10" cy="5.5" r="0.5" fill="#000000" />
          <circle cx="14" cy="5.5" r="1.2" fill="#FFFFFF" />
          <circle cx="14" cy="5.5" r="0.5" fill="#000000" />
        </svg>
      );
    case "Active Directory":
      return (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 2v6M12 8h7v5M12 8H5v5M5 13v6M19 13v6M12 8v11" stroke="#3178C6" strokeWidth="2" strokeLinecap="round" />
          <rect x="9" y="1" width="6" height="4" rx="1" fill="#FFCA28" stroke="#3178C6" strokeWidth="1.5" />
          <rect x="2" y="11" width="6" height="4" rx="1" fill="#FFF" stroke="#3178C6" strokeWidth="1.5" />
          <rect x="9" y="15" width="6" height="4" rx="1" fill="#FFF" stroke="#3178C6" strokeWidth="1.5" />
          <rect x="16" y="11" width="6" height="4" rx="1" fill="#FFF" stroke="#3178C6" strokeWidth="1.5" />
          <circle cx="4" cy="13" r="0.8" fill="#107C41" />
          <circle cx="11" cy="17" r="0.8" fill="#107C41" />
          <circle cx="18" cy="13" r="0.8" fill="#107C41" />
          <circle cx="11" cy="3" r="0.8" fill="#E1007E" />
        </svg>
      );
    default:
      return (
        <svg className="w-12 h-12 text-primary fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2z"/>
        </svg>
      );
  }
};

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-x-0");
  const [welcomeText, setWelcomeText] = useState("");
  const fullWelcome = "WELCOME.";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentText = "";
    let timeoutId: any;

    const type = () => {
      const fullText = fullWelcome;
      if (!isDeleting) {
        currentText = fullText.slice(0, index + 1);
        index++;
        setWelcomeText(currentText);

        if (index === fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2000); // Pause at the end of typing
        } else {
          timeoutId = setTimeout(type, 150); // Typing speed
        }
      } else {
        currentText = fullText.slice(0, index - 1);
        index--;
        setWelcomeText(currentText);

        if (index === 0) {
          isDeleting = false;
          timeoutId = setTimeout(type, 500); // Pause before typing again
        } else {
          timeoutId = setTimeout(type, 100); // Deleting speed
        }
      }
    };

    timeoutId = setTimeout(type, 500); // Initial delay
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("opacity-0 -translate-x-2");
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        setFadeState("opacity-100 translate-x-0");
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans overflow-hidden">

      {/* --- HERO SECTION WRAPPER --- */}
      <div className="w-full bg-gradient-to-b from-[#FFF0E6] via-[#FFF9F5] to-background-light dark:from-[#24130C] dark:via-[#170E0A] dark:to-background-dark border-b border-orange-500/10 dark:border-orange-500/5">
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] pt-28 pb-24 px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto w-full gap-12 lg:gap-20">

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
            <div className="flex flex-col gap-4">
              <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black uppercase tracking-tighter leading-[0.85] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent flex items-center min-h-[4rem] sm:min-h-[5.5rem] lg:min-h-[6.5rem] xl:min-h-[7.5rem]">
                {welcomeText}
                <span className="inline-block w-1.5 h-10 sm:h-16 bg-primary ml-2 animate-pulse"></span>
              </h1>
              <div className="h-16 sm:h-20 flex items-center">
                <span className="text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-primary">
                  I AM A{" "}
                </span>
                <span className={`ml-3 text-lg sm:text-2xl font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white border-l-2 border-primary pl-3 transition-all duration-300 ease-out ${fadeState}`}>
                  {ROLES[currentRoleIndex]}
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed border-l-2 border-primary pl-6 py-1">
              A passionate and dedicated professional specializing in building high-performance systems, analyzing complex datasets, and securing enterprise networks.
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

      {/* --- TECH STACK MARQUEE --- */}
      <section className="relative z-20 py-12 bg-transparent overflow-hidden">
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-[#FFF0E6]/80 dark:before:from-[#24130C]/80 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-[#FFF0E6]/80 dark:after:from-[#24130C]/80 after:to-transparent">
          <div className="animate-marquee flex gap-16 py-3 items-center">
            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-3 cursor-default select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_4px_12px_rgba(255,255,255,0.02)]"
                title={tech.name}
              >
                {getTechIcon(tech.name)}
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

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

      {/* --- QUICK METRICS ROW (Step 3) --- */}
      <section className="relative z-20 py-20 bg-primary text-white border-t-4 border-white dark:border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Metric 1 */}
            <div 
              onMouseMove={handleMouseMove}
              className="group spotlight-card relative flex flex-col p-8 bg-white/10 dark:bg-black/20 border border-white/20 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/15 dark:hover:bg-black/30"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-300"></div>
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                03+
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                Years Experience
              </span>
            </div>

            {/* Metric 2 */}
            <div 
              onMouseMove={handleMouseMove}
              className="group spotlight-card relative flex flex-col p-8 bg-white/10 dark:bg-black/20 border border-white/20 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/15 dark:hover:bg-black/30"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-300"></div>
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                15+
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                Projects Completed
              </span>
            </div>

            {/* Metric 3 */}
            <div 
              onMouseMove={handleMouseMove}
              className="group spotlight-card relative flex flex-col p-8 bg-white/10 dark:bg-black/20 border border-white/20 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/15 dark:hover:bg-black/30"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-300"></div>
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                05+
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                Certifications
              </span>
            </div>

            {/* Metric 4 */}
            <div 
              onMouseMove={handleMouseMove}
              className="group spotlight-card relative flex flex-col p-8 bg-white/10 dark:bg-black/20 border border-white/20 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/15 dark:hover:bg-black/30"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-300"></div>
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                99.9%
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                Network Uptime
              </span>
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
          <div 
            onMouseMove={handleMouseMove}
            className="group spotlight-card relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-colors hover:border-primary dark:hover:border-primary"
          >
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
          <div 
            onMouseMove={handleMouseMove}
            className="group spotlight-card relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-colors hover:border-primary dark:hover:border-primary"
          >
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
          <div 
            onMouseMove={handleMouseMove}
            className="group spotlight-card relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-colors hover:border-primary dark:hover:border-primary"
          >
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