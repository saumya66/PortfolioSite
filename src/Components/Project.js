import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Project.css";
import projects from "../data/projects.js";

function Project() {
	return (
		<div className="project">
			<Container fluid className="mt-1">
				<Row className="heading-row">
					<p className="headingProject">Projects </p>
					<a target="_blank"  href="https://github.com/saumya66">
					<p className="seemore-project">+ See More </p>
					</a>
				</Row>
				<Row className="cardRow ">
					{projects.map((project) => (
						<ProjectCard
							url={project.url}
							thumbNail={project.thumbNail}
							desc={project.desc}
							title={project.title}
						/>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Project;
