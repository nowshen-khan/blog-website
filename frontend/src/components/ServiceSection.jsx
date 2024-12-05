import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const ServiceSection = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		axios
			.get("/api/services")
			.then((response) => {
				setServices(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="container py-5">
			<h2 className="text-center mb-4">Our Services</h2>
			<div className="row">
				{services.map((service) => (
					<div key={service._id} className="col-md-3 mb-4">
						<div className="card h-100">
							<div className="card-body">
								<Card.Img
									src={service.image}
									alt={service.name}
									width="auto"
									height="100px"
									className="mb-3 thumbnail"
								/>
								<h5 className="card-title text-center">{service.name}</h5>
								<p className="card-text">{service.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceSection;
