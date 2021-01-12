import axios from "axios";
import { SERVER_ROOT } from "../config";
import TokenService from "../services/tokenService";

const api = axios.create({
	baseURL: SERVER_ROOT.concat("/"),
	timeout: 10000,
	withCredentials: true,
});

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

const buildAuthHeaders = () => {
	return { Authorization: `Bearer ${TokenService.getAuthToken()}` };
};

const getTickerProfile = (ticker) => {
	// USING AXIOS //
	const query = api
		.get(`api/quote/${ticker}/profile`, { headers: buildAuthHeaders() })
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
};

const getPortfolioItems = () => {
	return api
		.get(`api/portfolio`, { headers: buildAuthHeaders() })
		.then((res) => {
			return handleApiResponse(res).data;
		});
};

const deletePortfolioItem = (ticker, callback) => {
	return api
		.delete(`api/portfolio/${ticker}`, { headers: buildAuthHeaders() })
		.then((res) => {
			return handleApiResponse(res);
		})
		.then(() => {
			if (callback) {
				callback(ticker);
			}
		});
};

const addToPortfolio = (ticker) => {
	return api
		.post("api/portfolio", { ticker: ticker }, { headers: buildAuthHeaders() })
		.then((res) => {
			return handleApiResponse(res);
		});
};

const login = (username, password) => {
	return api
		.post(
			"api/auth/login",
			{ username: username, password: password },
			{ withCredentials: false }
		)
		.then((response) => {
			TokenService.saveAuthToken(response.data.token);
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
