import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import PortfolioList from "../PortfolioList/PortfolioList";
import man from "../../../assets/man2.svg";
import background from "../../../assets/elipse.svg";
import "./PortfolioPage.css";
import { authenticatedRequest } from "../../../Utils/api/serverRequest";

/**
 * Portfolio Page displays summary cards for securities saved by user.
 * @component
 */
function PortfolioPage(props) {
	const [portfolioItems, setPortfolioItems] = useState([]);

	const fetchPortfolio = () => {
		authenticatedRequest("GET", "api/portfolio")
			.then((Response) => Response.json())
			.then((portfolio) => {
				setPortfolioItems(portfolio);
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

	useEffect(() => {
		fetchPortfolio();
	}, []);

	return (
		<div className="PortfolioPage page">
			{portfolioItems.length < 1 ? (
				<div
					className="empty-portfolio"
					style={{ backgroundImage: `url(${background})` }}
				>
					<p>Your Portfolio is Empty!</p>
					<img src={man} alt="looking for stocks" />
				</div>
			) : (
				<PortfolioList items={portfolioItems} />
			)}
		</div>
	);
}

PortfolioPage.propTypes = {
	portfolioItems: PropTypes.array,
};

PortfolioPage.defaultProps = {
	portfolioItems: [],
};

export default PortfolioPage;
