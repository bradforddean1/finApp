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
			<div className="panel">
				<p>
					I am a splash page and I am supposed to tele you about this app...
				</p>

				<ButtonCta className="cta" tag="a" href="/login">
					Go Forth
				</ButtonCta>
			</div>
		</FullHeaderPage>
	);
}

export default SplashPage;
