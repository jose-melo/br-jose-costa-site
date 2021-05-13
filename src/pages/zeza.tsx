/* eslint-disable no-unused-vars */
import * as React from "react";
import { Col, Layout, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import { Content } from "../components/atm.content/content";
import { ChatWrapper } from "../modules/zeza/zeza.style";
import useWindowDimensions from "../utils/hooks/use-window-dimension.hook";
import {
	ChatComponent,
	RenderChat
} from "../modules/zeza/components/chat/chat.component";

const ZezaPage: React.FC = () => {
	const isBrowser = typeof window !== "undefined";

	if (!isBrowser) return <></>;

	const { height } = useWindowDimensions();

	return (
		<Layout>
			<Content>
				<Grid>
					<Row>
						<Col xs={4} lg={2} md={2} xl={2} xxl={2}>
							<ChatWrapper height={Math.floor(0.8 * height)}>
								<ChatComponent />
							</ChatWrapper>
						</Col>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};

export default ZezaPage;
