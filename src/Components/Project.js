import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Project.css";
import projects from "../data/projects.js";

function Project() {
	return (
		<div className="project">
			<Container fluid className="mt-1">
				<Row>
					<p className="headingProject">Projects </p>
				</Row>
				<Row className="ml-1">
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
