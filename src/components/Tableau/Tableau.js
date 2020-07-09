import React, {Component} from "react";
import TableauReport from "tableau-react";
import "./Tableau.css";

const options = {
	height: 1300,
	width: "115%",
	// device: "desktop",
	// hideTabs: false,
	// All other vizCreate options are supported here, too
	// They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
};

// Number of seconds between sending Tableau data refresh requests. 0 = do not automatically refresh (default)
const refreshSeconds = 60 * 5;

const Tableau = (props) => {
	return (
		<section id="tableau">
			<div className="container-tableau">
				<h3 className="center-align">Our Dashboard</h3>
				<div className="row">
					<div className="col s12 m12 l12">
						<div className="tableau-content">
							<TableauReport
								url="https://public.tableau.com/views/ModelOverviewofCOVID-19DKIJakartaDashboard/ModelOverview?:language=en&:display_count=y&:origin=viz_share_link"
								// filters={filters}
								options={options} // vizCreate options
								refreshSeconds={refreshSeconds}
							/>
						</div>
					</div>

					<div className="col s12 m12 l12">
						<div className="tableau-content">
							<TableauReport
								url="https://public.tableau.com/views/COVID-19EffectsDashboard/COVID-19EffectsonCelerates?:language=en&:display_count=y&:origin=viz_share_link"
								// filters={filters}
								options={options} // vizCreate options
								refreshSeconds={refreshSeconds}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tableau;
