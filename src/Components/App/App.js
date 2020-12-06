import React from "react";
import { Route, Switch } from "react-router-dom";
import SplashPage from "../SplashPage/SplashPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchPage from "../Search/SearchPage/SearchPage";
import PortfolioPage from "../Portfolio/PortfolioPage/PortfolioPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NavBar from "../NavBar/NavBar";
import "./App.css";

/**
 * Applicaton
 * Router Root
 * @component
 */
function App(props) {
	return (
		<div className="App">
			<main className="main-content">
				<Switch>
					<Route exact path="/" component={SplashPage} />
					<Route path="/portfolio" component={PortfolioPage} />
					<Route path="/search" component={SearchPage} />
					<Route path="/login" component={LoginPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
			<footer className="sticky-footer">
				<Route exact path="/portfolio" component={NavBar} />
				<Route path="/search" component={NavBar} />
			</footer>
		</div>
	);
}

export default App;
