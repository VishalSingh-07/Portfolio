import React, { useRef } from "react"
import "./contact.css"
import EmailIcon from "../../assets/Contact/email2.png"
import WhatsappIcon from "../../assets/Contact/Whatsapp.svg"
import emailjs from "emailjs-com"
import HeaderSocials from "../home/HeaderSocials"
function Contact() {
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm(
			`${process.env.React_App_SERVICE_ID}`,
			`${process.env.React_App_TEMPLATE_ID}`,
			form.current,
			`${process.env.React_App_PUBLIC_KEY}`
		)
		e.target.reset()
	}
	return (
		<section
			id="contact"
			className="container-contact section-contact contact-section"
		>
			<h1 className="Contact_title">Take A Coffee & Chat With Me</h1>
			<div className="contact_container">
				<div className="contain contact_options">
					<article className="contact_option option1">
						<img src={EmailIcon} alt="EmailLogo" className="logo" />
						<h3>Email</h3>
						<h5>vishalsinghagr25@gmail.com</h5>
						<a href="mailto:vishalsinghagr25@gmail.com" className="link">
							Send a message
						</a>
					</article>
					<article className="contact_option option2">
						<img src={WhatsappIcon} alt="WhatsappLogo" className="logo" />
						<h3>WhatsApp</h3>
						<h5>+91 7668549463</h5>
						<a
							href="https://api.whatsapp.com/send?phone=7668549463"
							className="link"
						>
							Send a message
						</a>
					</article>
					<div className="Footer-Social">
						<HeaderSocials />
					</div>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows="6"
						placeholder="Your Message"
						required
					/>
					<button type="submit" className="btn submitbutton">
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}
export default Contact
