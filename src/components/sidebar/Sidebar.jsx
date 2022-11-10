import React from "react"
import "./Sidebar.css"
import Logo from "../../assets/common_image/Vlogo.svg"
function Sidebar() {
	var currentTime = new Date()
	const year = currentTime.getFullYear()
	const [toggle, showMenu] = React.useState(false)
	return (
		<>
			<aside className={toggle ? "aside2 show-menu" : "aside"}>
				<a href="#home" className="nav_logo namelogo">
					<img src={Logo} className="namelogo" alt="Logo" />
				</a>
				<nav className="nav">
					<div className="nav_menu">
						<ul className="nav_list">
							<li className="nav_item">
								<a
									href="#home"
									className="nav_link"
									onClick={() => showMenu(false)}
								>
									<i class="fa-solid fa-house icon-home"></i>
								</a>
							</li>
							<li className="nav_item">
								<a
									href="#about"
									className="nav_link"
									onClick={() => showMenu(false)}
								>
									<i class="fa-solid fa-user icon-home"></i>
								</a>
							</li>

							<li className="nav_item">
								<a
									href="#resume"
									className="nav_link"
									onClick={() => showMenu(false)}
								>
									<i class="fa-solid fa-graduation-cap icon-home"></i>
								</a>
							</li>
							<li className="nav_item">
								<a
									href="#skills"
									className="nav_link"
									onClick={() => showMenu(false)}
								>
									<i class="fa-solid fa-briefcase icon-home"></i>
								</a>
							</li>
							<li className="nav_item">
								<a
									href="#work"
									className="nav_link"
									onClick={() => showMenu(false)}
								>
									<i class="fa-solid fa-layer-group icon-home"></i>
								</a>
							</li>
							<li className="nav_item">
								<a
									href="#contact"
									className="nav_link"
									onClick={() => showMenu(false)}
								>
									<i class="fa-brands fa-rocketchat icon-home"></i>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className="nav_footer">
					<span className="copyright">
						&copy; {year}-{year + 1}
					</span>
				</div>
			</aside>
			<div
				className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
				onClick={() => showMenu(!toggle)}
			>
				<i
					className={
						toggle ? "icon_menu fa-solid fa-bars" : "icon_menu fa-solid fa-bars"
					}
					onClick={() => showMenu(!toggle)}
				></i>
			</div>
		</>
	)
}
export default Sidebar
