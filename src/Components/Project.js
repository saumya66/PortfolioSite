import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Project.css";

function Project() {
	return (
		<div className="project ">
			<Container fluid className="mt-1">
				<Row>
					<p className="headingProject">Projects </p>
				</Row>
				<Row>
					<Col className="ml-4">
						<ProjectCard />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Project;
