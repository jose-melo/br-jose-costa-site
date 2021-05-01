import ParagraphANT from "antd/lib/typography/Paragraph";
import styled from "styled-components";
import { GrayColor } from "../../utils/ui/color";

export const Paragraph = styled(ParagraphANT)`
	margin-top: 2em;
	margin-bottom: 2em;
	text-align: left;
	line-height: 1.6;
	font-family: sans-serif;
	font-size: 14;
	color: ${GrayColor.GrayXDark};
`;
