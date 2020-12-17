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
		Object.assign(requestOptions, { body });
	}

	const BASE_URL = `https://polar-fjord-49637.herokuapp.com/`;
	const url = BASE_URL.concat(endpoint);

	return fetch(url, requestOptions).then((response) => {
		if (response.status === 401) {
			throw new Error("UNAUTHORIZED");
		} else if (!response.ok) {
			throw new Error("REQUESTERROR");
		}
		return response;
	});
};

const authenticatedRequest = (method, endpoint, body) => {
	return request(method, endpoint, body).catch((err) => {
		if (err.message === "UNAUTHORIZED") {
			// TODO: show error
			// TODO: redirect to login (may be button on show error)
			console.log("Invalid login, please try again.");
			return null;
		} else {
			console.log(err);
			throw err;
		}
	});
};

export { request, authenticatedRequest };
