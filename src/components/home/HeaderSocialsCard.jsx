import React from "react"
function HeaderSocialsCard(props) {
	return (
		<a
			href={props.href}
			className="home_social-link"
			target="_self"
			rel="noreferrer"
		>
			<i class={props.icon}></i>
		</a>
	)
}
export default HeaderSocialsCard
