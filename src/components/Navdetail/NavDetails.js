import React from "react";
import Logo from "../../assets/img/logo_white.png";
import Back from "../../assets/img/back.png";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function NavDetails() {
	return (
		<nav className="grey lighten-5">
			<div className="nav-wrapper">
				<Link to={"/"} className="brand-logo left">
					<img src={Logo} alt="Logo." />
				</Link>
				<Link to={"/"} className="brand-logo right">
					<img src={Back} alt="back" />
				</Link>
			</div>
		</nav>
	);
}
