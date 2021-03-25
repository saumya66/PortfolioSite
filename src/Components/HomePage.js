import React from "react";
import backImg from "../assets/me1.png";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./css/HomePage.css";
import Typical from "react-typical";

function HomePage() {
	return (
		<>
			<div className="home">
				<Container fluid>
					<Row>
						<Col className="textCol" xs={{ order: "first" }} xs={12} md={6}>
							<div className="section">
								<p className="text1">Hey There ! 👋</p>
								<p className="text2">I'm Saumya </p>
								<p className="typewriteTexts ml-2">
									<Typical
										loop={Infinity}
										steps={[
											"Sophomore",
											1000,
											"Youtube Creator",
											1000,
											"Full Stack Web",
											1000,
											"Machine Learning",
											1000,
											"Deep Learning",
											1000,
											"Learning to Create Softwares",
											1000,
										]}
									/>
								</p>
							</div>
						</Col>
						<Col xs={{ order: "last" }} xs={0} md={5}>
							<Image className="myImage" src={backImg} alt="" height={650} />
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default HomePage;
