import * as Cookies from "js-cookie";
import { SERVER_ROOT } from "../../src/config";

const session = {
	setSession: (session) => {
		Cookies.remove("connect.sid");
		Cookies.set("connect.sid", session, { domain: SERVER_ROOT });
		console.log(session);
	},

	getSession: () => {
		const sessionCookie = Cookies.get("connect.sid");
		if (sessionCookie === undefined) {
			return {};
		} else {
			return JSON.parse(sessionCookie);
		}
	},

	removeSession: () => {
		Cookies.remove("connect.sid", {
			path: "/",
			domain: SERVER_ROOT,
		});
	},
};

export default session;
