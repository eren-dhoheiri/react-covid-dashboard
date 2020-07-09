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
						The SEIRD model has eight parameters needed. The first
						parameter is the parameter N is the parameter of the
						total population, of which the total population is
						divided into two, namely{" "}
						<span>
							N_1 population that does not implement the PSBB
							policy protocol
						</span>
						, and{" "}
						<span>
							N_2 is the population that implements the PSBB
							policy protocol
						</span>
						.{" "}
						<span>
							β_1 is the rate of susceptible individuals who do
							not perform PSBB into latent individuals after
							interacting with infected individual.
						</span>{" "}
						<span>
							β_2 is the rate of susceptible individuals who make
							PSBB into latent individuals after interacting with
							infected individual.
						</span>{" "}
						Then the next parameter is the <span>parameter δ</span>,
						this parameter{" "}
						<span>
							is the rate of transfer from latent individuals to
							infected individuals.
						</span>
						<span>
							The death rate uses notated as γ, while the cure
							rate is denoted as ρ.
						</span>
						Then there is the α parameter as the probability that an
						individual will die after being infected. The following
						is a transfer diagram of the COVID-19 disease SEIRD
						model with the addition of the PSBB policy protocol
					</p>
					<div className="center-align">
						<img src={Model} className="img-model" />
						<p>
							Based on the transfer diagram of the SEIRD model in
							Figure 1., the mathematical model can be made as
							follows:
						</p>
						<img src={Rumus} className="img-rumus" />
					</div>
					<p>
						Equation (1) interprets that vulnerable individuals who
						do not implement the PSBB protocol will decrease with
						the number of contacts between vulnerable individuals
						who do not carry out PSBB and individuals affected by
						the disease. Likewise for equation (2) interpreting that
						vulnerable individuals implementing PSBB policy
						protocols will decrease along with the number of
						contacts between vulnerable individuals implementing
						PSBB policy protocols and individuals affected by the
						disease. The equation (3) interprets latent individuals
						will increase with the number of contacts between
						vulnerable individuals and infected individuals, and
						will decrease with the number of contacts between latent
						individuals and individuals affected by the disease.
						Then for equation (4) interpret that infected
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
