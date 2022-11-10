import React from "react"
import Sidebar from "../sidebar/Sidebar"
import Home from "../home/home"
import About from "../about/About"
import Education from "../Education/Education"
import Skill from "../skills/Skills.jsx"
import Portfolio from "../portfolio/Portfolio"
import Contact from "../contact/Contact"

function APP() {
	return (
		<div>
			<Sidebar />
			<main classname="main">
				<Home />
				<About />
				<Education />
				<Skill />
				<Portfolio />
				<Contact />
			</main>
		</div>
	)
}

export default APP
