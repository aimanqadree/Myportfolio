"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { ProjectColorMap, projectsData } from "@/data/projects"

export default function Projects() {
    return (
        <AnimatedSection
            id="projects"
            className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-gray-900 to-black text-white"
        >
            {/* Decorative glowing blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700/25 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/25 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[25%] w-[250px] h-[250px] bg-pink-600/15 rounded-full blur-[100px]" />
            </div>

            <div className="container py-24 px-4 md:px-12 lg:px-16 mx-auto space-y-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-[800px] mx-auto text-lg">
                        A selection of projects that showcase my skills and experience
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <Card className="overflow-hidden bg-gray-900/60 border border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300 group h-full shadow-lg hover:shadow-xl hover:shadow-purple-900/20">
                                {/* Image / Title Overlay */}
                                <div className="aspect-video relative overflow-hidden">
                                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                                            {project.title}
                                        </div>
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-white">{project.title}</CardTitle>
                                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIndex) => {
                                                const color = ProjectColorMap[tag.color]
                                                return (
                                                    <motion.div
                                                        key={tagIndex}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.3 + tagIndex * 0.1, duration: 0.3 }}
                                                        viewport={{ once: true }}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <Badge
                                                            variant="outline"
                                                            className={`${color.border} ${color.bg} ${color.text}`}
                                                        >
                                                            {tag.name}
                                                        </Badge>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-2">
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-white"
                                                    asChild
                                                >
                                                    <a href={project.repoUrl} target="_blank">
                                                        <Github className="w-4 h-4 mr-2" />
                                                        Code
                                                    </a>
                                                </Button>
                                            </motion.div>

                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button
                                                    size="sm"
                                                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                                                    asChild
                                                >
                                                    <a href={project.liveUrl} target="_blank">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Live Demo
                                                    </a>
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    )
}
