import React from "react";
import blogs from "../data/blogs.js";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Blogs.css";
import BlogCard from "./BlogCard.js";

function Blogs() {
	return (
		<div className="blogs ml-3">
			<Row>
				<Container fluid className="cont1" xs={12}>
					<p className="heading1">Blogs </p>
					<Row className="">
						{blogs.map((blog) => (
							<BlogCard
								url={blog.url}
								thumbNail={blog.thumbNail}
								title={blog.title}
							/>
						))}
					</Row>
				</Container>
			</Row>
		</div>
	);
}

export default Blogs;
