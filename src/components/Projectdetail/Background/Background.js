import React, {Component} from "react";
import Lottie from "react-lottie";
import DataIlus from "../../../assets/animaton/corona.json";
import "./Background.css";

export default class Background extends Component {
	render() {
		const defaultOptions = {
			width: 100,
			loop: true,
			autoplay: true,
			animationData: DataIlus,
		};
		const source =
			"https://www.medrxiv.org/content/10.1101/2020.05.29.20113571v2.full.pdf";
		return (
			<div id="background">
				<div className="col s12 m12">
					<h4>Background</h4>
				</div>
				<div className="col s12 m5">
					<p>
						The model that we used for this project is SEIRD model.
						The model is compatible with the COVID-19 case. The
						<a href={source} target="_blank">
							SEIRD model
						</a>{" "}
						is divided into 6 compartments. The first compartment,
						Susceptible, is the person who is healthy but
						susceptible to the disease, this compartment will be
						divided into two sub-compartments: &nbsp;
						<span>
							S_1 is fraction of the population that is carrying
							out the PSBB protocol strictly
						</span>{" "}
						and <span>S_2 is the otherwise. </span>
					</p>
				</div>
				<div className="col s12 m7 right">
					<Lottie
						options={defaultOptions}
						className="responsive-img"
					/>
				</div>
				<div className="col s12 m12">
					<p>
						The division is done because DKI Jakarta government is
						doing the PSBB protocol and by now it is still in the
						transition state to New Normal protocol. . The second
						compartment
						<span>
							Exposed, is the person who is already infected but
							the virus is still dormant, meaning that the person
							can’t infect another person while in this state but
							they can infect others after the virus incubation
							period ends.
						</span>
					</p>
					<p>
						The third compartment,
						<span>
							Infected, is the phase after the Exposed period. In
							this state, the person can infect another person.
						</span>{" "}
						The fourth compartment,
						<span>
							Recovered, is the person that had gone through the
							infected phase and by now is healthy again.
						</span>{" "}
						The recovered individual is assumed to be immune to the
						disease and won’t become a susceptible person again. The
						last compartment,
						<span>
							Deceased, is the person who died because of the
							COVID-19 disease
						</span>{" "}
						The population of the DKI Jakarta is assumed to be
						constant, meaning that there is no birth and natural
						death that happened in the system.
					</p>
				</div>
			</div>
		);
	}
}
