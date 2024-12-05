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

const DashboardTeam = () => {
	const [teams, setTeams] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentTeam, setCurrentTeam] = useState({
		name: "",
		role: "",
		description: "",
		image: "",
	});

	// Fetch Team
	const fetchTeams = async () => {
		try {
			const response = await axios.get("/api/team");
			setTeams(response.data);
		} catch (error) {
			console.error("Error fetching Team:", error);
		}
	};

	// Handle Modal Open/Close
	const handleShowModal = (team = null) => {
		if (team) {
			setIsEditing(true);
			setCurrentTeam(team);
		} else {
			setIsEditing(false);
			setCurrentTeam({ name: "", role: "", description: "", image: "" });
		}
		setShowModal(true);
	};

	const handleCloseModal = () => setShowModal(false);

	// Create or Update Team
	const handleSaveTeam = async () => {
		try {
			if (isEditing) {
				await axios.put(`/api/team/${currentTeam._id}`, currentTeam);
			} else {
				await axios.post("/api/team", currentTeam);
			}
			fetchTeams();
			handleCloseModal();
		} catch (error) {
			console.error("Error saving Team:", error);
		}
	};

	// Delete Member
	const handleDeleteTeam = async (id) => {
		try {
			await axios.delete(`/api/team/${id}`);
			fetchTeams();
		} catch (error) {
			console.error("Error deleting team:", error);
		}
	};

	useEffect(() => {
		fetchTeams();
	}, []);

	return (
		<Container className="py-5">
			<h2 className="text-center mb-4">Team Management</h2>
			<Button variant="primary" onClick={() => handleShowModal()}>
				+ Add New Team
			</Button>
			<Row className="mt-4">
				{teams.map((team) => (
					<Col md={3} className="mb-4" key={team._id}>
						<Card>
							<Card.Body>
								<Card.Img
									src={team.image}
									alt={team.name}
									className="mb-3 img-fluid"
								/>
								<Card.Title className="text-center">{team.name}</Card.Title>
								<Card.Subtitle className="text-center text-muted">
									{team.role}
								</Card.Subtitle>
								<Card.Text>{team.description}</Card.Text>
								<div className="text-center">
									<Button
										variant="warning"
										onClick={() => handleShowModal(team)}
									>
										Edit
									</Button>{" "}
									<Button
										variant="danger"
										onClick={() => handleDeleteTeam(team._id)}
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
					<Modal.Title>{isEditing ? "Edit Team" : "Add New Team"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formMemberName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your name"
								value={currentTeam.name}
								onChange={(e) =>
									setCurrentTeam({ ...currentTeam, name: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formTeamRole">
							<Form.Label>Role</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your position"
								value={currentTeam.role}
								onChange={(e) =>
									setCurrentTeam({ ...currentTeam, role: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formMemberDescription">
							<Form.Label>About</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="About yourself"
								value={currentTeam.description}
								onChange={(e) =>
									setCurrentTeam({
										...currentTeam,
										description: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formTeamImage">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Image URL"
								value={currentTeam.image}
								onChange={(e) =>
									setCurrentTeam({
										...currentTeam,
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
					<Button variant="primary" onClick={handleSaveTeam}>
						{isEditing ? "Update Team Member" : "Add Team Member"}
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default DashboardTeam;
