import { Col, Divider, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import Layout from "antd/lib/layout/layout";
import React from "react";
import { GrayColor } from "../../utils/ui/color";
import { Content } from "../../components/atm.content/content";
import { JoseImageStyled } from "../home/home-page-image";
import { Link } from "../../components/atm.link/link";
import { Paragraph } from "../../components/atm.paragraph/paragraph";
import Title from "../../components/atm.title/title";
import { BubbleLink, BubbleWrapper } from "./link-bubble.style";
import { VSeparator } from "../../components/atm.separator/v-separator";

const LinksDetails: React.FunctionComponent = props => {
	return (
		<Layout>
			<Content>
				<Grid>
					<Row>
						<Col xs={4} lg={4} md={4}>
							<Paragraph style={{ textAlign: "center" }}>
								<Link href={"/"}> Página inicial</Link> ~ &nbsp; ☕
								&nbsp;&nbsp;🎧 &nbsp;&nbsp;💻&nbsp;&nbsp;&nbsp;
								<Link href={"https://www.instagram.com/josemelocosta"}>
									@josemelocosta
								</Link>
							</Paragraph>
							<Title>Links</Title>
						</Col>
						<VSeparator />
						<BubbleLink href={"https://www.instagram.com/josemelocosta"}>
							SO - 2a feira às 14h e 6a feira às 10h20
						</BubbleLink>

						<VSeparator />
						<BubbleLink href={"https://www.instagram.com/josemelocosta"}>
							SO - 2a feira às 14h e 6a feira às 10h20
						</BubbleLink>
						<VSeparator />
						<BubbleLink href={"https://www.instagram.com/josemelocosta"}>
							SO - 2a feira às 14h e 6a feira às 10h20
						</BubbleLink>
						<VSeparator />
						<BubbleLink href={"https://www.instagram.com/josemelocosta"}>
							SO - 2a feira às 14h e 6a feira às 10h20
						</BubbleLink>
						<VSeparator />
						<BubbleLink href={"https://www.instagram.com/josemelocosta"}>
							SO - 2a feira às 14h e 6a feira às 10h20
						</BubbleLink>
						<VSeparator />
						<BubbleLink href={"https://www.instagram.com/josemelocosta"}>
							SO - 2a feira às 14h e 6a feira às 10h20
						</BubbleLink>
						<VSeparator />
						<BubbleLink href={"https://www.instagram.com/josemelocosta"}>
							SO - 2a feira às 14h e 6a feira às 10h20
						</BubbleLink>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};

export default LinksDetails;
