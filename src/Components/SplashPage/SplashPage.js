import React from "react";
import ButtonCta from "../Common/ButtonCta/ButtonCta";
import FullHeaderPage from "../FullHeaderPage/FullHeaderPage";
import "./SplashPage.css";

/**
 * Splash Page Root
 * @component
 */
function SplashPage(props) {
	return (
		<FullHeaderPage>
			<div className="SplashPage">
				<div>
					<p>
						Ztock is here to pull realtime quotes with key financial metrics for
						domestic stocks. Search for a stock with a valid ticker symbol and
						you'll get a real time quote with the copanies profile and key
						financial indicators. You can choose to add the stock to your
						portfolio to monitor an unlimited number of stocks.
					</p>
					<p>
						You'll need an account to access Ztocks featutres. You can create
						your own or use the demo account to take a look around.
					</p>
					<div className="demo">
						<span className="credentials">User: demo</span>
						<span className="credentials">Password: testing123</span>
					</div>
				</div>

				<ButtonCta className="cta" tag="a" href="/login">
					Go Forth
				</ButtonCta>
			</div>
		</FullHeaderPage>
	);
}

export default SplashPage;
