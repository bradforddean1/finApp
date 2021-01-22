import axios from "axios";
import { SERVER_ROOT } from "../config";
import TokenService from "../services/tokenService";

const api = axios.create({
	baseURL: SERVER_ROOT.concat("/"),
	timeout: 10000,
	withCredentials: true,
});

// TODO: Do not create new errrors modify existing.
api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (!error.response) {
			return Promise.reject(error);
		}

		if (error.response.data.status === 401) {
			const err = new Error(
				error.response.data && error.response.data.status
					? error.response.data.status
					: "unauthorized"
			);
			err.type = "UNAUTHORIZED";

			err.passValErrors =
				error.response.data && error.response.data.valErrors
					? error.response.data.valErrors
					: false;
			return Promise.reject(err);
		} else {
			const err = new Error(error.response.data.status);
			err.type = "REQUESTERROR";
			err.passValErrors =
				error.response.data && error.response.data.valErrors
					? error.response.data.valErrors
					: false;
			return Promise.reject(err);
		}
	}
);

const buildAuthHeaders = () => {
	return { Authorization: `Bearer ${TokenService.getAuthToken()}` };
};

const getTickerProfile = (ticker) => {
	// USING AXIOS //

	const query = api
		.get(`api/quote/${ticker}/profile`, { headers: buildAuthHeaders() })
		.then((result) => {
			console.log(result.data);

			if (result.data.status === "no match") {
				const err = new Error(`No match found for ${ticker}.`);
				err.type = "REQUESTERROR";
				throw err;
			}
			return result;
		})
		.then((res) => {
			return res.data.profile;
		});
	return query;
};

const getPortfolioItems = () => {
	return api
		.get(`api/portfolio`, { headers: buildAuthHeaders() })
		.then((res) => {
			return res.data;
		});
};

const deletePortfolioItem = (ticker, callback) => {
	return api
		.delete(`api/portfolio/${ticker}`, { headers: buildAuthHeaders() })
		.then((res) => {
			if (callback) {
				callback(ticker);
			}
			return res;
		});
};

const addToPortfolio = (ticker) => {
	return api.post(
		"api/portfolio",
		{ ticker: ticker },
		{ headers: buildAuthHeaders() }
	);
};

const login = (username, password) => {
	return api
		.post(
			"api/auth/login",
			{ username: username, password: password },
			{ withCredentials: false }
		)
		.then((res) => {
			TokenService.saveAuthToken(res.data.token);
		});
};

const register = (username, password) => {
	return api.post(
		"api/auth/register",
		{ username: username, password: password },
		{ withCredentials: false }
	);
};

export {
	getTickerProfile,
	getPortfolioItems,
	deletePortfolioItem,
	addToPortfolio,
	login,
	register,
};
