import React, { useEffect, useState } from "react";
import { Col, Input, Layout, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import { Content } from "antd/lib/layout/layout";
import { BubbleWrapper, ChatWrapper } from "../zeza/zeza.style";
import { VSeparator } from "../../components/atm.separator/v-separator";

interface INumericInput {
	onChange: (value: any) => void;
	onBlur?: () => void;
	value?: any;
}

const NumericInput: React.FunctionComponent<INumericInput> = props => {
	const onChange = (e: { target: { value: string } }) => {
		const value = e.target?.value?.toUpperCase();
		const reg = /^(\d|[A-F|a-f]){0,8}$/;

		if (reg.test(value) || value === "" || value === "-") {
			props.onChange(value);
		}
	};

	// '.' at the end or only '-' in the input box.
	const onBlur = () => {
		const { value, onBlur, onChange } = props;
		let valueTemp = value;
		if (value.charAt(value.length - 1) === "." || value === "-") {
			valueTemp = value.slice(0, -1);
		}
		onChange(valueTemp.replace(/0*((\d|[A-F]){0,8})/, "$1"));
		if (onBlur) {
			onBlur();
		}
	};

	return (
		<Input
			{...props}
			onChange={onChange}
			onBlur={onBlur}
			placeholder="Digite o valor do CSPR em hexa"
			maxLength={25}
		/>
	);
};

interface CSPRProps {
	height: number;
}

const CSPRDetails: React.FunctionComponent<CSPRProps> = props => {
	const [registerVal, setRegisterVal] = useState("");
	const [N, setN] = useState(0);
	const [Z, setZ] = useState(0);
	const [C, setC] = useState(0);
	const [V, setV] = useState(0);

	useEffect(() => {
		if (registerVal) {
			const totalRegisterVal = `00000000${registerVal}`.slice(-8);
			const { _n, _z, _v, _c } = getFlags(totalRegisterVal.charAt(0));
			setN(_n);
			setZ(_z);
			setV(_v);
			setC(_c);
		}
	}, [registerVal]);

	return (
		<>
			<Layout>
				<Content>
					<Grid>
						<Row>
							<Col xs={4} lg={2} md={2} xl={2} xxl={2}>
								<ChatWrapper height={Math.floor(0.8 * props.height)}>
									<Col xs={4} lg={2} md={2} xl={2} xxl={2}>
										<BubbleWrapper
											style={{ textAlign: "center", fontFamily: "sans-serif" }}
											maxWidth={100}
										>
											Deu Negativo: {N == 1 ? "Sim" : "Não"}
										</BubbleWrapper>

										<VSeparator />
										<BubbleWrapper
											style={{ textAlign: "center", fontFamily: "sans-serif" }}
											maxWidth={100}
										>
											Deu Zero: {Z == 1 ? "Sim" : "Não"}
										</BubbleWrapper>

										<VSeparator />
										<BubbleWrapper
											style={{ textAlign: "center", fontFamily: "sans-serif" }}
											maxWidth={100}
										>
											Deu oVerflow: {V == 1 ? "Sim" : "Não"}
										</BubbleWrapper>

										<VSeparator />
										<BubbleWrapper
											style={{ textAlign: "center", fontFamily: "sans-serif" }}
											maxWidth={100}
										>
											Deu Carry out: {C == 1 ? "Sim" : "Não"}
										</BubbleWrapper>
										<VSeparator />
										<VSeparator />
										<NumericInput
											onChange={setRegisterVal}
											value={registerVal}
										/>
									</Col>
								</ChatWrapper>
							</Col>
						</Row>
					</Grid>
				</Content>
			</Layout>
		</>
	);
};

export default CSPRDetails;

interface GetFlagsResponse {
	_n: number;
	_z: number;
	_v: number;
	_c: number;
}

const treatNibble = (nibble: string): string => {
	switch (nibble) {
		case "0":
			return "0000";
		case "1":
			return "0001";
		case "2":
			return "0010";
		case "3":
			return "0011";
		case "4":
			return "0100";
		case "5":
			return "0101";
		case "6":
			return "0110";
		case "7":
			return "0111";
		case "8":
			return "1000";
		case "9":
			return "1001";
		case "A":
			return "1010";
		case "B":
			return "1011";
		case "C":
			return "1100";
		case "D":
			return "1101";
		case "E":
			return "1110";
		case "F":
			return "1111";
		default:
			return "0000";
	}
};

function getFlags(nibble: string): GetFlagsResponse {
	const regVal = treatNibble(nibble);
	const _n = parseInt(regVal.charAt(0));
	const _z = parseInt(regVal.charAt(1));
	const _v = parseInt(regVal.charAt(2));
	const _c = parseInt(regVal.charAt(3));

	const response: GetFlagsResponse = {
		_n,
		_z,
		_v,
		_c
	};

	return response;
}
