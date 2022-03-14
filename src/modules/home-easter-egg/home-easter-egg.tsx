import { Col, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import Layout from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Content } from "../../components/atm.content/content";
import { JoseImageStyled } from "../home/home-page-image";
import { Link } from "../../components/atm.link/link";
import { Paragraph } from "../../components/atm.paragraph/paragraph";
import { Languages, introduction, initialPage, langBtnText, catch_phrase, card1Title, card1, card2, card2Title, card3Title, card3, card4, card4Title, card1Link, card2Link, card3Link, card4Link, card5, card5Link, card5Title, card6, card6Link, card6Title, card7, card7Link, card7Title, card8, card8Link, card8Title, card10, card10Link, card10Title, card9, card9Link, card9Title} from "../home/texts";
import { Title, Description, Card, CardGrid, CardTitle, CardDescription, CardSpinWrapper } from "../home/home.style";
import useWindowDimensions from "../../utils/hooks/use-window-dimension.hook";
import { PageSpin, Spin } from "../../components/atm.spin/spin";


export enum SubPage {
	Home,
	Simulations,
	Random
}

const HomeDetails: React.FunctionComponent = props => {
	const [lang, setLang] = useState(Languages.fr);
	const [subPage, setSubPage] = useState(SubPage.Home);

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
                                <Card href={card9Link}>
                                    <CardTitle fontSize="1.3em">
                                        {card9Title[lang]}
                                    </CardTitle>
                                    <CardDescription fontSize="1.3em">
                                        {card9[lang]}
                                    </CardDescription>
                                </Card>
                                <Card href={card10Link}>
                                    <CardTitle fontSize="1.3em">
                                        {card10Title[lang]}
                                    </CardTitle>
                                    <CardDescription fontSize="1.3em">
                                        {card10[lang]}
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

