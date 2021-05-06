import styled from "styled-components";

interface IChatWrapper {
	height?: number;
	width?: number;
}

export const ChatWrapper = styled.div<IChatWrapper>`
	background-color: #c9c9c9;
	height: ${props => (props.height ? props.height + "px" : "auto")};
	width: ${props => (props.width ? props.width + "px" : "auto")};
	margin-right: auto;
	margin-left: auto;
	margin-top: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 450px;
`;

interface IBubbleWrapper {
	maxWidth: number;
}

export const BubbleWrapper = styled.div<IBubbleWrapper>`
	border-radius: 100px;
	background-color: #ae87dd;
	justify-content: center;
	align-items: center;
	color: white;
	max-width: 200px;
	overflow-wrap: break-word;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 5px;
	padding-right: 5px;
	margin: auto;
	font-family: monospace;
`;

export const QuickReplyWrapper = styled.div`
	border-radius: 100px;
	background-color: #70c056;
	justify-content: center;
	align-items: center;
	color: white;
	min-width: 100px;
	overflow-wrap: break-word;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 5px;
	padding-right: 5px;
	margin: auto;
	font-family: Montserrat;
	cursor: pointer;
`;

export const FooterWrapper = styled.div`
	display: flex;
	min-width: 100px;
	position: relative;
	bottom: -70px;
`;
