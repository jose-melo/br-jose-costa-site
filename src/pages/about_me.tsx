import React, { Suspense } from "react";
import { PageSpin } from "../components/atm.spin/spin";
import { browserCheck } from "../utils/hooks/browser-check";

const HomeDetailsEaster = React.lazy(() => import("../modules/home-easter-egg/home-easter-egg"));

const HomePageEaster: React.FC = () => {
	const isBrowser = browserCheck();
	if (!isBrowser) return <></>;
	return (
		<Suspense fallback={<PageSpin />}>
			<HomeDetailsEaster />
		</Suspense>
	);
};
export default HomePageEaster;
