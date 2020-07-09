import React, {Component} from "react";
import TableauReport from "tableau-react";
import "./Tableau.css";

const options = {
	height: 1300,
	width: "110%",
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
				<h3 className="center-align">Dashboard</h3>
				<div className="row">
					<h5>
						Model overview dashboard discusses models that have been
						made especially in DKI Jakarta along with comparison of
						model results with actual data.
					</h5>
					<div className="col s12 m12 l12">
						<div className="tableau-content">
							<TableauReport
								url="https://public.tableau.com/views/COVID-19DKIJakartaDashboard1_9/ModelOverview?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
								// filters={filters}
								options={options} // vizCreate options
								refreshSeconds={refreshSeconds}
							/>
						</div>
					</div>
					<h5>
						Dashboard effects on celerates is a dashboard that
						discusses models that have been made specifically in the
						East Cilandak region to see the impact of Covid-19 on
						Celerates.
					</h5>
					<div className="col s12 m12 l12">
						<div className="tableau-content">
							<TableauReport
								url="https://public.tableau.com/views/COVID-19DKIJakartaDashboard1_7/COVID-19EffectsonCelerates?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
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
