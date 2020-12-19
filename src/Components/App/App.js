import React from "react";
import { Route, Switch } from "react-router-dom";
import ApplicationError from "../ApplicationError/ApplicationError";
import SplashPage from "../SplashPage/SplashPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchPage from "../Search/SearchPage/SearchPage";
import PortfolioPage from "../Portfolio/PortfolioPage/PortfolioPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NavBar from "../NavBar/NavBar";
import { authenticatedRequest } from "../../Utils/api/serverRequest";
import "./App.css";

/**
 * Applicaton
 * Router Root
 * @component
 */
function App(props) {
	const getLoginComponent = ({ history, location }) => {
		const referrer = location.state ? location.state.referrer : false;
		return <LoginPage referrer={referrer} push={history.push} />;
	};

	return (
		<div className="App">
			<ApplicationError>
				<main className="main-content">
					<Switch>
						<Route exact path="/" component={SplashPage} />
						<Route path="/portfolio" component={PortfolioPage} />
						<Route path="/search" component={SearchPage} />
						<Route
							path="/login"
							component={(props) => {
								return getLoginComponent(props);
							}}
						/>
						<Route
							path="/logout"
							component={(props) => {
								authenticatedRequest("GET", "api/auth/logout");
								return getLoginComponent(props);
							}}
						/>
						{/* authenticatedRequest("GET", "api/auth/logout"); */}
						<Route component={NotFoundPage} />
					</Switch>
				</main>
				<footer className="sticky-footer">
					<Route exact path="/portfolio" component={NavBar} />
					<Route path="/search" component={NavBar} />
				</footer>
			</ApplicationError>
		</div>
	);
}

export default App;
