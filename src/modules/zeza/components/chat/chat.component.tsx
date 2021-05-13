import * as React from "react";
import { Col } from "antd";
import {
	BubbleWrapper,
	FooterWrapper,
	QuickReplyWrapper
} from "../../zeza.style";
import { ZezaNeutralSvg } from "../../../../assets/svg/zeza-neutral-svg";
import { VSeparator } from "../../../../components/atm.separator/v-separator";
import useWindowDimensions from "../../../../utils/hooks/use-window-dimension.hook";

interface IQuickReply {
	message: string;
	onClick: () => void;
}

interface IChatComponent {
	width: number;
	height: number;
	message?: string;
	quickReplies?: IQuickReply[];
}

export const ChatComponent: React.FunctionComponent = props => {
	const isBrowser = typeof window !== "undefined";

	if (!isBrowser) return <></>;

	const { width, height } = useWindowDimensions();
	const quickReplies = [
		{
			message: "Ok",
			onClick: () => console.log("Ok")
		},
		{
			message: "Tudo bem",
			onClick: () => console.log("Tudo bem")
		}
	];

	return (
		<>
			<RenderChat
				width={width}
				height={height}
				quickReplies={quickReplies}
				message={"Olá!"}
			/>
		</>
	);
};

export const RenderChat: React.FunctionComponent<IChatComponent> = props => {
	const { width, height, quickReplies, message } = props;
	return (
		<Col xs={4} lg={4} md={4}>
			<BubbleWrapper maxWidth={Math.floor(0.4 * width)}>
				{message}
			</BubbleWrapper>
			<VSeparator />
			<ZezaNeutralSvg height={0.3 * height} width={0.3 * width} />
			<FooterWrapper>
				{quickReplies?.map((q, idx) => {
					return (
						<QuickReplyWrapper key={`${idx}_${q.message}`} onClick={q.onClick}>
							{q.message}
						</QuickReplyWrapper>
					);
				})}
			</FooterWrapper>
		</Col>
	);
};
