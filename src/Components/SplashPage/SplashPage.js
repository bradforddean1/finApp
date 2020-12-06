import React from "react";
import ButtonCta from "../Common/ButtonCta/ButtonCta";
import "./SplashPage.css";

/**
 * Splash Page Root
 * @component
 */
function SplashPage(props) {
	return (
		<div className="SplashPage">
			<div>
				<h1>Ztok</h1>
				<p>
					I am a splash page and I am supposed to tele you about this app...
				</p>
			</div>
			<ButtonCta className="cta" tag="a" href="/login">
				Go Forth
			</ButtonCta>
		</div>
	);
}

export default SplashPage;
