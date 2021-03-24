import React from "react";
import "./css/BlogCard.css";
import { Col } from "react-bootstrap";

function BlogCard(props) {
	return (
		<Col>
			<a href={props.url}>
				<div className="blogcard">
					<img className="blogthumb" src={props.thumbNail} alt={props.title} />
				</div>
			</a>
		</Col>
	);
}

export default BlogCard;
