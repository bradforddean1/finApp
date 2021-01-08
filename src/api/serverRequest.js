import axios from "axios";
import session from "../utils/session";
import { SERVER_ROOT } from "../config";

const api = axios.create({
	baseURL: SERVER_ROOT.concat("/"),
	timeout: 10000,
	withCredentials: true,
	// headers: { "X-Custom-Hheeader": "foobar" },
});

// REQUEST USING AXIOS USE THIS
const handleApiResponse = (response) => {
	if (response.status === 401) {
		const err = new Error(
			response.data && response.data.status
				? response.data.status
				: "unauthorized"
		);
		err.type = "UNAUTHORIZED";

		err.passValErrors =
			response.data && response.data.valErrors
				? response.data.valErrors
				: false;

		throw err;
	} else if (!response.status.toString().charAt(0) === "2") {
		const err = new Error(response.data.status);
		err.type = "REQUESTERROR";
		throw err;
	}
	return response;
};

// REQUESTS USING FETCH USE THIS
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

const getTickerProfile = (ticker) => {
	// USING AXIOS //
	const query = api
		.get(`api/quote/${ticker}/profile`, { withCredentials: true })
		.then((result) => {
			if (result.status === "no match") {
				const err = new Error(`No match found for ${ticker}.`);
				err.type = "REQUESTERROR";
				throw err;
			}
			return result;
		})
		.then((res) => {
			return handleApiResponse(res).data.profile;
		});
	return query;

	// USING FETCH //
	// return handleApiResponse(query); //.then((data) => data.profile);

	// return handleApiResponse(query);

	// return request("GET", `api/quote/${ticker}/profile`).then((result) => {
	// 	if (result.status === "no match") {
	// 		const err = new Error(`No match found for ${ticker}.`);
	// 		err.type = "REQUESTERROR";
	// 		throw err;
	// 	}
	// 	return result.profile;
	// });
};

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
	const body = { username: username, password: password };
	return api
		.post("api/auth/login", body, { withCredentials: true })
		.then((response) => {
			console.log("here");
			console.log(response);
			session.setSession(response.headers["Set-Cookie"]);
		});
	// return request("POST", "api/auth/login", body).then(()=>{});
};

const register = (username, password) => {
	const body = { username: username, password: password };
	return request("POST", "api/auth/register", body);
};

const logout = () => {
	request("GET", "api/auth/logout")
		// .then(() => {
		// 	session.removeSession();
		// })
		.catch((error) => {
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
