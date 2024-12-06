import { useState, useEffect } from "react";
import axios from "axios";

const MessageCount = () => {
	const [count, setCount] = useState({ seen: 0, unseen: 0 });

	useEffect(() => {
		const fetchCount = async () => {
			try {
				const response = await axios.get("/api/messages/count");
				setCount(response.data);
			} catch (error) {
				console.error("Error fetching message count:", error);
			}
		};

		fetchCount();
	}, []);

	return (
		<div className="d-flex flex-row">
			<h5 className="mx-2">Message Status Count</h5>
			<p className="mx-2">Seen: {count.seen}</p>
			<p className="mx-2">Unseen: {count.unseen}</p>
		</div>
	);
};

export default MessageCount;
