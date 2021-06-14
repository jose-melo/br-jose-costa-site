import * as React from "react"
import useWindowDimensions from "../../utils/hooks/use-window-dimension.hook";
import styled  from 'styled-components';
import { Row, Col, Layout } from "antd";
import { useState } from "react";
import { Content } from "../../components/atm.content/content";
import Grid from "antd/lib/card/Grid";
import { number } from "prop-types";

const commonStyle = `
	border-radius: 100px;
	color: white;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 5px;
	padding-right: 5px;
	font-family: Montserrat;
	cursor: pointer;
	width: 200px;
	margin: 10px;
	text-align: center;
`

const WrapperConsumer = styled.div`
	background-color: #70c056;
	${commonStyle}
`
const WrapperProducer = styled.div`
	background-color: #AE87DD;
	${commonStyle}
`;

export const Petri2Details: React.FunctionComponent = () => {
	const isBrowser = typeof window !== "undefined";

	if (!isBrowser) return <></>
	const [empty1, setEmpty1] = useState('6a');
	const [empty2, setEmpty2] = useState('6b');
	const [producer, setProducer] = useState('9');
	const [consumer, setConsumer] = useState('1');
	const [mutex, setMutex] = useState('7');
	const [colorConsumer, setColorConsumer] = useState('#70C056');
	const [colorProducer, setColorProducer] = useState('#AE87DD');

	const downEmptyProducer = () => {
		if(producer != '9'|| (empty1 != '6a' && empty2 != '6b')){
			setColorProducer('#770722')
			return;
		}
		setProducer('10');
		setColorProducer('#AE87DD');
		if(empty1 == '6a'){
			setEmpty1('void');
			return;
		}
		if(empty2 == '6b'){
			setEmpty2('void');
			return;
		}
	}

	const downRcProducer = () => {
		if(mutex != '7' || producer != '10' ) {
			setColorProducer('#770722')
			return;
		}
		setColorProducer('#AE87DD');
		setMutex('void');
		setProducer('11');
	}

	const upRcProducer = () => {
		if(producer != '11')return;
		setMutex('7');
		setProducer('12');
	}

	const upFullProducer = () => {
		if(producer != '12')return;
		setProducer('13');

		if(empty1 == 'void'){
			setEmpty1('8a');
			return;
		}
		if(empty2 == 'void'){
			setEmpty2('8b');
			return;
		}
	}

	const doProducer = () => {
		console.log('Do producer', producer);
		if(producer != '13') return;		
		setProducer('9');
	} 

	const downFullConsumer = () => {
		if(consumer != '1' || (empty1 != '8a' && empty2 != '8b')) {
			setColorConsumer('#770722');
			return;
		}
		setConsumer('2');
		setColorConsumer('#70C056');
		if(empty1 == '8a'){
			setEmpty1('void');
			return;
		}
		if(empty2 == '8b'){
			setEmpty2('void');
			return;
		}
	}

	const downRcConsumer = () => {
		if( consumer != '2' ||  mutex != '7'){
			setColorConsumer('#770722');
			return;
		}
		setMutex('void');
		setConsumer('3');
		setColorConsumer('#70C056');
	}

	const upRcConsumer = () => {
		if(consumer != '3')return;
		setMutex('7');
		setConsumer('4');
	}

	const upEmptyConsumer = () => {
		if(consumer != '4')return;
		setConsumer('5');

		if(empty1 == 'void'){
			setEmpty1('6a');
			return;
		}
		if(empty2 == 'void'){
			setEmpty2('6b');
			return;
		}
	}
	const doConsumer = () => {
        console.log("Do consumer ", consumer)
		if(consumer != '5') return;		
		setConsumer('1');
	} 


	const {width, height} = useWindowDimensions();
	return (
		<>
			<SVGPetri 
				awidth={width} 
				aheight={height} 
				consumer={consumer} 
				producer={producer} 
				empty1={empty1} 
				empty2={empty2}
				mutex={mutex}
				colorConsumer={colorConsumer}
				colorProducer={colorProducer}
				/>
			<div style={{display: 'inline-block'}}>
				<WrapperConsumer onClick={downFullConsumer}>Down full</WrapperConsumer>
				<WrapperConsumer onClick={downRcConsumer}>Down rc</WrapperConsumer>
				<WrapperConsumer onClick={upRcConsumer}>Up rc</WrapperConsumer>
				<WrapperConsumer onClick={upEmptyConsumer}>Up empty</WrapperConsumer>
				<WrapperConsumer onClick={doConsumer}>Job outside CR</WrapperConsumer>
				<WrapperProducer onClick={downEmptyProducer}>Down empty</WrapperProducer>
				<WrapperProducer onClick={downRcProducer}>Down rc</WrapperProducer>
				<WrapperProducer onClick={upRcProducer}>Up rc</WrapperProducer>
				<WrapperProducer onClick={upFullProducer}>Up full</WrapperProducer>
				<WrapperProducer onClick={doProducer}>Job outside CR</WrapperProducer>
			</div>

		</>
	)
}

interface ISVGPetri {
	awidth: number;
	aheight: number;
	consumer: string;
	producer: string;
	empty1: string;
	empty2: string;
	colorProducer: string;
	colorConsumer: string;
	mutex: string;
}

interface IMapStatePosition {
	[idx: string]: {
		cx: number,
		cy: number,
	}	
}

const mapStatePosition: IMapStatePosition = {
	'1': {
		cx: 497.5,
		cy: 272	
	},
	'2': {
		cx: 497.5,
		cy: 793	
	},
	'3': {
		cx: 497.5,
		cy: 1314	
	},
	'4': {
		cx: 497.5,
		cy: 1835	
	},
	'5': {
		cx: 497.5,
		cy: 2360	
	},
	'6a': {
		cx: 1158.5,
		cy: 529
	},
	'6b': {
		cx: 1223.5,
		cy: 529
	},
	'7': {
		cx: 1200.5,
		cy: 1248
	},
	'8a': {
		cx: 1168.5,
		cy: 1930
	},
	'8b': {
		cx: 1233.5,
		cy: 1930
	},
	'9': {
		cx: 1821.5,
		cy: 272
	},
	'10': {
		cx: 1821.5,
		cy: 793
	},
	'11': {
		cx: 1821.5,
		cy: 1314
	},
	'12': {
		cx: 1821.5,
		cy: 1835	
	},
	'13': {
		cx: 1821.5,
		cy: 2360	
	},
	'void': {
		cx: 2821.5,
		cy: 1314
	}

}

function SVGPetri(props: ISVGPetri) {

	console.log("🚀 ~ file: svg-petri.tsx ~ line 192 ~ SVGPetri ~ props.empty1", props.empty1)
	const tkConsumer = {
		cx: mapStatePosition[props.consumer].cx,
		cy: mapStatePosition[props.consumer].cy,
	}

	const tkProducer = {
		cx: mapStatePosition[props.producer].cx,
		cy: mapStatePosition[props.producer].cy,
	}

	const tkEmpty1 = {
		cx: mapStatePosition[props.empty1].cx,
		cy: mapStatePosition[props.empty1].cy
	}

	const tkEmpty2 = {
		cx: mapStatePosition[props.empty2].cx,
		cy: mapStatePosition[props.empty2].cy
	}

	const tkMutex = {
		cx: mapStatePosition[props.mutex].cx,
		cy: mapStatePosition[props.mutex].cy
	}

	return (
    <svg
      width={props.awidth*0.8}
      height={props.aheight*0.8}
      viewBox="0 0 2420 2581"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx={498.5} cy={271.5} rx={92.5} ry={88.5} fill={props.colorConsumer} />
      <ellipse cx={1190.5} cy={538.5} rx={92.5} ry={88.5} fill="#A58868" />
      <ellipse cx={1199.5} cy={1248.5} rx={92.5} ry={88.5} fill="#E02753" />
      <ellipse cx={1205.5} cy={1931.5} rx={92.5} ry={88.5} fill="#ECC84A" />
      <ellipse cx={499.5} cy={795.5} rx={92.5} ry={88.5} fill={props.colorConsumer} />
      <path
        d="M497.046 530.062a1.5 1.5 0 002.121-.001l9.54-9.552a1.5 1.5 0 10-2.123-2.12l-8.48 8.49-8.49-8.48a1.5 1.5 0 10-2.12 2.123l9.552 9.54zm-.546-170.061l.106 169.001 3-.002-.106-169.001-3 .002zM496.939 708.061a1.502 1.502 0 002.122 0l9.546-9.546a1.502 1.502 0 000-2.122 1.502 1.502 0 00-2.122 0L498 704.879l-8.485-8.486a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l9.546 9.546zM496.5 539v168h3V539h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M343.997 534.186L653.996 534" />
      <ellipse cx={499.5} cy={1319.5} rx={92.5} ry={88.5} fill={props.colorConsumer} />
      <path
        d="M497.046 1054.06c.586.59 1.536.59 2.121 0l9.54-9.55c.586-.59.585-1.54-.001-2.12a1.493 1.493 0 00-2.122 0l-8.48 8.49-8.49-8.48a1.492 1.492 0 00-2.121 0c-.586.59-.585 1.54.001 2.12l9.552 9.54zm-.546-170.059l.106 168.999h3l-.106-169.001-3 .002zM496.939 1232.06c.586.59 1.536.59 2.122 0l9.546-9.55a1.5 1.5 0 000-2.12 1.511 1.511 0 00-2.122 0l-8.485 8.49-8.485-8.49a1.511 1.511 0 00-2.122 0 1.5 1.5 0 000 2.12l9.546 9.55zM496.5 1063v168h3v-168h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M343.997 1058.19l309.999-.19" />
      <ellipse cx={499.5} cy={795.5} rx={92.5} ry={88.5} fill={props.colorConsumer} />
      <path
        d="M496.939 708.061a1.502 1.502 0 002.122 0l9.546-9.546a1.502 1.502 0 000-2.122 1.502 1.502 0 00-2.122 0L498 704.879l-8.485-8.486a1.502 1.502 0 00-2.122 0 1.502 1.502 0 000 2.122l9.546 9.546zM496.5 539v168h3V539h-3z"
        fill="#000"
      />
      <ellipse cx={499.5} cy={1319.5} rx={92.5} ry={88.5} fill={props.colorConsumer} />
      <path
        d="M497.046 1054.06c.586.59 1.536.59 2.121 0l9.54-9.55c.586-.59.585-1.54-.001-2.12a1.493 1.493 0 00-2.122 0l-8.48 8.49-8.49-8.48a1.492 1.492 0 00-2.121 0c-.586.59-.585 1.54.001 2.12l9.552 9.54zm-.546-170.059l.106 168.999h3l-.106-169.001-3 .002zM496.939 1232.06c.586.59 1.536.59 2.122 0l9.546-9.55a1.5 1.5 0 000-2.12 1.511 1.511 0 00-2.122 0l-8.485 8.49-8.485-8.49a1.511 1.511 0 00-2.122 0 1.5 1.5 0 000 2.12l9.546 9.55zM496.5 1063v168h3v-168h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M343.997 1058.19l309.999-.19" />
      <ellipse cx={499.5} cy={1842.5} rx={92.5} ry={88.5} fill={props.colorConsumer} />
      <path
        d="M496.939 1577.06c.586.59 1.536.59 2.122 0l9.546-9.55a1.5 1.5 0 000-2.12 1.511 1.511 0 00-2.122 0l-8.485 8.49-8.485-8.49a1.511 1.511 0 00-2.122 0 1.5 1.5 0 000 2.12l9.546 9.55zM496.5 1408v168h3v-168h-3z"
        fill="#000"
      />
      <ellipse cx={499.5} cy={2366.5} rx={92.5} ry={88.5} fill={props.colorConsumer} />
      <path
        d="M497.046 2101.06c.586.59 1.536.59 2.121 0l9.54-9.55c.586-.59.585-1.54-.001-2.12a1.493 1.493 0 00-2.122 0l-8.48 8.49-8.49-8.48a1.492 1.492 0 00-2.121 0c-.586.59-.585 1.54.001 2.12l9.552 9.54zM496.5 1931l.106 169h3l-.106-169h-3zM496.939 2279.06c.586.59 1.536.59 2.122 0l9.546-9.55a1.5 1.5 0 000-2.12 1.511 1.511 0 00-2.122 0l-8.485 8.49-8.485-8.49a1.511 1.511 0 00-2.122 0 1.5 1.5 0 000 2.12l9.546 9.55zM496.5 2110v168h3v-168h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M343.997 2105.19l309.999-.19" />
      <path
        d="M496.939 1756.06c.586.59 1.536.59 2.122 0l9.546-9.55a1.5 1.5 0 000-2.12 1.511 1.511 0 00-2.122 0l-8.485 8.49-8.485-8.49a1.511 1.511 0 00-2.122 0 1.5 1.5 0 000 2.12l9.546 9.55zM496.5 1587v168h3v-168h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M343.997 1582.19l309.999-.19" />
      <ellipse cx={1820.5} cy={1841.5} rx={92.5} ry={88.5} fill={props.colorProducer} />
      <path
        d="M1817.94 1576.06c.59.59 1.53.59 2.12 0l9.55-9.55c.58-.58.58-1.53 0-2.12-.59-.58-1.54-.58-2.12 0l-8.49 8.49-8.49-8.49c-.58-.58-1.53-.58-2.12 0-.58.59-.58 1.54 0 2.12l9.55 9.55zm-.44-169.06v168h3v-168h-3z"
        fill="#000"
      />
      <ellipse cx={1820.5} cy={2365.5} rx={92.5} ry={88.5} fill={props.colorProducer}/>
      <path
        d="M1818.05 2100.06c.58.59 1.53.59 2.12 0l9.54-9.55c.58-.59.58-1.54 0-2.12-.59-.59-1.54-.59-2.13 0l-8.48 8.49-8.49-8.48a1.49 1.49 0 00-2.12 0c-.58.59-.58 1.54 0 2.12l9.56 9.54zm-.55-170.06l.11 169h3l-.11-169h-3zM1817.94 2278.06c.59.59 1.53.59 2.12 0l9.55-9.55c.58-.58.58-1.53 0-2.12-.59-.58-1.54-.58-2.12 0l-8.49 8.49-8.49-8.49c-.58-.58-1.53-.58-2.12 0-.58.59-.58 1.54 0 2.12l9.55 9.55zm-.44-169.06v168h3v-168h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M1665 2104.19l310-.19" />
      <path
        d="M1817.94 1755.06c.59.59 1.53.59 2.12 0l9.55-9.55c.58-.58.58-1.53 0-2.12-.59-.58-1.54-.58-2.12 0l-8.49 8.49-8.49-8.49c-.58-.58-1.53-.58-2.12 0-.58.59-.58 1.54 0 2.12l9.55 9.55zm-.44-169.06v168h3v-168h-3z"
        fill="#000"
      />
      <path
        stroke="#000"
        strokeWidth={10}
        d="M1665 1581.19l310-.19M2066 1226.19l310-.19M33.997 1226.19l309.999-.19"
      />
      <ellipse cx={1818.5} cy={271.5} rx={92.5} ry={88.5} fill={props.colorProducer} />
      <ellipse cx={1819.5} cy={795.5} rx={92.5} ry={88.5} fill={props.colorProducer} />
      <path
        d="M1817.05 530.062c.58.585 1.53.585 2.12-.001l9.54-9.552c.58-.586.58-1.536 0-2.122a1.511 1.511 0 00-2.13.002l-8.48 8.49-8.49-8.48a1.498 1.498 0 00-2.12.002 1.51 1.51 0 000 2.121l9.56 9.54zm-.55-170.061l.11 169.001 3-.002-.11-169.001-3 .002zM1816.94 708.061a1.5 1.5 0 002.12 0l9.55-9.546c.58-.586.58-1.536 0-2.122a1.5 1.5 0 00-2.12 0l-8.49 8.486-8.49-8.486a1.5 1.5 0 00-2.12 0 1.511 1.511 0 000 2.122l9.55 9.546zM1816.5 539v168h3V539h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M1664 534.186l310-.186" />
      <ellipse cx={1819.5} cy={1319.5} rx={92.5} ry={88.5} fill={props.colorProducer} />
      <path
        d="M1817.05 1054.06c.58.59 1.53.59 2.12 0l9.54-9.55c.58-.59.58-1.54 0-2.12-.59-.59-1.54-.59-2.13 0l-8.48 8.49-8.49-8.48a1.49 1.49 0 00-2.12 0c-.58.59-.58 1.54 0 2.12l9.56 9.54zm-.55-170.059l.11 168.999h3l-.11-169.001-3 .002zM1816.94 1232.06c.59.59 1.53.59 2.12 0l9.55-9.55c.58-.58.58-1.53 0-2.12-.59-.58-1.54-.58-2.12 0l-8.49 8.49-8.49-8.49c-.58-.58-1.53-.58-2.12 0-.58.59-.58 1.54 0 2.12l9.55 9.55zm-.44-169.06v168h3v-168h-3z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth={10} d="M1664 1058.19l310-.19" />
     
      <path
        d="M173.5 1231.36C183.5 1798.3 259 2778.74 495 2448.7"
        stroke="#000"
        strokeWidth={3}
      />
      <path
        d="M173.459 1231c-.18 1.36-.728 2.51-1.163 3.58a97.12 97.12 0 00-1.83 4.78 29.104 29.104 0 01-1.157 2.81c-.512 1.11-.923 2.35-1.403 3.51-.321.77-.717 1.35-1.105 1.98-.123.2-.243.4-.363.61-.093.16-.04-.17-.04-.24"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M173.34 1231.16c1.346 4.26 2.655 8.6 4.205 12.57.381.97.782 1.91 1.133 2.93.196.57.364 1.19.613 1.68.116.23.259.39.357.65"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M173 1221c3.522-505.325 73.552-1421.001 325.5-1041.102"
        stroke="#000"
        strokeWidth={3}
      />
      <path
        d="M496.486 179.668c-1.755-2.071-3.412-3.178-5.412-4.32-1.365-.779-2.414-1.906-3.864-2.072-2.469-.282-4.917-3.017-6.947-5.23-.154-.168-1.821-1.739-1.061-1.01 1.756 1.684 3.323 3.819 5.058 5.507 1.988 1.935 3.941 3.929 5.973 5.761 1.419 1.279 3.156 2.042 4.734 2.678 1.964.791 1.704-1.836 1.578-4.295-.347-6.805-.855-13.33-.855-20.187 0-2.091.43-5.969-.266-7.756"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2216.36 1231.36c-12.14 566.23-110.31 1552.27-396.86 1222.64"
        stroke="#000"
        strokeWidth={3}
      />
      <path
        d="M2216.41 1231c.22 1.36.88 2.51 1.41 3.57.77 1.56 1.52 3.14 2.22 4.78.43 1.01.9 1.91 1.41 2.81.62 1.11 1.12 2.35 1.7 3.5.39.77.87 1.35 1.34 1.98.15.2.3.4.44.61.12.16.05-.17.05-.24"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2216.55 1231.16c-1.63 4.25-3.22 8.59-5.1 12.56-.46.97-.95 1.9-1.38 2.92-.24.57-.44 1.19-.74 1.68-.14.23-.32.39-.44.65M1743.26 523.914c.26.32 1.04.593 1.65.844.9.368 1.78.741 2.6 1.13.5.239 1.05.45 1.64.663.73.262 1.31.555 1.99.828.46.183 1.02.319 1.57.467.18.047.34.095.52.144.13.037.05-.039.05-.057M1760 518.886c-1.21 2.148-2.4 4.34-3.8 6.343-.34.492-.7.964-1.02 1.479-.17.288-.33.601-.55.847-.11.115-.23.196-.32.329"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1187 450.352c109.45-98.762 376.03-221.5 566.81 77.648M2217 1221c-4.21-505.325-87.92-1421.001-389.1-1041.102"
        stroke="#000"
        strokeWidth={3}
      />
      <path
        d="M1830.31 179.667c2.1-2.071 4.08-3.178 6.47-4.32 1.63-.779 2.89-1.906 4.62-2.072 2.95-.282 5.88-3.017 8.3-5.23.19-.168 2.18-1.739 1.27-1.01-2.1 1.684-3.97 3.819-6.05 5.507-2.37 1.935-4.71 3.929-7.14 5.761-1.69 1.279-3.77 2.042-5.65 2.678-2.35.791-2.04-1.836-1.89-4.295.41-6.805 1.02-13.33 1.02-20.187 0-2.091-.51-5.969.32-7.756"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
     
      <path
        d="M1202.5 1160.5c59.67-130 247.7-333.6 522.5-108M1203 1160c-66.69-129.86-276.855-333.253-584-107.89M611 1588c148.167 70 473.3 117.8 588.5-251M1786 1586c-141.49 69.86-453.99 121.05-564-247M1701 2107.99c-91.87 98.33-319.49 218.4-495-87.99M585.5 2111c255 410 146-1497.5 513.5-1555.5M1206 1844.5C1091.17 1303.33 810.7 281.8 607.5 525"
        stroke="#000"
        strokeWidth={3}
      />
      <path
        d="M605.3 527.413c.33-2.931-.108-5.824-.108-8.748 0-1.56.216-3.079.216-4.636M605.947 527.846c1.428-.521 2.918-.985 4.282-1.667.529-.265.985-.618 1.547-.816.496-.175.975-.397 1.463-.594.767-.309 1.619-.42 2.351-.809.524-.279.846-.599 1.439-.756.484-.127.974-.24 1.463-.347.807-.178 1.576-.474 2.35-.732M617.834 1053.14c-.093-.88.173-1.69.351-2.54.218-1.05.214-2.12.376-3.17.159-1.04.485-2.07.581-3.1.025-.28.002-.52.127-.78M618.925 1052.51c1.278-.25 2.566-.48 3.839-.75 1.057-.22 2.089-.26 3.16-.42.032 0 2.987-.52 2.987-.44M1724.95 1052.95c-.21-1.74-.13-3.57-.17-5.33-.03-1.08.08-2.16.08-3.24M1724.69 1053.03c-1.1-.46-2-.87-3.17-.87-.63 0-1.21-.01-1.83-.16-1.49-.35-3.1-.72-4.62-.89M1198.56 1337.82c-3 3-6.62 5.26-9.33 8.53M1198.77 1337.82c.69 2.25 1.4 4.35 2.4 6.46.23.5.23.93.23 1.46M1220.69 1335.59c.24 2.58-.82 4.83-1.83 7.15-.58 1.33-.9 2.75-1.62 4.01M1221.3 1335.39c1.46 3.33 4.64 5.87 7.71 7.71M1089.81 552.363c3.36.076 5.72.95 8.4 2.29M1099.36 554.653c-1.81 2.301-5.73 5.587-5.73 8.78M1205.06 2021c.12 2.84 1.11 5.58 1.22 8.46.08 2.08-.47 4.04-.47 6.07M1205.81 2020.75c2.46.34 4.03 2.79 6.43 3.01 1.26.11 2.61.48 3.81.92 1.06.38 2.1.89 3.18 1.22.79.25 1.57.05 2.36.36"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
	  <ellipse cx={tkConsumer.cx} cy={tkConsumer.cy} rx={23.5} ry={22} fill="#000" />
      <ellipse cx={tkEmpty1.cx} cy={tkEmpty1.cy} rx={23.5} ry={22} fill="#000" />
      <ellipse cx={tkEmpty2.cx} cy={tkEmpty2.cy} rx={23.5} ry={22} fill="#000" />
	  <ellipse cx={tkProducer.cx} cy={tkProducer.cy} rx={23.5} ry={22} fill="#000" />
      <ellipse cx={tkMutex.cx} cy={tkMutex.cy} rx={23.5} ry={22} fill="#000" />
    </svg>
	)
}
