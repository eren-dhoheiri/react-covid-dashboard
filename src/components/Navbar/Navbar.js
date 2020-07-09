import React, {Component} from "react";
import Logo from "../../assets/img/logo_white.png";
import {Link, animateScroll as scroll} from "react-scroll";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./Navbar.css";

export default class Navbar extends Component {
	componentDidMount() {
		const options = {
			edge: "right",
			inDuration: 250,
			outDuration: 200,
			draggable: true,
		};
		M.Sidenav.init(this.Sidenav);

		let instance = M.Sidenav.getInstance(this.Sidenav);
		instance.close();
		console.log(instance.isOpen);
	}

	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a className="brand-logo left">
							<img
								src={Logo}
								alt="Logo."
								onClick={() => scroll.scrollToTop()}
							/>
						</a>
						<a
							href="#"
							data-target="slide-out"
							// data-activates="mobile-demo"
							className="sidenav-trigger right white-text"
						>
							<i className="material-icons">menu</i>
						</a>
						<ul
							id="nav-mobile"
							className="right hide-on-med-and-down no-shadows"
						>
							<li>
								<Link
									to="hero"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={-100}
									duration={500}
									isDynamic={true}
									className="text-white"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="ourproject"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={0}
									duration={500}
									isDynamic={true}
									className="text-white"
								>
									Our Project
								</Link>
							</li>
							<li>
								<Link
									to="dashboard"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={-40}
									duration={500}
									isDynamic={true}
									className="text-white"
								>
									Dashboard
								</Link>
							</li>
							<li>
								<Link
									to="ourteam"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={0}
									duration={500}
									isDynamic={true}
									className="text-white"
								>
									Our Team
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={50}
									duration={500}
									isDynamic={true}
									className="text-white"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<ul
					ref={(Sidenav) => {
						this.Sidenav = Sidenav;
					}}
					id="slide-out"
					className="sidenav hide-on-med-and-up right"
				>
					<li>
						<Link
							to="hero"
							spy={true}
							smooth={true}
							hashSpy={true}
							offset={-100}
							duration={500}
							isDynamic={true}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="ourproject"
							spy={true}
							smooth={true}
							hashSpy={true}
							offset={0}
							duration={500}
							isDynamic={true}
						>
							Our Project
						</Link>
					</li>
					<li>
						<Link
							to="dashboard"
							spy={true}
							smooth={true}
							hashSpy={true}
							offset={-40}
							duration={500}
							isDynamic={true}
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to="ourteam"
							spy={true}
							smooth={true}
							hashSpy={true}
							offset={0}
							duration={500}
							isDynamic={true}
							className="text-white"
						>
							Our Team
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							hashSpy={true}
							offset={50}
							duration={500}
							isDynamic={true}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
