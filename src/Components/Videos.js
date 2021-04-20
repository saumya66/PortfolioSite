import React from "react";
import VideoCard from "./VideoCard.js";
import videos from "../data/videos.js";
import { Col, Container, Row } from "react-bootstrap";
import "./css/Videos.css";

function Videos() {
	return (
		<div className="videos">
			<Container fluid className="  ">
				<Row className="heading-row">
					<p className="headingVideos">Videos </p>
					<a target="_blank"  href="https://saumya.hashnode.dev/">
					<p className="seemore">+ See More </p>
					</a>
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
