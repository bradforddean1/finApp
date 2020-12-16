import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Search from "../Common/icons/SearchIcon/SearchIcon";
import folder from "../../assets/folder.svg";
import exit from "../../assets/exit.svg";

/**
 * App naviagation bar
 * @component
 */
function NavBar(props) {
	return (
		<div className="NavBar bg-primary">
			<Link to="/search">
				<figure>
					<Search color={"#fff"} />
					<figcaption>Search</figcaption>
				</figure>
			</Link>
			<Link to="/portfolio">
				<figure>
					<img src={folder} alt="folder" />
					<figcaption>Portfolio</figcaption>
				</figure>
			</Link>
			<Link to="/logout">
				<figure>
					<img src={exit} alt="exit" />
					<figcaption>Logout</figcaption>
				</figure>
			</Link>
		</div>
	);
}

export default NavBar;
