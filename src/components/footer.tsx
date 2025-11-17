"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black border-t border-gray-800 py-16"
    >
      {/* Decorative Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-purple-800/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-700/25 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center space-y-10">
        {/* Header Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Let’s Connect & Build Something Great
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {[
            { icon: Github, href: "https://github.com/aimanqadree", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/aiman-qadree", label: "LinkedIn" },
            { icon: Mail, href: "mailto:aimanqadree@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-700/60 transition-all"
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center flex-wrap gap-4 mt-6"
        >
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800/60 transition-all"
              asChild
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </Button>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-semibold">Aiman Qadree</span>. All rights reserved.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}
