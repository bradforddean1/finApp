import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ApplicationError from "../ApplicationError/ApplicationError";
import SplashPage from "../SplashPage/SplashPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchPage from "../Search/SearchPage/SearchPage";
import PortfolioPage from "../Portfolio/PortfolioPage/PortfolioPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NavBar from "../NavBar/NavBar";
import TokenService from "../../services/tokenService";
import "./App.scss";

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
						<Redirect
							from="/Auth-error"
							to={{
								pathname: "/login",
								state: { referrer: "servAuthError" },
							}}
						/>
						<Route
							path="/logout"
							component={(props) => {
								TokenService.clearAuthToken();
								return (
									<Redirect
										to={{
											pathname: "/login",
										}}
									/>
								);
							}}
						/>
						<Route component={NotFoundPage} />
					</Switch>
				</main>
				<nav className="responsive-nav">
					<Route exact path="/portfolio" component={NavBar} />
					<Route path="/search" component={NavBar} />
				</nav>
			</ApplicationError>
		</div>
	);
}

export default App;
