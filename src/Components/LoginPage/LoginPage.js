import React, { useState } from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import Intermodal from "../Common/Intermodal/Intermodal";
import man from "../../assets/man1.png";
import "./LoginPage.scss";
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
			<div className="LoginPage">
				<img src={man} alt="man in chair looking for stocks" />
				<Login reRoute={(path) => push(path)} />
				<Intermodal
					show={!!showReferrerInterstitial}
					close={() => setShowReferrerInterstitial(false)}
					buttons={[
						{
							tag: "button",
							onClick: () => setShowReferrerInterstitial(false),
							children: "Login",
						},
					]}
				>
					<p>You are not logged in.</p>
				</Intermodal>
			</div>
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
