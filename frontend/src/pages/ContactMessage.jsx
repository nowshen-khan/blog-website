import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import MessageCount from "../components/MessageCount";

const ContactMessage = () => {
	const [messages, setMessages] = useState([]);

	// Fetch Team
	const fetchMessages = async () => {
		try {
			const response = await axios.get("/api/messages");
			//console.log("Fetched messages:", response.data);
			setMessages(response.data);
		} catch (error) {
			console.error("Error fetching messages:", error);
			alert(
				`Error: ${
					error.response?.status === 404
						? "API not found"
						: "Something went wrong!"
				}`
			);
		}
	};

	const markAsSeen = async (id) => {
		try {
			const response = await axios.put(`/api/messages/${id}`, { seen: true });
			console.log("Message marked as seen:", response.data);
			fetchMessages(); // Reload messages after updating
		} catch (error) {
			console.error("Error updating message:", error);
		}
	};

	// Delete Messages
	const handleDeleteMessage = async (id) => {
		try {
			await axios.delete(`/api/messages/${id}`);
			fetchMessages();
		} catch (error) {
			console.error("Error deleting message:", error);
		}
	};

	useEffect(() => {
		fetchMessages();
	}, []);

	return (
		<Container className="py-5">
			<h2 className="text-center mb-4">Message Management</h2>
			<MessageCount />
			<Row className="mt-4">
				{messages.map((message) => (
					<Col md={4} className="mb-4" key={message._id}>
						<Card>
							<Card.Body>
								<Card.Title className="text-center card-title mb-3">
									Name: {message.name}
								</Card.Title>
								<Card.Subtitle className="text-center text-muted mb-3">
									Email: {message.email}
								</Card.Subtitle>
								<Card.Text> Message: {message.message}</Card.Text>
								<div className="text-center">
									<p>
										<strong>Status:</strong>{" "}
										{message.seen ? "✔ Seen" : "❌ Unseen"}
									</p>
									<div className="d-flex justify-content-center gap-2">
										{!message.seen && (
											<Button
												variant="outline-success"
												onClick={() => markAsSeen(message._id)}
											>
												Mark as Seen
											</Button>
										)}
										<Button
											variant="outline-danger"
											onClick={() => handleDeleteMessage(message._id)}
										>
											Delete
										</Button>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ContactMessage;
