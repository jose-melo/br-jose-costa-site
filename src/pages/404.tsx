/* eslint-disable no-unused-vars */
import { Col, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import Layout from "antd/lib/layout/layout";
import * as React from "react";
import { Content } from "../components/atm.content/content";
import { Link } from "../components/atm.link/link";
import { Paragraph } from "../components/atm.paragraph/paragraph";

import SEO from "../components/atm.seo/seo";
import { GetSizesReturn, SubPage } from "../modules/home/home";
import JoseImageStyled from "../modules/home/home-page-image";
import { Description, CardGrid, CardTitle, CardDescription, Title } from "../modules/home/home.style";
import { Languages, langBtnText, catch_phrase, card1Link, card1Title, card1, card2Link, card2Title, card2, card3Link, card3Title, card3, card4Link, card4Title, card4 } from "../modules/home/texts";
import useWindowDimensions from "../utils/hooks/use-window-dimension.hook";

const NotFoundPage: React.FunctionComponent = props => {
	const [lang, setLang] = React.useState(Languages.fr);
	const [subPage, setSubPage] = React.useState(SubPage.Home);

	const changeLang = () => {
		if(lang == Languages.ptBr)setLang(Languages.fr);
		if(lang == Languages.fr)setLang(Languages.en);
		if(lang == Languages.en)setLang(Languages.ptBr);
	}

	const isBrowser = typeof window !== "undefined";
	if (!isBrowser) return <></>;
	const {width, height} = useWindowDimensions();
	
	console.log('width ', width, 'height ', height);

	const {imageSize, fontSizeDescription, fontSizeTitle} = getSizes(width, height);
	const { title } = getText(width, height);

	return (
		<Layout>
			<Content>
				<Grid>
					<Row>
						<Col xs={4} lg={4} md={4}>
							<Paragraph style={{ textAlign: "right" }}>
								<Link href={"#"} onClick={() => changeLang()}>
									{langBtnText[lang]}
								</Link>	
							</Paragraph>
							<JoseImageStyled size={imageSize} />
							<Description fontSize={fontSizeDescription}>
								Page not Found
							</Description>
						</Col>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};

const getSizes = (width: number, height:number):GetSizesReturn => {

	let imageSize: number = Math.max(0.1*width, 150);
	let fontSizeDescription:string = '1.3em';
	let fontSizeTitle:string = '3.5em';

	if(width <= 940){
		imageSize = 150;
		fontSizeDescription = '1em'; 
		fontSizeTitle = '2em';
	}

	return {imageSize, fontSizeDescription, fontSizeTitle}
}

interface GetTextsReturn {
	title: string; 
}


function getText(width: number, height: number): GetTextsReturn {
	let title: string = 'José Lucas De Melo Costa';

	if(width <= 940){
		title = 'José Costa'; 
	}

	return { title };
}

export default NotFoundPage;

