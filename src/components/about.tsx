"use client"
import { motion } from "framer-motion"
import { MapPin, Calendar, University } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { educationData, experienceData } from "@/data/about"

export default function About() {
    return (
        <AnimatedSection id="about" className=" relative  bg-gradient-to-r from-gray-900/50 to-black">
            <div className="container py-24 mx-auto space-y-12 relative z-10 px-4  md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-gray-400 max-w-[800px] mx-auto text-lg">
                        I'm a passionate developer with hands-on experience in building modern and responsive digital experiences.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                        >
                            I specialize in creating modern, responsive web applications using cutting-edge technologies. My journey
                            in web development started with a curiosity about how things work on the internet, and it has evolved into
                            a passion for crafting exceptional user experiences.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-gray-300 leading-relaxed"
                        >
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                            sharing knowledge with the developer community through blog posts and mentoring.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 text-sm text-gray-400"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-purple-400" />
                                Drngbal Pampore, Jammu & Kashmir
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-400" />
                                Available for work
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm"
                        >
                            <h3 className="font-semibold mb-4 text-white">Experience</h3>
                            <div className="space-y-4">
                                {experienceData.map((job, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                        className={`border-l-2 ${job.color} pl-4`}
                                    >
                                        <h4 className="font-medium text-white">{job.title}</h4>
                                        <p className="text-sm text-gray-400">
                                            {job.company} • {job.period}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm"
                        >
                            <h3 className="font-semibold mb-4 text-white">Education</h3>
                            <div className="space-y-4">
                                {educationData.map((job, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                        className={`border-l-2 ${job.color} pl-4`}
                                    >
                                        <h4 className="font-medium text-white">{job.title}</h4>
                                        <p className="text-sm text-gray-400">
                                            {job.university} • {job.period}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    )
}
