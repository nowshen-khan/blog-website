import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="bg-dark text-white py-3">
			<Container className="text-center">
				<p>&copy; 2024 Learnwish. All rights reserved.</p>
				<p>
					<a href="/privacy-policy">Privacy Policy</a> |{" "}
					<a href="/terms-of-service">Terms of Service</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
