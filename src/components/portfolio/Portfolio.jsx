import React from "react"
import "./portfolio.css"
import Menu from "./Menu"
function Portfolio() {
	const [items, setItems] = React.useState(Menu)
	const filterItem = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.technology === categoryItem
		})
		setItems(updatedItems)
	}
	return (
		<section className="container-work section-work work-section" id="work">
			<h2 className="portfolio_title">Recent Works</h2>
			<div className="work_filters">
				<span className="work_item" onClick={() => setItems(Menu)}>
					Everything
				</span>
				<span className="work_item" onClick={() => filterItem("React")}>
					React
				</span>
				<span className="work_item" onClick={() => filterItem("Node")}>
					Node
				</span>
				{/* <span className="work_item" onClick={() => filterItem("Design")}>
					Authentication
				</span> */}
				<span className="work_item" onClick={() => filterItem("Clone")}>
					Clone
				</span>
			</div>
			<div className="work_container grid">
				{items.map((elem) => {
					const { id, image, title, category, live, github } = elem
					return (
						<div className="work_card" key={id}>
							<div className="work_thumbnail">
								<img src={image} alt="" className="work_img" />
								<div className="work_mask"></div>
							</div>
							<span className="work_category">{category}</span>
							<h3 className="work_title">{title}</h3>
							<a href={live} className="work_button1">
								<i className="icon-link work_button-icon"></i>
							</a>
							<a href={github} className="work_button2">
								<i class="fa-brands fa-github work_button-icon"></i>
							</a>
						</div>
					)
				})}
			</div>
			<div className="portfolio-git">
				<a href="https://github.com/VishalSingh-07">
					<button className="btn btn2">
						View More on Github  <i class="fa-brands fa-github"></i>
					</button>
				</a>
			</div>
		</section>
	)
}
export default Portfolio
