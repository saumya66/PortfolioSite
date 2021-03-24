import React from "react";
import blogs from "../data/blogs.js";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Blogs.css";
import BlogCard from "./BlogCard.js";
import TwitterContainer from "./TwitterContainer";

function Blogs() {
	return (
		<div className="blogs ml-3">
			<Row>
				<Container fluid className="cont1" xs={12}>
					<p className="heading1">Recent Blogs </p>
					<Row className="ml-2">
						<div class="container">
							{blogs.map((blog) => (
								<BlogCard
									url={blog.url}
									thumbNail={blog.thumbNail}
									title={blog.title}
								/>
							))}
						</div>
					</Row>
				</Container>
				<Container fluid className="cont2 " xs={0}>
					<Col>
						<TwitterContainer />
					</Col>
				</Container>
			</Row>
		</div>
	);
}

export default Blogs;
