import { Col, Divider, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import Layout from "antd/lib/layout/layout";
import React from "react";
import { GrayColor } from "../../utils/ui/color";
import { Content } from "../../components/atm.content/content";
import { JoseImageStyled } from "./home-page-image";
import { Link } from "../../components/atm.link/link";
import { Paragraph } from "../../components/atm.paragraph/paragraph";
import { BubbleLink } from "../links/link-bubble.style";

export const HomeDetails: React.FunctionComponent = props => {
	return (
		<Layout>
			<Content>
				<Grid>
					<Row>
						<Col xs={4} lg={4} md={4}>
							<Paragraph style={{ textAlign: "center" }}>
								Página inicial ~ &nbsp; ☕ &nbsp;&nbsp;🎧
								&nbsp;&nbsp;💻&nbsp;&nbsp;&nbsp;
								<Link href={"https://www.instagram.com/josemelocosta"}>
									@josemelocosta
								</Link>
							</Paragraph>
							<JoseImageStyled size={170} />
							<Divider
								orientation="left"
								style={{
									width: "100%",
									marginTop: "2em",
									borderTop: `2px solid ${GrayColor.GrayLight}`
								}}
							/>
							<Paragraph>
								Esta é a landing-page para meus projetos pessoais! Aqui, vou
								disponibilizar o acesso a alguns programas que fiz e testar
								coisas interessantes. Por enquanto não tem nada aqui 😔, mas com
								o passar do tempo vou adicionando mais coisas.
							</Paragraph>
							<BubbleLink href={"/links"}>Lista com alguns links</BubbleLink>
						</Col>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};
