"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import ContactForm from "./contact-form"

type ColorMap = Record<string, { bg: string; text: string }>

const colorMap: ColorMap = {
  purple: { bg: "bg-purple-600/20", text: "text-purple-400" },
  green: { bg: "bg-green-600/20", text: "text-green-400" },
  blue: { bg: "bg-blue-600/20", text: "text-blue-400" },
}

export default function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-gray-900 to-black text-white"
    >
      {/* Decorative glowing blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/25 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[25%] w-[250px] h-[250px] bg-pink-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="container py-24 mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-[800px] mx-auto text-lg">
            I&apos;m always interested in new opportunities and exciting projects
          </p>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900/60 h-full border border-gray-800 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all"
            >
              <h3 className="font-semibold text-xl mb-4 text-white">Get in touch</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you have a project in mind or just want to chat about technology, I&apos;d love to hear from you.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { icon: Mail, text: "aimanqadree@gmail.com", color: "purple", link: "mailto:aimanqadree@gmail.com" },
                  { icon: Phone, text: "+91 7006110177", color: "green", link: "tel:+917006110177" },
                  { icon: MapPin, text: "Jammu & Kashmir, India", color: "blue" },
                ].map((contact, index) => {
                  const color = colorMap[contact.color]
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`p-2 ${color.bg} rounded-lg`}>
                        <contact.icon className={`w-4 h-4 ${color.text}`} />
                      </div>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="text-gray-300 hover:underline hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-gray-300">{contact.text}</span>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              <div className="border-t border-gray-800 pt-6">
                <h4 className="font-medium mb-3 text-white">Follow me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/aimanqadree" },
                    { icon: Linkedin, href: "http://linkedin.com/in/aiman-qadree" },
                  ].map((social, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
                        asChild
                      >
                        <a href={social.href} target="_blank">
                          <social.icon className="w-4 h-4" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
