import { Code, Database, Palette, Server } from "lucide-react";

export const skillsData = [
  {
    icon: Code,
    title: "Frontend",
    description: "Building beautiful user interfaces",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "purple",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Server-side development & APIs",
    skills: [ "RESTful APIs",],
    color: "blue",
  },
  {
    icon: Database,
    title: "Database",
    description: "Data storage & management",
    skills: [ "MySQL",],
    color: "green",
  },
  {
    icon: Palette,
    title: "Tools & Others",
    description: "Development tools & platforms",
    skills: ["Git", "VS Code", "Postman",],
    color: "gray",
  },
]
type ColorMap = Record<string, { bg: string; text: string }>;
export const skillsColorMap: ColorMap = {
  purple: {
    bg: "bg-purple-600/20",
    text: "text-purple-400",
  },
  blue: {
    bg: "bg-blue-600/20",
    text: "text-blue-400",
  },
  orange: {
    bg: "bg-orange-600/20",
    text: "text-orange-400",
  },
  green: {
    bg: "bg-green-600/20",
    text: "text-green-400",
  },
  gray: {
    bg: "bg-gray-600/20",
    text: "text-gray-400",
  },

} as const;