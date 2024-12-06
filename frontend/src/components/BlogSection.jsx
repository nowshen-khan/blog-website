import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogSection = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get("/api/blogs")
			.then((response) => {
				setBlogs(response.data);
			})
			.catch((error) => {
				console.error("Error fetching team data:", error);
			});
	}, []);
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
