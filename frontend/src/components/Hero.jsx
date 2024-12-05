import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
	const slides = [
		{
			image: "https://i.ibb.co.com/BwWXG7M/roonz-nl-2x-EQDx-B0ss4-unsplash.jpg",
			title: "Welcome to Learnwish",
			description: "Your journey to mastering coding starts here.",
		},
		{
			image:
				"https://i.ibb.co.com/3Nj7ntJ/goran-ivos-i-Oyk-DIk-ZLQw-unsplash.jpg",
			title: "Learn Anytime, Anywhere",
			description: "Flexible and accessible courses for everyone.",
		},
		{
			image: "https://i.ibb.co.com/BwWXG7M/roonz-nl-2x-EQDx-B0ss4-unsplash.jpg",
			title: "Join Our Community",
			description: "Connect with learners and mentors globally.",
		},
	];
	return (
		<div className="hero-section text-dark text-center">
			<Carousel>
				{slides.map((slide, index) => (
					<Carousel.Item key={index}>
						<img
							className="d-block w-100"
							src={slide.image}
							alt={`Slide ${index + 1}`}
							style={{ maxHeight: "600px", objectFit: "cover" }}
						/>
						<Carousel.Caption>
							<h3 className="display-4">{slide.title}</h3>
							<p className="h5">{slide.description}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Hero;
