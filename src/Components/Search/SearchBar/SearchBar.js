import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { request } from "../../../Utils/api/serverRequest";
import Search from "../../Common/icons/SearchIcon/SearchIcon";
import ValidationError from "../../Common/ValidationError/ValidationError";
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
		request("GET", endpoint)
			.then((result) => {
				if (result.status === "no match") {
					const err = new Error(result.status);
					err.type = "REQUESTERROR";
					throw err;
				}
				props.resultsCallback(result.profile);
			})
			.catch((err) => {
				if (err.type === "UNAUTHORIZED") {
					<Redirect
						to={{
							pathname: "/login",
							state: { referrer: "servAuthError" },
						}}
					/>;
				} else if (err.type === "REQUESTERROR") {
					switch (err.message) {
						case "no match":
							setValError(`No match found for ${ticker}.`);
							break;
						case "invalid format":
							setValError("Ticker can be a maximum of 6 characters");
							break;
						default:
							setValError("Unexpected error, try again");
							break;
					}
				} else {
					throw err;
				}
			});
	};

	return (
		<div className="SearchBar">
			<div className="bar">
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
			</div>
			<ValidationError>{valError}</ValidationError>
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
