import { useEffect, useState } from "react";
import "./TeamSection.css";
import axios from "axios";

const TeamSection = () => {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		axios
			.get("/api/team")
			.then((response) => {
				setTeam(response.data);
			})
			.catch((error) => {
				console.error("Error fetching team data:", error);
			});
	}, []);

	return (
		<section className="team-section">
			<h2 className="section-title">Meet Our Team</h2>
			<div className="team-container">
				{team.length > 0 ? (
					team.map((member) => (
						<div className="team-card" key={member._id}>
							<div className="team-member-image">
								<img
									src={member.image}
									alt={member.name}
									style={{ width: "100%", height: "100%", objectFit: "fit" }}
									className="team-image img-fluid"
								/>
							</div>
							<div className="team-info">
								<h3 className="team-name">{member.name}</h3>
								<p className="team-role">{member.role}</p>
								<p className="team-description">{member.description}</p>
							</div>
						</div>
					))
				) : (
					<p>Loading team members...</p>
				)}
			</div>
		</section>
	);
};

export default TeamSection;
