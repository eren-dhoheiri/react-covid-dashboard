import React, {Component} from "react";
import Model from "../../../assets/img/model.png";
import Rumus from "../../../assets/img/rumus.png";
import "./Modelsection.css";

export default class Modelsection extends Component {
	render() {
		return (
			<div id="modelsection">
				<div className="col s12 m12 l12">
					<h4>How Model Works</h4>
					<p>
						There are eight parameters that is needed for the model
						to work. The first parameter, N, is the total population
						of the DKI Jakarta province. Because the Susceptible
						compartment is divided into two, so the total population
						is also divided into two,
						<span>N_1 and N_2</span>. The next parameter,
						<span>
							β, is the probability of which an infected person
							can infect a susceptible person after they come in
							contact with each other.
						</span>{" "}
						Because of the same reason with the first parameter,
						this parameter is also divided into two, β_1 and β_2.
						<span>
							Parameter δ, is the rate of change from an exposed
							individual into infected individual.
						</span>
						<span>
							Parameters γ and ρ, is the death and the recovery
							rate of the disease respectively.
						</span>
						The last parameter,
						<span>
							α, is the probability of an infected person to die,
							or in other words, the fatality rate of the disease.
						</span>
					</p>
					<div className="center-align">
						<img src={Model} className="img-model" />
						<p>
							The following is a transfer diagram of the COVID-19
							disease SEIRD model with the addition of the PSBB
							protocol:
						</p>
						<img src={Rumus} className="img-rumus" />
					</div>
					<p>
						Equation (1) shows that susceptible individual who do
						not implement the PSBB protocol will decrease with the
						number of contacts between vulnerable individual who do
						not carry out PSBB and individuals affected by the
						disease. Equation (2) shows that susceptible individuals
						implementing PSBB policy protocols will decrease along
						with the number of contacts between the susceptible
						individuals implementing the PSBB protocol and the
						infected individuals. The equation (3) shows latent
						individuals will increase with the number of contacts
						between vulnerable individuals and infected individuals,
						and will decrease with the number of contacts between
						exposed individuals and individuals affected by the
						disease. Then for equation (4) interpret that infected
						individuals will increase with the number of contacts
						between latent individuals and individuals affected by
						the disease, and will decrease with the number of
						individuals who recover and die after COVID-19 disease.
						The equation (5) interprets that changes in the number
						of individuals recovering will increase along with the
						number of people who recover after being exposed to
						COVID-19 disease. Equation (6) interprets that changes
						in the number of individuals who die will increase along
						with the number of individuals who died after COVID-19
						disease.
					</p>
				</div>
			</div>
		);
	}
}
