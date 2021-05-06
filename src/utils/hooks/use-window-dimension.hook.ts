import { useState, useEffect } from "react";

function getWindowDimensions() {
	const width = window?.innerWidth;
	const height = window?.innerHeight;

	return {
		width,
		height
	};
}
/**
 * This code was copied from: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 *
 * @returns windowDimensions
 */
export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window?.addEventListener("resize", handleResize);
		return () => window?.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
