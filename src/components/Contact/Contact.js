import React from "react";
import Logo from "../../assets/img/logo_white.png";
import "./Contact.css";

const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<div className="row">
					<div className="col s12 m2">
						<a href="http://www.celerates.com" target="blank">
							<img className="responsive-img" src={Logo} />
						</a>
					</div>
					<div className="col s12 m3">
						<h5>Contact</h5>
						<p>
							E-mail Befriending :<br />
							<a
								href="mailto: contact@celerates.com"
								target="blank"
							>
								contact@celerates.com
							</a>
						</p>
						<div className="row">
							<a
								className="col m12"
								href="https://www.instagram.com/celerates.id"
								target="blank"
							>
								<i
									className="fa fa-instagram fa-2x"
									aria-hidden="true"
								></i>
								<span>&nbsp;&nbsp; @Celerates.id</span>
							</a>
							<br />
							<br />
							<a
								className="col m12"
								href="https://www.facebook.com/celerates/"
								target="blank"
							>
								<i
									className="fa fa-facebook fa-2x"
									aria-hidden="true"
								></i>
								<span>
									&nbsp;&nbsp;&nbsp;&nbsp; Celerates Indonesia
								</span>
							</a>
							<br />
							<br />
							<a
								className="col m12"
								href="https://open.spotify.com/show/2yuRa1qx77JwApUuGFrKCL"
								target="blank"
							>
								<i
									className="fa fa-spotify fa-2x"
									aria-hidden="true"
								></i>
								<span>&nbsp;&nbsp; Celebrum on Spotify</span>
							</a>
						</div>
					</div>
					<div className="col s12 m4">
						<h5>Head Office</h5>
						<p>
							The Manhattan Square, Mid Tower 12th Floor, Jl. TB
							Simatupang Kav. 1-S Jakarta Selatan 12560
						</p>
						<h5>Training Office</h5>
						<p>
							Jl. Kenanga Terusan No.32, Cilandak Timur, Pasar
							Minggu, Jakarta Selatan 12560
						</p>
					</div>
					<div className="col s12 m3">
						<div className="mapouter">
							<div className="gmap_canvas">
								<iframe
									height="230"
									width="230"
									id="gmap_canvas"
									src="https://maps.google.com/maps?q=Celerates&t=&z=13&ie=UTF8&iwloc=&output=embed"
									scrolling="true"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
