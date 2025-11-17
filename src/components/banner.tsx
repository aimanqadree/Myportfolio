"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700/30 rounded-full blur-[120px]"
          animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[120px]"
          animate={{ y: [0, -30, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-[20%] w-[250px] h-[250px] bg-pink-600/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container py-24 md:py-32 px-4 md:px-12 lg:px-16 mx-auto">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full text-sm text-gray-300 backdrop-blur-sm"
          >
            👋 Welcome to my portfolio
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              >
                Hi, I'm Aiman
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-gray-300 font-light"
            >
              Front End Developer || React Developer || Next.js Developer
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-gray-400 max-w-[600px] leading-relaxed"
          >
            I create beautiful, functional web applications with modern technologies. Passionate about clean code, user
            experience, and bringing ideas to life through innovative digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 bg-gray-900/50 hover:bg-gray-800 hover:text-black text-white backdrop-blur-sm"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/aimanqadree" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/aiman-qadree/" },
              { icon: Mail, href: "mailto:aimanqadree@gmail.com" },
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-800 text-gray-400 hover:text-white"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
