import { Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
	return (
		<div>
			<Nav className="bg-dark p-3">
				<Nav.Item>
					<Nav.Link as={Link} to="/dashboard/blogs" className="text-white">
						Blogs
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/dashboard/services" className="text-white">
						Services
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/dashboard/team" className="text-white">
						Team
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/dashboard/message" className="text-white">
						Inbox
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};

export default DashboardLayout;
