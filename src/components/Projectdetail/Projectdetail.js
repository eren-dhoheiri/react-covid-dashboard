import React, {Component} from "react";
import Background from "./Background/Background";
import Datasource from "./Datasource/Datasource";
import Modelsection from "./Model/Modelsection";
import Resultsection from "./Result/Resultsection";

export default class Projectdetail extends Component {
	render() {
		return (
			<section className="project-detail">
				<div className="container">
					<h2 className="center-align">OUR PROJECT</h2>
					<div className="row">
						<Background />
					</div>
					<div className="row">
						<Datasource />
					</div>
					<div className="row">
						<Modelsection />
					</div>
					<div className="row">
						<Resultsection />
					</div>
				</div>
			</section>
		);
	}
}
