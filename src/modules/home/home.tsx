import { Col, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import Layout from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Content } from "../../components/atm.content/content";
import { JoseImageStyled } from "./home-page-image";
import { Link } from "../../components/atm.link/link";
import { Paragraph } from "../../components/atm.paragraph/paragraph";
import { Languages, introduction, initialPage, langBtnText, catch_phrase, card1Title, card1, card2, card2Title, card3Title, card3, card4, card4Title, card1Link, card2Link, card3Link, card4Link} from "./texts";
import { Title, Description, Card, CardGrid, CardTitle, CardDescription } from "./home.style";
import useWindowDimensions from "../../utils/hooks/use-window-dimension.hook";

const HomeDetails: React.FunctionComponent = props => {
	const [lang, setLang] = useState(Languages.fr);

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
							<Title fontSize={fontSizeTitle}>{title}</Title>
							<Description fontSize={fontSizeDescription}>
								{catch_phrase[lang]}	
							</Description>
								<CardGrid>
									<Card href={card1Link}>
										<CardTitle fontSize="1.3em">
											{card1Title[lang]}
										</CardTitle>
										<CardDescription fontSize="1.3em">
											{card1[lang]}
										</CardDescription>
									</Card>
									<Card href={card2Link}>
										<CardTitle fontSize="1.3em">
											{card2Title[lang]}
										</CardTitle>
										<CardDescription fontSize="1.3em">
											{card2[lang]}
										</CardDescription>
									</Card>
									<Card href={card3Link}>
										<CardTitle fontSize="1.3em">
											{card3Title[lang]}
										</CardTitle>
										<CardDescription fontSize="1.3em">
											{card3[lang]}
										</CardDescription>
									</Card>
									<Card href={card4Link}>
										<CardTitle fontSize="1.3em">
											{card4Title[lang]}
										</CardTitle>
										<CardDescription fontSize="1.3em">
											{card4[lang]}
										</CardDescription>
									</Card>
								</CardGrid>

						</Col>
					</Row>
				</Grid>
			</Content>
		</Layout>
	);
};


interface GetSizesReturn { 
	imageSize: number; 
	fontSizeDescription: string; 
	fontSizeTitle: string;
}

export default HomeDetails;
const getSizes = (width: number, height:number):GetSizesReturn => {

	let imageSize: number = 190;
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

