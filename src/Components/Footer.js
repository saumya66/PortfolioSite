import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<Container fluid>
				<Row>
					<Col className="thanksCol">
						<p className="thank ml-5">Thank You</p>
						<p className="thankText ml-5">
							{" "}
							Just the fact that you are here is beautiful. Let's Connect !{" "}
						</p>
					</Col>
					<Col className="ml-4">
						<p className="rowHeading  ">Social</p>

						<li>
							<i className="fa fa-github" aria-hidden="true"></i> Github
						</li>
						<li>
							<i className="fa fa-twitter" aria-hidden="true"></i> Twitter
						</li>
						<li>
							<i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
						</li>
						<li>
							<i class="fa fa-youtube" aria-hidden="true"></i> YouTube
						</li>
					</Col>

					<Col className="ml-4">
						<p className="rowHeading">Blogs</p>

						<li>
							<i class="fa fa-medium" aria-hidden="true"></i> Medium
						</li>
						<li>
							<i class="fa fa-hashnode" aria-hidden="true"></i> Hashnode
						</li>
						<li></li>
						<li>
							<i class="fa fa-dev-to" aria-hidden="true"></i> Dev.to
						</li>
					</Col>

					<Col className="ml-4">
						<p className="rowHeading">Contact</p>
						<li>
							<a
								href="mailto:futuredrivenme@gmail.com
"
							>
								<i class="fa fa-envelope-open" aria-hidden="true"></i>
								{"  "}
								futuredrivenme@gmail.com
							</a>
						</li>
						<li>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							{"   "}
							Bhubaneswar,India
						</li>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
