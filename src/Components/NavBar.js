import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

import { Link, animateScroll as scroll } from "react-scroll";

import "./css/NavBar.css";
function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>
				<h5 className="brand">Saumya Ranjan Nayak</h5>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							About
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link
							activeClass="active"
							to="stack"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Stack
						</Link>
					</Nav.Link>{" "}
					<Nav.Link>
						<Link
							activeClass="active"
							to="project"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Projects
						</Link>
					</Nav.Link>{" "}
					<Nav.Link>
						{" "}
						<Link
							activeClass="active"
							to="blogs"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Blogs
						</Link>
					</Nav.Link>
					<Nav.Link>
						{" "}
						<Link
							activeClass="active"
							to="videos"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Videos
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
