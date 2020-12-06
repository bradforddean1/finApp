import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../../Profile/Profile/Profile";
import ProfileContext from "../../Profile/Profile/Profile.context";
import man from "../../../assets/man3.svg";
import "./SearchPage.css";

/**
 * Search Page - Implements lookup functionality for securities by symbol and displays quotes with company profile.
 * @component
 */
function SearchPage(props) {
	const [profile, setProfile] = useState({});

	return (
		<div className="SearchPage page">
			<header className="header">
				<SearchBar resultsCallback={(res) => setProfile(res)} />
			</header>
			<ProfileContext.Provider value={profile}>
				{Object.keys(profile).length < 1 ? (
					<div className="default">
						<img src={man} alt="ready to search for stocks" />
					</div>
				) : (
					<Profile />
				)}
			</ProfileContext.Provider>
		</div>
	);
}

export default SearchPage;
