import React from "react"
import "./about.css"
import Aboutlogo from "../../assets/common_image/avatar-2.svg"
import AboutBox from "./AboutBox"
import Resume from "../../assets/Resume/Vishal_Singh's _Resume.pdf"
function About() {
	return (
		<section className="container-about section-about about-section" id="about">
			<h2 className="section_title">About Me</h2>

			<div className="about_container grid">
				<img src={Aboutlogo} alt="About Logo" className="about_img" />
				<div className="about_data grid">
					<div className="about_info">
						<p className="about_description">
							I am Vishal Singh, Full Stack Developer from Delhi, India. I have
							rich experience in website design and building and customization.
							Currently, I'm Learning Redux, Scss and Focussing on builiding
							highly interactive and user-friendly products.
						</p>
						<a href={Resume} download="Vishal's_Resume" className="btn download">
							Download Resume
						</a>
					</div>

					<div className="about_skills grid">
						<div className="skills_data">
							<div className="skills_titles">
								<h3 className="skills_name">Frontend Development</h3>
								<span className="skills_number ">90%</span>
							</div>
							<div className="skillsbar">
								<span className="skills_percentage frontend"></span>
							</div>
							<div className="skills_titles">
								<h3 className="skills_name">Backend Development</h3>
								<span className="skills_number ">70%</span>
							</div>
							<div className="skillsbar">
								<span className="skills_percentage backend"></span>
							</div>
							<div className="skills_titles">
								<h3 className="skills_name">UI/UX Design</h3>
								<span className="skills_number ">50%</span>
							</div>
							<div className="skillsbar">
								<span className="skills_percentage ui-ux"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<AboutBox />
		</section>
	)
}
export default About
