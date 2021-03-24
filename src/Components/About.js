import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../assets/lo.png";
import "./css/About.css";

function About() {
	return (
		<div className="about ">
			<Container fluid>
				<Row>
					<Col className="pb-4" xs={12} md={8}>
						<div className="ml-3 mt-5">
							<p className="abtText1 ">About me</p>
							<p className="abtText2">
								Goal : To solve problems here using Neural Nets. 👩‍💻✔
								<p className="abtText2">
									I am fascinated and driven by the vision of a future where
									both man and machine work together , expanding the horizon of
									the mankind's knowledge and I am keen to make it happen ..
									Creating Videos and Blogs .🙌✔
								</p>
								Space Flight Enthusiast. 🚀🚀 Books 📕🤝
							</p>
						</div>
					</Col>
					<Col className="picCol d-flex justify-content-center " xs={0} md={4}>
						<Image className="image" src={pic} alt="" height={500} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
