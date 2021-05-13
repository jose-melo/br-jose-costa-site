export const browserCheck = () => {
	const isBrowser = typeof window !== "undefined";

	return isBrowser;
};
