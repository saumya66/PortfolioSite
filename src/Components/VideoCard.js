import React from "react";
import { Col } from "react-bootstrap";
import pic from "../assets/er.webp";
import "./css/VideoCard.css";

function VideoCard(props) {
	return (
		<Col>
			<a href={props.url}>
				<div class="videocard">
					<img className="thumbNail" src={props.thumbNail} />
				</div>
			</a>
		</Col>
	);
}

export default VideoCard;
