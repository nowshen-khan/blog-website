import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [status, setStatus] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("");
		try {
			const response = await axios.post(
				"/api/register", // Update the endpoint as needed
				formData
			);

			if (response.status === 201) {
				setStatus("Registration successful! Redirecting to login...");
				setTimeout(() => navigate("/login"), 2000); // Redirect to login
			}
		} catch (error) {
			setStatus("Registration failed. " + error.response?.data?.message);
		}
	};

	return (
		<div className="container py-5">
			<h2 className="text-center mb-4">Register</h2>

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>
			{status && <p>{status}</p>}
		</div>
	);
};

export default Register;
