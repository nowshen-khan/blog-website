import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import { Card } from "react-bootstrap";

const BlogSection = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${config.backendUrl}/api/blogs?limit=6`)
			.then((response) => response.json())
			.then((data) => setBlogs(data))
			.catch((error) => console.error("Error fetching blogs:", error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <p className="container py-5 display-6">Loading...</p>;
	}

	return (
		<div className="container py-5">
			<h2 className="text-center mb-4">Latest Blogs</h2>
			<div className="row">
				{blogs.map((blog) => (
					<div key={blog._id} className="col-md-4 mb-4">
						<div className="card h-100">
							<img
								src={blog.image}
								className="card-img-top"
								alt={blog.title}
								style={{ height: "200px", objectFit: "cover" }}
							/>
							<div className="card-body">
								<h5 className="card-title">{blog.title}</h5>
								<p className="card-text">
									Created at:{" "}
									{new Date(blog.createdAt).toLocaleString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",

										hour: "2-digit",
										minute: "2-digit",
									})}
								</p>
								<Card.Text>
									{blog.description.length > 100
										? `${blog.description.substring(0, 100)}...`
										: blog.description}
								</Card.Text>
								<Link to={`/blog/${blog._id}`}>
									<button
										style={{
											background: "#007BFF",
											color: "#fff",
											padding: "10px",
										}}
										className="btn btn-primary"
									>
										Read More
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogSection;
