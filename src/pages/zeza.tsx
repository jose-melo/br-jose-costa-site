/* eslint-disable no-unused-vars */
import * as React from "react";
import { Col, Layout, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import { Content } from "../components/atm.content/content";
import {
	BubbleWrapper,
	ChatWrapper,
	FooterWrapper,
	QuickReplyWrapper
} from "../modules/zeza/zeza.style";
import useWindowDimensions from "../utils/hooks/use-window-dimension.hook";
import { ZezaNeutralSvg } from "../assets/svg/zeza-neutral-svg";
import { VSeparator } from "../components/atm.separator/v-separator";

const ZezaPage: React.FC = () => {
	const isBrowser = typeof window !== "undefined";

	if (!isBrowser) return <></>;

	const { width, height } = useWindowDimensions();

	return (
		<Layout>
			<Content>
				<Grid>
					<Row>
						<Col xs={4} lg={2} md={2} xl={2} xxl={2}>
							<ChatWrapper height={Math.floor(0.8 * height)}>
								<Col xs={4} lg={4} md={4}>
									<BubbleWrapper maxWidth={Math.floor(0.4 * width)}>
										Teste
									</BubbleWrapper>
									<VSeparator />
									<ZezaNeutralSvg height={0.3 * height} width={0.3 * width} />
									<FooterWrapper>
										<QuickReplyWrapper>Ok</QuickReplyWrapper>
										<QuickReplyWrapper>Ok</QuickReplyWrapper>
									</FooterWrapper>
								</Col>
							</ChatWrapper>
						</Col>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};

export default ZezaPage;
