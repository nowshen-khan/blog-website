import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import ServiceSection from "./components/ServiceSection";
import ContactForm from "./components/ContactForm";
import DashboardLayout from "./components/DashboardLayout";
import DashboardBlogs from "./pages/DashboardBlogs";
import DashboardServices from "./pages/DashboardServices";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import TeamSection from "./components/TeamSection";
import AboutSection from "./components/AboutSection";
import Register from "./pages/Register";
import DashboardTeam from "./pages/DashboardTeam";
import ContactMessage from "./pages/ContactMessage";
import BlogDetails from "./components/BlogDetails";

const Home = () => (
	<>
		<Hero />
		<BlogSection />
		<ServiceSection />
	</>
);

const AboutPage = () => (
	<>
		<AboutSection />
		<TeamSection />
	</>
);
const BlogPage = () => <BlogSection />;
const ServicesPage = () => <ServiceSection />;
const ContactPage = () => <ContactForm />;

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/blog/:id" element={<BlogDetails />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route
					path="/dashboard/"
					element={
						<PrivateRoute>
							<DashboardLayout />
						</PrivateRoute>
					}
				>
					<Route path="blogs" element={<DashboardBlogs />} />
					<Route path="services" element={<DashboardServices />} />
					<Route path="team" element={<DashboardTeam />} />
					<Route path="message" element={<ContactMessage />} />
				</Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
