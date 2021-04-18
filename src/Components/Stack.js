import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Stack.css";
import TwitterContainer from "./TwitterContainer";
import boot from "../assets/logos/tech/boot.png";
import colab from "../assets/logos/tech/colab.png";
import cpp from "../assets/logos/tech/cpp.png";
import css from "../assets/logos/tech/css.png";
import express from "../assets/logos/tech/express.png";
import fast from "../assets/logos/tech/fast.png";
import git from "../assets/logos/tech/git.png";
import github from "../assets/logos/tech/github.png";
import html from "../assets/logos/tech/html.png";
import java from "../assets/logos/tech/java.png";
import js from "../assets/logos/tech/js.png";
import ts from "../assets/logos/tech/ts.png";
import jupyter from "../assets/logos/tech/jupyter.png";
import matplot from "../assets/logos/tech/matplot.png";
import mongodb from "../assets/logos/tech/mongodb.png";
import nodejs from "../assets/logos/tech/nodejs.png";
import numpy from "../assets/logos/tech/numpy.png";
import tenorflow from "../assets/logos/tech/tenorflow.png";
import scik from "../assets/logos/tech/scik.png";
import react from "../assets/logos/tech/react.png";
import pytorch from "../assets/logos/tech/pytorch.png";
import py from "../assets/logos/tech/py.png";
import TechIcon from "./Techicon";

function Stack() {
	const techIcons = [
		{ cp: cpp, nm: "C++" },
		{ cp: py, nm: "Python" },
		{ cp: js, nm: "Javascript" },
		{ cp: ts, nm: "TypeScript" },
		{ cp: java, nm: "Java" },
		{ cp: react, nm: "React" },
		{ cp: mongodb, nm: "Mongodb" },
		{ cp: express, nm: "Express" },
		{ cp: boot, nm: "Bootstrap" },
		{ cp: tenorflow, nm: "Tensorflow" },
                
		{ cp: fast, nm: "FastAI" },
		{ cp: matplot, nm: "Matplotlib" },
		{ cp: numpy, nm: "NumPy" },
		{ cp: scik, nm: "Scikit Learn" },
		{ cp: css, nm: "Css" },
		{ cp: html, nm: "Html" },
		{ cp: git, nm: "Git" },
		{ cp: github, nm: "Github" },

		{ cp: colab, nm: "Colab" },
		{ cp: jupyter, nm: "Jupyter" },
	];

	return (
		<div className="ml-3">
			<Row>
				<Container fluid className="stack1" xs={12}>
					<Row>
						<h5 className="headingTechStack">Tech I am familiar with </h5>

						{techIcons.map((techIcon) => (
							<TechIcon imgpath={techIcon.cp} title={techIcon.nm} />
						))}
					</Row>
				</Container>

				<Container fluid className="cont2 " xs={0}>
					<Col>
						<TwitterContainer />
					</Col>
				</Container>
			</Row>
		</div>
	);
}

export default Stack;
