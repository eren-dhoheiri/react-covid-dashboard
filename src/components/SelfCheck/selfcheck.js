import React, {Component} from "react";
import Fade from "react-reveal/Fade";
import "./selfcheck.css";

export default class selfcheck extends Component {
	render() {
		const source = "https://cekcorona-dinkes.jakarta.go.id/";
		return (
			<section id="selfcheck">
				<div className="container board">
					<div className="row center-align">
						<h3>COVID-19 Self Detection</h3>
						<div className="col s12 m12 l12">
							<Fade left>
								<p className="center-align">
									COVID-19 Rapid Self Detection is one way to
									find out if you have symptoms that require
									further examination and testing of COVID-19
									or not. The link below can tell you to
									screen for COVID-19 symptoms, register for a
									COVID-19 referral hospital, how to
									disinfection as a preventive measure for the
									spread of COVID-19
								</p>
							</Fade>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m12 l12 center-align">
							<Fade left>
								<a
									href={source}
									target="_blank"
									className="btn center"
								>
									Early Detection Now!
								</a>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
