import React, {Component} from "react";
import Result from "../../../assets/img/result.png";
import Table from "../../../assets/img/table-mape.png";
import "./Resultsection.css";

export default class Resultsection extends Component {
	render() {
		return (
			<div id="result">
				<h4>Result</h4>
				<div className="row">
					<div className="col s12 m12 l12 center">
						<img src={Result} />
					</div>
					<div className="col s12 m12 l12">
						<p>
							Figure 2. Is a picture of the results of the model
							prediction.
							<span>
								Based on the SEIRD model, it is estimated that
								individuals affected by the disease will peak on
								the 777th day since March 25, 2020 or will
								experience a peak on May 11, 2022.
							</span>{" "}
							Then for the{" "}
							<span>
								green line is the prediction of the number of
								individuals who recover over time.
							</span>{" "}
							It can be seen that the green curve will be higher
							because the number of individuals recovering will
							increase based on the model previously described.
							<span>
								The yellow curve represents the estimated number
								of latent individuals over time, while the black
								curve represents the estimated number of
								individuals who have died from COVID-19 disease
								over time.
							</span>
						</p>
						<p className="center-align">
							Following are the MAPE and RMSE values for each
							case:{" "}
						</p>
					</div>
				</div>
				<div className="col s12 m6 l6">
					<div className="">
						<img src={Table} className="table-mape" />
					</div>
				</div>
				<div className="col s12 m6 l6">
					<p>
						Based on the results of the model that has been made,
						<span>
							that this outbreak will still continue to plague in
							DKI Jakarta more or less within 5 years.
						</span>{" "}
						This needs to be considered further in order to handle
						the more serious COVID-19 outbreak so that this outbreak
						does not stay in Jakarta for a very long time.{" "}
						<span>
							It should be emphasized that the results of this
							prediction are based on the assumptions of the model
							we made, each model has different results if it has
							different assumptions.
						</span>
					</p>
				</div>
			</div>
		);
	}
}
