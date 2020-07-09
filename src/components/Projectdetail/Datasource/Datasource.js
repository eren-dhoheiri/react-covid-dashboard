import React, {Component} from "react";
import "./Datasource.css";

export default class Datasource extends Component {
	render() {
		const source =
			"https://riwayat-file-covid-19-dki-jakarta-jakartagis.hub.arcgis.com/";
		const data =
			"https://docs.google.com/spreadsheets/d/1KMzo7y-fcDHVIKj8V_fpOeyNfCwXlb9E/edit#gid=1262556570";
		return (
			<div id="datasource">
				<div className="col s12 m12 l12">
					<h4>Data Source</h4>

					<p>
						The data we obtained came from{" "}
						<a href={source}> jakartagis.hub.arcgis.com </a>
						which{" "}
						<span>began on March 25, 2020 until June 10, 2020</span>
						Furthermore, the data we have taken cleansing can be
						done such as the selection of columns that will be used
						to obtain COVID-19 historical data in all administration
						cities in Jakarta every day. We also group the data by
						time to obtain COVID-19 case data in all areas of DKI
						Jakarta, as well as to obtain COVID-19 case data
						specifically in Pasar Minggu District and Cilandak Timur
						Subdistrict because this region is the office address of
						Celerates. If you want to see our data in this model,
						you can download by press the below button.
					</p>
					<a href={data} target="_blank" className="btn">
						Our Data
					</a>
				</div>
			</div>
		);
	}
}
