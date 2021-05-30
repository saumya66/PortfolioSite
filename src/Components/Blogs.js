import React from "react";
import blogs from "../data/blogs.js";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Blogs.css";
import BlogCard from "./BlogCard.js";

function Blogs() {
	return (
		<div className="blogs ml-3">
			<Container fluid className="cont1" xs={12}>
				<Row className="heading-row">
					<p className="heading1">Blogs </p>
					<a target="_blank" href="https://saumya.hashnode.dev/">
						<p className="seemore-blog">+ See More </p>
					</a>
				</Row>
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
		</div>
	);
}

export default Blogs;
