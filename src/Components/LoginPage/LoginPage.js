import React, { useState } from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import ButtonCta from "../Common/ButtonCta/ButtonCta";
import Intermodal from "../Common/Intermodal/Intermodal";
import man from "../../assets/man1.svg";
import "./LoginPage.css";
import FullHeaderPage from "../FullHeaderPage/FullHeaderPage";

/**
 * Login page root
 * @component
 */
function LoginPage(props) {
	const { referrer, push } = props;

	const [showReferrerInterstitial, setShowReferrerInterstitial] = useState(
		referrer
	);

	return (
		<FullHeaderPage>
			<>
				<img src={man} alt="man in chair looking for stocks" />
				<Login reRoute={(path) => push(path)} />
				{!!showReferrerInterstitial && (
					<Intermodal>
						<p>You are not logged in.</p>
						<ButtonCta
							tag="button"
							onClick={() => setShowReferrerInterstitial(false)}
						>
							Login
						</ButtonCta>
					</Intermodal>
				)}
			</>
		</FullHeaderPage>
	);
}

LoginPage.propTypes = {
	/**
	 * History object with push function, used to setup the reRoute function for Login.
	 */
	history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

export default LoginPage;
