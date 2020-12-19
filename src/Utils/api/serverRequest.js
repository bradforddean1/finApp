import { SERVER_ROOT } from "../../config";

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

	const url = SERVER_ROOT.concat("/", endpoint);

	return fetch(url, requestOptions)
		.then((r) =>
			r
				.json()
				.then((data) => {
					return { status: r.status, body: data, ok: r.ok };
				})
				.catch(() => {
					return { status: r.status, body: null, ok: r.ok };
				})
		)

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
