import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to="/login" />; // Redirect to login if no token
	}

	return children;
};

export default PrivateRoute;
