export const projectData = [
    {
        title: "JobPortal",
        description: "A music A full-stack job portal where users can explore job listings, apply for positions, and connect with employers seamlessly.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
        liveUrl: "https://job-portal-mauve-kappa.vercel.app",
        repoUrl: "",
    },
] as const;

export const projectsData = [
    {
        title: "JobPortal",
        description: "A full-stack job portal where users can explore job listings, apply for positions, and connect with employers seamlessly.",
        tags: [
            { name: "React", color: "purple" },
            { name: "Node.js", color: "blue" },
            { name: "MongoDB", color: "green" },
        ],
        liveUrl: "https://job-portal-mauve-kappa.vercel.app",
        repoUrl: "https://github.com/aimanqadree/JobPortal"
    },
] as const;

export const ProjectColorMap = {
    purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-300", 
        border: "border-purple-500/50",

    },
    blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-300",
        border: "border-blue-500/50",
    },
    green: {
        bg: "bg-green-500/10",
        text: "text-green-300",
        border: "border-green-500/50",
    },
} as const;