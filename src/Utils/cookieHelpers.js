import * as Cookies from "js-cookie";

const setSessionCookie = (session) => {
	Cookies.remove("session");
	Cookies.set("session", session, { expires: 14 });
};

const getSessionCookie = () => {
	const sessionCookie = Cookies.get("session");

	if (sessionCookie === undefined) {
		return null;
	} else {
		return JSON.parse(sessionCookie);
	}
};

export { setSessionCookie, getSessionCookie };
