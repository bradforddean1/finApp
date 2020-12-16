import React, { useContext, useState } from "react";
import Header from "../ProfileHeader/ProfileHeader";
import Card from "../ProfileCard/ProfileCard";
import ProfileContext from "./Profile.context";
import ButtonAdd from "../../Common/ButtonAdd/ButtonAdd";
import ButtonCta from "../../Common/ButtonCta/ButtonCta";
import Intermodal from "../../Common/Intermodal/Intermodal";
import { authenticatedRequest } from "../../../Utils/api/serverRequest";
import "./Profile.css";

/**
 * Display securities Profile from Profile context
 * @component
 */

function Profile(props) {
	const [showIntermodal, setShowIntermodal] = useState(false);
	const [intermodalContent, setIntermodalContent] = useState();

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

	const handleUndo = () => {
		// setShowIntermodal(false);
		// authenticatedRequest("POST", endpoint, body).then((Response) => {
		// 	if (Response.status === 201) {
		// 	}
		// });
	};

	const addToPortfolio = () => {
		const endpoint = "api/portfolio";
		const body = { ticker: ticker };

		authenticatedRequest("POST", endpoint, body).then((Response) => {
			if (Response.status === 201) {
				setIntermodalContent(
					<>
						<p>{ticker} has been added to your portfolio</p>
						<ButtonCta tag="button" onClick={handleUndo}>
							Undo
						</ButtonCta>
						<ButtonCta tag="a" href="/portfolio">
							Go To Portfolio
						</ButtonCta>
					</>
				);
				setShowIntermodal(true);
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
				values={[finnhubIndustry, marketCapitalization, shareOutstanding]}
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
			<Intermodal show={showIntermodal} close={() => setShowIntermodal(false)}>
				{intermodalContent}
			</Intermodal>
		</div>
	);
}

export default Profile;
