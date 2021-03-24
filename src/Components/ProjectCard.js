import React from "react";

import "./css/ProjectCard.css";

function ProjectCard(props) {
	return (
		<figure class="snip1529">
			<img src={props.thumbNail} alt={props.title} />

			<figcaption>
				<h3>{props.title}</h3>
				<p>{props.desc}</p>
			</figcaption>
			<div class="hover">
				<i class="fa fa-link" aria-hidden="true"></i>
			</div>
			<a href={props.url}></a>
		</figure>
	);
}

export default ProjectCard;
/*<div class="cardP">
			<h3 class="title">Card 1</h3>
		</div>*/
