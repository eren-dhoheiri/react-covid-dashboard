import React from "react";
import Positif from "../../assets/img/kasus_terkonfirmasi.png";
import ODP from "../../assets/img/odp.png";
import PDP from "../../assets/img/pdp.png";
import Fade from "react-reveal/Fade";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
	const source =
		"https://riwayat-file-covid-19-dki-jakarta-jakartagis.hub.arcgis.com/";
	return (
		<section id="dashboard">
			<div className="container board">
				<div className="row center-align">
					<h3>Dashboard</h3>
					<div className="col m12 l12">
						<Fade left>
							<p>
								There are two dashboards. The first dashboard
								describes the model that has been created, while
								the second dashboard explains the impact of
								COVID-19 on our company, namely celerates.
							</p>
						</Fade>
					</div>
				</div>
				<div className="row">
					{/* <div className="col m4">
						<Fade right>
							<img className="responsive-img" src={Positif} />
						</Fade>
					</div> */}
					<div className="col m12">
						<Fade right>
							<img className="responsive-img" src={ODP} />
						</Fade>
					</div>
					{/* <div className="col m4">
						<Fade right>
							<img className="responsive-img" src={PDP} />
						</Fade>
					</div> */}
				</div>
				<div className="row center-align">
					<div className="m12 center-align">
						<Fade left>
							<Link to={"/tableau"} className="btn center">
								See our dashboard!
							</Link>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
