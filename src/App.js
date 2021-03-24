import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage.js";
import About from "./Components/About.js";
import Stack from "./Components/Stack.js";
import Project from "./Components/Project.js";
import Blogs from "./Components/Blogs.js";
import Videos from "./Components/Videos.js";
import Connect from "./Components/Connect.js";
import Footer from "./Components/Footer.js";

import NavBar from "./Components/NavBar.js";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<HomePage title="Home" dark={true} id="home" />

				<About title="About" dark={true} id="about" />
				<Stack title="Stack" dark={true} id="stack" />
				<Project title="Project" dark={true} id="project" />
				<Blogs title="Blogs" dark={true} id="blogs" />
				<Videos title="Videos" dark={true} id="videos" />
				<Connect />
				<Footer />
			</div>
		);
	}
}

export default App;
