import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ApplicationError from "../ApplicationError/ApplicationError";
import SplashPage from "../SplashPage/SplashPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchPage from "../Search/SearchPage/SearchPage";
import PortfolioPage from "../Portfolio/PortfolioPage/PortfolioPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NavBar from "../NavBar/NavBar";
import { logout } from "../../api/serverRequest";
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
								logout();
								return (
									<Redirect
										to={{
											pathname: "/login",
										}}
									/>
								);
							}}
						/>
						{/* request("GET", "api/auth/logout"); */}
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
