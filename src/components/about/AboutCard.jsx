import React from "react"
function AboutCard(props) {
	return (
		<div className="about_box">
			<i className={props.icon}></i>
			<div>
                        <h3 className="about_title">{props.title}</h3>
                        <span className="about_subtitle">{props.description}</span>
			</div>
		</div>
	)
}

export default AboutCard;