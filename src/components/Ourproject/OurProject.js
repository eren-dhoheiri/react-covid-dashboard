import React from "react";
import Fade from "react-reveal/Fade";
import Lottie from "react-lottie";
import Anim7 from "../../assets/animaton/drawkit-grape-animation-8-LOOP.json";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./Ourproject.css";

const OurProject = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: Anim7,
	};
	const source =
		"https://riwayat-file-covid-19-dki-jakarta-jakartagis.hub.arcgis.com/";
	return (
		<section id="ourproject">
			<div className="container">
				<div className="row board">
					<h2 className="center-align">Our Project</h2>
					<div className="row">
						<div className="col s12 m6 l6 right">
							<div className="img-responsive img-ourproject">
								<Fade right>
									<Lottie options={defaultOptions} />
								</Fade>
							</div>
						</div>
						<div className="col s12 m6 l6">
							<Fade left>
								<p>
									The goal of the project is to predict the
									peak time of COVID-19 in DKI Jakarta. The
									data that our team obtained comes from{" "}
									<a href={source} target="_blank">
										DKI Jakarta Public Health Office
									</a>{" "}
									website. We make sure that the data is clean
									and ready to use for the modelling of the
									disease by doing ETL process to the data.
									The model that we use is the SEIRD model.
									This model was chosen because it is in
									accordance with the spread of COVID-19
									disease itself. The SEIRD model is divided
									into six compartments: Susceptible, Exposed,
									Infected, Recovered, Deceased. For the
									model, we make some assumptions so as to
									simplify the model.
								</p>
								<Link
									to={"/project-detail"}
									className="btn center"
								>
									See Details!
								</Link>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurProject;
