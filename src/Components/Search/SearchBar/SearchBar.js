import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { authenticatedRequest } from "../../../Utils/api/serverRequest";
import Search from "../../Common/icons/SearchIcon/SearchIcon";
import "./SearchBar.css";

/**
 * Search Bar Form for securties lookup, queries and returns server response.
 * @component
 */
function SearchBar(props) {
	const [ticker, setTicker] = useState("");
	const [valError, setValError] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		setValError("");
		const endpoint = `api/quote/${ticker}/profile`;
		authenticatedRequest("GET", endpoint)
			.then((Response) => Response.json())
			.then((result) => {
				props.resultsCallback(result.profile);
			})
			.catch((err) => {
				if (err.message === "UNAUTHORIZED") {
					<Redirect
						to={{
							pathname: "/login",
							state: { referrer: "servAuthError" },
						}}
					/>;
				}
			});
	};

	return (
		<div className="SearchBar">
			<input
				type="text"
				name="ticker"
				id="ticker"
				placeholder="Search by ticker symbol..."
				value={ticker}
				onChange={(e) => setTicker(e.target.value)}
			/>
			<button className="form-button" type="button" onClick={handleSubmit}>
				<Search color={"#000"} />
			</button>
			<div>{valError}</div>
		</div>
	);
}

SearchBar.propTypes = {
	/**
	 * Callback funciton to pass query results to parent
	 */
	resultsCallback: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {};

export default SearchBar;
