import React, {Component} from "react";
import Fade from "react-reveal/Fade";
import Card from "../Card/Card";
import "./OurTeam.css";

export default class OurTeam extends Component {
	render() {
		return (
			<section id="ourteam">
				<div className="container">
					<div className="row">
						<div className="col m3"></div>
						<div className="col m6 center-align">
							<h2>Our Team</h2>
							<p>
								A combination of solid leadership,
								communication, and access to good resources
								contribute to productive collaboration.
							</p>
						</div>
						<div className="col m3"></div>
					</div>
					<Fade left>
						<div className="row center-align">
							<div className="col m12 center-align">
								<Card />
							</div>
						</div>
					</Fade>
				</div>
			</section>
		);
	}
}
