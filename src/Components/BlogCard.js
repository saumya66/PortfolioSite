import React from "react";
import "./css/BlogCard.css";
import { Col } from "react-bootstrap";

function BlogCard(props) {
	return (
		<Col>
			<a href={props.url}>
				<figure class="snip1529">
					<img
						className="thumbNail1"
						loading="lazy"
						src={props.thumbNail}
						alt={props.title}
					/>

					<div class="hover">
						<i class="fa fa-link" aria-hidden="true"></i>
					</div>
					<a href={props.url}></a>
				</figure>
			</a>
		</Col>
	);
}

export default BlogCard;
