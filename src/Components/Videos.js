import React from "react";
import VideoCard from "./VideoCard.js";
import videos from "../data/videos.js";
import { Col, Container, Row } from "react-bootstrap";
import "./css/Videos.css";

function Videos() {
	return (
		<div className="videos">
			<Container fluid className="  ">
				<Row>
					<p className="headingVideos">Videos </p>
				</Row>
				<Row className="cardRow">
					{videos.map((video) => (
						<VideoCard
							url={video.url}
							thumbNail={video.thumbNail}
							title={video.title}
						/>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Videos;
