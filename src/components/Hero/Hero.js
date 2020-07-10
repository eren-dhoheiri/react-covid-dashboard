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
				<div className="container">
					<div className="row">
						<div className="hero-content">
							<div className="col s12 m6 l6">
								<div className="hero-title">
									<h2 className="h-one">MODELLING OF</h2>
									<h2 className="h-two">COVID-19</h2>
									<h4 className="h-three">
										Case Study: DKI Jakarta
									</h4>
								</div>
							</div>
							<div className="col s12 m6 l6">
								<div className="hero-paragraph">
									<p>
										Since it was announced in Wuhan in
										December 2019, the COVID-19 outbreak up
										to the end of Early April 2020 has
										infected more than 1 million people in
										201 countries. Statistics show that this
										fast-spreading virus is likely to cause
										death and there is no vaccine yet.When
										it began to infect the whole world, the
										numbers soon grew rapidly. Viruses that
										don't recognize ethnicity, religion,
										race, or between groups actually attack
										anyone.
									</p>

									<p>
										DKI Jakarta, is the top three regions
										with the highest number of COVID-19
										cases in Indonesia. This made us
										interested in making this project able
										to make predictions when the peak of the
										spread of COVID-19 in DKI Jakarta. In
										this project we gathered available data,
										sanitized it and develop mathematical
										model using python. Finally, we could
										see various insights on the dashboard.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
