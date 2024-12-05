import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
	const [formData, setFormData] = useState({
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

		try {
			const response = await axios.post(
				"/api/login", // Replace with your login API endpoint
				formData
			);

			if (response.status === 200) {
				//console.log("JWT Token:", response.data.token);
				localStorage.setItem("token", response.data.token); // Store JWT token in localStorage
				setStatus("Login successful! Redirecting...");
				setTimeout(() => navigate("/dashboard/blogs"), 2000); // Redirect to dashboard
			}
		} catch (error) {
			setStatus(
				"Login failed: " + (error.response?.data?.message || "Server error")
			);
			console.error("Error logging in:", error);
		}
	};

	return (
		<div className="container py-5">
			<h2 className="text-center mb-4">Login</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						value={formData.email}
						onChange={handleChange}
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
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
				<Button variant="link" type="submit">
					<Link to="/register">Register</Link>
				</Button>
			</Form>

			{status && <p>{status}</p>}
		</div>
	);
};

export default Login;
