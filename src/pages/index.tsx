import React, { Suspense } from "react";
import { PageSpin } from "../components/atm.spin/spin";
import { browserCheck } from "../utils/hooks/browser-check";

const HomeDetails = React.lazy(() => import("../modules/home/home"));

const HomePage: React.FC = () => {
	const isBrowser = browserCheck();
	if (!isBrowser) return <></>;
	return (
		<Suspense fallback={<PageSpin />}>
			<HomeDetails />
		</Suspense>
	);
};
export default HomePage;
