
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

export class EmailService {
    private static isInitialized = false

    /** Internal init logic - runs once */
    private static init() {
        if (!this.isInitialized) {
            emailjs.init({
                publicKey: "WMPabE3UCFFMpMTnV",
                blockHeadless: true,
                blockList: {
                    // Block the suspended emails
                    list: ['foo@emailjs.com', 'bar@emailjs.com'],
                    // The variable contains the email address
                    watchVariable: 'userEmail',
                },
                limitRate: {
                    // Set the limit rate for the application
                    id: 'app',
                    // Allow 1 request per 10s
                    throttle: 1000 * 10,
                },
            })
            this.isInitialized = true
        }
    }


    /** Sends notification email to the website owner */
    static async sendMail(form: { userName: string, userEmail: string, userMessage: string }): Promise<void> {
        this.init()
        try {
           const result: EmailJSResponseStatus = await emailjs.send("service_ztwo9sl", "template_911jppp", form);

            // await emailjs.sendForm(this.serviceID, this.templateOwnerID, form)
        } catch (error) {
            console.error(" Failed to send email", error)
            throw new Error('Failed to send email')
        }
    }
}
