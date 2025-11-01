"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-t border-gray-800 py-12 bg-gray-900/30"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray"
          >
            © 2025 Aiman. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {["About", "Projects", "Contact"].map((item, index) => (
              <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="text-gray hover:text-white hover:bg-gray-800" asChild>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
