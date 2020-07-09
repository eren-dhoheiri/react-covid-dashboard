import React, {Component} from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import OurProject from "./Ourproject/OurProject";
import OurTeam from "./Ourteam/OurTeam";
import Dashboard from "./Dashboard/Dashboard";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import TableauEmbed from "./Tableau/Tableau";
import NavDetails from "./Navdetail/NavDetails";
import Covid from "./Covid/covid";
import Selfcheck from "./Selfcheck/selfcheck";
import Projectdetail from "./Projectdetail/Projectdetail";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<div>
									<Navbar />
									<Hero />
									<OurProject />
									<Dashboard />
									<Covid />
									<Selfcheck />
									<OurTeam />
									<Contact />
									<Footer />
								</div>
							)}
						/>
						<Route
							path="/tableau"
							render={() => (
								<div>
									<NavDetails />
									<TableauEmbed />
									<Contact />
									<Footer />
								</div>
							)}
						/>
						<Route
							path="/project-detail"
							render={() => (
								<div>
									<NavDetails />
									<Projectdetail />
									<Contact />
									<Footer />
								</div>
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}
