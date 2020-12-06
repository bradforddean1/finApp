import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
				<fig>
					<Search color={"#fff"} />
					<figcaption>Search</figcaption>
				</fig>
			</Link>
			<Link to="/portfolio">
				<fig>
					<img src={folder} alt="folder" />
					<figcaption>Portfolio</figcaption>
				</fig>
			</Link>
			<Link to="/login">
				<fig>
					<img src={exit} alt="exit" />
					<figcaption>Logout</figcaption>
				</fig>
			</Link>
		</div>
	);
}

NavBar.propTypes = {
	/**
	 * Example prop
	 */
	example: PropTypes.string.isRequired,
};

NavBar.defaultProps = {};

export default NavBar;
