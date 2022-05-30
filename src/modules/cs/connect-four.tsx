import * as React from "react"
import useWindowDimensions from "../../utils/hooks/use-window-dimension.hook";
import { Col, Layout, Row } from 'antd';
import { SVGProps, useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Content } from "antd/lib/layout/layout";
import { ZezaNeutralSvg } from "../../assets/svg/zeza-neutral-svg";
import { VSeparator } from "../../components/atm.separator/v-separator";
import { BubbleWrapper, ChatWrapper, FooterWrapper, QuickReplyWrapper } from "../zeza/zeza.style";
import Grid from "antd/lib/card/Grid";
import axios from "axios";

const push = (board1: any, setBoard1: any, board2: any, setBoard2: any, pos:number, cellHeight: Array<number>, setCellHeight: any, legal_moves: Array<number>, setLegalMoves: any, fen: any, setFen:any, k:any, setK: any, player: any): boolean => {
	//console.log('board', board, 'pos: ', pos)

	let board;
	let setBoard;
	if(player == 0){
		board = board1;
		setBoard = setBoard1;
	}else{
		board = board2;
		setBoard = setBoard2;
	}

	//board[pos][cellHeight[pos]] = 1;
	let things = Array<Array<number>>(6);

	for(var i: number = 0; i < 6; i++) {
		things[i] = Array<number>(7);
		for(var j: number = 0; j< 7; j++) {
			things[i][j] = board[i][j];
		}
	}
	//console.log('things: ', things);
	things[cellHeight[pos]][pos] = 1;
	setBoard(things);
	//console.log('board: ', board);

	let pos_y = cellHeight[pos];
	let new_things = Array<number>(7);
	for(var i: number = 0; i < 7; i++) {
		new_things[i] = cellHeight[i];
	}
	new_things[pos] += 1;
	setCellHeight(new_things);
	//cellHeight[pos]+=1

	if(cellHeight[pos]>5){
		new_things = [0, 0, 0, 0, 0, 0, 0];
		for(var i: number = 0; i < 7; i++) {
			new_things[i] = legal_moves[i];
		}
		new_things[pos] = 0;

		setLegalMoves(new_things);
		//legal_moves[pos]=0
	}
	
	let things2 = Array<Array<number>>(7);

	for(var i: number = 0; i < 7; i++) {
		things2[i] = Array<number>(6);
		for(var j: number = 0; j< 6; j++) {
			things2[i][j] = board[j][i];
		}
	}

	let win = false;
	if( pos>=3){
		if( 1== things2[pos-3][pos_y] && things2[pos-3][pos_y] == things2[pos-2][pos_y] && things2[pos-2][pos_y]==things2[pos-1][pos_y]){
			win=true
		}
	}

	console.log('debuuuug: win', win,  pos, ' pos_y ', pos_y, 'things2', things2);
	if( pos>=2 && pos<6){
		if( 1==things2[pos-2][pos_y] && things2[pos-2][pos_y] ==things2[pos-1][pos_y] && things2[pos-1][pos_y] ==things2[pos+1][pos_y]){
			win=true
		}
	}

	if( pos>=3 && pos_y>=3){
		if( 1==things2[pos-3][pos_y-3] && things2[pos-3][pos_y-3] ==things2[pos-2][pos_y-2] && things2[pos-2][pos_y-2] ==things2[pos-1][pos_y-1]){
			win=true
		}
	}

	if( pos>=2 &&pos_y>=2 &&pos<6 &&pos_y<5){
		if( 1==things2[pos-2][pos_y-2] && things2[pos-2][pos_y-2] ==things2[pos-1][pos_y-1] && things2[pos-1][pos_y-1] ==things2[pos+1][pos_y+1]){
			win=true
		}
	}

	if( pos>=3 &&pos_y<=2){
		if( 1==things2[pos-3][pos_y+3] && things2[pos-3][pos_y+3] ==things2[pos-2][pos_y+2] && things2[pos-2][pos_y+2] ==things2[pos-1][pos_y+1]){
			win=true
		}
	}

	if( pos>=2 &&pos_y<=3 &&pos<6 &&pos_y>0){
		if( 1==things2[pos-2][pos_y+2] && things2[pos-2][pos_y+2] ==things2[pos-1][pos_y+1] && things2[pos-1][pos_y+1] ==things2[pos+1][pos_y-1]){
			win=true
		}
	}

	if(pos<=3){
		if( 1==things2[pos+3][pos_y] && things2[pos+3][pos_y] ==things2[pos+2][pos_y] && things2[pos+2][pos_y] ==things2[pos+1][pos_y]){
			win=true
		}
	}

	if( pos<=4 &&pos>0){
		if( 1==things2[pos+2][pos_y] && things2[pos+2][pos_y] ==things2[pos+1][pos_y] && things2[pos+1][pos_y] ==things2[pos-1][pos_y]){
			win=true    
		}
	}

			
	if( pos<=3 &&pos_y>=3){
		if( 1==things2[pos+3][pos_y-3] && things2[pos+3][pos_y-3] ==things2[pos+2][pos_y-2] && things2[pos+2][pos_y-2] ==things2[pos+1][pos_y-1]){
			win=true
		}
	}

	if( pos<=4 && pos_y>=2 && pos>0 && pos_y<5){
		if( 1==things2[pos+2][pos_y-2] && things2[pos+2][pos_y-2] ==things2[pos+1][pos_y-1] && things2[pos+1][pos_y-1] ==things2[pos-1][pos_y+1]){
			win=true
		}
	}
		
	if( pos<=3 && pos_y<=2){
		if( 1==things2[pos+3][pos_y+3] && things2[pos+3][pos_y+3] ==things2[pos+2][pos_y+2] && things2[pos+2][pos_y+2] ==things2[pos+1][pos_y+1]){
			win=true
		}
	}


	if( pos<=4 && pos_y<=3 && pos>0 && pos_y>0){
		if( 1==things2[pos+2][pos_y+2] && things2[pos+2][pos_y+2] ==things2[pos+1][pos_y+1] && things2[pos+1][pos_y+1] ==things2[pos-1][pos_y-1]){
			win=true
		}
	}

	if( pos_y>=3){
		if( 1==things2[pos][pos_y-3] && things2[pos][pos_y-3] ==things2[pos][pos_y-2] && things2[pos][pos_y-2] ==things2[pos][pos_y-1]){
			win = true
		}
	}
	
	let new_fen = "";
	for(let i = 0; i < pos*7+pos_y; i++){
		new_fen += fen[i];
	}
	new_fen += k;
	for(let i = pos*7+pos_y+1; i < fen.length-1; i++){
		new_fen += fen[i];
	}
	new_fen += pos;
	setFen(new_fen);
	setK(k+1);

	return win;

}
export const ConnectFour: React.FunctionComponent = () => {

	const isBrowser = typeof window !== "undefined";
	if (!isBrowser) return <></>;
	const {width, height} = useWindowDimensions();
	const baseURL = "http://localhost:8296/connect_four";
	const test_board = "17900008100000000000003000000400000060000002500000000000000000000000000000000000000001"
	
	
	function createPost(){
		axios
		.post(baseURL, {
			actions: actions,
		})
		.then((response) => {
			console.log('response: ', response.data);
			const pos_x = response.data.move;
			console.log('pos_x: ', pos_x, (35 - 7*cellHeight[pos_x])+pos_x)	

			setBlock(false);
			refs.current[(35 - 7*cellHeight[pos_x])+pos_x].click()
		}).catch( error =>  {
			console.log("[Error]", error);
		});
	}



	const [board1, setBoard1] = useState([[0, 0, 0, 0, 0, 0, 0], 
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],]);
	const [board2, setBoard2] = useState([[0, 0, 0, 0, 0, 0, 0], 
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],
										[0, 0, 0, 0, 0, 0, 0],]);
	const [cellHeight, setCellHeigth] = useState([0, 0, 0, 0, 0, 0, 0]);
	const [legal_moves, setLegalMoves] = useState([0, 0, 0, 0, 0, 0, 0]);
	const [player, setPlayer] = useState(0);		
	const [finished, setFinished] = useState(false);
	const [block, setBlock] = useState(false);
	const [fen, setFen] = useState("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
	const [k, setK] = useState(1);
	const [actions, setActions] = useState([])
	const refs = useRef(new Array())

	console.log('FEN: ', fen)
	console.log('Actions: ', actions)
	
	const handleClick = (pos_x:number, pos_y:number, changeColor: (color : CellColors) => void) => {
		console.log('CLIKED ', finished, block, player)
		if(finished) return;	
		if(block && player == 1)return;

		console.log(cellHeight, pos_x, pos_y, cellHeight[pos_x] != pos_y)
		if(cellHeight[pos_x] !== pos_y){
			console.log('Bad position')
			return
		}
		const result = push(board1, setBoard1, board2, setBoard2, pos_x, cellHeight, setCellHeigth,legal_moves, setLegalMoves, fen, setFen, k, setK, player);
		setActions([...actions, pos_x as never])

		
		if(player == 0){
			changeColor(CellColors.Blue)
		}else {
			changeColor(CellColors.Red)
		}

		if(result){
			let str = ''
			if(player == 1){
				str = 'Red won!'
			}else{
				str = 'Blue won!'
			}

			alert('The game is over: ' + str)
			setFinished(true)
		}

		setPlayer((player + 1) % 2);

		return
	}

	useEffect(() => {
		console.log('player: ', player);
		if(player == 1){
			console.log('teste')
			//setBlock(true);
			//createPost();
		}

	} ,  [player])

	const resetGame = () => {
		window.location.reload();
	}

	return (
		<>
		 <GridWrapperWrapper>
			<GridWrapper>
				{board1.map((row, i) => (
				<div style={{backgroundColor: "transparent"}} key={i}>
					{row.map((col, j) => (
					<span key={j}>
						{ 
							<Cell refe={(element:any) => refs.current.push(element)} width={width} height={height} pos_x={j} pos_y={5-i} handleClick={(pos_x, pos_y, changeColor) => handleClick(pos_x, pos_y, changeColor)}/>
					}</span>
					))}
				</div>
				))}
			</GridWrapper>
		 </GridWrapperWrapper>

		<WrapperConsumer onClick={() => resetGame()}>New game</WrapperConsumer>
		</>
	)
}

enum CellColors {
	Blue = "#4169E1", 
	Red = "#B22222", 
	Neutral = "#C0C0C0" 
}

interface CellProps {
	refe: any;
	pos_x: number;
	pos_y: number;
	width: number;
	height: number;
	handleClick: (pos_x: number, pos_y: number, changeColor: (color: CellColors) => void) => void;
}


const Cell: React.FunctionComponent<CellProps> = props => {

	const [color, setColor] = useState(CellColors.Neutral)
	const {pos_x, pos_y, width, height, refe} = props;

	const handleClick = () => {
		//console.log('testes');
		props.handleClick(pos_x, pos_y, setColor);
	}	

	console.log(0.1*width, 0.1*height)
	let cellSize = Math.min(0.1*width, 0.1*height)

	if (cellSize >= 80)cellSize = 80;

	return <>
		<CellWrapper>
			<CellStyle ref={refe} color={color} width={cellSize} height={cellSize} onClick={() => handleClick()}/>
		</CellWrapper>
	</>
}

const GridWrapperWrapper = styled.div`
	margin-right: auto;
	margin-left: auto;
	margin-top: 50px;
	margin-bottom: 50px;
	display: flex; 
	align-items: center;
	justify-content: center;
	max-width: 800px;
`

const GridWrapper = styled.div`
	margin-right: auto;
	margin-left: auto;
	margin-top: 50px;
	margin-bottom: 50px;
	display: inline-block;
	align-items: center;
	justify-content: center;
	max-width: 800px;
	background: #778899;
	border-radius: 10px;
	padding: 10px;
`

const CellWrapper = styled.div`
	display: inline-block;
	padding: 5px;
	`

const CellStyle = styled.div<{color: string, width: number, height: number}>`
	width: ${p => p.width}px;
	height: ${p => p.height}px;
	background: ${p => p.color};
	display: inline-block;
	border-radius: 40px;
`

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
	margin: auto;
	text-align: center;
	height: auto;
	margin-right: auto;
	margin-left: auto;
	margin-top: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 450px;
`;

const WrapperConsumer = styled.div`
	background-color: #70c056;
	${commonStyle}
`