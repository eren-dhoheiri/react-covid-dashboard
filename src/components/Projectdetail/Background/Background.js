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
						In the case of COVID-19, many researchers do research to
						predict when the peak of COVID-19 with several model
						choices such as SIR, SIRD, SEIR and SEIRD. The model
						used in the COVID-19 disease spread model in Jakarta
						is&nbsp;
						<a href={source} target="_blank">
							the SEIRD model
						</a>
						. This model was chosen because it is in accordance with
						the spread of COVID-19 disease itself. The SEIRD model
						chosen is divided into six compartments: Susceptible,
						individuals susceptible to disease, where these
						compartments are divided into two compartments,
						namely&nbsp;
						<span>
							individuals who do not implement the PSBB policy
							protocol (S_1){" "}
						</span>{" "}
						and{" "}
						<span>
							individuals who implement the PSBB policy protocol
							(S_2){" "}
						</span>
						.
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
						This is because DKI Jakarta has implemented the PSBB
						policy and is still in the transition period of the
						PSBB, so that vulnerable individuals are divided into
						two compartments. Then the next compartment, the{" "}
						<span>
							Exposed (E) compartment, is a latent individual in
							which this individual has contracted the disease but
							has not shown any signs of disease and cannot
							transmit the disease or can be called the incubation
							period for infection.
						</span>{" "}
						This is consistent with the spread of COVID-19 disease,
						because the corona virus has an incubation period of
						infection.
					</p>
					<p>
						<span>
							Infected Compartment (I) is an individual who has a
							disease and can transmit the disease.
						</span>{" "}
						<span>
							The Recovered (R) compartment is an individual who
							has recovered from COVID-19
						</span>{" "}
						and is assumed to have immunity so that he cannot return
						to being a vulnerable individual.{" "}
						<span>
							Dead compartment (D) is an individual who died due
							to COVID-19 disease, this is based on the fact that
							this disease is a fatal disease that can cause
							death.
						</span>{" "}
						Each of the existing compartments has a constant
						population and no natural birth or death has occurred in
						that population.
					</p>
				</div>
			</div>
		);
	}
}
