import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./css/Techicon.css";

function Techicon(props) {
	return (
		<div>
			<Col className="elem mb-1">
				<Image className="img" src={props.imgpath} />
				{"  "}
				<h5 className="name">{props.title}</h5>
			</Col>
		</div>
	);
}

export default Techicon;
