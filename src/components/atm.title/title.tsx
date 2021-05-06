import Title from "antd/lib/typography/Title";
import styled from "styled-components";
import { GrayColor } from "../../utils/ui/color";

const TitleStyled = styled(Title)`
	text-align: center;
	line-height: 1.6;
	font-family: sans-serif;
	font-size: 14;
	color: ${GrayColor.GrayXDark};
`;

export default TitleStyled;
