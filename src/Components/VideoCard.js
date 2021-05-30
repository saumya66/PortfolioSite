import React from "react";
import { Col } from "react-bootstrap";
import pic from "../assets/er.webp";
import "./css/VideoCard.css";

function VideoCard(props) {
	return (
		<Col>
			<a href={props.url}>
				<figure class="snip1529">
					<img className="thumbNail" loading="lazy" src={props.thumbNail} />
					<figcaption>
						<h3>{props.title}</h3>
					</figcaption>
					<div class="hover">
						<i class="fa fa-play" aria-hidden="true"></i>
					</div>
				</figure>
				{/* <div class="videocard">
					<img  src={props.thumbNail} />
				</div> */}
			</a>
		</Col>
	);
}

export default VideoCard;
