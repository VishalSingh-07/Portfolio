import React, { useState, useEffect } from "react"
import Sidebar from "../sidebar/Sidebar"
import Home from "../home/home"
import About from "../about/About"
import Education from "../Education/Education"
import Skill from "../skills/Skills.jsx"
import Portfolio from "../portfolio/Portfolio"
import Contact from "../contact/Contact"
import Preloader from "../Preloader/Preloader"

function APP() {
	const [loading, setloading] = useState(false)

	useEffect(() => {
		setloading(true)
		setInterval(() => {
			setloading(false)
		}, 4000)
	}, [])
	return (
		<div>
			{loading ? (
				<Preloader loading={loading} />
			) : (
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
			)}
		</div>
	)
}

export default APP
