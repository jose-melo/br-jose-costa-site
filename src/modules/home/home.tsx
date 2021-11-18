import { Col, Divider, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import Layout from "antd/lib/layout/layout";
import React, { useState } from "react";
import { GrayColor } from "../../utils/ui/color";
import { Content } from "../../components/atm.content/content";
import { JoseImageStyled } from "./home-page-image";
import { Link } from "../../components/atm.link/link";
import { Paragraph } from "../../components/atm.paragraph/paragraph";
import { BubbleLink } from "../links/link-bubble.style";
import { Languages, introduction, initialPage, langBtnText } from "./texts";


const HomeDetails: React.FunctionComponent = props => {
	const [lang, setLang] = useState(Languages.ptBr);

	const changeLang = () => {
		if(lang == Languages.ptBr)setLang(Languages.fr);
		if(lang == Languages.fr)setLang(Languages.en);
		if(lang == Languages.en)setLang(Languages.ptBr);
	}

	return (
		<Layout>
			<Content>
				<Grid>
					<Row>
						<Col xs={4} lg={4} md={4}>
							<Paragraph style={{ textAlign: "center" }}>
								<Link href={"#"} onClick={() => changeLang()}>
									{langBtnText[lang]}
								</Link>	
								&nbsp;&nbsp;&nbsp;
								{initialPage[lang]} &nbsp; ~ &nbsp; ☕ &nbsp;&nbsp;🎧
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
								{introduction[lang]}	
							</Paragraph>
						</Col>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};

export default HomeDetails;
