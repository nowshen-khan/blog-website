import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "../pages/LogoutButton";

const Header = () => {
	const location = useLocation();
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Learnwish
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<div className="container-fluid">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>

							<Nav.Link as={Link} to="/about">
								About
							</Nav.Link>
							<Nav.Link as={Link} to="/blog">
								Blog
							</Nav.Link>
							<Nav.Link as={Link} to="/services">
								Services
							</Nav.Link>
							<Nav.Link as={Link} to="/contact">
								Contact
							</Nav.Link>
							{/* Admin Dashboard Link */}

							{location.pathname.startsWith("/dashboard") ? (
								<LogoutButton />
							) : (
								<Nav.Link as={Link} to="/dashboard/blogs">
									<div className="btn btn-sm btn-outline-secondary">
										Admin Login
									</div>
								</Nav.Link>
							)}
						</Nav>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
