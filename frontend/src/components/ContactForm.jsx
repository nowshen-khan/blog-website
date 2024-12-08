import { useState } from "react";
import axios from "axios";
import { config } from "../config";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState("");

	const sendEmail = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${config.backendUrl}/send-email`,
				formData
			);
			alert("Message sent successfully!");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			alert("Failed to send message. Please try again.");
			console.error(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		sendEmail(e);
		if (!formData.name || !formData.email || !formData.message) {
			setStatus("Please fill out all fields.");
			return;
		}

		try {
			const response = await axios.post(
				`${config.backendUrl}/api/messages`,
				formData
			);
			if (response.status === 200) {
				setStatus("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			}
		} catch (error) {
			console.error("Error sending message:", error);
			setStatus("Error sending message. Please try again later.");
		}

		//console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<>
			<div className="container py-5">
				<h2 className="text-center mb-4">Contact Us</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="message" className="form-label">
							Message
						</label>
						<textarea
							className="form-control"
							id="message"
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
				{status && <p>{status}</p>}
			</div>
		</>
	);
};

export default ContactForm;
