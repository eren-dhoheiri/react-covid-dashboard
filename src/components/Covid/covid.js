import React, {Component} from "react";
import Ilusone from "../../assets/animaton/work.json";
import Ilustwo from "../../assets/animaton/wash.json";
import Ilusthree from "../../assets/animaton/clean.json";
import Ilusfour from "../../assets/animaton/mask.json";
import Ilusfive from "../../assets/animaton/sneez.json";
import Ilusix from "../../assets/animaton/healthy.json";
import "./covid.css";
import Lottie from "react-lottie";
import Fade from "react-reveal/Fade";

export default class covid extends Component {
	render() {
		const defaultOptions1 = {
			loop: true,
			autoplay: true,
			animationData: Ilusone,
		};
		const defaultOptions2 = {
			loop: true,
			autoplay: true,
			animationData: Ilustwo,
		};
		const defaultOptions3 = {
			loop: true,
			autoplay: true,
			animationData: Ilusthree,
		};
		const defaultOptions4 = {
			loop: true,
			autoplay: true,
			animationData: Ilusfour,
		};
		const defaultOptions5 = {
			loop: true,
			autoplay: true,
			animationData: Ilusfive,
		};
		const defaultOptions6 = {
			loop: true,
			autoplay: true,
			animationData: Ilusix,
		};
		return (
			<section id="covid">
				<div className="container">
					<div className="row center-align">
						<div className="col s11 m12">
							<h3>How can we protect ourselves from COVID-19?</h3>
							<p>
								We should understand how to protect ourselves
								from diseases that are now widely spread and
								feared by society. Everyone can be exposed to
								the disease caused by COVID-19. But each
								individual’s response to the disease is
								different. People with strong immunity may not
								experience any symptoms at all (asymptomatic),
								or just mild symptoms.
							</p>
						</div>
					</div>
					<div className="row center-align">
						<Fade left>
							<div className="col s8 m3 card-covid">
								<Lottie
									options={defaultOptions1}
									height={160}
									width={180}
								/>
								<p>
									Stay at home; work from home, learn from
									home, and worship at home
								</p>
							</div>
						</Fade>
						<Fade left>
							<div className="col s8 m3 card-covid">
								<Lottie
									options={defaultOptions2}
									height={160}
									width={180}
								/>
								<p>
									Wash your hands with soap and water for at
									least 20 seconds or use a hand sanitizer
									based alcohol of at least 60%
								</p>
							</div>
						</Fade>
						<Fade left>
							<div className="col s8 m3 card-covid">
								<Lottie
									options={defaultOptions3}
									height={160}
									width={180}
								/>
								<p>
									Clean and disinfect the surface of the
									object which is often touched
								</p>
							</div>
						</Fade>
					</div>
					<div className="row center-align">
						<Fade right>
							<div className="col s8 m3 card-covid">
								<Lottie
									options={defaultOptions4}
									height={160}
									width={180}
								/>
								<p>
									Wear a mask if you have to move outside the
									house and change periodically
								</p>
							</div>
						</Fade>
						<Fade right>
							<div className="col s8 m3 card-covid">
								<Lottie
									options={defaultOptions5}
									height={160}
									width={180}
								/>
								<p>
									Cover mouth and nose when coughing or sneeze
									with a tissue or inner elbow
								</p>
							</div>
						</Fade>
						<Fade right>
							<div className="col s8 m3 card-covid">
								<Lottie
									options={defaultOptions6}
									height={160}
									width={180}
								/>
								<p>
									Apply a healthy lifestyle with food
									nutrition and exercise
								</p>
							</div>
						</Fade>
					</div>
				</div>
			</section>
		);
	}
}
