import * as React from "react"
import useWindowDimensions from "../../utils/hooks/use-window-dimension.hook";
import { Input } from 'antd';
import { SVGProps, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

enum ColorType1 {
	Unused = "#C4C4C4",
	Main = "#2E2A79",
	Second = "#4B3E9C",
	Third = "#5F4FA2",
	Last = "#A995C9",
}

enum ColorType5 {
	Unused = "#C4C4C4",
	Main = "#CE5028",
	Second = "#F77B2E",
	Third = "#F69558",
	Last = "#FAB07C",
}

export const CacheBlocking: React.FunctionComponent = () => {

	const isBrowser = typeof window !== "undefined";
	if (!isBrowser) return <></>;
	const {width, height} = useWindowDimensions();

	const [a00, seta00] = useState(ColorType5.Unused);	
	const [a01, seta01] = useState(ColorType5.Unused);	
	const [a02, seta02] = useState(ColorType5.Unused);	
	const [a03, seta03] = useState(ColorType5.Unused);	
	const [a10, seta10] = useState(ColorType5.Unused);	
	const [a11, seta11] = useState(ColorType5.Unused);	
	const [a12, seta12] = useState(ColorType5.Unused);	
	const [a13, seta13] = useState(ColorType5.Unused);	
	const [a20, seta20] = useState(ColorType5.Unused);	
	const [a21, seta21] = useState(ColorType5.Unused);	
	const [a22, seta22] = useState(ColorType5.Unused);	
	const [a23, seta23] = useState(ColorType5.Unused);	
	const [a30, seta30] = useState(ColorType5.Unused);	
	const [a31, seta31] = useState(ColorType5.Unused);	
	const [a32, seta32] = useState(ColorType5.Unused);	
	const [a33, seta33] = useState(ColorType5.Unused);		

	const [b00, setb00] = useState(ColorType5.Unused);	
	const [b01, setb01] = useState(ColorType5.Unused);	
	const [b02, setb02] = useState(ColorType5.Unused);	
	const [b03, setb03] = useState(ColorType5.Unused);	
	const [b10, setb10] = useState(ColorType5.Unused);	
	const [b11, setb11] = useState(ColorType5.Unused);	
	const [b12, setb12] = useState(ColorType5.Unused);	
	const [b13, setb13] = useState(ColorType5.Unused);	
	const [b20, setb20] = useState(ColorType5.Unused);	
	const [b21, setb21] = useState(ColorType5.Unused);	
	const [b22, setb22] = useState(ColorType5.Unused);	
	const [b23, setb23] = useState(ColorType5.Unused);	
	const [b30, setb30] = useState(ColorType5.Unused);	
	const [b31, setb31] = useState(ColorType5.Unused);	
	const [b32, setb32] = useState(ColorType5.Unused);	
	const [b33, setb33] = useState(ColorType5.Unused);		

	const [c00, setc00] = useState(ColorType1.Unused);	
	const [c01, setc01] = useState(ColorType1.Unused);	
	const [c02, setc02] = useState(ColorType1.Unused);	
	const [c03, setc03] = useState(ColorType1.Unused);	
	const [c10, setc10] = useState(ColorType1.Unused);	
	const [c11, setc11] = useState(ColorType1.Unused);	
	const [c12, setc12] = useState(ColorType1.Unused);	
	const [c13, setc13] = useState(ColorType1.Unused);	
	const [c20, setc20] = useState(ColorType1.Unused);	
	const [c21, setc21] = useState(ColorType1.Unused);	
	const [c22, setc22] = useState(ColorType1.Unused);	
	const [c23, setc23] = useState(ColorType1.Unused);
	const [c30, setc30] = useState(ColorType1.Unused);	
	const [c31, setc31] = useState(ColorType1.Unused);	
	const [c32, setc32] = useState(ColorType1.Unused);	
	const [c33, setc33] = useState(ColorType1.Unused);		

	const initialColorC = [
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
		ColorType1.Unused,
	];
	const [c, setC] = useState(initialColorC);

	const [kk, setkk] = useState(0);
	const [jj, setjj] = useState(0);
	const [i, seti] = useState(0);
	const [j, setj] = useState(0);
	const [k, setk] = useState(0);

	useEffect(()=>{

		setb00(ColorType5.Unused);	
		setb01(ColorType5.Unused);	
		setb02(ColorType5.Unused);	
		setb03(ColorType5.Unused);	
		setb10(ColorType5.Unused);	
		setb11(ColorType5.Unused);	
		setb12(ColorType5.Unused);	
		setb13(ColorType5.Unused);	
		setb20(ColorType5.Unused);	
		setb21(ColorType5.Unused);	
		setb22(ColorType5.Unused);	
		setb23(ColorType5.Unused);	
		setb30(ColorType5.Unused);	
		setb31(ColorType5.Unused);	
		setb32(ColorType5.Unused);	
		setb33(ColorType5.Unused);	
		
		if(kk == 0 && jj == 0){
			setb00(ColorType5.Last);	
			setb01(ColorType5.Last);	
			setb10(ColorType5.Last);	
			setb11(ColorType5.Last);	
		}	

		if(kk == 0 && jj == 1){
			setb02(ColorType5.Last);	
			setb03(ColorType5.Last);	
			setb12(ColorType5.Last);	
			setb13(ColorType5.Last);	
		}	
		if(kk == 1 && jj == 0){
			setb20(ColorType5.Last);	
			setb21(ColorType5.Last);	
			setb30(ColorType5.Last);	
			setb31(ColorType5.Last);	
		}	
		if(kk == 1 && jj == 1){
			setb22(ColorType5.Last);	
			setb23(ColorType5.Last);	
			setb32(ColorType5.Last);	
			setb33(ColorType5.Last);	
		}	

	}, [kk, jj]);


	useEffect(()=>{
		seta00(ColorType5.Unused);	
		seta01(ColorType5.Unused);	
		seta02(ColorType5.Unused);	
		seta03(ColorType5.Unused);	
		seta10(ColorType5.Unused);	
		seta11(ColorType5.Unused);	
		seta12(ColorType5.Unused);	
		seta13(ColorType5.Unused);	
		seta20(ColorType5.Unused);	
		seta21(ColorType5.Unused);	
		seta22(ColorType5.Unused);	
		seta23(ColorType5.Unused);	
		seta30(ColorType5.Unused);	
		seta31(ColorType5.Unused);	
		seta32(ColorType5.Unused);	
		seta33(ColorType5.Unused);	
		if(kk == 0){
			switch(i) {
				case 0:
					seta00(ColorType5.Last);
					seta01(ColorType5.Last);
					break;

				case 1:
					seta10(ColorType5.Last);
					seta11(ColorType5.Last);
					break;
				case 2:
					seta20(ColorType5.Last);
					seta21(ColorType5.Last);
					break;
				case 3:
					seta30(ColorType5.Last);
					seta31(ColorType5.Last);
					break;
			}
		}
		if(kk == 1){
			switch(i) {
				case 0:
					seta02(ColorType5.Last);
					seta03(ColorType5.Last);
					break;

				case 1:
					seta12(ColorType5.Last);
					seta13(ColorType5.Last);
					break;
				case 2:
					seta22(ColorType5.Last);
					seta23(ColorType5.Last);
					break;
				case 3:
					seta32(ColorType5.Last);
					seta33(ColorType5.Last);
					break;
			}
		}
	}, [i]);

	useEffect(()=>{
		if(kk == 0 && jj == 0){
			setb00(ColorType5.Last);	
			setb01(ColorType5.Last);	
			setb10(ColorType5.Last);	
			setb11(ColorType5.Last);
			if(k == 0){
				if(j == 0){
					setb00(ColorType5.Main);
				}else{
					setb01(ColorType5.Main);
				}
			}else{
				if(j == 0){
					setb10(ColorType5.Main);
				}else{
					setb11(ColorType5.Main);
				}
			}
		}	

		if(kk == 0 && jj == 1){
			setb02(ColorType5.Last);	
			setb03(ColorType5.Last);	
			setb12(ColorType5.Last);	
			setb13(ColorType5.Last);	
			if(k == 0){
				if(j == 2){
					setb02(ColorType5.Main);
				}else{
					setb03(ColorType5.Main);
				}
			}else{
				if(j == 2){
					setb12(ColorType5.Main);
				}else{
					setb13(ColorType5.Main);
				}
			}
		}	
		if(kk == 1 && jj == 0){
			setb20(ColorType5.Last);	
			setb21(ColorType5.Last);	
			setb30(ColorType5.Last);	
			setb31(ColorType5.Last);	
			if(k == 2){
				if(j == 0){
					setb20(ColorType5.Main);
				}else{
					setb21(ColorType5.Main);
				}
			}else{
				if(j == 0){
					setb30(ColorType5.Main);
				}else{
					setb31(ColorType5.Main);
				}
			}	
		}	
		if(kk == 1 && jj == 1){
			setb22(ColorType5.Last);	
			setb23(ColorType5.Last);	
			setb32(ColorType5.Last);	
			setb33(ColorType5.Last);
			if(k == 2){
				if(j == 2){
					setb22(ColorType5.Main);
				}else{
					setb23(ColorType5.Main);
				}
			}else{
				if(j == 2){
					setb32(ColorType5.Main);
				}else{
					setb33(ColorType5.Main);
				}
			}
		}	
	}, [j])

	useEffect(()=>{
		if(kk == 0){
			switch(i) {
				case 0:
					seta00(ColorType5.Last);
					seta01(ColorType5.Last);
					if(k == 0){
						seta00(ColorType5.Main);
					}else{
						seta01(ColorType5.Main);

					}
					break;

				case 1:
					seta10(ColorType5.Last);
					seta11(ColorType5.Last);
					if(k == 0){
						seta10(ColorType5.Main);
					}else{
						seta11(ColorType5.Main);
					}
					break;
				case 2:
					seta20(ColorType5.Last);
					seta21(ColorType5.Last);
					if(k == 0){
						seta20(ColorType5.Main);
					}else{
						seta21(ColorType5.Main);
					}
					break;
				case 3:
					seta30(ColorType5.Last);
					seta31(ColorType5.Last);
					if(k == 0){
						seta30(ColorType5.Main);
					}else{
						seta31(ColorType5.Main);
					}
					break;
			}
		}
		if(kk == 1){
			switch(i) {
				case 0:
					seta02(ColorType5.Last);
					seta03(ColorType5.Last);
					if(k == 2){
						seta02(ColorType5.Main);
					}else{
						seta03(ColorType5.Main);
					}
					break;

				case 1:
					seta12(ColorType5.Last);
					seta13(ColorType5.Last);
					if(k == 2){
						seta12(ColorType5.Main);
					}else{
						seta13(ColorType5.Main);
					}
					break;
				case 2:
					seta22(ColorType5.Last);
					seta23(ColorType5.Last);
					if(k == 2){
						seta22(ColorType5.Main);
					}else{
						seta23(ColorType5.Main);
					}
					break;
				case 3:
					seta32(ColorType5.Last);
					seta33(ColorType5.Last);
					if(k == 2){
						seta32(ColorType5.Main);
					}else{
						seta33(ColorType5.Main);
					}
					break;
			}
		}
	}, [k]);


	useEffect(()=>{
		let newColors = initialColorC;
		newColors[i*4 + j] = ColorType1.Last;
		setC(newColors);
	}, [i,j])

	console.log("j = ", j, "k = ", k, " i = ", i, "jj = ", jj, "kk = ", kk);
	const next = () => {
		if(j == 1 || j == 3){
			if(jj == 0)
				setj(0);
			else
				setj(2);
			if(k == 1 || k == 3){
				if(kk == 0)
					setk(0);
				else
					setk(2);
				if(i == 3){
					seti(0);
					if(jj == 1){
						setjj(0);
						setj(0);
						if(kk == 1){
							setkk(0);
							setk(0);
						}else{
							setk(2);
							setkk(kk+1);
						}
					}else{
						setjj(jj+1);
						setj(2);
					}
				}else{
					seti(i+1);
				}
			}else{
				setk(k+1);
			}
		}else{
			setj(j+1);
		}
	}
	return (
		<>
		<div style={{textAlign: 'center'}}>
			<SVGCacheBlocking
				a00={a00}
				a01={a01}
				a02={a02}
				a03={a03}
				a10={a10}
				a11={a11}
				a12={a12}
				a13={a13}
				a20={a20}
				a21={a21}
				a22={a22}
				a23={a23}
				a30={a30}
				a31={a31}
				a32={a32}
				a33={a33}
				b00={b00}
				b01={b01}
				b02={b02}
				b03={b03}
				b10={b10}
				b11={b11}
				b12={b12}
				b13={b13}
				b20={b20}
				b21={b21}
				b22={b22}
				b23={b23}
				b30={b30}
				b31={b31}
				b32={b32}
				b33={b33}
				c00={c[0] as ColorType1}
				c01={c[1] as ColorType1}
				c02={c[2] as ColorType1}
				c03={c[3] as ColorType1}
				c10={c[4] as ColorType1}
				c11={c[5] as ColorType1}
				c12={c[6] as ColorType1}
				c13={c[7] as ColorType1}
				c20={c[8] as ColorType1}
				c21={c[9] as ColorType1}
				c22={c[10] as ColorType1}
				c23={c[11] as ColorType1}
				c30={c[12] as ColorType1}
				c31={c[13] as ColorType1}
				c32={c[14] as ColorType1}
				c33={c[15] as ColorType1}
				width={width}
				height={height}
			/>
			<div style={{display: 'inline-block'}}>

			<p>j: {j} k: {k} i: {i} jj: {jj} kk: {kk}</p>
				<WrapperConsumer onClick={() => next()}>Next</WrapperConsumer>
			</div>
			</div>

		</>
	)
}


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
`;

const WrapperConsumer = styled.div`
	background-color: #70c056;
	${commonStyle}
`
interface SVGCacheBlockingProps {
	a00: ColorType5;
	a01: ColorType5;
	a02: ColorType5;
	a03: ColorType5;
	a10: ColorType5;
	a11: ColorType5;
	a12: ColorType5;
	a13: ColorType5;
	a20: ColorType5;
	a21: ColorType5;
	a22: ColorType5;
	a23: ColorType5;
	a30: ColorType5;
	a31: ColorType5;
	a32: ColorType5;
	a33: ColorType5;
	b00: ColorType5;
	b01: ColorType5;
	b02: ColorType5;
	b03: ColorType5;
	b10: ColorType5;
	b11: ColorType5;
	b12: ColorType5;
	b13: ColorType5;
	b20: ColorType5;
	b21: ColorType5;
	b22: ColorType5;
	b23: ColorType5;
	b30: ColorType5;
	b31: ColorType5;
	b32: ColorType5;
	b33: ColorType5;
	c00: ColorType1;
	c01: ColorType1;
	c02: ColorType1;
	c03: ColorType1;
	c10: ColorType1;
	c11: ColorType1;
	c12: ColorType1;
	c13: ColorType1;
	c20: ColorType1;
	c21: ColorType1;
	c22: ColorType1;
	c23: ColorType1;
	c30: ColorType1;
	c31: ColorType1;
	c32: ColorType1;
	c33: ColorType1;
	width: any;
	height: any;
}

const SVGCacheBlocking = (props: SVGCacheBlockingProps) => (

	<svg
	  width={props.width*0.8}
	  height={props.height*0.8}
	  viewBox="0 0 823 273"
	  fill="none"
	  xmlns="http://www.w3.org/2000/svg"
	>
	  <path fill="#E5E5E5" d="M0 0h823v273H0z" />
	  <path fill="#fff" d="M0 0h823v273H0z" />
	  <path
		fill={props.c00}
		d="M577.034 26h50v50h-50z"
	  />
	  <path
		fill={props.c01}
		d="M632.034 26h50v50h-50z"
	  />
	  <path
		fill={props.c02}
		d="M687.034 26h50v50h-50z"
	  />
	  <path
		fill={props.c03}
		d="M742.034 26h50v50h-50z"
	  />

	  <path
		fill={props.c10}
		d="M577.034 81h50v50h-50z"
	  />

	  <path
		fill={props.c11}
		d="M632.034 81h50v50h-50z"
	  />

	  <path
		fill={props.c12}
		d="M687.034 81h50v50h-50z"
	  />

	  <path
		fill={props.c13}
		d="M742.034 81h50v50h-50z"
	  />

	  <path
		fill={props.c20}
		d="M577.034 136h50v50h-50z"
	  />

	  <path
		fill={props.c21}
		d="M632.034 136h50v50h-50z"
	  />

	  <path
		fill={props.c22}
		d="M687.034 136h50v50h-50z"
	  />

	  <path
		fill={props.c23}
		d="M742.034 136h50v50h-50z"
	  />

	  <path
		fill={props.c30}
		d="M577.034 191h50v50h-50z"
	  />

	  <path
		fill={props.c31}
		d="M632.034 191h50v50h-50z"
	  />

	  <path
		fill={props.c32}
		d="M687.034 191h50v50h-50z"
	  />

	  <path
		fill={props.c33}
		d="M742.034 191h50v50h-50z"
	  />
	  <path stroke="#000" d="M570.5 19.5h229v228h-229z" />
	  <path
		fill={props.b00}
		d="M296.034 26h50v50h-50z"
	  />

	  <path
		fill={props.b01}
		d="M351.034 26h50v50h-50z"
	  />

	  <path
		fill={props.b02}
		d="M406.034 26h50v50h-50z"
	  />

	  <path
		fill={props.b03}
		d="M461.034 26h50v50h-50z"
	  />

	  <path
		fill={props.b10}
		d="M296.034 81h50v50h-50z"
	  />

	  <path
		fill={props.b11}
		d="M351.034 81h50v50h-50z"
	  />

	  <path
		fill={props.b12}
		d="M406.034 81h50v50h-50z"
	  />

	  <path
		fill={props.b13}
		d="M461.034 81h50v50h-50z"
	  />

	  <path
		fill={props.b20}
		d="M296.034 136h50v50h-50z"
	  />

	  <path
		fill={props.b21}
		d="M351.034 136h50v50h-50z"
	  />

	  <path
		fill={props.b22}
		d="M406.034 136h50v50h-50z"
	  />

	  <path
		fill={props.b23}
		d="M461.034 136h50v50h-50z"
	  />

	  <path
		fill={props.b30}
		d="M296.034 191h50v50h-50z"
	  />

	  <path
		fill={props.b31}
		d="M351.034 191h50v50h-50z"
	  />

	  <path
		fill={props.b32}
		d="M406.034 191h50v50h-50z"
	  />

	  <path
		fill={props.b33}
		d="M461.034 191h50v50h-50z"
	  />
	  <path stroke="#000" d="M288.5 19.5h229v228h-229z" />
	  <path
		fill={props.b33}
		d="M461.034 191h50v50h-50z"
	  />

	  <path
		fill={props.a00}
		d="M16 26h50v50H16z"
	  />

	  <path
		fill={props.a01}
		d="M71 26h50v50H71z"
	  />

	  <path
		fill={props.a02}
		d="M126 26h50v50h-50z"
	  />

	  <path
		fill={props.a03}
		d="M181 26h50v50h-50z"
	  />

	  <path
		fill={props.a10}
		d="M16 81h50v50H16z"
	  />

	  <path
		fill={props.a11}
		d="M71 81h50v50H71z"
	  />

	  <path
		fill={props.a12}
		d="M126 81h50v50h-50z"
	  />

	  <path
		fill={props.a13}
		d="M181 81h50v50h-50z"
	  />

	  <path
		fill={props.a20}
		d="M16 136h50v50H16z"
	  />

	  <path
		fill={props.a21}
		d="M71 136h50v50H71z"
	  />

	  <path
		fill={props.a22}
		d="M126 136h50v50h-50z"
	  />

	  <path
		fill={props.a23}
		d="M181 136h50v50h-50z"
	  />

	  <path
		fill={props.a30}
		d="M16 191h50v50H16z"
	  />

	  <path
		fill={props.a31}
		d="M71 191h50v50H71z"
	  />

	  <path
		fill={props.a32}
		d="M126 191h50v50h-50z"
	  />

	  <path
		fill={props.a33}
		d="M181 191h50v50h-50z"
	  />
	  <path
		stroke="#000"
		d="M9.5 19.5h229v228H9.5zM249.354 117.612l29.068 29.069M248.646 146.681l29.069-29.069"
	  />
	  <path stroke="#000" strokeWidth={2} d="M530.034 126h28M530.034 142h28" />
	</svg>
  )
  
