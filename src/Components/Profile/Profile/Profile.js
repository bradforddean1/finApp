import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../ProfileHeader/ProfileHeader";
import Card from "../ProfileCard/ProfileCard";
import ProfileContext from "./Profile.context";
import ButtonAdd from "../../Common/ButtonAdd/ButtonAdd";
import Intermodal from "../../Common/Intermodal/Intermodal";
import { request } from "../../../Utils/api/serverRequest";
import "./Profile.css";

/**
 * Display securities Profile from Profile context
 * @component
 */

function Profile(props) {
	const [showIntermodal, setShowIntermodal] = useState(false);
	const [intermodalContent, setIntermodalContent] = useState({
		children: null,
		buttons: [],
	});

	const {
		name,
		logo,
		currency,
		exchange,
		website,
		country,
		ipo,
		current,
		change,
		changePct,
		ticker,
		finnhubIndustry,
		marketCapitalization,
		shareOutstanding,
		peNormalizedAnnual,
		pbAnnual,
		dividendPerShareAnnual,
		dividendYieldIndicatedAnnual,
		dividendPerShare5Y,
		dividendYield5Y,
		dividendGrowthRate5Y,
		epsBasicExclExtraItemsAnnual,
		epsGrowth3Y,
		epsGrowth5Y,
		epsGrowthTTMYoy,
		currentRatioAnnual,
		currentRatioQuarterly,
	} = useContext(ProfileContext);

	const launchModal = (content) => {
		setIntermodalContent(content);
		setShowIntermodal(true);
	};

	const handleUndo = () => {
		setShowIntermodal(false);
		// authenticatedRequest("POST", endpoint, body).then((Response) => {
		// 	if (Response.status === 201) {
		// 	}
		// });
	};

	const addToPortfolio = () => {
		const endpoint = "api/portfolio";
		const body = { ticker: ticker };

		request("POST", endpoint, body)
			.then((Response) => {
				launchModal({
					children: <p>{ticker} has been added to your portfolio</p>,
					buttons: [
						{ tag: "button", children: "Undo", onClick: handleUndo },
						{ tag: "a", children: "Go To Portfolio", href: "/portfolio" },
					],
				});
			})
			.catch((err) => {
				console.log(err);
				if (err.type === "UNAUTHORIZED") {
					<Redirect
						to={{
							pathname: "/login",
							state: { referrer: "servAuthError" },
						}}
					/>;
				} else {
					launchModal({
						children: (
							<p>
								{err.message === "ticker already exists for user"
									? `${ticker} is already in this portfolio`
									: `Unable to add ${ticker} to portfolio.`}
							</p>
						),
						buttons: [
							{
								tag: "button",
								children: "Go Back",
								onClick: () => setShowIntermodal(false),
							},
						],
					});
				}
			});
	};

	return (
		<div className="Profile panel">
			<Header
				name={name}
				ticker={ticker}
				logo={logo}
				currency={currency}
				exchange={exchange}
				website={website}
				country={country}
				ipo={ipo}
				current={current}
				change={change}
				changePct={changePct}
			/>
			<Card
				title="Segment"
				metrics={["Industry", "Market Capitalization", "Shares Outstanding"]}
				values={[finnhubIndustry, marketCapitalization.toString(), shareOutstanding.toString()]}
			/>
			<Card
				title="Stablity"
				metrics={["Current Ratio Annual", "Current Ratio Quarterly"]}
				values={[currentRatioAnnual, currentRatioQuarterly]}
			/>
			<Card
				title="Value"
				metrics={["PE Ratio", "Price to Book Ratio"]}
				values={[peNormalizedAnnual, pbAnnual]}
			/>
			<Card
				title="Profitability"
				metrics={[
					"Earnigns Per Share",
					"EPS Growth 3Y",
					"EPS Growth 5Y",
					"EPS Growth TTM YOY",
				]}
				values={[
					epsBasicExclExtraItemsAnnual,
					epsGrowth3Y,
					epsGrowth5Y,
					epsGrowthTTMYoy,
				]}
			/>
			<Card
				title="Dividends"
				metrics={[
					"Dividends Per Share Annual",
					"Dividend Yield Indicated Annual",
					"Dividend Per Share 5Y",
					"Dividend Yield 5Y",
					"Dividend Growth Rate 5Y",
				]}
				values={[
					dividendPerShareAnnual,
					dividendYieldIndicatedAnnual,
					dividendPerShare5Y,
					dividendYield5Y,
					dividendGrowthRate5Y,
				]}
			/>
			<ButtonAdd className="add" tag="button" handleClick={addToPortfolio} />
			<Intermodal
				show={showIntermodal}
				close={() => setShowIntermodal(false)}
				buttons={intermodalContent.buttons}
			>
				{intermodalContent.children}
			</Intermodal>
		</div>
	);
}

export default Profile;
