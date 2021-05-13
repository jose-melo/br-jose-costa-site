/* eslint-disable no-unused-vars */
import * as React from "react";
import { Suspense } from "react";
import { PageSpin } from "../components/atm.spin/spin";
import { browserCheck } from "../utils/hooks/browser-check";
import useWindowDimensions from "../utils/hooks/use-window-dimension.hook";

const CSPRDetails = React.lazy(() => import("../modules/cspr/cspr-details"));

const LinksPage: React.FC = () => {
	const isBrowser = browserCheck();
	if (!isBrowser) return <></>;
	const { height } = useWindowDimensions();
	return (
		<Suspense fallback={<PageSpin />}>
			<CSPRDetails height={height} />
		</Suspense>
	);
};
export default LinksPage;
