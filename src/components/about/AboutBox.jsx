import React from "react"
import AboutCard from "./AboutCard"
function AboutBox() {
	return (
		<div className="about_boxes grid">
			<AboutCard
				icon="fa-solid fa-fire-flame-curved about_icon"
				title="10+"
				description="Project Completed"
			/>
			<AboutCard
				icon="fa-solid fa-user-group about_icon"
				title="200+"
				description="Connections"
			/>
			<AboutCard
				icon="fa-solid fa-graduation-cap about_icon"
				title="8.80"
				description="CGPA"
			/>
			<AboutCard
				icon="about_icon icon-badge"
				title="5 Star"
				description="Hacker Rank C++"
			/>
		</div>
	)
}
export default AboutBox
