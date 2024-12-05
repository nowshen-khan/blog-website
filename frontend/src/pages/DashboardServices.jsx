import { useState, useEffect } from "react";
import axios from "axios";
import {
	Modal,
	Button,
	Form,
	Card,
	Container,
	Row,
	Col,
} from "react-bootstrap";

const DashboardServices = () => {
	const [services, setServices] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentService, setCurrentService] = useState({
		name: "",
		description: "",
		price: "",
	});

	// Fetch Services
	const fetchServices = async () => {
		try {
			const response = await axios.get("/api/services");
			setServices(response.data);
		} catch (error) {
			console.error("Error fetching services:", error);
		}
	};

	// Handle Modal Open/Close
	const handleShowModal = (service = null) => {
		if (service) {
			setIsEditing(true);
			setCurrentService(service);
		} else {
			setIsEditing(false);
			setCurrentService({ name: "", description: "", image: "" });
		}
		setShowModal(true);
	};

	const handleCloseModal = () => setShowModal(false);

	// Create or Update Service
	const handleSaveService = async () => {
		try {
			if (isEditing) {
				await axios.put(`/api/services/${currentService._id}`, currentService);
			} else {
				await axios.post("/api/services", currentService);
			}
			fetchServices();
			handleCloseModal();
		} catch (error) {
			console.error("Error saving service:", error);
		}
	};

	// Delete Service
	const handleDeleteService = async (id) => {
		try {
			await axios.delete(`/api/services/${id}`);
			fetchServices();
		} catch (error) {
			console.error("Error deleting service:", error);
		}
	};

	useEffect(() => {
		fetchServices();
	}, []);

	return (
		<Container className="py-5">
			<h2 className="text-center mb-4">Service Management</h2>
			<Button variant="primary" onClick={() => handleShowModal()}>
				+ Add New Service
			</Button>
			<Row className="mt-4">
				{services.map((service) => (
					<Col md={3} className="mb-4" key={service._id}>
						<Card>
							<Card.Body>
								<Card.Img
									src={service.image}
									alt={service.name}
									width="auto"
									height="100px"
									className="mb-3"
								/>
								<Card.Title className="text-center">{service.name}</Card.Title>
								<Card.Text>{service.description}</Card.Text>
								<div className="text-center">
									<Button
										variant="warning"
										onClick={() => handleShowModal(service)}
									>
										Edit
									</Button>{" "}
									<Button
										variant="danger"
										onClick={() => handleDeleteService(service._id)}
									>
										Delete
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>

			{/* Modal for Add/Edit */}
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						{isEditing ? "Edit Service" : "Add New Service"}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formServiceName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter service name"
								value={currentService.name}
								onChange={(e) =>
									setCurrentService({ ...currentService, name: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formServiceDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="Enter service description"
								value={currentService.description}
								onChange={(e) =>
									setCurrentService({
										...currentService,
										description: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formServicePrice">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Image URL"
								value={currentService.image}
								onChange={(e) =>
									setCurrentService({
										...currentService,
										image: e.target.value,
									})
								}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleSaveService}>
						{isEditing ? "Update Service" : "Add Service"}
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default DashboardServices;
