import React, {Component} from "react";
import Lottie from "react-lottie";
import HeroIlus from "../../assets/animaton/analysis.json";
import HeroImage from "../../assets/img/hero-explain.png";
import {Link, animateScroll as scroll} from "react-scroll";
import "./Hero.css";

export default class Hero extends Component {
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: HeroIlus,
		};
		return (
			<section id="hero">
				<div className="row">
					<div className="col s12 m6 l6">
						<div className="lottie-hero">
							<Lottie options={defaultOptions} />
						</div>
					</div>
					<div className="col s12 m5 l5">
						<div className="hero-content">
							<h2 className="center-align">
								CORONAVIRUS PROJECT
							</h2>
							<p>
								Since it was announced in Wuhan in December
								2019, the Covid-19 outbreak up to the end of
								Early April 2020 (3 months) has infected more
								than 1 million people in 201 countries.
								Statistics show that this fast-spreading virus
								is likely to cause death and there is no vaccine
								yet.
							</p>
							<p>
								{" "}
								When it began to infect the whole world, the
								numbers soon grew rapidly. Viruses that don't
								recognize ethnicity, religion, race, or between
								groups actually attack anyone; including
								productive workforce from technical workers to
								decision makers. Jakarta, the capital, is the
								top three regions with the highest number of
								COVID-19 cases in Indonesia.
							</p>
							<p>
								This made us interested in making this project
								able to make predictions when the peak of the
								spread of COVID-19 in DKI Jakarta. In this
								project we made a mathematical model with python
								programming, then developed it with the ETL
								process, then finally we could see various
								insights on the dashboard.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
