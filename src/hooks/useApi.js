import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

const useApi = (apiFunction, params, callback) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	// const history = useHistory();

	useEffect(() => {
		apiFunction(params)
			.then((data) => {
				setData(data);
				setIsLoading(false);
				if (callback) {
					callback(data);
				}
			})
			.catch((err) => {
				if (err.type === "UNAUTHORIZED") {
					// history.push("/Auth-error");
				} else if (err.type === "REQUESTERROR") {
					setError(err.message);
				} else {
					throw err;
				}
				setIsLoading(false);
			});
	}, [apiFunction, params, callback]);

	const res = {};

	res.update = (update) => {
		setData(update);
	};

	res.initial = () => {
		return [isLoading, data, error];
	};

	return res;
};

export { useApi };
