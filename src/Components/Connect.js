import React from "react";
import "./css/Connect.css";
import { Row, Col, Container } from "react-bootstrap";
import social from "../assets/logos/socials/socials.png";
import dev from "../assets/logos/socials/dev.png";
import github from "../assets/logos/socials/github.png";
import hashnode from "../assets/logos/socials/hashnode.png";
import quora from "../assets/logos/socials/quora.png";
import youtube from "../assets/logos/socials/youtube.png";
import web from "../assets/logos/socials/web.png";
import stack from "../assets/logos/socials/StackOverflow.png";
import linkedin from "../assets/logos/socials/linkedin.png";
import twitter from "../assets/logos/socials/twitter.png";
import medium from "../assets/logos/socials/medium.png";

function Connect() {
	return (
		<div className="connect">
			<Container fluid>
				<p className="headingC mt-4">Let's Connect </p>
				<Row>
					<Col className="col-md-7">
						<img
							className="icon-item mr-5 mt-4"
							src={linkedin}
							alt=""
							height={80}
						/>
						<img
							className="icon-item mr-5 mt-4"
							src={twitter}
							alt=""
							height={80}
						/>
						<img
							className="icon-item mr-5 mt-4"
							src={github}
							alt=""
							height={80}
						/>
						<img
							className="icon-item mr-5 mt-4"
							src={youtube}
							alt=""
							height={80}
						/>
						<img
							className="icon-item mr-5 mt-4"
							src={medium}
							alt=""
							height={100}
						/>
						<img
							className="icon-item mr-5 mt-4"
							src={hashnode}
							alt=""
							height={80}
						/>
						<img className="icon-item mr-5 mt-4" src={dev} alt="" height={80} />

						<img
							className="icon-item mr-5 mt-4"
							src={stack}
							alt=""
							height={80}
						/>
						<img
							className="icon-item mr-5 mt-4"
							src={quora}
							alt=""
							height={80}
						/>
					</Col>
					<Col className="col-md-5 mt-3 ">
						<img src={social} alt="" height={400} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Connect;
