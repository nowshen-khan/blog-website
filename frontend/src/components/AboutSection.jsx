import "./AboutSection.css";

const AboutSection = () => {
	const imgUrl =
		"https://i.ibb.co.com/3Nj7ntJ/goran-ivos-i-Oyk-DIk-ZLQw-unsplash.jpg";
	return (
		<section className="about-section">
			<div className="about-container">
				<div className="about-image">
					<img src={imgUrl} alt="Learnwish Academy" />
				</div>
				<div className="about-content">
					<h2>About Learnwish</h2>
					<p>
						Welcome to Learnwish, where we turn your learning aspirations into
						reality. Our mission is to provide high-quality education in
						mathematics and coding, empowering students to achieve their goals
						and excel in their careers.
					</p>
					<p>
						At Learnwish, we believe in innovation and personalized learning.
						Our experienced instructors are committed to creating a supportive
						and engaging environment for all learners.
					</p>
					<button className="learn-more-btn">Learn More</button>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
