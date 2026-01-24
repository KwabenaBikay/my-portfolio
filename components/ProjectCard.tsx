import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  link: string;
}

export default function ProjectCard({ title, description, image, techs, link }: ProjectCardProps) {
  const isExternalLink = link.startsWith("http") || link.startsWith("mailto:");
  const isInternalLink = link.startsWith("/") || link.startsWith("#");

  const linkContent = (
    <span className="mt-3 inline-block text-primary font-medium hover:underline cursor-pointer">
      View Project
    </span>
  );

  return (
    <div className="bg-white dark:bg-background-dark/60 backdrop-blur-sm shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="h-48 w-full relative overflow-hidden rounded-t-xl group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
        <div className="mt-2 flex gap-2 flex-wrap">
          {techs.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-slate-200/60 dark:bg-slate-700/50 rounded">
              {tech}
            </span>
          ))}
        </div>
        {isExternalLink ? (
          <a
            href={link}
            className="mt-3 inline-block text-primary font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        ) : isInternalLink ? (
          <Link href={link} className="mt-3 inline-block text-primary font-medium hover:underline">
            View Project
          </Link>
        ) : (
          <a
            href={link}
            className="mt-3 inline-block text-primary font-medium hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
