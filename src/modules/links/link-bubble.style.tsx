import styled from "styled-components";

export const BubbleWrapper = styled.div`
	margin-bottom: 20px;
	display: flex;
	width: 100%;
`;

export const BubbleLink = styled.a`
	background-color: #7e54d9;
	justify-content: center;
	align-items: center;
	color: white;
	overflow-wrap: break-word;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 10px;
	padding-right: 10px;
	margin-left: auto;
	margin-right: auto;
	font-family: sans-serif;
	text-decoration-line: none;
	display: flex;
	max-width: 400px;
	transition: 0.3s;
	border-style: solid;
	border-color: #7e54d9;
	border-width: 2px;

	:hover {
		background-color: white;
		color: #7e54d9;
		border-color: #7e54d9;
		border-style: solid;
		border-width: 2px;
	}
`;
