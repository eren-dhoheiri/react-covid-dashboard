import React, {Component} from "react";
import IchsanImg from "../../assets/img/ichsan.jpg";
import AsfarImg from "../../assets/img/asfar.jpg";
import ErenImg from "../../assets/img/eren.jpg";
import WinaImg from "../../assets/img/wina.jpg";
import LisnaImg from "../../assets/img/lisna_2.jpg";
import IkhsanImg from "../../assets/img/ikhsan.jpg";
import SishiImg from "../../assets/img/sishi.jpg";
import AnggunImg from "../../assets/img/anggun.jpg";
import "materialize-css";
import "./Card.css";

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					name: "Lisna Sulistiawati",
					img: LisnaImg,
					title: "Product Owner",
					instagram: "https://www.instagram.com/nalisnana/",
					linkendin:
						"https://www.linkedin.com/in/lisna-sulistiawati-035969170/",
					desk:
						"The main responsibility product owner is represent the customer to the development team. A key activity is to manage and make visible the product backlog, or the prioritized list of requirements for future product development..",
				},
				{
					id: 2,
					name: "Asfar Jaya",
					img: AsfarImg,
					title: "Scrum Master",
					instagram: "https://www.instagram.com/diasfar/",
					linkendin:
						"https://www.linkedin.com/in/asfar-jaya-b800a9170/",
					desk:
						"Scrum Master is working behind the scenes and is not involved in product ideation or strategy. They work more as a conduit between product/line-of-business owners and development teams as a project manager.",
				},
				{
					id: 3,
					name: "Ichsan Medi",
					img: IchsanImg,
					title: "Data Scientist",
					instagram: "https://www.instagram.com/ichsanmedi/",
					linkendin:
						"https://www.linkedin.com/in/ichsan-medi-hutama-putra-99b138a9/",
					desk:
						"Analyzing large data sets of quantitative and qualitative data. They responsible to developing statistical learning models for data analysis and must have experience using statistical tools.",
				},
				{
					id: 4,
					name: "Wina Rahmawati",
					img: WinaImg,
					title: "Data Scientist",
					instagram: "https://www.instagram.com/wina_rahma/",
					linkendin: "https://www.linkedin.com/in/wina-rahmawati/",
					desk:
						"Analyzing large data sets of quantitative and qualitative data. They responsible to developing statistical learning models for data analysis and must have experience using statistical tools.",
				},
				{
					id: 5,
					name: "Eren Dhoheiri",
					img: ErenImg,
					title: "Web Developer",
					instagram: "https://www.instagram.com/erendhoheiri/",
					linkendin:
						"https://www.linkedin.com/in/eren-dhoheiri-566a71114/",
					desk:
						"The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design.",
				},
				{
					id: 6,
					name: "Ikhsan Saputro",
					img: IkhsanImg,
					title: "Support Team",
					instagram: "https://www.instagram.com/ikansaputro/",
					linkendin:
						"https://www.linkedin.com/in/ikhsan-saputro-b212b6100/",
					desk:
						"Executing all tasks assigned by the Team Leader or Manager diligently, on schedule, and to the highest standard. Participating in meetings and voicing concerns as well as suggestions for improvement.",
				},
				{
					id: 7,
					name: "Sishi Liani",
					img: SishiImg,
					title: "Support Team",
					instagram: "https://www.instagram.com/sishisalnaz/",
					linkendin: "https://www.linkedin.com/in/sishilianisalnaz/",
					desk:
						"Executing all tasks assigned by the Team Leader or Manager diligently, on schedule, and to the highest standard. Participating in meetings and voicing concerns as well as suggestions for improvement.",
				},
				{
					id: 8,
					name: "Anggun Miranda",
					img: AnggunImg,
					title: "Sales Manager",
					instagram:
						"https://www.instagram.com/anggun_indah_miranda/",
					linkendin:
						"https://www.linkedin.com/in/anggun-miranda-71300a60/",
					desk:
						"A sales manager plays a key role in the success and failure of an organization. He is the one who plays a pivotal role in achieving the sales targets and eventually generates revenue for the organization.",
				},
			],
		};
	}
	render() {
		return (
			<div>
				{this.state.data.map((p, i) => {
					return (
						<div className="col s6 m3">
							<div className="card">
								<div className="card-image waves-effect waves-block waves-light">
									<img
										className="activator img-responsive"
										src={p.img}
									/>
								</div>
								<div className="card-content">
									<h6 className="card-title activator">
										{p.name}
									</h6>
									<br />
									<h6 className="card-title activator">
										{p.title}
									</h6>
								</div>
								<div className="card-reveal">
									<h4
										className="card-title"
										key={p.id}
										id={p.id}
									>
										{p.title}
									</h4>
									<p>{p.desk}</p>
									<div className="row center-align">
										<a
											className="col s6 m6"
											href={p.instagram}
											target="blank"
										>
											<i
												className="fa fa-instagram fa-2x"
												aria-hidden="true"
											></i>
										</a>
										<a
											className="col s6 m6"
											href={p.linkendin}
											target="blank"
										>
											<i
												className="fa fa-linkedin fa-2x"
												aria-hidden="true"
											></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
