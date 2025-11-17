"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { skillsColorMap, skillsData } from "@/data/skills"

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-gray-900 to-black text-white"
    >
      {/* Decorative background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/25 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[250px] h-[250px] bg-pink-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="space-y-12 relative container py-24 mx-auto px-4 md:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-[800px] mx-auto text-lg">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillsData.map((skill, index) => {
            const color = skillsColorMap[skill.color]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.25 },
                }}
              >
                <Card className="bg-gray-900/60 border border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 h-full rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-2 ${color.bg} rounded-lg`}
                      >
                        <skill.icon className={`w-5 h-5 ${color.text}`} />
                      </motion.div>
                      <div>
                        <CardTitle className="text-white">{skill.title}</CardTitle>
                        <CardDescription className="text-gray-400">{skill.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + techIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 transition-all"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
