import { EmailService } from '@/service/email-service'
import React from 'react'
import { useRef, useState, type FormEvent } from 'react'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm2() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const newErrors: any = {}

        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }

        // if (!formData.subject.trim()) newErrors.subject = "Subject is required"
        if (!formData.message.trim()) newErrors.message = "Message is required"

        return newErrors
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" }) // clear error on change
    }

    console.log("Form Data:", formData);
    console.log("Errors:", errors);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            // Submit logic here
            try {
                EmailService.sendMail({
                    userName: formData.name,
                    userEmail: formData.email,
                    userMessage: formData?.message,
                })

            } catch (error) {
                console.error('Failed to send email:', error)
                // Handle error as needed
                setErrors({
                    name: 'Failed to send email. Please try again later.',
                    email: '',
                    message: '',
                })

            }
            setSubmitted(true)
            // Optionally reset
            setFormData({ name: "", email: "", message: "" })
        }
    }

    return (
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-white">Send me a message</CardTitle>
                    <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">

                            <label htmlFor="name" className="text-sm font-medium text-gray-300 capitalize">
                                Name
                            </label>
                            <input

                                id="name"
                                name='name'
                                type="text"
                                value={formData['name']}
                                onChange={handleChange}
                                placeholder="Enter Your name"
                                className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-md text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                            />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}


                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                id="email"
                                name='email'
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="What's this about?"
                                className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-md text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-md text-sm resize-none text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                            />
                            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                        </div>


                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                        // disabled={submitted}
                        >
                            Send Message
                        </Button>
                        {submitted && (
                            <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
                        )}
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    )
}
