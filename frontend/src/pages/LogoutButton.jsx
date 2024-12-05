import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<button onClick={handleLogout} className="btn btn-danger">
			Logout
		</button>
	);
};

export default LogoutButton;
