import React from "react"
import "./education.css"
import Data from "./Data"
import Card from "./Card"
import Laptop from "../../assets/common_image/laptopman1.png"
function Resume() {
	return (
		<>
			<section
				className="container-resume resume-section"
				id="resume"
			>

				<h2 className="section_title qual">Education</h2>

				<div className="resume_container grid">
					<div className="timeline grid">
						{Data.map((val, id) => {
							return (
								<Card
									key={id}
									icon={val.icon}
									title={val.title}
									year={val.year}
									desc={val.desc}
									grade={val.grade}
								/>
							)
						})}
						<img src={Laptop} alt="Laptop" className="bookboy"/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Resume
