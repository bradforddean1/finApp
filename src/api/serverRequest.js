import { SERVER_ROOT } from "../config";

const request = (method, endpoint, body) => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");

	const requestOptions = {
		method: method,
		credentials: "include",
		headers: headers,
		redirect: "follow",
	};

	body = JSON.stringify(body);

	if (body) {
		// Object.assign(requestOptions, { body });
		requestOptions.body = body;
	}

	const url = SERVER_ROOT.concat("/", endpoint);

	return fetch(url, requestOptions)
		.then((r) => {
			if (r.status === 204) {
				return { status: r.status, body: null, ok: r.ok };
			}
			return r
				.json()
				.then((data) => {
					console.log({ status: r.status, body: data, ok: r.ok });
					return { status: r.status, body: data, ok: r.ok };
				})
				.catch(() => {
					return { status: r.status, body: null, ok: r.ok };
				});
		})

		.then((response) => {
			if (response.status === 401) {
				const err = new Error(
					response.body && response.body.status
						? response.body.status
						: "unauthorized"
				);
				err.type = "UNAUTHORIZED";

				err.passValErrors =
					response.body && response.body.valErrors
						? response.body.valErrors
						: false;

				throw err;
			} else if (!response.ok) {
				const err = new Error(response.body.status);
				err.type = "REQUESTERROR";
				throw err;
			}

			return response.body;
		});
};

const getTickerProfile = (ticker) =>
	request("GET", `api/quote/${ticker}/profile`).then((result) => {
		if (result.status === "no match") {
			const err = new Error(`No match found for ${ticker}.`);
			err.type = "REQUESTERROR";
			throw err;
		}
		return result.profile;
	});

const getPortfolioItems = () => {
	return request("GET", "api/portfolio");
};

const deletePortfolioItem = (ticker, callback) => {
	const endpoint = `api/portfolio/${ticker}`;
	return request("DELETE", endpoint).then(() => {
		if (callback) {
			callback(ticker);
		}
	});
};

const addToPortfolio = (ticker) => {
	const endpoint = "api/portfolio";
	const body = { ticker: ticker };
	return request("POST", endpoint, body);
};

const login = (username, password) => {
	console.log(username, password);
	const body = { username: username, password: password };
	return request("POST", "api/auth/login", body);
};

const register = (username, password) => {
	const body = { username: username, password: password };
	return request("POST", "api/auth/register", body);
};

const logout = () => {
	request("GET", "api/auth/logout").catch((error) => {
		if (!error.type === "UNAUTHORIZED") {
			throw error;
		}
	});
};

export {
	request,
	getTickerProfile,
	getPortfolioItems,
	deletePortfolioItem,
	addToPortfolio,
	login,
	register,
	logout,
};
