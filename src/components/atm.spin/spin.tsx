import styled from "styled-components";
import ReactLoading from "react-loading";
import React from "react";

export const Spin: React.FunctionComponent = () => {
	return (
		<ReactLoading
			type={"spinningBubbles"}
			color={" #7e54d9"}
			height={"100%"}
			width={"100%"}
		/>
	);
};

export const PageSpin: React.FunctionComponent = () => {
	return (
		<SpinWrapper>
			<Spin />
		</SpinWrapper>
	);
};

export const SpinWrapper = styled.div`
	width: 100px;
	height: 100px;

	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	margin: auto;
`;
