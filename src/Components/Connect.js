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
				<h5 className="headingC mt-4">Let's Connect </h5>
				<Row>
					<Col className="col-md-7">
						<a target="_blank" href="https://www.linkedin.com/in/saumya66">
							<img
								className="icon-item mr-5 mt-4"
								src={linkedin}
								alt=""
								height={80}
							/>
						</a>
						<a target="_blank" href="https://twitter.com/saumya4real">
							<img
								className="icon-item mr-5 mt-4"
								src={twitter}
								alt=""
								height={80}
							/>
						</a>
						<a target="_blank" href="https://github.com/saumya66">
							<img
								className="icon-item mr-5 mt-4"
								src={github}
								alt=""
								height={80}
							/>
						</a>
						<a
							target="_blank"
							href="https://www.youtube.com/channel/UCx-HdHfKu1rXgNIfNaKMsAA"
						>
							<img
								className="icon-item mr-5 mt-4"
								src={youtube}
								alt=""
								height={80}
							/>
						</a>
						<a target="_blank" href="https://medium.com/saumya-ranjan-nayak">
							<img
								className="icon-item mr-5 mt-4"
								src={medium}
								alt=""
								height={100}
							/>
						</a>
						<a target="_blank" href="https://saumya.hashnode.dev/">
							<img
								className="icon-item mr-5 mt-4"
								src={hashnode}
								alt=""
								height={80}
							/>
						</a>
						<a target="_blank" href="https://dev.to/saumya66">
							<img
								className="icon-item mr-5 mt-4"
								src={dev}
								alt=""
								height={80}
							/>
						</a>
						<a
							target="_blank"
							href="https://stackoverflow.com/users/13484967/saumya"
						>
							<img
								className="icon-item mr-5 mt-4"
								src={stack}
								alt=""
								height={80}
							/>
						</a>
						<a
							target="_blank"
							href="https://www.quora.com/profile/Saumya-Ranjan-Nayak-14"
						>
							<img
								className="icon-item mr-5 mt-4"
								src={quora}
								alt=""
								height={80}
							/>
						</a>
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
