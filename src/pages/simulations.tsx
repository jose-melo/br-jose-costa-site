import React, { Suspense } from "react";
import { PageSpin } from "../components/atm.spin/spin";
import { browserCheck } from "../utils/hooks/browser-check";

const HomeSimulations = React.lazy(() => import("../modules/home-simulations/home-simulations"));

const HomePageSimulations: React.FC = () => {
	const isBrowser = browserCheck();
	if (!isBrowser) return <></>;
	return (
		<Suspense fallback={<PageSpin />}>
			<HomeSimulations />
		</Suspense>
	);
};
export default HomePageSimulations;
