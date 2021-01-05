import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { getTickerProfile } from "../../../api/serverRequest";
import Search from "../../Common/icons/SearchIcon/SearchIcon";
import ValidationError from "../../Common/ValidationError/ValidationError";
import Spinner from "../../Common/Spinner/Spinner";
import "./SearchBar.scss";

/**
 * Search Bar Form for securties lookup, queries and returns server response.
 * @component
 */
function SearchBar(props) {
	const [ticker, setTicker] = useState("");
	const [valError, setValError] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setValError("");
		setIsLoading(true);
		getTickerProfile(ticker)
			.then((data) => {
				setIsLoading(false);
				props.resultsCallback(data);
			})
			.catch((err) => {
				setIsLoading(false);
				if (err.type === "UNAUTHORIZED") {
					history.push("/Auth-error");
				} else if (err.type === "REQUESTERROR") {
					setValError(err.message);
				} else {
					throw err;
				}
			});
	};

	return (
		<div className="SearchBar">
			<Spinner show={isLoading} />
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

export default SearchBar;
