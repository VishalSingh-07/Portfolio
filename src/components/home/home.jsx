import React from "react"
import "./home.css"
import BannarImage from "../../assets/common_image/banner-image.png"
import HeaderSocials from "./HeaderSocials"
import ScrollDown from "./scrollDown"
import LandingAnimation from "../../assets/Common/LandingAnimation"
import Typewriter from "typewriter-effect"
function home() {
	return (
		<section className="home container" id="home">
			<LandingAnimation />
			<div className="intro">
				<h3 className="greeting">Hey!</h3>
				<h1 className="home_name">
					<span className="rubber-letter">I</span>
					<span className=""> </span>
					<span className="rubber-letter">a</span>
					<span className="rubber-letter">m</span>
					<span className=""> </span>

					<span className="rubber-letter">V</span>
					<span className="rubber-letter">i</span>
					<span className="rubber-letter">s</span>
					<span className="rubber-letter">h</span>
					<span className="rubber-letter">a</span>
					<span className="rubber-letter">l</span>
					<span className=""> </span>
					<span className="rubber-letter">S</span>
					<span className="rubber-letter">i</span>
					<span className="rubber-letter">n</span>
					<span className="rubber-letter">g</span>
					<span className="rubber-letter">h</span>
				</h1>
				<h5 className="home_education">
					<span>And I like { "  "}</span>
					<span className="typewriter">
						{" "}
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString("Programming")
									.pauseFor(2000)
									.deleteAll()
									.typeString("Web Development")
									.pauseFor(2000)
									.deleteAll()
									.typeString("Designing")
									.pauseFor(2000)
									.deleteAll()
									.typeString("")
									.pauseFor(2000)
									.deleteAll()
									.typeString("Machine Learning")
									.pauseFor(4000)
									.start()
							}}
							options={{ loop: true }}
						/>
					</span>
				</h5>
				<HeaderSocials />
				<a href="#contact" className="btn getresume">
					Let's Connect
				</a>
				<ScrollDown />
			</div>
			<div>
				<img src={BannarImage} alt="ME" className="home_img" />
			</div>
		</section>
	)
}
export default home
