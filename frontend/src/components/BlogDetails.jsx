import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogDetails = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await axios.get(`/api/blogs/${id}`);
				setBlog(response.data);
			} catch (error) {
				console.error("Error fetching blog data:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchBlog();
	}, [id]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!blog) {
		return <p>Blog not found</p>;
	}

	return (
		<div className="container py-5">
			<h1>{blog.title}</h1>
			<p>Created at: {new Date(blog.createdAt).toLocaleDateString()}</p>
			<img
				src={blog.image}
				alt={blog.title}
				style={{ width: "auto", height: "20vh" }}
				className="mb-3 text-center thumbnail"
			/>
			<p>{blog.description}</p>
		</div>
	);
};

export default BlogDetails;
