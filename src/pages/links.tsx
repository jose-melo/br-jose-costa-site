/* eslint-disable no-unused-vars */
import * as React from "react";
import { Suspense } from "react";
import { PageSpin } from "../components/atm.spin/spin";
import { browserCheck } from "../utils/hooks/browser-check";

const LinksDetails = React.lazy(() => import("../modules/links/links-details"));

const LinksPage: React.FC = () => {
	const isBrowser = browserCheck();
	if (!isBrowser) return <></>;
	return (
		<Suspense fallback={<PageSpin />}>
			<LinksDetails />
		</Suspense>
	);
};
export default LinksPage;
