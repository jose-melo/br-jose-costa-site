import * as React from "react"
import useWindowDimensions from "../../utils/hooks/use-window-dimension.hook";
import { Input } from 'antd';
import { useState } from "react";
import { useEffect } from "react";

enum Bit {
	Low = 0,
	High = 1
}

enum FirstLevelBitColor {
	Low = "#AE87DD",
	High = "#5E10BC",
	HighLinux = "#F77B2E",
	LowLinux = "#FAB07C"
}

enum SecondLevelBitColor {
	Low = "#8FD988",
	High = "#4DC342"
}

enum PgdState {
	Unused,
	Used
}

enum ColorType1 {
	Unused = "#C4C4C4",
	Main = "#2E2A79",
	Second = "#4B3E9C",
	Thrid = "#5F4FA2",
	Last = "#A995C9",
}

enum ColorType2 {
	Unused = "#C4C4C4",
	Main = "#0D80A2",
	Second = "#11ADCF",
	Thrid = "#47BED8",
	Last = "#A1DBEC",
}

enum ColorType3 {
	Unused = "#C4C4C4",
	Main = "#CDCD29",
	Second = "#F5EC32",
	Thrid = "#F4EF58",
	Last = "#FAF6AE",
}

enum ColorType4 {
	Unused = "#C4C4C4",
	Main = "#CE8C2C",
	Second = "#FCB927",
	Thrid = "#FEC854",
	Last = "#FFD77E",
}

enum ColorType5 {
	Unused = "#C4C4C4",
	Main = "#CE5028",
	Second = "#F77B2E",
	Thrid = "#F69558",
	Last = "#FAB07C",
}

enum ColorType6 {
	Unused = "#C4C4C4",
	Main = "#FF53BA",
	Second = "#FF8AD0",
	Thrid = "#FF9DD8",
	Last = "#FFBFE6",
}

enum ColorType7 {
	Unused = "#C4C4C4",
	Main = "#9433ff",
	Second = "#b46fff",
	Thrid = "#b46fff",
	Last = "#cfa4ff",
}

enum ColorType8 {
	Unused = "#C4C4C4",
	Main = " #41edff ",
	Second = "#81f3ff",
	Thrid = "#81f3ff",
	Last = "#cbfaff ",
}

enum PageColor {
	Unused = ColorType1.Unused,
	Type1 = ColorType1.Last,
	Type2 = ColorType2.Last,
	Type3 = ColorType3.Last,
	Type4 = ColorType4.Last,
	Type5 = ColorType5.Last,
	Type6 = ColorType6.Last,
	Type7 = ColorType7.Last,
	Type8 = ColorType8.Last,
	Type11 = ColorType1.Second,
	Type21 = ColorType2.Second,
	Type31 = ColorType3.Second,
	Type41 = ColorType4.Second,
	Type51 = ColorType5.Second,
	Type61 = ColorType6.Second,
	Type71 = ColorType7.Second,
	Type81 = ColorType8.Second,
}


enum PmdColorSecond {
	Unused = ColorType1.Unused,
	Type1 = ColorType1.Second,
	Type2 = ColorType2.Second,
	Type3 = ColorType3.Second,
	Type4 = ColorType4.Second,
	Type5 = ColorType5.Second,
	Type6 = ColorType6.Second,
	Type7 = ColorType7.Second,
	Type8 = ColorType8.Second,
	Type11 = ColorType1.Last,
	Type21 = ColorType2.Last,
	Type31 = ColorType3.Last,
	Type41 = ColorType4.Last,
	Type51 = ColorType5.Last,
	Type61 = ColorType6.Last,
	Type71 = ColorType7.Last,
	Type81 = ColorType8.Last
}

enum PmdColorLast {
	Unused = ColorType1.Unused,
	Type1 = ColorType1.Last,
	Type2 = ColorType2.Last,
	Type3 = ColorType3.Last,
	Type4 = ColorType4.Last,
	Type5 = ColorType5.Last,
	Type6 = ColorType6.Last,
	Type7 = ColorType7.Last,
	Type8 = ColorType8.Last,
}

enum BuddyColor {
	Level0 = "#0082ff ",
	Level1 = "#60b1ff",
	Level2 = "#add8e6",
	Level3 = "#72bcd4",
	Level4 = "#86c5da",
	Level5 = "#99cfe0",
	Level6 = "#add8e6",
	Level7 = "#dbf0f6 ",
	Fault = "#CE2027",
}

enum PgdFaultColor {
	Fault = "#CE2027",
	Ok = "#6FA340"
}

const mapPMD = [3, 0, 7, 1, 5, 2, 4, 6];

function toggleBit(bit: Bit){
	if(bit == Bit.Low)
		return Bit.High;
	return Bit.Low;
}


function toggleSecondLevelColor(color: SecondLevelBitColor){
	if(color == SecondLevelBitColor.Low)
		return SecondLevelBitColor.High;
	return SecondLevelBitColor.Low;
}

enum ModoLinuxColor {
	Low = "#F77B2E",
	High = "#FAB07C"
}


const mapPageOffset: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

const useBitState = () => {
	const [b8, setB8] = useState(Bit.Low);
	const [b7, setB7] = useState(Bit.Low);
	const [b6, setB6] = useState(Bit.Low);
	const [b5, setB5] = useState(Bit.Low);

	const [b8Color, setB8Color] = useState(FirstLevelBitColor.Low);	
	const [b7Color, setB7Color] = useState(FirstLevelBitColor.Low);	
	const [b6Color, setB6Color] = useState(FirstLevelBitColor.Low);	
	const [b5Color, setB5Color] = useState(SecondLevelBitColor.Low);	

	console.log("initial b6 = ", b6);
	const [pgd0, setpdg0] = useState(PgdState.Unused);
	const [pgd1, setpdg1] = useState(PgdState.Unused);
	const [pgd2, setpdg2] = useState(PgdState.Unused);
	const [pgd3, setpdg3] = useState(PgdState.Unused);
	const [pgd4, setpdg4] = useState(PgdState.Unused);
	const [pgd5, setpdg5] = useState(PgdState.Unused);
	const [pgd6, setpdg6] = useState(PgdState.Unused);
	const [pgd7, setpdg7] = useState(PgdState.Unused);
	
	const [pgd0Color, setPgd0Color] = useState(ColorType1.Unused);
	const [pgd1Color, setPgd1Color] = useState(ColorType2.Unused);
	const [pgd2Color, setPgd2Color] = useState(ColorType3.Unused);
	const [pgd3Color, setPgd3Color] = useState(ColorType4.Unused);
	const [pgd4Color, setPgd4Color] = useState(ColorType5.Unused);
	const [pgd5Color, setPgd5Color] = useState(ColorType6.Unused);
	const [pgd6Color, setPgd6Color] = useState(ColorType7.Unused);
	const [pgd7Color, setPgd7Color] = useState(ColorType8.Unused);

	const [pgd0BitColor, setPgd0BitColor] = useState(PgdFaultColor.Fault);
	const [pgd1BitColor, setPgd1BitColor] = useState(PgdFaultColor.Fault);
	const [pgd2BitColor, setPgd2BitColor] = useState(PgdFaultColor.Fault);
	const [pgd3BitColor, setPgd3BitColor] = useState(PgdFaultColor.Fault);
	const [pgd4BitColor, setPgd4BitColor] = useState(PgdFaultColor.Fault);
	const [pgd5BitColor, setPgd5BitColor] = useState(PgdFaultColor.Fault);
	const [pgd6BitColor, setPgd6BitColor] = useState(PgdFaultColor.Fault);
	const [pgd7BitColor, setPgd7BitColor] = useState(PgdFaultColor.Fault);

	const [page0Color, setPage0Color] = useState(PageColor.Unused);
	const [page1Color, setPage1Color] = useState(PageColor.Unused);
	const [page2Color, setPage2Color] = useState(PageColor.Unused);
	const [page3Color, setPage3Color] = useState(PageColor.Unused);
	const [page4Color, setPage4Color] = useState(PageColor.Unused);
	const [page5Color, setPage5Color] = useState(PageColor.Unused);
	const [page6Color, setPage6Color] = useState(PageColor.Unused);
	const [page7Color, setPage7Color] = useState(PageColor.Unused);

	const [buddy0Color, setBuddy0Color] = useState(BuddyColor.Level0);
	const [buddy1Color, setBuddy1Color] = useState(BuddyColor.Level0);
	const [buddy2Color, setBuddy2Color] = useState(BuddyColor.Level0);
	const [buddy3Color, setBuddy3Color] = useState(BuddyColor.Level0);
	const [buddy4Color, setBuddy4Color] = useState(BuddyColor.Level0);
	const [buddy5Color, setBuddy5Color] = useState(BuddyColor.Level0);
	const [buddy6Color, setBuddy6Color] = useState(BuddyColor.Level0);
	const [buddy7Color, setBuddy7Color] = useState(BuddyColor.Level0);
	const [buddyAllocations, setBuddyAllocations] = useState(0);

	const [pmd0Color, setPmd0Color] = useState(PmdColorSecond.Unused);
	const [pmd1Color, setPmd1Color] = useState(PmdColorSecond.Unused);
	const [pmd2Color, setPmd2Color] = useState(PmdColorSecond.Unused);
	const [pmd3Color, setPmd3Color] = useState(PmdColorSecond.Unused);
	const [pmd4Color, setPmd4Color] = useState(PmdColorSecond.Unused);
	const [pmd5Color, setPmd5Color] = useState(PmdColorSecond.Unused);
	const [pmd6Color, setPmd6Color] = useState(PmdColorSecond.Unused);
	const [pmd7Color, setPmd7Color] = useState(PmdColorSecond.Unused);
	const [pmd8Color, setPmd8Color] = useState(PmdColorSecond.Unused);
	const [pmd9Color, setPmd9Color] = useState(PmdColorSecond.Unused);
	const [pmd10Color, setPmd10Color] = useState(PmdColorSecond.Unused);
	const [pmd11Color, setPmd11Color] = useState(PmdColorSecond.Unused);
	const [pmd12Color, setPmd12Color] = useState(PmdColorSecond.Unused);
	const [pmd13Color, setPmd13Color] = useState(PmdColorSecond.Unused);
	const [pmd14Color, setPmd14Color] = useState(PmdColorSecond.Unused);
	const [pmd15Color, setPmd15Color] = useState(PmdColorSecond.Unused);

	
	const [offsetGlobal, setOffsetGlobal] = useState(0);
	const [modoL, setModoLinux] = useState(0);

	useEffect(() => {
		if(pgd0 == PgdState.Used)
			setPgd0Color(ColorType1.Main);
		else
			setPgd0Color(ColorType1.Unused);	

		if(pgd1 == PgdState.Used)
			setPgd1Color(ColorType2.Main);
		else
			setPgd1Color(ColorType2.Unused);

		if(pgd2 == PgdState.Used)
			setPgd2Color(ColorType3.Main);
		else
			setPgd2Color(ColorType3.Unused);

		if(pgd3 == PgdState.Used)
			setPgd3Color(ColorType4.Main);
		else
			setPgd3Color(ColorType4.Unused);	

		if(pgd4 == PgdState.Used)
			setPgd4Color(ColorType5.Main);
		else
			setPgd4Color(ColorType5.Unused);	

		if(pgd5 == PgdState.Used)
			setPgd5Color(ColorType6.Main);
		else
			setPgd5Color(ColorType6.Unused);

		if(pgd6 == PgdState.Used)
			setPgd6Color(ColorType7.Main);
		else
			setPgd6Color(ColorType7.Unused);

		if(pgd7 == PgdState.Used)
			setPgd7Color(ColorType8.Main);
		else
			setPgd7Color(ColorType8.Unused);	
		
			
	}, [pgd0, pgd1,  pgd2, pgd3, pgd4, pgd5, pgd6, pgd7, offsetGlobal]);

	useEffect(() => {
		switch(offsetGlobal){
			case 0:
				setpdg0(PgdState.Used);
				setpdg1(PgdState.Unused);
				setpdg2(PgdState.Unused);
				setpdg3(PgdState.Unused);
				setpdg4(PgdState.Unused);
				setpdg5(PgdState.Unused);
				setpdg6(PgdState.Unused);
				setpdg7(PgdState.Unused);

				break;
			case 1:
				setpdg0(PgdState.Unused);
				setpdg1(PgdState.Used);
				setpdg2(PgdState.Unused);
				setpdg3(PgdState.Unused);
				setpdg4(PgdState.Unused);
				setpdg5(PgdState.Unused);
				setpdg6(PgdState.Unused);
				setpdg7(PgdState.Unused);
				break;
			case 2:
				setpdg0(PgdState.Unused);
				setpdg1(PgdState.Unused);
				setpdg2(PgdState.Used);
				setpdg3(PgdState.Unused);
				setpdg4(PgdState.Unused);
				setpdg5(PgdState.Unused);
				setpdg6(PgdState.Unused);
				setpdg7(PgdState.Unused);
				break;
			case 3:
				setpdg0(PgdState.Unused);
				setpdg1(PgdState.Unused);
				setpdg2(PgdState.Unused);
				setpdg3(PgdState.Used);
				setpdg4(PgdState.Unused);
				setpdg5(PgdState.Unused);
				setpdg6(PgdState.Unused);
				setpdg7(PgdState.Unused);
				break;
			case 4:
				setpdg0(PgdState.Unused);
				setpdg1(PgdState.Unused);
				setpdg2(PgdState.Unused);
				setpdg3(PgdState.Unused);
				setpdg4(PgdState.Used);
				setpdg5(PgdState.Unused);
				setpdg6(PgdState.Unused);
				setpdg7(PgdState.Unused);
				break;
			case 5:
				setpdg0(PgdState.Unused);
				setpdg1(PgdState.Unused);
				setpdg2(PgdState.Unused);
				setpdg3(PgdState.Unused);
				setpdg4(PgdState.Unused);
				setpdg5(PgdState.Used);
				setpdg6(PgdState.Unused);
				setpdg7(PgdState.Unused);
				break;
			case 6:
				setpdg0(PgdState.Unused);
				setpdg1(PgdState.Unused);
				setpdg2(PgdState.Unused);
				setpdg3(PgdState.Unused);
				setpdg4(PgdState.Unused);
				setpdg5(PgdState.Unused);
				setpdg6(PgdState.Used);
				setpdg7(PgdState.Unused);
				break;
			case 7:
				setpdg0(PgdState.Unused);
				setpdg1(PgdState.Unused);
				setpdg2(PgdState.Unused);
				setpdg3(PgdState.Unused);
				setpdg4(PgdState.Unused);
				setpdg5(PgdState.Unused);
				setpdg6(PgdState.Unused);
				setpdg7(PgdState.Used);
				break;
		}
	}, [offsetGlobal]);

	const setPmd = [setPmd0Color, setPmd1Color, setPmd2Color, setPmd3Color, setPmd4Color,
		setPmd5Color, setPmd6Color, setPmd7Color,setPmd8Color,setPmd9Color,setPmd10Color,
		setPmd11Color,setPmd12Color,setPmd13Color,setPmd14Color, setPmd15Color];
	const pmdColorsSecond = [PmdColorSecond.Type1, PmdColorSecond.Type2, PmdColorSecond.Type4,
		PmdColorSecond.Type5, PmdColorSecond.Type6, PmdColorSecond.Type7, PmdColorSecond.Type8];

		const pmdColorsLast = [PmdColorSecond.Type11, PmdColorSecond.Type21, PmdColorSecond.Type41,
			PmdColorSecond.Type51, PmdColorSecond.Type61, PmdColorSecond.Type71, PmdColorSecond.Type81];
	const pgdBit = [pgd0BitColor, pgd1BitColor, pgd2BitColor, pgd3BitColor, pgd4BitColor,
	pgd5BitColor, pgd6BitColor, pgd7BitColor];

	const setPage = [setPage0Color, setPage1Color, setPage2Color, setPage3Color,
	setPage4Color, setPage5Color, setPage6Color, setPage7Color];

	useEffect(() => {
		const pmd = mapPMD[offsetGlobal];
		const pmd_1 = 2*pmd;
		const pmd_2 = pmd_1 + 1;

		const page = mapPageOffset[offsetGlobal];
		console.log("page = ", page, " b5 = ", b5);
		const page_1 = page;
		const page_2 = page+1;
		// console.log("pmd_1 = ", pmd_1, " pmd_2 = ", pmd_2);
		// console.log("b5 = ", b5, " offsetGlobal = ", offsetGlobal);
		if(pgdBit[offsetGlobal] == PgdFaultColor.Ok){
			if(b5 == 0){
				setPmd[pmd_1](pmdColorsSecond[offsetGlobal]);
				setPmd[pmd_2](pmdColorsLast[offsetGlobal]);
				setPage[page_1](pageColorsSecond[offsetGlobal])
				setPage[page_2](pageColors[offsetGlobal])
			}else{
				setPmd[pmd_1](pmdColorsLast[offsetGlobal]);
				setPmd[pmd_2](pmdColorsSecond[offsetGlobal]);
				setPage[page_1](pageColors[offsetGlobal])
				setPage[page_2](pageColorsSecond[offsetGlobal]);
			}
		}

	}, [b5]);

	const onB8Click = () => {

		let offset = 0;
		if(b8 == Bit.Low){
			setB8(Bit.High);
			setB8Color(FirstLevelBitColor.High);
			offset+=4;
		}else{
			setB8(Bit.Low);
			setB8Color(FirstLevelBitColor.Low);
		}

		if(b6 == Bit.High)offset+=1;
		if(b7 == Bit.High)offset+=2;
		setOffsetGlobal(offset);
	}

	const onB7Click = () => {
		let offset = 0;
		if(b7 == Bit.Low){
			setB7(Bit.High);
			setB7Color(FirstLevelBitColor.High);
			offset+=2;
		}else{
			setB7(Bit.Low);
			setB7Color(FirstLevelBitColor.Low);
		}

		if(b6 == Bit.High)offset+=1;
		if(b8 == Bit.High)offset+=4;
		setOffsetGlobal(offset);
	}

	useEffect(() => {
		if(b6 == Bit.High){
			if(modoL == 0)
				setB6Color(FirstLevelBitColor.High);
			else
				setB6Color(FirstLevelBitColor.HighLinux)
		}else{
			if(modoL == 0)
				setB6Color(FirstLevelBitColor.Low);
			else
				setB6Color(FirstLevelBitColor.LowLinux);
		}
	}, [modoL])

	const onB6Click = () => {
		let offset = 0;
		if(b6 == Bit.Low){
			setB6(Bit.High);
			if(modoL == 0)
				setB6Color(FirstLevelBitColor.High);
			else
				setB6Color(FirstLevelBitColor.HighLinux)
			offset+=1;
		}else{
			setB6(Bit.Low);
			if(modoL == 0)
				setB6Color(FirstLevelBitColor.Low);
			else
				setB6Color(FirstLevelBitColor.LowLinux);

		}

		if(b8 == Bit.High)offset+=4;
		if(b7 == Bit.High)offset+=2;
		setOffsetGlobal(offset);
	}

	const onB5Click = () => {
		setB5(toggleBit(b5));	
		if(b5 == Bit.Low){
				setB5Color(SecondLevelBitColor.High);
		}else{
				setB5Color(SecondLevelBitColor.Low);
		}
	}

	const pageColors = [PageColor.Type1, PageColor.Type2, PageColor.Type3, PageColor.Type4,
		PageColor.Type5, PageColor.Type6, PageColor.Type7, PageColor.Type8
	];
	const pageColorsSecond = [PageColor.Type11, PageColor.Type21, PageColor.Type31, 
		PageColor.Type41, PageColor.Type51, PageColor.Type61, PageColor.Type71,
		PageColor.Type81
	];
	const pgdBitColor = [setPgd0BitColor, setPgd1BitColor, setPgd2BitColor,
	setPgd3BitColor, setPgd4BitColor, setPgd5BitColor, setPgd6BitColor, 
	setPgd7BitColor];

	const allocate = () => {
		switch(buddyAllocations){
			case 0:
				mapPageOffset[offsetGlobal] = 0;
				const pmd = mapPMD[offsetGlobal];
				const pmd_1 = 2*pmd;
				const pmd_2 = pmd_1 + 1;
				if(b5 == 0){
					setPmd[pmd_1](pmdColorsSecond[offsetGlobal]);
					setPmd[pmd_2](pmdColorsLast[offsetGlobal]);
					setPage0Color(pageColorsSecond[offsetGlobal]);
					setPage1Color(pageColors[offsetGlobal]);
				}else{
					setPmd[pmd_1](pmdColorsLast[offsetGlobal]);
					setPmd[pmd_2](pmdColorsSecond[offsetGlobal]);
					setPage0Color(pageColors[offsetGlobal]);
					setPage1Color(pageColorsSecond[offsetGlobal]);
				}

				pgdBitColor[offsetGlobal](PgdFaultColor.Ok);
				setBuddyAllocations(buddyAllocations+1);
				setBuddy3Color(BuddyColor.Level1);
				setBuddy2Color(BuddyColor.Level1);	
				setBuddy1Color(BuddyColor.Level2);
				setBuddy0Color(BuddyColor.Level2);
				break;
			case 1:

				mapPageOffset[offsetGlobal] = 2;
				pgdBitColor[offsetGlobal](PgdFaultColor.Ok);
				
				const pmd2 = mapPMD[offsetGlobal];
				const pmd_12 = 2*pmd2;
				const pmd_22 = pmd_12 + 1;
				if(b5 == 0){
					setPmd[pmd_12](pmdColorsSecond[offsetGlobal]);
					setPmd[pmd_22](pmdColorsLast[offsetGlobal]);
					if(!modoL)setPage2Color(pageColorsSecond[offsetGlobal]);
					if(!modoL)setPage3Color(pageColors[offsetGlobal]);
				}else{
					setPmd[pmd_12](pmdColorsLast[offsetGlobal]);
					setPmd[pmd_22](pmdColorsSecond[offsetGlobal]);

					if(!modoL)setPage2Color(pageColors[offsetGlobal]);
					if(!modoL)setPage3Color(pageColorsSecond[offsetGlobal]);
				}
				setBuddyAllocations(buddyAllocations+1);
				setBuddy3Color(BuddyColor.Level2);
				setBuddy2Color(BuddyColor.Level2);
				break;
			case 2:

				pgdBitColor[offsetGlobal](PgdFaultColor.Ok);
				
				mapPageOffset[offsetGlobal] = 4;
				const pmd3 = mapPMD[offsetGlobal];
				const pmd_13= 2*pmd3;
				const pmd_23 = pmd_13 + 1;
				if(b5 == 0){
					setPmd[pmd_13](pmdColorsSecond[offsetGlobal]);
					setPmd[pmd_23](pmdColorsLast[offsetGlobal]);
					setPage4Color(pageColorsSecond[offsetGlobal]);
					setPage5Color(pageColors[offsetGlobal]);
				}else{
					setPmd[pmd_13](pmdColorsLast[offsetGlobal]);
					setPmd[pmd_23](pmdColorsSecond[offsetGlobal]);

					setPage4Color(pageColors[offsetGlobal]);
					setPage5Color(pageColorsSecond[offsetGlobal]);
				}
				setBuddyAllocations(buddyAllocations+1);
				setBuddy4Color(BuddyColor.Level2);
				setBuddy5Color(BuddyColor.Level2);
				setBuddy6Color(BuddyColor.Level1);
				setBuddy7Color(BuddyColor.Level1);
				break;
			case 3:

				mapPageOffset[offsetGlobal] = 6;
				pgdBitColor[offsetGlobal](PgdFaultColor.Ok);
				
				const pmd4 = mapPMD[offsetGlobal];
				const pmd_14 = 2*pmd4;
				const pmd_24 = pmd_14 + 1;
				if(b5 == 0){
					setPmd[pmd_14](pmdColorsSecond[offsetGlobal]);
					setPmd[pmd_24](pmdColorsLast[offsetGlobal]);
					if(!modoL)setPage6Color(pageColorsSecond[offsetGlobal]);
					if(!modoL)setPage7Color(pageColors[offsetGlobal]);
				}else{
					setPmd[pmd_14](pmdColorsLast[offsetGlobal]);
					setPmd[pmd_24](pmdColorsSecond[offsetGlobal]);

					if(!modoL)setPage6Color(pageColors[offsetGlobal]);
					if(!modoL)setPage7Color(pageColorsSecond[offsetGlobal]);
				}
				setBuddyAllocations(buddyAllocations+1);
				setBuddy6Color(BuddyColor.Level2);
				setBuddy7Color(BuddyColor.Level2);
				break;
			default:
				pgdBitColor[offsetGlobal](PgdFaultColor.Ok);
				setBuddy0Color(BuddyColor.Fault);
				setBuddy1Color(BuddyColor.Fault);
				setBuddy2Color(BuddyColor.Fault);
				setBuddy3Color(BuddyColor.Fault);
				setBuddy4Color(BuddyColor.Fault);
				setBuddy5Color(BuddyColor.Fault);
				setBuddy6Color(BuddyColor.Fault);
				setBuddy7Color(BuddyColor.Fault);
		}	
	}

	const modoLinux = () => {
		if(modoL == 0)
			setModoLinux(1);
		else
			setModoLinux(0);
	}

	return {onB8Click, onB7Click, onB6Click, onB5Click, allocate, modoLinux, b8Color, b7Color, b6Color, b5Color, pgd0Color, pgd1Color, pgd2Color, pgd3Color, pgd4Color, pgd5Color, pgd6Color, pgd7Color,
		buddy0Color, buddy1Color, buddy2Color, buddy3Color, buddy4Color, buddy5Color, buddy6Color, buddy7Color,
		page0Color, page1Color, page2Color, page3Color, page4Color, page5Color, page6Color, page7Color,
		pgd0BitColor, pgd1BitColor, pgd2BitColor, pgd3BitColor, pgd4BitColor, pgd5BitColor,
		pgd6BitColor, pgd7BitColor, pmd0Color, pmd1Color, pmd2Color, pmd3Color, pmd4Color,
		pmd5Color, pmd6Color, pmd7Color, pmd8Color, pmd9Color, pmd10Color, pmd11Color,
		pmd12Color, pmd13Color, pmd14Color, pmd15Color
	}

}

export const PageTableDetail: React.FunctionComponent = () =>  {

	const isBrowser = typeof window !== "undefined";
	if (!isBrowser) return <></>;
	const {width, height} = useWindowDimensions();


	const { onB8Click, onB7Click, onB6Click, onB5Click, allocate, modoLinux, 
		b8Color, b7Color, b6Color, b5Color,
		pgd0Color, pgd1Color, pgd2Color, pgd3Color, pgd4Color,
		pgd5Color, pgd6Color, pgd7Color, buddy0Color, buddy1Color,
		buddy2Color, buddy3Color, buddy4Color, buddy5Color, buddy6Color, buddy7Color,
		page0Color, page1Color, page2Color, page3Color, page4Color, page5Color,
		page6Color, page7Color, pgd0BitColor, pgd1BitColor, pgd2BitColor, pgd3BitColor,
		pgd4BitColor, pgd5BitColor, pgd6BitColor, pgd7BitColor, pmd0Color, pmd1Color, 
		pmd2Color, pmd3Color, pmd4Color, pmd5Color, pmd6Color, pmd7Color, pmd8Color,
		pmd9Color, pmd10Color, pmd11Color, pmd12Color, pmd13Color, pmd14Color, pmd15Color
	} = useBitState();

	return (
		<>
			<SVGPageTable 
				awidth={width} 
				aheight={height}
				b8Color={b8Color}
				b7Color={b7Color}
				b6Color={b6Color}
				b5Color={b5Color}
				pgd0Color={pgd0Color}
				pgd1Color={pgd1Color}
				pgd2Color={pgd2Color}
				pgd3Color={pgd3Color}
				pgd4Color={pgd4Color}
				pgd5Color={pgd5Color}
				pgd6Color={pgd6Color}
				pgd7Color={pgd7Color}
				buddy0Color={buddy0Color}
				buddy1Color={buddy1Color}
				buddy2Color={buddy2Color}
				buddy3Color={buddy3Color}
				buddy4Color={buddy4Color}
				buddy5Color={buddy5Color}
				buddy6Color={buddy6Color}
				buddy7Color={buddy7Color}
				page0Color={page0Color}
				page1Color={page1Color}
				page2Color={page2Color}
				page3Color={page3Color}
				page4Color={page4Color}
				page5Color={page5Color}
				page6Color={page6Color}
				page7Color={page7Color}
				pgd0BitColor={pgd0BitColor}
				pgd1BitColor={pgd1BitColor}
				pgd2BitColor={pgd2BitColor}
				pgd3BitColor={pgd3BitColor}
				pgd4BitColor={pgd4BitColor}
				pgd5BitColor={pgd5BitColor}
				pgd6BitColor={pgd6BitColor}
				pgd7BitColor={pgd7BitColor}
				pmd0Color={pmd0Color}
				pmd1Color={pmd1Color}
				pmd2Color={pmd2Color}
				pmd3Color={pmd3Color}
				pmd4Color={pmd4Color}
				pmd5Color={pmd5Color}
				pmd6Color={pmd6Color}
				pmd7Color={pmd7Color}
				pmd8Color={pmd8Color}
				pmd9Color={pmd9Color}
				pmd10Color={pmd10Color}
				pmd11Color={pmd11Color}
				pmd12Color={pmd12Color}
				pmd13Color={pmd13Color}
				pmd14Color={pmd14Color}
				pmd15Color={pmd15Color}
				onB8Click={onB8Click}
				onB7Click={onB7Click}
				onB6Click={onB6Click}
				onB5Click={onB5Click}
			/>
			<div onClick={() => allocate()}>Allocate</div>
			<div onClick={() => modoLinux()}>Modo Linux</div>
		</>
	);

}

interface SVGPageTableProps {
	awidth: number;
	aheight: number;
	b8Color: FirstLevelBitColor;
	b7Color: FirstLevelBitColor;
	b6Color: FirstLevelBitColor;
	b5Color: SecondLevelBitColor;
	pgd0Color: ColorType1;
	pgd1Color: ColorType2;
	pgd2Color: ColorType3;
	pgd3Color: ColorType4;
	pgd4Color: ColorType5;
	pgd5Color: ColorType6;
	pgd6Color: ColorType7;
	pgd7Color: ColorType8;
	buddy0Color: BuddyColor;
	buddy1Color: BuddyColor;
	buddy2Color: BuddyColor;
	buddy3Color: BuddyColor;
	buddy4Color: BuddyColor;
	buddy5Color: BuddyColor;
	buddy6Color: BuddyColor;
	buddy7Color: BuddyColor;
	page0Color: PageColor;
	page1Color: PageColor;
	page2Color: PageColor;
	page3Color: PageColor;
	page4Color: PageColor;
	page5Color: PageColor;
	page6Color: PageColor;
	page7Color: PageColor;
	pgd0BitColor: PgdFaultColor;
	pgd1BitColor: PgdFaultColor;
	pgd2BitColor: PgdFaultColor;
	pgd3BitColor: PgdFaultColor;
	pgd4BitColor: PgdFaultColor;
	pgd5BitColor: PgdFaultColor;
	pgd6BitColor: PgdFaultColor;
	pgd7BitColor: PgdFaultColor;
	pmd0Color: PmdColorSecond;
	pmd1Color: PmdColorSecond;
	pmd2Color: PmdColorSecond;
	pmd3Color: PmdColorSecond;
	pmd4Color: PmdColorSecond;
	pmd5Color: PmdColorSecond;
	pmd6Color: PmdColorSecond;
	pmd7Color: PmdColorSecond;
	pmd8Color: PmdColorSecond;
	pmd9Color: PmdColorSecond;
	pmd10Color: PmdColorSecond;
	pmd11Color: PmdColorSecond;
	pmd12Color: PmdColorSecond;
	pmd13Color: PmdColorSecond;
	pmd14Color: PmdColorSecond;
	pmd15Color: PmdColorSecond;
	onB8Click: () => void;
	onB7Click: () => void;
	onB6Click: () => void;
	onB5Click: () => void;
}

function SVGPageTable(props: SVGPageTableProps) {
	return (
		<svg
		width={props.awidth*0.8}
		height={props.aheight*0.8}
		viewBox="0 0 8223 3934"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	  >
		{/* page 3 */}
		<path
		  fill={props.page3Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 1670h791v239h-791z"
		/>
		{/* page 2 */}
		<path
		  fill={props.page2Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 1327h791v239h-791z"
		/>
		{/* page 1 */}
		<path
		  fill={props.page1Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 984h791v239h-791z"
		/>
		{/* page 0 */}
		<path
		  fill={props.page0Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 641h791v239h-791z"
		/>
		{/* page 7 */}
		<path
		  fill={props.page7Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 3042h791v239h-791z"
		/>
		{/* page 6 */}
		<path
		  fill={props.page6Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 2699h791v239h-791z"
		/>
		{/**page 5 */}
		<path
		  fill={props.page5Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 2356h791v239h-791z"
		/>
		{/**page 4 */}
		<path
		  fill={props.page4Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M4718 2013h791v239h-791z"
		/>
		{/**buddy 3 */}
		<path
		  fill={props.buddy3Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 1857h791v239h-791z"
		/>

		{/**buddy 2 */}
		<path
		  fill={props.buddy2Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 1612h791v239h-791z"
		/>

		{/**buddy 1 */}
		<path
		  fill={props.buddy1Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 1367h791v239h-791z"
		/>

		{/**buddy 0 */}
		<path
		  fill={props.buddy0Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 1122h791v239h-791z"
		/>
		
		{/**buddy 7 */}
		<path
		  fill={props.buddy7Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 2837h791v239h-791z"
		/>
		
		{/**buddy 6 */}
		<path
		  fill={props.buddy6Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 2592h791v239h-791z"
		/>
		
		{/**buddy 5 */}
		<path
		  fill={props.buddy5Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 2347h791v239h-791z"
		/>
		
		{/**buddy 4 */}
		<path
		  fill={props.buddy4Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M6265 2102h791v239h-791z"
		/>
		
		{/**pgd 0 */}
		<path
		  fill={props.pgd0Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 1454h803v165h-803z"
		/>

		{/**fault 0 */}
		<path
		  fill={props.pgd0BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 1454h127v158h-127z"
		/>

		{/**fault 1 */}
		<path
		  fill={props.pgd1BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 1613h127v158h-127z"
		/>

		{/**fault 2 */}
		<path
		  fill={props.pgd2BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 1772h127v158h-127z"
		/>

		{/**fault 3 */}
		<path
		  fill={props.pgd3BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 1931h127v158h-127z"
		/>

		{/**fault 4 */}
		<path
		  fill={props.pgd4BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 2090h127v158h-127z"
		/>

		{/**fault 5 */}
		<path
		  fill={props.pgd5BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 2249h127v158h-127z"
		/>

		{/**fault 6 */}
		<path
		  fill={props.pgd6BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 2408h127v158h-127z"
		/>

		{/**fault 7 */}
		<path
		  fill={props.pgd7BitColor}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1486 2567h127v158h-127z"
		/>

		{/**pgd 1 */}
		<path
		  fill={props.pgd1Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 1613h803v165h-803z"
		/>
		{/**pgd 2 */}
		<path
		  fill={props.pgd2Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 1772h803v165h-803z"
		/>
		{/**pgd 3 */}
		<path
		  fill={props.pgd3Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 1931h803v165h-803z"
		/>

		{/**pgd 4 */}
		<path
		  fill={props.pgd4Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 2090h803v165h-803z"
		/>

		{/**pgd 5*/}
		<path
		  fill={props.pgd5Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 2249h803v165h-803z"
		/>

		{/**pgd 6 */}
		<path
		  fill={props.pgd6Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 2408h803v165h-803z"
		/>

		{/**pgd 7 */}
		<path
		  fill={props.pgd7Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1618 2567h803v158h-803z"
		/>

		{/**pmd 0 */}
		<path
		  fill={props.pmd0Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 429h803v165h-803z"
		/>

		{/**pmd 1 */}
		<path
		  fill={props.pmd1Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 588h803v165h-803z"
		/>

		{/**pmd 2 */}
		<path
		  fill={props.pmd2Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 822h803v165h-803z"
		/>

		{/**pmd 3 */}
		<path
		  fill={props.pmd3Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 981h803v165h-803z"
		/>

		{/**pmd 6 */}
		<path
		  fill={props.pmd6Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 1608h803v165h-803z"
		/>

		{/**pmd 7 */}
		<path
		  fill={props.pmd7Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 1767h803v165h-803z"
		/>

		{/**pmd 4 */}
		<path
		  fill={props.pmd4Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 1215h803v165h-803z"
		/>

		{/**pmd 5 */}
		<path
		  fill={props.pmd5Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 1374h803v165h-803z"
		/>

		{/**pmd 8 */}
		<path
		  fill={props.pmd8Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 2001h803v165h-803z"
		/>

		{/**pmd 10 */}
		<path
		  fill={props.pmd10Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 2394h803v165h-803z"
		/>

		{/**pmd 9 */}
		<path
		  fill={props.pmd9Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 2160h803v165h-803z"
		/>

		{/**pmd 11 */}
		<path
		  fill={props.pmd11Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 2553h803v165h-803z"
		/>

		{/**pmd 14 */}
		<path
		  fill= {props.pmd14Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 3180h803v165h-803z"
		/>

		{/**pmd 15 */}
		<path
		  fill={props.pmd15Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 3339h803v165h-803z"
		/>
		
		{/**pmd 12 */}
		<path
		  fill={props.pmd12Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 2787h803v165h-803z"
		/>

		{/**pmd 13 */}
		<path
		  fill={props.pmd13Color as any}
		  stroke="#000"
		  strokeWidth={6}
		  d="M3165 2946h803v165h-803z"
		/>

		<path
		  onClick={() => props.onB8Click()}
		  fill={props.b8Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M985 625h127v250H985z"
		/>
		<path
		  onClick={() => props.onB7Click()}
		  fill={props.b7Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1106 625h127v250h-127z"
		/>
		<path
		  onClick={() => props.onB6Click()}
		  fill={props.b6Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1227 625h127v250h-127z"
		/>
		<path
		  onClick={() => props.onB5Click()}
		  fill={props.b5Color}
		  stroke="#000"
		  strokeWidth={6}
		  d="M1348 625h127v250h-127z"
		/>
		<path
		  fill="#ECC84A"
		  stroke="#000"
		  strokeWidth={6}
		  d="M1469 625h952v250h-952z"
		/>
           <path
        d="M1651.42 750.078c0 6.688-1.12 12.531-3.37 17.531-2.25 4.969-5.44 8.766-9.57 11.391-4.12 2.625-8.93 3.938-14.43 3.938-5.38 0-10.14-1.313-14.3-3.938-4.16-2.656-7.39-6.422-9.7-11.297-2.28-4.906-3.46-10.578-3.52-17.015v-4.922c0-6.563 1.14-12.36 3.42-17.391 2.28-5.031 5.5-8.875 9.66-11.531 4.19-2.688 8.97-4.032 14.34-4.032 5.47 0 10.28 1.329 14.44 3.985 4.19 2.625 7.41 6.453 9.66 11.484 2.25 5 3.37 10.828 3.37 17.485v4.312zm-8.95-4.406c0-8.094-1.63-14.297-4.88-18.61-3.25-4.343-7.79-6.515-13.64-6.515-5.68 0-10.17 2.172-13.45 6.515-3.25 4.313-4.92 10.313-5.02 18v5.016c0 7.844 1.64 14.016 4.93 18.516 3.31 4.468 7.86 6.703 13.64 6.703 5.81 0 10.31-2.109 13.5-6.328 3.18-4.25 4.83-10.328 4.92-18.235v-5.062zM1667.83 782v-44.016h-8.02v-6.703h8.02v-5.203c0-5.437 1.45-9.64 4.36-12.609 2.9-2.969 7.01-4.453 12.33-4.453 2 0 3.98.265 5.95.796l-.47 7.032a24.851 24.851 0 00-4.69-.422c-2.81 0-4.98.828-6.51 2.484-1.53 1.625-2.3 3.969-2.3 7.032v5.343h10.83v6.703h-10.83V782h-8.67zm33.37 0v-44.016h-8.01v-6.703h8.01v-5.203c0-5.437 1.46-9.64 4.36-12.609 2.91-2.969 7.02-4.453 12.33-4.453 2 0 3.99.265 5.95.796l-.46 7.032a24.928 24.928 0 00-4.69-.422c-2.81 0-4.99.828-6.52 2.484-1.53 1.625-2.29 3.969-2.29 7.032v5.343h10.82v6.703h-10.82V782h-8.68zm58.64-13.453c0-2.344-.89-4.156-2.67-5.438-1.75-1.312-4.83-2.437-9.23-3.375-4.38-.937-7.86-2.062-10.46-3.375-2.56-1.312-4.46-2.875-5.71-4.687-1.22-1.813-1.83-3.969-1.83-6.469 0-4.156 1.75-7.672 5.25-10.547 3.53-2.875 8.03-4.312 13.5-4.312 5.75 0 10.4 1.484 13.97 4.453 3.59 2.969 5.39 6.765 5.39 11.391h-8.72c0-2.376-1.02-4.422-3.05-6.141-2-1.719-4.53-2.578-7.59-2.578-3.16 0-5.63.687-7.41 2.062-1.78 1.375-2.67 3.172-2.67 5.391 0 2.094.83 3.672 2.48 4.734 1.66 1.063 4.64 2.078 8.96 3.047 4.34.969 7.86 2.125 10.54 3.469 2.69 1.344 4.68 2.969 5.96 4.875 1.31 1.875 1.97 4.172 1.97 6.891 0 4.531-1.82 8.171-5.44 10.921-3.63 2.719-8.33 4.079-14.11 4.079-4.06 0-7.66-.719-10.78-2.157-3.13-1.437-5.58-3.437-7.36-6-1.75-2.593-2.63-5.39-2.63-8.39h8.68c.15 2.906 1.31 5.218 3.46 6.937 2.19 1.688 5.07 2.531 8.63 2.531 3.28 0 5.91-.656 7.87-1.968 2-1.344 3-3.125 3-5.344zm41.02 14.391c-6.88 0-12.47-2.25-16.78-6.75-4.31-4.532-6.47-10.579-6.47-18.141v-1.594c0-5.031.95-9.515 2.86-13.453 1.94-3.969 4.62-7.062 8.06-9.281 3.47-2.25 7.22-3.375 11.25-3.375 6.6 0 11.72 2.172 15.38 6.515 3.65 4.344 5.48 10.563 5.48 18.657v3.609h-34.36c.13 5 1.58 9.047 4.36 12.141 2.81 3.062 6.38 4.593 10.69 4.593 3.06 0 5.65-.625 7.78-1.875 2.12-1.25 3.98-2.906 5.58-4.968l5.29 4.125c-4.25 6.531-10.62 9.797-19.12 9.797zm-1.08-45.469c-3.5 0-6.44 1.281-8.81 3.843-2.38 2.532-3.85 6.094-4.41 10.688h25.41v-.656c-.25-4.406-1.44-7.813-3.56-10.219-2.13-2.437-5-3.656-8.63-3.656zm42.7-18.469v12.281h9.47v6.703h-9.47v31.454c0 2.031.43 3.562 1.27 4.593.84 1 2.28 1.5 4.31 1.5 1 0 2.38-.187 4.13-.562V782c-2.28.625-4.5.938-6.66.938-3.87 0-6.8-1.172-8.76-3.516-1.97-2.344-2.96-5.672-2.96-9.984v-31.454h-9.23v-6.703h9.23V719h8.67zm41.35 37.219c0-7.781 1.84-14.031 5.53-18.75 3.69-4.75 8.52-7.125 14.48-7.125 5.94 0 10.64 2.031 14.11 6.094V710h8.67v72h-7.96l-.43-5.438c-3.46 4.25-8.29 6.376-14.48 6.376-5.87 0-10.67-2.407-14.39-7.219-3.69-4.813-5.53-11.094-5.53-18.844v-.656zm8.67.984c0 5.75 1.19 10.25 3.56 13.5 2.38 3.25 5.66 4.875 9.85 4.875 5.5 0 9.51-2.469 12.04-7.406v-23.297c-2.59-4.781-6.57-7.172-11.95-7.172-4.25 0-7.56 1.641-9.94 4.922-2.37 3.281-3.56 8.141-3.56 14.578zM1971.44 782c-.5-1-.91-2.781-1.22-5.344-4.03 4.188-8.84 6.282-14.44 6.282-5 0-9.11-1.407-12.33-4.219-3.18-2.844-4.78-6.438-4.78-10.781 0-5.282 2-9.376 6-12.282 4.03-2.937 9.69-4.406 16.97-4.406h8.44v-3.984c0-3.032-.91-5.438-2.72-7.219-1.81-1.813-4.48-2.719-8.02-2.719-3.09 0-5.68.781-7.78 2.344-2.09 1.562-3.14 3.453-3.14 5.672h-8.72c0-2.532.89-4.969 2.68-7.313 1.81-2.375 4.24-4.25 7.31-5.625 3.09-1.375 6.48-2.062 10.17-2.062 5.84 0 10.42 1.468 13.73 4.406 3.32 2.906 5.03 6.922 5.16 12.047v23.344c0 4.656.59 8.359 1.78 11.109v.75h-9.09zm-14.39-6.609c2.72 0 5.29-.703 7.73-2.11 2.44-1.406 4.2-3.234 5.3-5.484v-10.406h-6.8c-10.62 0-15.94 3.109-15.94 9.328 0 2.719.91 4.843 2.72 6.375 1.82 1.531 4.14 2.297 6.99 2.297zM2059 757.203c0 7.719-1.77 13.938-5.3 18.656-3.53 4.719-8.31 7.079-14.34 7.079-6.16 0-11-1.954-14.53-5.86V801.5h-8.67v-70.219h7.92l.42 5.625c3.53-4.375 8.44-6.562 14.72-6.562 6.09 0 10.9 2.297 14.44 6.89 3.56 4.594 5.34 10.985 5.34 19.172v.797zm-8.67-.984c0-5.719-1.22-10.235-3.66-13.547-2.44-3.313-5.78-4.969-10.03-4.969-5.25 0-9.19 2.328-11.81 6.985v24.234c2.59 4.625 6.56 6.937 11.9 6.937 4.16 0 7.46-1.64 9.89-4.921 2.47-3.313 3.71-8.219 3.71-14.719zM2101.38 782c-.5-1-.91-2.781-1.22-5.344-4.04 4.188-8.85 6.282-14.44 6.282-5 0-9.11-1.407-12.33-4.219-3.19-2.844-4.78-6.438-4.78-10.781 0-5.282 2-9.376 6-12.282 4.03-2.937 9.69-4.406 16.97-4.406h8.44v-3.984c0-3.032-.91-5.438-2.72-7.219-1.82-1.813-4.49-2.719-8.02-2.719-3.09 0-5.69.781-7.78 2.344-2.09 1.562-3.14 3.453-3.14 5.672h-8.72c0-2.532.89-4.969 2.67-7.313 1.81-2.375 4.25-4.25 7.31-5.625 3.1-1.375 6.49-2.062 10.18-2.062 5.84 0 10.42 1.468 13.73 4.406 3.31 2.906 5.03 6.922 5.16 12.047v23.344c0 4.656.59 8.359 1.78 11.109v.75h-9.09zm-14.4-6.609c2.72 0 5.3-.703 7.74-2.11 2.44-1.406 4.2-3.234 5.3-5.484v-10.406h-6.8c-10.63 0-15.94 3.109-15.94 9.328 0 2.719.91 4.843 2.72 6.375 1.81 1.531 4.14 2.297 6.98 2.297zM2095 710h10.5l-12.56 13.781h-6.99L2095 710zm25.22 46.219c0-7.907 1.83-14.188 5.48-18.844 3.66-4.687 8.5-7.031 14.53-7.031 6.19 0 11.02 2.187 14.49 6.562l.42-5.625h7.92v49.5c0 6.563-1.95 11.735-5.86 15.516-3.87 3.781-9.09 5.672-15.65 5.672-3.66 0-7.24-.781-10.74-2.344-3.5-1.563-6.17-3.703-8.01-6.422l4.5-5.203c3.72 4.594 8.26 6.891 13.64 6.891 4.22 0 7.5-1.188 9.84-3.563 2.38-2.375 3.56-5.719 3.56-10.031v-4.359c-3.46 4-8.2 6-14.2 6-5.94 0-10.75-2.391-14.44-7.172-3.65-4.782-5.48-11.297-5.48-19.547zm8.72.984c0 5.719 1.17 10.219 3.51 13.5 2.35 3.25 5.63 4.875 9.85 4.875 5.47 0 9.48-2.484 12.04-7.453v-23.156c-2.65-4.844-6.64-7.266-11.95-7.266-4.22 0-7.51 1.641-9.89 4.922-2.38 3.281-3.56 8.141-3.56 14.578zM2185.61 782h-8.67v-50.719h8.67V782zm-9.38-64.172c0-1.406.43-2.594 1.27-3.562.88-.969 2.16-1.454 3.84-1.454 1.69 0 2.97.485 3.85 1.454.87.968 1.31 2.156 1.31 3.562 0 1.406-.44 2.578-1.31 3.516-.88.937-2.16 1.406-3.85 1.406-1.68 0-2.96-.469-3.84-1.406-.84-.938-1.27-2.11-1.27-3.516zm31.5 13.453l.29 6.375c3.87-4.875 8.93-7.312 15.18-7.312 10.72 0 16.13 6.047 16.22 18.14V782h-8.67v-33.562c-.03-3.657-.87-6.36-2.53-8.11-1.63-1.75-4.17-2.625-7.64-2.625-2.81 0-5.28.75-7.41 2.25-2.12 1.5-3.78 3.469-4.97 5.906V782h-8.67v-50.719h8.2zM2283.81 782c-.5-1-.9-2.781-1.22-5.344-4.03 4.188-8.84 6.282-14.43 6.282-5 0-9.11-1.407-12.33-4.219-3.19-2.844-4.78-6.438-4.78-10.781 0-5.282 2-9.376 6-12.282 4.03-2.937 9.68-4.406 16.97-4.406h8.43v-3.984c0-3.032-.9-5.438-2.72-7.219-1.81-1.813-4.48-2.719-8.01-2.719-3.1 0-5.69.781-7.78 2.344-2.1 1.562-3.14 3.453-3.14 5.672h-8.72c0-2.532.89-4.969 2.67-7.313 1.81-2.375 4.25-4.25 7.31-5.625 3.1-1.375 6.49-2.062 10.17-2.062 5.85 0 10.43 1.468 13.74 4.406 3.31 2.906 5.03 6.922 5.15 12.047v23.344c0 4.656.6 8.359 1.79 11.109v.75h-9.1zm-14.39-6.609c2.72 0 5.3-.703 7.74-2.11 2.43-1.406 4.2-3.234 5.29-5.484v-10.406h-6.79c-10.63 0-15.94 3.109-15.94 9.328 0 2.719.9 4.843 2.72 6.375 1.81 1.531 4.14 2.297 6.98 2.297z"
        fill="#000"
      />
	   <path
        d="M1667.47 1241.14h-20.91V1298h-14.06v-56.86h-20.62v-11.39h55.59v11.39zm60.19 0h-20.91V1298h-14.06v-56.86h-20.63v-11.39h55.6v11.39zm8.06 56.86v-68.25h23.9c8.29 0 14.57 1.59 18.85 4.78 4.28 3.16 6.42 7.8 6.42 13.92 0 3.35-.86 6.3-2.58 8.86-1.72 2.53-4.11 4.39-7.17 5.58 3.5.88 6.25 2.64 8.25 5.3 2.03 2.65 3.05 5.9 3.05 9.75 0 6.56-2.1 11.53-6.28 14.9-4.19 3.38-10.16 5.1-17.91 5.16h-26.53zm14.06-29.72v18.42h12.05c3.31 0 5.89-.78 7.73-2.34 1.88-1.59 2.82-3.78 2.82-6.56 0-6.25-3.24-9.42-9.71-9.52h-12.89zm0-9.94h10.41c7.09-.12 10.64-2.95 10.64-8.48 0-3.09-.91-5.31-2.72-6.66-1.78-1.37-4.61-2.06-8.49-2.06h-9.84v17.2zm96.61 15.89H1820v-10.92h26.39v10.92zm76.73-4.12h-27V1298h-14.06v-68.25h44.44v11.39h-30.38v17.63h27v11.34zm24.94 27.89h-13.59v-50.72h13.59V1298zm-14.39-63.84c0-2.04.67-3.71 2.02-5.02 1.37-1.31 3.23-1.97 5.58-1.97 2.31 0 4.15.66 5.53 1.97 1.37 1.31 2.06 2.98 2.06 5.02 0 2.06-.7 3.75-2.11 5.06-1.37 1.31-3.2 1.97-5.48 1.97-2.29 0-4.13-.66-5.54-1.97-1.37-1.31-2.06-3-2.06-5.06zm54.1 25.82c-1.85-.25-3.47-.37-4.88-.37-5.12 0-8.48 1.73-10.08 5.2V1298h-13.54v-50.72h12.79l.38 6.05c2.72-4.66 6.48-6.99 11.29-6.99 1.5 0 2.91.21 4.22.61l-.18 13.03zm34.03 24c0-1.65-.83-2.95-2.49-3.89-1.62-.97-4.25-1.82-7.87-2.57-12.06-2.54-18.1-7.66-18.1-15.38 0-4.5 1.86-8.25 5.58-11.25 3.75-3.03 8.64-4.55 14.67-4.55 6.44 0 11.58 1.52 15.43 4.55 3.87 3.03 5.81 6.97 5.81 11.81h-13.55c0-1.93-.62-3.53-1.87-4.78-1.25-1.28-3.21-1.92-5.86-1.92-2.28 0-4.05.52-5.3 1.55s-1.87 2.34-1.87 3.93c0 1.5.7 2.72 2.1 3.66 1.44.91 3.85 1.7 7.22 2.39 3.38.66 6.22 1.41 8.53 2.25 7.16 2.63 10.74 7.17 10.74 13.64 0 4.63-1.99 8.38-5.95 11.25-3.97 2.85-9.1 4.27-15.38 4.27-4.25 0-8.03-.75-11.34-2.25-3.28-1.53-5.86-3.61-7.74-6.24-1.87-2.65-2.81-5.51-2.81-8.57h12.84c.13 2.4 1.02 4.24 2.68 5.53 1.65 1.28 3.87 1.92 6.65 1.92 2.6 0 4.55-.49 5.86-1.45 1.34-1 2.02-2.3 2.02-3.9zm38.15-49.17v12.47h8.67v9.94h-8.67v25.31c0 1.88.36 3.22 1.08 4.03.72.82 2.09 1.22 4.13 1.22 1.5 0 2.82-.11 3.98-.33v10.27c-2.66.81-5.39 1.22-8.2 1.22-9.5 0-14.35-4.8-14.53-14.39v-27.33H2039v-9.94h7.41v-12.47h13.54zm54.43 63.19h-13.6v-72h13.6v72zm34.54.94c-7.44 0-13.5-2.28-18.19-6.85-4.65-4.56-6.98-10.64-6.98-18.23v-1.31c0-5.1.98-9.64 2.95-13.64 1.97-4.03 4.75-7.13 8.35-9.29 3.62-2.18 7.75-3.28 12.37-3.28 6.94 0 12.39 2.19 16.36 6.57 4 4.37 6 10.57 6 18.61v5.53h-32.3c.44 3.31 1.75 5.97 3.94 7.97 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.9 12.24-5.68l6.65 7.46c-2.03 2.87-4.78 5.12-8.25 6.75-3.47 1.59-7.31 2.39-11.53 2.39zm-1.54-41.63c-2.69 0-4.88.91-6.57 2.72-1.65 1.81-2.72 4.41-3.19 7.78h18.85v-1.08c-.06-3-.88-5.31-2.44-6.93-1.56-1.66-3.78-2.49-6.65-2.49zm48.46 24.14l9.43-34.17h14.15l-17.11 50.72h-12.93l-17.11-50.72h14.15l9.42 34.17zm52.27 17.49c-7.44 0-13.5-2.28-18.19-6.85-4.65-4.56-6.98-10.64-6.98-18.23v-1.31c0-5.1.98-9.64 2.95-13.64 1.97-4.03 4.75-7.13 8.34-9.29 3.63-2.18 7.75-3.28 12.38-3.28 6.94 0 12.39 2.19 16.36 6.57 4 4.37 6 10.57 6 18.61v5.53h-32.3c.44 3.31 1.75 5.97 3.94 7.97 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.9 12.23-5.68l6.66 7.46c-2.03 2.87-4.78 5.12-8.25 6.75-3.47 1.59-7.31 2.39-11.53 2.39zm-1.55-41.63c-2.68 0-4.87.91-6.56 2.72-1.66 1.81-2.72 4.41-3.19 7.78h18.85v-1.08c-.07-3-.88-5.31-2.44-6.93-1.56-1.66-3.78-2.49-6.66-2.49zM2291 1298h-13.59v-72H2291v72z"
        fill="#AE87DD"
      />
      <path
        d="M1837.55 567H1824v-52.219l-16.17 5.016v-11.016l28.26-10.125h1.46V567zm69 0h-46.78v-9.281l22.07-23.531c3.04-3.313 5.27-6.204 6.71-8.672 1.47-2.469 2.2-4.813 2.2-7.032 0-3.031-.77-5.406-2.3-7.125-1.53-1.75-3.72-2.625-6.56-2.625-3.06 0-5.48 1.063-7.27 3.188-1.74 2.094-2.62 4.859-2.62 8.297h-13.59c0-4.157.98-7.953 2.95-11.391 2-3.437 4.81-6.125 8.44-8.062 3.62-1.969 7.73-2.954 12.32-2.954 7.04 0 12.49 1.688 16.36 5.063 3.91 3.375 5.86 8.141 5.86 14.297 0 3.375-.87 6.812-2.62 10.312-1.75 3.5-4.75 7.578-9 12.235l-15.52 16.359h29.35V567zm78.51-24.891c0 8.125-1.73 14.469-5.2 19.032-3.47 4.531-8.31 6.797-14.53 6.797-5.5 0-9.89-2.11-13.17-6.329l-.61 5.391h-12.19v-72h13.55v25.828c3.12-3.656 7.23-5.484 12.32-5.484 6.19 0 11.04 2.281 14.54 6.844 3.53 4.531 5.29 10.921 5.29 19.171v.75zm-13.54-.984c0-5.125-.82-8.859-2.44-11.203-1.63-2.375-4.05-3.563-7.27-3.563-4.31 0-7.28 1.766-8.9 5.297v20.016c1.65 3.562 4.65 5.344 9 5.344 4.37 0 7.25-2.157 8.62-6.469.66-2.063.99-5.203.99-9.422zM2007.75 567h-13.59v-50.719h13.59V567zm-14.39-63.844c0-2.031.67-3.703 2.02-5.015 1.37-1.313 3.23-1.969 5.57-1.969 2.32 0 4.16.656 5.53 1.969 1.38 1.312 2.07 2.984 2.07 5.015 0 2.063-.71 3.75-2.11 5.063-1.38 1.312-3.21 1.969-5.49 1.969-2.28 0-4.12-.657-5.53-1.969-1.37-1.313-2.06-3-2.06-5.063zm41.81.656v12.469h8.67v9.938h-8.67v25.312c0 1.875.36 3.219 1.08 4.031.72.813 2.09 1.219 4.13 1.219 1.5 0 2.82-.109 3.98-.328v10.266a27.915 27.915 0 01-8.2 1.219c-9.5 0-14.35-4.797-14.54-14.391v-27.328h-7.4v-9.938h7.4v-12.469h13.55zm43.69 49.172c0-1.656-.83-2.953-2.48-3.89-1.63-.969-4.26-1.828-7.88-2.578-12.06-2.532-18.09-7.657-18.09-15.375 0-4.5 1.86-8.25 5.57-11.25 3.75-3.032 8.64-4.547 14.68-4.547 6.43 0 11.57 1.515 15.42 4.547 3.87 3.031 5.81 6.968 5.81 11.812h-13.55c0-1.937-.62-3.531-1.87-4.781-1.25-1.281-3.2-1.922-5.86-1.922-2.28 0-4.05.516-5.3 1.547s-1.87 2.344-1.87 3.937c0 1.5.7 2.719 2.11 3.657 1.43.906 3.84 1.703 7.22 2.39 3.37.657 6.21 1.407 8.53 2.25 7.15 2.625 10.73 7.172 10.73 13.641 0 4.625-1.98 8.375-5.95 11.25-3.97 2.844-9.1 4.266-15.38 4.266-4.25 0-8.03-.75-11.34-2.25-3.28-1.532-5.86-3.61-7.74-6.235-1.87-2.656-2.81-5.515-2.81-8.578h12.85c.12 2.406 1.01 4.25 2.67 5.531 1.65 1.282 3.87 1.922 6.65 1.922 2.6 0 4.55-.484 5.86-1.453 1.35-1 2.02-2.297 2.02-3.891zM807.547 182H794v-52.219l-16.172 5.016v-11.016l28.266-10.125h1.453V182zm58.969-68.953v11.156h-1.313c-6.125.094-11.062 1.688-14.812 4.781-3.719 3.094-5.953 7.391-6.703 12.891 3.624-3.687 8.203-5.531 13.734-5.531 5.937 0 10.656 2.125 14.156 6.375s5.25 9.843 5.25 16.781c0 4.438-.969 8.453-2.906 12.047-1.906 3.594-4.625 6.391-8.156 8.391-3.5 2-7.469 3-11.907 3-7.187 0-13-2.5-17.437-7.5-4.406-5-6.61-11.672-6.61-20.016v-4.875c0-7.406 1.391-13.938 4.172-19.594 2.813-5.687 6.828-10.078 12.047-13.172 5.25-3.125 11.328-4.703 18.235-4.734h2.25zm-13.219 34.172c-2.188 0-4.172.578-5.953 1.734-1.782 1.125-3.094 2.625-3.938 4.5v4.125c0 4.531.891 8.078 2.672 10.641 1.781 2.531 4.281 3.797 7.5 3.797 2.906 0 5.25-1.141 7.031-3.422 1.813-2.313 2.719-5.297 2.719-8.953 0-3.719-.906-6.719-2.719-9-1.812-2.282-4.25-3.422-7.312-3.422zm101.765 9.89c0 8.125-1.734 14.469-5.203 19.032-3.468 4.531-8.312 6.797-14.531 6.797-5.5 0-9.89-2.11-13.172-6.329l-.609 5.391h-12.188v-72h13.547v25.828c3.125-3.656 7.235-5.484 12.328-5.484 6.188 0 11.032 2.281 14.532 6.844 3.531 4.531 5.296 10.921 5.296 19.171v.75zm-13.546-.984c0-5.125-.813-8.859-2.438-11.203-1.625-2.375-4.047-3.563-7.266-3.563-4.312 0-7.281 1.766-8.906 5.297v20.016c1.656 3.562 4.656 5.344 9 5.344 4.375 0 7.25-2.157 8.625-6.469.657-2.063.985-5.203.985-9.422zM977.75 182h-13.594v-50.719h13.594V182zm-14.391-63.844c0-2.031.672-3.703 2.016-5.015 1.375-1.313 3.234-1.969 5.578-1.969 2.313 0 4.156.656 5.531 1.969 1.375 1.312 2.063 2.984 2.063 5.015 0 2.063-.703 3.75-2.109 5.063-1.376 1.312-3.204 1.969-5.485 1.969s-4.125-.657-5.531-1.969c-1.375-1.313-2.063-3-2.063-5.063zm41.811.656v12.469h8.67v9.938h-8.67v25.312c0 1.875.36 3.219 1.08 4.031.72.813 2.09 1.219 4.13 1.219 1.5 0 2.82-.109 3.98-.328v10.266a27.915 27.915 0 01-8.2 1.219c-9.504 0-14.348-4.797-14.535-14.391v-27.328h-7.406v-9.938h7.406v-12.469h13.545zm43.69 49.172c0-1.656-.83-2.953-2.48-3.89-1.63-.969-4.26-1.828-7.88-2.578-12.06-2.532-18.09-7.657-18.09-15.375 0-4.5 1.86-8.25 5.57-11.25 3.75-3.032 8.64-4.547 14.68-4.547 6.43 0 11.57 1.515 15.42 4.547 3.87 3.031 5.81 6.968 5.81 11.812h-13.55c0-1.937-.62-3.531-1.87-4.781-1.25-1.281-3.2-1.922-5.86-1.922-2.28 0-4.05.516-5.3 1.547s-1.87 2.344-1.87 3.937c0 1.5.7 2.719 2.11 3.657 1.43.906 3.84 1.703 7.22 2.39 3.37.657 6.21 1.407 8.53 2.25 7.15 2.625 10.73 7.172 10.73 13.641 0 4.625-1.98 8.375-5.95 11.25-3.97 2.844-9.1 4.266-15.38 4.266-4.25 0-8.03-.75-11.34-2.25-3.28-1.532-5.86-3.61-7.74-6.235-1.87-2.656-2.81-5.515-2.81-8.578h12.85c.12 2.406 1.01 4.25 2.67 5.531 1.65 1.282 3.87 1.922 6.65 1.922 2.6 0 4.55-.484 5.86-1.453 1.35-1 2.02-2.297 2.02-3.891zm43.73-11.718c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.94 0 9.01 1.844 12.23 5.531V110h13.6v72h-12.24l-.65-5.391c-3.38 4.219-7.72 6.329-13.03 6.329-5.97 0-10.77-2.344-14.4-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.48 10.922 1.66 2.531 4.07 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.68-3.531-4.61-5.297-8.76-5.297-6.53 0-9.8 5.297-9.8 15.891zm66 25.688c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.65 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm77.39 41.626c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.96-13.641 1.96-4.031 4.75-7.125 8.34-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.4 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.4 3 5.21 0 9.29-1.891 12.23-5.672l6.66 7.453c-2.04 2.875-4.79 5.125-8.25 6.75-3.47 1.594-7.32 2.391-11.54 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm42.61-10.031l.42 5.86c3.62-4.532 8.48-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.97 7.875 4.03 14.156V182h-13.55v-32.438c0-2.874-.62-4.953-1.87-6.234-1.25-1.312-3.33-1.969-6.24-1.969-3.81 0-6.67 1.625-8.58 4.875V182h-13.54v-50.719h12.75zm39.23 24.985c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.93 0 9.01 1.844 12.23 5.531V110h13.59v72h-12.23l-.66-5.391c-3.37 4.219-7.71 6.329-13.03 6.329-5.97 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.48 10.922 1.66 2.531 4.07 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.77-5.297-6.53 0-9.79 5.297-9.79 15.891zm66 25.688c-7.44 0-13.5-2.282-18.19-6.844-4.66-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm58.64 2.672c-1.84-.25-3.47-.375-4.87-.375-5.13 0-8.49 1.735-10.08 5.203V182h-13.55v-50.719h12.8l.37 6.047c2.72-4.656 6.49-6.984 11.3-6.984 1.5 0 2.91.203 4.22.609l-.19 13.031zm28.97 38.954c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm51.24 30.704c2.5 0 4.53-.688 6.09-2.063 1.56-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.84 2.843-4.38 5.062-7.59 6.656-3.19 1.562-6.72 2.344-10.6 2.344-7.25 0-12.97-2.297-17.15-6.891-4.19-4.625-6.28-11-6.28-19.125v-.891c0-7.812 2.07-14.047 6.23-18.703 4.16-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.88-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.19-2.485-3.15 0-5.54 1.157-7.17 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.6 2.281 4.02 3.422 7.27 3.422zm4.92 9.703l-.52 2.719c4.69.843 7.04 3.546 7.04 8.109 0 3.437-1.44 6.156-4.32 8.156-2.84 2-6.86 3-12.04 3l-.33-7.828c3.5 0 5.25-1.266 5.25-3.797 0-1.312-.53-2.219-1.6-2.719-1.03-.468-2.71-.781-5.06-.937l1.46-6.703h10.12zm53.44.281c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.37-4.313-3.25-2.875-4.88-6.5-4.88-10.875 0-5.375 1.99-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.24v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.29 0-4.08.547-5.4 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.54c0-2.938.9-5.657 2.72-8.157 1.81-2.5 4.37-4.453 7.68-5.859 3.32-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.01 10.922V182h-13.68zm-11.21-9.422c2 0 3.85-.437 5.54-1.312 1.68-.907 2.93-2.11 3.75-3.61v-8.718h-5.07c-6.78 0-10.39 2.343-10.83 7.031l-.04.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.87 1.64zm45.99-41.297l.42 5.672c3.59-4.406 8.45-6.609 14.58-6.609 6.53 0 11.01 2.578 13.45 7.734 3.56-5.156 8.64-7.734 15.24-7.734 5.5 0 9.59 1.609 12.28 4.828 2.69 3.187 4.03 8 4.03 14.437V182h-13.6v-32.344c0-2.875-.56-4.968-1.68-6.281-1.13-1.344-3.11-2.016-5.96-2.016-4.06 0-6.87 1.938-8.43 5.813l.04 34.828h-13.54v-32.297c0-2.937-.58-5.062-1.74-6.375-1.15-1.312-3.12-1.969-5.9-1.969-3.85 0-6.63 1.594-8.35 4.782V182h-13.54v-50.719h12.7zm93.8 51.657c-7.44 0-13.5-2.282-18.19-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.96-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.93 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.21 2 5.01 3 8.39 3 5.21 0 9.29-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.32 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.88.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm42.61-10.031l.42 5.86c3.62-4.532 8.48-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.97 7.875 4.03 14.156V182h-13.55v-32.438c0-2.874-.62-4.953-1.87-6.234-1.25-1.312-3.33-1.969-6.24-1.969-3.81 0-6.67 1.625-8.57 4.875V182h-13.55v-50.719h12.75zm57.56-12.469v12.469h8.67v9.938h-8.67v25.312c0 1.875.36 3.219 1.08 4.031.72.813 2.09 1.219 4.12 1.219 1.5 0 2.83-.109 3.99-.328v10.266a27.932 27.932 0 01-8.21 1.219c-9.5 0-14.34-4.797-14.53-14.391v-27.328h-7.4v-9.938h7.4v-12.469h13.55zm12.7 37.36c0-5.031.97-9.516 2.91-13.453 1.94-3.938 4.72-6.985 8.34-9.141 3.66-2.156 7.89-3.234 12.71-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.18 7.032-17.49 7.032-7.31 0-13.16-2.344-17.53-7.032-4.34-4.687-6.52-11.062-6.52-19.125v-.609zm13.55.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.41 3.797 7.78 3.797 3.28 0 5.84-1.25 7.69-3.75 1.84-2.532 2.76-6.563 2.76-12.094 0-4.719-.92-8.375-2.76-10.969-1.85-2.594-4.44-3.891-7.78-3.891-3.32 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zM817.156 265.422h-27v18.281h31.688V295h-45.75v-68.25h45.656v11.391h-31.594v16.265h27v11.016zm39.516 15.562c0-1.656-.828-2.953-2.484-3.89-1.626-.969-4.25-1.828-7.876-2.578-12.062-2.532-18.093-7.657-18.093-15.375 0-4.5 1.859-8.25 5.578-11.25 3.75-3.032 8.641-4.547 14.672-4.547 6.437 0 11.578 1.515 15.422 4.547 3.875 3.031 5.812 6.968 5.812 11.812h-13.547c0-1.937-.625-3.531-1.875-4.781-1.25-1.281-3.203-1.922-5.859-1.922-2.281 0-4.047.516-5.297 1.547s-1.875 2.344-1.875 3.937c0 1.5.703 2.719 2.109 3.657 1.438.906 3.844 1.703 7.219 2.39 3.375.657 6.219 1.407 8.531 2.25 7.157 2.625 10.735 7.172 10.735 13.641 0 4.625-1.985 8.375-5.953 11.25-3.969 2.844-9.094 4.266-15.375 4.266-4.25 0-8.032-.75-11.344-2.25-3.281-1.532-5.86-3.61-7.734-6.235-1.876-2.656-2.813-5.515-2.813-8.578h12.844c.125 2.406 1.015 4.25 2.672 5.531 1.656 1.282 3.875 1.922 6.656 1.922 2.594 0 4.547-.484 5.859-1.453 1.344-1 2.016-2.297 2.016-3.891zm67.594-10.875c0 7.813-1.782 14.079-5.344 18.797-3.531 4.688-8.313 7.032-14.344 7.032-5.125 0-9.266-1.782-12.422-5.344V314.5h-13.547v-70.219h12.563l.469 4.969c3.281-3.938 7.562-5.906 12.843-5.906 6.25 0 11.11 2.312 14.578 6.937 3.469 4.625 5.204 11 5.204 19.125v.703zm-13.547-.984c0-4.719-.844-8.359-2.531-10.922-1.657-2.562-4.079-3.844-7.266-3.844-4.25 0-7.172 1.625-8.766 4.875V280c1.656 3.344 4.61 5.016 8.86 5.016 6.468 0 9.703-5.297 9.703-15.891zM962.094 295c-.625-1.219-1.078-2.734-1.36-4.547-3.281 3.656-7.546 5.485-12.796 5.485-4.969 0-9.094-1.438-12.376-4.313-3.25-2.875-4.874-6.5-4.874-10.875 0-5.375 1.984-9.5 5.953-12.375 4-2.875 9.765-4.328 17.297-4.359h6.234v-2.907c0-2.343-.61-4.218-1.828-5.625-1.188-1.406-3.078-2.109-5.672-2.109-2.281 0-4.078.547-5.391 1.641-1.281 1.093-1.922 2.593-1.922 4.5h-13.547c0-2.938.907-5.657 2.719-8.157 1.813-2.5 4.375-4.453 7.688-5.859 3.312-1.438 7.031-2.156 11.156-2.156 6.25 0 11.203 1.578 14.859 4.734 3.688 3.125 5.532 7.531 5.532 13.219v21.984c.031 4.813.703 8.453 2.015 10.922V295h-13.687zm-11.203-9.422c2 0 3.843-.437 5.531-1.312 1.687-.907 2.937-2.11 3.75-3.61v-8.718h-5.063c-6.781 0-10.39 2.343-10.828 7.031l-.047.797c0 1.687.594 3.078 1.782 4.172 1.187 1.093 2.812 1.64 4.875 1.64zm54.379-.562c2.5 0 4.53-.688 6.09-2.063 1.56-1.375 2.37-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.85 2.843-4.38 5.062-7.6 6.656-3.18 1.562-6.71 2.344-10.59 2.344-7.25 0-12.969-2.297-17.156-6.891-4.188-4.625-6.282-11-6.282-19.125v-.891c0-7.812 2.079-14.047 6.235-18.703 4.156-4.656 9.859-6.984 17.113-6.984 6.34 0 11.42 1.812 15.23 5.437 3.84 3.594 5.8 8.391 5.86 14.391h-12.7c-.07-2.625-.88-4.75-2.44-6.375-1.56-1.656-3.63-2.485-6.19-2.485-3.15 0-5.545 1.157-7.17 3.469-1.594 2.281-2.391 6-2.391 11.157v1.406c0 5.218.797 8.968 2.391 11.25 1.594 2.281 4.02 3.422 7.27 3.422zm4.92 9.703l-.52 2.719c4.69.843 7.03 3.546 7.03 8.109 0 3.437-1.43 6.156-4.31 8.156-2.84 2-6.86 3-12.05 3l-.32-7.828c3.5 0 5.25-1.266 5.25-3.797 0-1.312-.54-2.219-1.6-2.719-1.03-.468-2.72-.781-5.061-.937l1.451-6.703h10.13zm21.93-25.547c0-5.031.97-9.516 2.91-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.18 7.032-17.49 7.032-7.31 0-13.15-2.344-17.53-7.032-4.34-4.687-6.52-11.062-6.52-19.125v-.609zm13.55.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.41 3.797 7.78 3.797 3.28 0 5.85-1.25 7.69-3.75 1.84-2.532 2.76-6.563 2.76-12.094 0-4.719-.92-8.375-2.76-10.969-1.84-2.594-4.44-3.891-7.78-3.891-3.31 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zm64.64-.89c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.93 0 9.01 1.844 12.23 5.531V223h13.6v72h-12.24l-.66-5.391c-3.37 4.219-7.71 6.329-13.03 6.329-5.97 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.48 10.922 1.66 2.531 4.07 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.76-5.297-6.54 0-9.8 5.297-9.8 15.891zm66 25.688c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm77.39 41.626c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.46 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.71 4.407-3.18 7.781h18.84v-1.078c-.06-3-.87-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm42.61-10.031l.42 5.86c3.62-4.532 8.48-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.96 7.875 4.03 14.156V295h-13.55v-32.438c0-2.874-.63-4.953-1.87-6.234-1.26-1.312-3.33-1.969-6.24-1.969-3.81 0-6.67 1.625-8.58 4.875V295h-13.54v-50.719h12.75zm39.23 24.985c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.93 0 9.01 1.844 12.23 5.531V223h13.59v72h-12.23l-.66-5.391c-3.37 4.219-7.72 6.329-13.03 6.329-5.97 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.48 10.922 1.66 2.531 4.06 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.77-5.297-6.53 0-9.79 5.297-9.79 15.891zm66 25.688c-7.44 0-13.5-2.282-18.19-6.844-4.66-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.93 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.29-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.88.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.43-6.937-1.57-1.656-3.78-2.485-6.66-2.485zm58.64 2.672c-1.84-.25-3.47-.375-4.87-.375-5.13 0-8.49 1.735-10.08 5.203V295h-13.55v-50.719h12.8l.37 6.047c2.72-4.656 6.49-6.984 11.3-6.984 1.5 0 2.91.203 4.22.609l-.19 13.031zm28.97 38.954c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm51.24 30.704c2.5 0 4.53-.688 6.09-2.063 1.56-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.84 2.843-4.38 5.062-7.6 6.656-3.18 1.562-6.71 2.344-10.59 2.344-7.25 0-12.97-2.297-17.15-6.891-4.19-4.625-6.29-11-6.29-19.125v-.891c0-7.812 2.08-14.047 6.24-18.703 4.15-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.88-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.19-2.485-3.15 0-5.54 1.157-7.17 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.59 2.281 4.02 3.422 7.27 3.422zm4.92 9.703l-.52 2.719c4.69.843 7.03 3.546 7.03 8.109 0 3.437-1.43 6.156-4.31 8.156-2.84 2-6.86 3-12.04 3l-.33-7.828c3.5 0 5.25-1.266 5.25-3.797 0-1.312-.53-2.219-1.6-2.719-1.03-.468-2.72-.781-5.06-.937l1.45-6.703h10.13zm53.44.281c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.38-4.313-3.24-2.875-4.87-6.5-4.87-10.875 0-5.375 1.98-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.23v-2.907c0-2.343-.61-4.218-1.82-5.625-1.19-1.406-3.08-2.109-5.68-2.109-2.28 0-4.07.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.54c0-2.938.9-5.657 2.71-8.157 1.82-2.5 4.38-4.453 7.69-5.859 3.31-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.68 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.01 10.922V295h-13.68zm-11.21-9.422c2 0 3.85-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.04.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.87 1.64zm45.99-41.297l.42 5.672c3.59-4.406 8.45-6.609 14.58-6.609 6.53 0 11.01 2.578 13.45 7.734 3.56-5.156 8.64-7.734 15.23-7.734 5.5 0 9.6 1.609 12.29 4.828 2.68 3.187 4.03 8 4.03 14.437V295h-13.6v-32.344c0-2.875-.56-4.968-1.68-6.281-1.13-1.344-3.11-2.016-5.96-2.016-4.06 0-6.87 1.938-8.43 5.813l.04 34.828h-13.54v-32.297c0-2.937-.58-5.062-1.74-6.375-1.15-1.312-3.12-1.969-5.91-1.969-3.84 0-6.62 1.594-8.34 4.782V295h-13.55v-50.719h12.71zm93.79 51.657c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.96-13.641 1.96-4.031 4.75-7.125 8.34-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.66 7.453c-2.04 2.875-4.79 5.125-8.25 6.75-3.47 1.594-7.32 2.391-11.54 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.71 4.407-3.18 7.781h18.84v-1.078c-.06-3-.87-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm42.61-10.031l.42 5.86c3.62-4.532 8.48-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.97 7.875 4.03 14.156V295h-13.55v-32.438c0-2.874-.62-4.953-1.87-6.234-1.25-1.312-3.33-1.969-6.24-1.969-3.81 0-6.67 1.625-8.58 4.875V295h-13.54v-50.719h12.75zm57.56-12.469v12.469h8.67v9.938h-8.67v25.312c0 1.875.36 3.219 1.08 4.031.72.813 2.09 1.219 4.12 1.219 1.5 0 2.83-.109 3.99-.328v10.266a27.932 27.932 0 01-8.21 1.219c-9.5 0-14.34-4.797-14.53-14.391v-27.328h-7.4v-9.938h7.4v-12.469h13.55zm12.7 37.36c0-5.031.97-9.516 2.91-13.453 1.94-3.938 4.72-6.985 8.34-9.141 3.66-2.156 7.89-3.234 12.71-3.234 6.84 0 12.42 2.094 16.73 6.281 4.34 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.52 18.75-4.34 4.688-10.17 7.032-17.48 7.032-7.31 0-13.16-2.344-17.53-7.032-4.35-4.687-6.52-11.062-6.52-19.125v-.609zm13.55.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.4 3.797 7.78 3.797 3.28 0 5.84-1.25 7.69-3.75 1.84-2.532 2.76-6.563 2.76-12.094 0-4.719-.92-8.375-2.76-10.969-1.85-2.594-4.44-3.891-7.78-3.891-3.32 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zm109.83-10.125h-41.91v-11.062h41.91v11.062zm0 20.297h-41.91v-11.062h41.91v11.062zM2064.92 295h-46.78v-9.281l22.08-23.531c3.03-3.313 5.26-6.204 6.7-8.672 1.47-2.469 2.2-4.813 2.2-7.032 0-3.031-.76-5.406-2.29-7.125-1.53-1.75-3.72-2.625-6.56-2.625-3.07 0-5.49 1.063-7.27 3.188-1.75 2.094-2.62 4.859-2.62 8.297h-13.6c0-4.157.99-7.953 2.95-11.391 2-3.437 4.82-6.125 8.44-8.062 3.63-1.969 7.74-2.954 12.33-2.954 7.03 0 12.48 1.688 16.36 5.063 3.91 3.375 5.86 8.141 5.86 14.297 0 3.375-.88 6.812-2.63 10.312-1.75 3.5-4.75 7.578-9 12.235l-15.51 16.359h29.34V295zm24.7-55.594l-8.15 21.422h-10.78l14.01-34.078h9.85l14.01 34.078h-10.73l-8.21-21.422zM2148.17 295h-13.55v-52.219l-16.17 5.016v-11.016l28.27-10.125h1.45V295zm58.97-68.953v11.156h-1.31c-6.13.094-11.06 1.688-14.81 4.781-3.72 3.094-5.96 7.391-6.71 12.891 3.63-3.687 8.21-5.531 13.74-5.531 5.93 0 10.65 2.125 14.15 6.375s5.25 9.843 5.25 16.781c0 4.438-.97 8.453-2.9 12.047-1.91 3.594-4.63 6.391-8.16 8.391-3.5 2-7.47 3-11.91 3-7.18 0-13-2.5-17.43-7.5-4.41-5-6.61-11.672-6.61-20.016v-4.875c0-7.406 1.39-13.938 4.17-19.594 2.81-5.687 6.83-10.078 12.05-13.172 5.25-3.125 11.32-4.703 18.23-4.734h2.25zm-13.22 34.172c-2.19 0-4.17.578-5.95 1.734-1.78 1.125-3.09 2.625-3.94 4.5v4.125c0 4.531.89 8.078 2.67 10.641 1.78 2.531 4.28 3.797 7.5 3.797 2.91 0 5.25-1.141 7.03-3.422 1.82-2.313 2.72-5.297 2.72-8.953 0-3.719-.9-6.719-2.72-9-1.81-2.282-4.25-3.422-7.31-3.422zm99.14-.188h-41.9v-11.062h41.9v11.062zm0 20.297h-41.9v-11.062h41.9v11.062zm71.96-54.281v11.156h-1.32c-6.12.094-11.06 1.688-14.81 4.781-3.72 3.094-5.95 7.391-6.7 12.891 3.62-3.687 8.2-5.531 13.73-5.531 5.94 0 10.66 2.125 14.16 6.375s5.25 9.843 5.25 16.781c0 4.438-.97 8.453-2.91 12.047-1.9 3.594-4.62 6.391-8.15 8.391-3.5 2-7.47 3-11.91 3-7.19 0-13-2.5-17.44-7.5-4.4-5-6.61-11.672-6.61-20.016v-4.875c0-7.406 1.39-13.938 4.17-19.594 2.82-5.687 6.83-10.078 12.05-13.172 5.25-3.125 11.33-4.703 18.24-4.734h2.25zm-13.22 34.172c-2.19 0-4.18.578-5.96 1.734-1.78 1.125-3.09 2.625-3.93 4.5v4.125c0 4.531.89 8.078 2.67 10.641 1.78 2.531 4.28 3.797 7.5 3.797 2.9 0 5.25-1.141 7.03-3.422 1.81-2.313 2.72-5.297 2.72-8.953 0-3.719-.91-6.719-2.72-9-1.81-2.282-4.25-3.422-7.31-3.422zm71.67 9.093h7.73v10.922h-7.73V295h-13.55v-14.766h-27.98l-.61-8.531 28.45-44.953h13.69v42.562zm-28.64 0h15.09v-24.093l-.89 1.547-14.2 22.546zm86.58 5.344l-4.88 4.875V295h-13.55v-72h13.55v39.891l2.63-3.375 12.98-15.235h16.27l-18.33 21.141L2510 295h-15.56l-13.03-20.344zM2515.16 295v-68.25h23.9c8.28 0 14.56 1.594 18.85 4.781 4.28 3.157 6.42 7.797 6.42 13.922 0 3.344-.86 6.297-2.58 8.859-1.72 2.532-4.11 4.391-7.17 5.579 3.5.875 6.25 2.64 8.25 5.297 2.03 2.656 3.05 5.906 3.05 9.75 0 6.562-2.1 11.531-6.29 14.906-4.18 3.375-10.15 5.094-17.9 5.156h-26.53zm14.06-29.719v18.422h12.05c3.31 0 5.89-.781 7.73-2.344 1.88-1.593 2.81-3.781 2.81-6.562 0-6.25-3.23-9.422-9.7-9.516h-12.89zm0-9.937h10.4c7.1-.125 10.65-2.953 10.65-8.485 0-3.093-.91-5.312-2.72-6.656-1.78-1.375-4.61-2.062-8.49-2.062h-9.84v17.203zM827.75 339.75v44.953c0 7.469-2.344 13.375-7.031 17.719-4.657 4.344-11.031 6.516-19.125 6.516-7.969 0-14.297-2.11-18.985-6.329-4.687-4.218-7.078-10.015-7.171-17.39V339.75H789.5v45.047c0 4.469 1.062 7.734 3.188 9.797 2.156 2.031 5.124 3.047 8.906 3.047 7.906 0 11.922-4.157 12.047-12.469V339.75h14.109zm38.109 54.234c0-1.656-.828-2.953-2.484-3.89-1.625-.969-4.25-1.828-7.875-2.578-12.062-2.532-18.094-7.657-18.094-15.375 0-4.5 1.86-8.25 5.578-11.25 3.75-3.032 8.641-4.547 14.672-4.547 6.438 0 11.578 1.515 15.422 4.547 3.875 3.031 5.813 6.968 5.813 11.812h-13.547c0-1.937-.625-3.531-1.875-4.781-1.25-1.281-3.203-1.922-5.86-1.922-2.281 0-4.047.516-5.297 1.547s-1.874 2.344-1.874 3.937c0 1.5.703 2.719 2.109 3.657 1.437.906 3.844 1.703 7.219 2.39 3.375.657 6.218 1.407 8.531 2.25 7.156 2.625 10.734 7.172 10.734 13.641 0 4.625-1.984 8.375-5.953 11.25-3.969 2.844-9.094 4.266-15.375 4.266-4.25 0-8.031-.75-11.344-2.25-3.281-1.532-5.859-3.61-7.734-6.235-1.875-2.656-2.813-5.515-2.813-8.578h12.844c.125 2.406 1.016 4.25 2.672 5.531 1.656 1.282 3.875 1.922 6.656 1.922 2.594 0 4.547-.484 5.86-1.453 1.344-1 2.015-2.297 2.015-3.891zM917.188 408c-.626-1.219-1.079-2.734-1.36-4.547-3.281 3.656-7.547 5.485-12.797 5.485-4.969 0-9.093-1.438-12.375-4.313-3.25-2.875-4.875-6.5-4.875-10.875 0-5.375 1.985-9.5 5.953-12.375 4-2.875 9.766-4.328 17.297-4.359h6.235v-2.907c0-2.343-.61-4.218-1.828-5.625-1.188-1.406-3.079-2.109-5.672-2.109-2.282 0-4.078.547-5.391 1.641-1.281 1.093-1.922 2.593-1.922 4.5h-13.547c0-2.938.906-5.657 2.719-8.157 1.813-2.5 4.375-4.453 7.687-5.859 3.313-1.438 7.032-2.156 11.157-2.156 6.25 0 11.203 1.578 14.859 4.734 3.688 3.125 5.531 7.531 5.531 13.219v21.984c.032 4.813.703 8.453 2.016 10.922V408h-13.687zm-11.204-9.422c2 0 3.844-.437 5.532-1.312 1.687-.907 2.937-2.11 3.75-3.61v-8.718h-5.063c-6.781 0-10.391 2.343-10.828 7.031l-.047.797c0 1.687.594 3.078 1.781 4.172 1.188 1.093 2.813 1.64 4.875 1.64zm45.985-41.297l.422 5.672c3.593-4.406 8.453-6.609 14.578-6.609 6.531 0 11.015 2.578 13.453 7.734 3.562-5.156 8.64-7.734 15.234-7.734 5.504 0 9.594 1.609 12.284 4.828 2.68 3.187 4.03 8 4.03 14.437V408h-13.595v-32.344c0-2.875-.563-4.968-1.687-6.281-1.126-1.344-3.11-2.016-5.954-2.016-4.062 0-6.875 1.938-8.437 5.813l.047 34.828h-13.547v-32.297c0-2.937-.578-5.062-1.735-6.375-1.156-1.312-3.124-1.969-5.906-1.969-3.844 0-6.625 1.594-8.344 4.782V408h-13.546v-50.719h12.703zm68.341 24.891c0-5.031.97-9.516 2.91-13.453 1.94-3.938 4.72-6.985 8.34-9.141 3.66-2.156 7.89-3.234 12.71-3.234 6.84 0 12.42 2.094 16.73 6.281 4.34 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.52 18.75-4.34 4.688-10.17 7.032-17.48 7.032-7.31 0-13.16-2.344-17.53-7.032-4.35-4.687-6.52-11.062-6.52-19.125v-.609zm13.55.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.4 3.797 7.78 3.797 3.28 0 5.84-1.25 7.69-3.75 1.84-2.532 2.76-6.563 2.76-12.094 0-4.719-.92-8.375-2.76-10.969-1.85-2.594-4.44-3.891-7.78-3.891-3.32 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zm70.31 10.828c0-1.656-.83-2.953-2.48-3.89-1.63-.969-4.25-1.828-7.88-2.578-12.06-2.532-18.09-7.657-18.09-15.375 0-4.5 1.86-8.25 5.58-11.25 3.75-3.032 8.64-4.547 14.67-4.547 6.44 0 11.58 1.515 15.42 4.547 3.88 3.031 5.81 6.968 5.81 11.812h-13.54c0-1.937-.63-3.531-1.88-4.781-1.25-1.281-3.2-1.922-5.86-1.922-2.28 0-4.04.516-5.3 1.547-1.24 1.031-1.87 2.344-1.87 3.937 0 1.5.7 2.719 2.11 3.657 1.44.906 3.84 1.703 7.22 2.39 3.37.657 6.22 1.407 8.53 2.25 7.16 2.625 10.73 7.172 10.73 13.641 0 4.625-1.98 8.375-5.95 11.25-3.97 2.844-9.09 4.266-15.37 4.266-4.25 0-8.04-.75-11.35-2.25-3.28-1.532-5.86-3.61-7.73-6.235-1.88-2.656-2.82-5.515-2.82-8.578h12.85c.12 2.406 1.01 4.25 2.67 5.531 1.66 1.282 3.88 1.922 6.66 1.922 2.59 0 4.54-.484 5.86-1.453 1.34-1 2.01-2.297 2.01-3.891zm76.22 8.86c-3.34 4.062-7.97 6.094-13.87 6.094-5.44 0-9.6-1.563-12.47-4.688-2.85-3.125-4.3-7.703-4.36-13.734v-33.235h13.54v32.766c0 5.281 2.41 7.922 7.22 7.922 4.6 0 7.75-1.594 9.47-4.781v-35.907h13.6V408h-12.75l-.38-5.156zm36.05-45.563l.42 5.672c3.59-4.406 8.45-6.609 14.58-6.609 6.53 0 11.01 2.578 13.45 7.734 3.56-5.156 8.64-7.734 15.23-7.734 5.5 0 9.6 1.609 12.29 4.828 2.68 3.187 4.03 8 4.03 14.437V408h-13.6v-32.344c0-2.875-.56-4.968-1.68-6.281-1.13-1.344-3.11-2.016-5.96-2.016-4.06 0-6.87 1.938-8.43 5.813l.04 34.828h-13.54v-32.297c0-2.937-.58-5.062-1.74-6.375-1.15-1.312-3.12-1.969-5.91-1.969-3.84 0-6.62 1.594-8.34 4.782V408h-13.55v-50.719h12.71zM1316.28 408c-.62-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.54 5.485-12.8 5.485-4.96 0-9.09-1.438-12.37-4.313-3.25-2.875-4.87-6.5-4.87-10.875 0-5.375 1.98-9.5 5.95-12.375 4-2.875 9.76-4.328 17.29-4.359h6.24v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.28 0-4.08.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5H1286c0-2.938.91-5.657 2.72-8.157s4.37-4.453 7.69-5.859c3.31-1.438 7.03-2.156 11.15-2.156 6.25 0 11.21 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.71 8.453 2.02 10.922V408h-13.69zm-11.2-9.422c2 0 3.84-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.05.797c0 1.687.6 3.078 1.78 4.172 1.19 1.093 2.82 1.64 4.88 1.64zm83.34-15.562h-11.2V408h-14.06v-68.25h25.36c8.06 0 14.28 1.797 18.65 5.391 4.38 3.593 6.56 8.671 6.56 15.234 0 4.656-1.01 8.547-3.04 11.672-2 3.094-5.05 5.562-9.14 7.406l14.76 27.891V408h-15.09l-12.8-24.984zm-11.2-11.391h11.34c3.53 0 6.27-.891 8.21-2.672 1.93-1.812 2.9-4.297 2.9-7.453 0-3.219-.92-5.75-2.76-7.594-1.82-1.844-4.61-2.765-8.39-2.765h-11.3v20.484zm85.78 22.313h-24.66L1433.66 408h-14.96l25.41-68.25h13.03l25.55 68.25h-14.96l-4.73-14.062zm-20.86-11.391h17.06L1450.62 357l-8.48 25.547zm65.3-42.797l17.53 49.5 17.44-49.5h18.47V408h-14.11v-18.656l1.4-32.203L1529.75 408h-9.66l-18.37-50.812 1.4 32.156V408h-14.06v-68.25h18.38zm86.62 42.516c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.94 0 9.01 1.844 12.23 5.531V336h13.6v72h-12.24l-.65-5.391c-3.38 4.219-7.72 6.329-13.04 6.329-5.96 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.48 10.922 1.66 2.531 4.07 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.76-5.297-6.53 0-9.8 5.297-9.8 15.891zm66 25.688c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm67.27.563h7.22c3.43 0 5.98-.859 7.64-2.578 1.65-1.719 2.48-4 2.48-6.844 0-2.75-.83-4.891-2.48-6.422-1.63-1.531-3.88-2.297-6.75-2.297-2.6 0-4.77.719-6.52 2.157-1.75 1.406-2.62 3.25-2.62 5.531h-13.55c0-3.563.95-6.75 2.86-9.563 1.94-2.843 4.62-5.062 8.06-6.656 3.47-1.594 7.28-2.391 11.44-2.391 7.22 0 12.87 1.735 16.97 5.204 4.09 3.437 6.14 8.187 6.14 14.25 0 3.125-.95 6-2.86 8.625s-4.41 4.64-7.5 6.047c3.84 1.374 6.7 3.437 8.58 6.187 1.9 2.75 2.86 6 2.86 9.75 0 6.063-2.22 10.922-6.66 14.578-4.41 3.656-10.25 5.485-17.53 5.485-6.81 0-12.39-1.797-16.73-5.391-4.32-3.594-6.47-8.344-6.47-14.25h13.54c0 2.562.96 4.656 2.86 6.281 1.94 1.625 4.31 2.438 7.13 2.438 3.22 0 5.73-.844 7.54-2.532 1.85-1.718 2.77-3.984 2.77-6.796 0-6.813-3.75-10.219-11.25-10.219h-7.17v-10.594zM1827.45 408h-46.78v-9.281l22.08-23.531c3.03-3.313 5.27-6.204 6.7-8.672 1.47-2.469 2.21-4.813 2.21-7.032 0-3.031-.77-5.406-2.3-7.125-1.53-1.75-3.72-2.625-6.56-2.625-3.07 0-5.49 1.063-7.27 3.188-1.75 2.094-2.62 4.859-2.62 8.297h-13.6c0-4.157.99-7.953 2.96-11.391 2-3.437 4.81-6.125 8.43-8.062 3.63-1.969 7.74-2.954 12.33-2.954 7.03 0 12.49 1.688 16.36 5.063 3.91 3.375 5.86 8.141 5.86 14.297 0 3.375-.87 6.812-2.63 10.312-1.74 3.5-4.74 7.578-9 12.235l-15.51 16.359h29.34V408zm51.24-20.344l-4.88 4.875V408h-13.54v-72h13.54v39.891l2.63-3.375 12.98-15.235h16.27l-18.33 21.141L1907.28 408h-15.56l-13.03-20.344zM1912.44 408v-68.25h23.9c8.28 0 14.57 1.594 18.85 4.781 4.28 3.157 6.42 7.797 6.42 13.922 0 3.344-.86 6.297-2.58 8.859-1.72 2.532-4.11 4.391-7.17 5.579 3.5.875 6.25 2.64 8.25 5.297 2.03 2.656 3.05 5.906 3.05 9.75 0 6.562-2.1 11.531-6.28 14.906-4.19 3.375-10.16 5.094-17.91 5.156h-26.53zm14.06-29.719v18.422h12.05c3.31 0 5.89-.781 7.73-2.344 1.88-1.593 2.81-3.781 2.81-6.562 0-6.25-3.23-9.422-9.7-9.516h-12.89zm0-9.937h10.41c7.09-.125 10.64-2.953 10.64-8.485 0-3.093-.91-5.312-2.72-6.656-1.78-1.375-4.61-2.062-8.49-2.062h-9.84v17.203zm113.34 4.687h-41.9v-11.062h41.9v11.062zm0 20.297h-41.9v-11.062h41.9v11.062zm79.69-35.437c0 3.312-.83 6.25-2.48 8.812-1.66 2.563-3.94 4.609-6.85 6.141 3.32 1.594 5.94 3.797 7.88 6.609 1.94 2.781 2.9 6.063 2.9 9.844 0 6.062-2.06 10.859-6.18 14.391-4.13 3.5-9.74 5.25-16.83 5.25-7.09 0-12.72-1.766-16.88-5.297-4.15-3.532-6.23-8.313-6.23-14.344 0-3.781.97-7.078 2.91-9.891 1.93-2.812 4.54-5 7.82-6.562-2.9-1.532-5.18-3.578-6.84-6.141-1.63-2.562-2.44-5.5-2.44-8.812 0-5.813 1.94-10.438 5.81-13.875 3.88-3.469 9.15-5.204 15.8-5.204 6.63 0 11.88 1.719 15.75 5.157 3.91 3.406 5.86 8.047 5.86 13.922zm-12.14 30.421c0-2.968-.86-5.343-2.58-7.124-1.72-1.782-4.03-2.672-6.93-2.672-2.88 0-5.18.89-6.9 2.672-1.71 1.75-2.57 4.124-2.57 7.124 0 2.907.84 5.25 2.53 7.032 1.68 1.781 4.03 2.672 7.03 2.672 2.94 0 5.23-.86 6.89-2.578 1.69-1.719 2.53-4.094 2.53-7.126zm-1.41-29.765c0-2.656-.7-4.781-2.1-6.375-1.41-1.625-3.4-2.438-5.96-2.438-2.53 0-4.5.782-5.9 2.344-1.41 1.563-2.11 3.719-2.11 6.469 0 2.719.7 4.906 2.11 6.562 1.4 1.657 3.39 2.485 5.95 2.485s4.53-.828 5.91-2.485c1.4-1.656 2.1-3.843 2.1-6.562zm94.32 24.562c0 7.813-1.78 14.079-5.35 18.797-3.53 4.688-8.31 7.032-14.34 7.032-5.13 0-9.27-1.782-12.42-5.344V427.5h-13.55v-70.219h12.56l.47 4.969c3.28-3.938 7.56-5.906 12.85-5.906 6.25 0 11.1 2.312 14.57 6.937 3.47 4.625 5.21 11 5.21 19.125v.703zm-13.55-.984c0-4.719-.84-8.359-2.53-10.922-1.66-2.562-4.08-3.844-7.27-3.844-4.25 0-7.17 1.625-8.76 4.875V393c1.65 3.344 4.61 5.016 8.86 5.016 6.47 0 9.7-5.297 9.7-15.891zM2238.12 408c-.62-1.219-1.07-2.734-1.35-4.547-3.29 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.38-4.313-3.25-2.875-4.87-6.5-4.87-10.875 0-5.375 1.98-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.23v-2.907c0-2.343-.61-4.218-1.82-5.625-1.19-1.406-3.08-2.109-5.68-2.109-2.28 0-4.08.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.55c0-2.938.91-5.657 2.72-8.157 1.82-2.5 4.38-4.453 7.69-5.859 3.31-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.68 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.01 10.922V408h-13.69zm-11.2-9.422c2 0 3.85-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.04.797c0 1.687.59 3.078 1.78 4.172 1.18 1.093 2.81 1.64 4.87 1.64zm5.16-62.578h14.76l-12.98 14.531h-11.02l9.24-14.531zm26.15 46.266c0-7.782 1.85-14.047 5.54-18.797 3.71-4.75 8.71-7.125 15-7.125 5.56 0 9.89 1.906 12.98 5.718l.56-4.781h12.28v49.031c0 4.438-1.01 8.297-3.04 11.579-2 3.281-4.83 5.781-8.49 7.5-3.65 1.718-7.94 2.578-12.84 2.578-3.72 0-7.34-.75-10.88-2.25-3.53-1.469-6.2-3.375-8.01-5.719l6-8.25c3.37 3.781 7.47 5.672 12.28 5.672 3.59 0 6.39-.969 8.39-2.906 2-1.907 3-4.625 3-8.157v-2.718c-3.12 3.531-7.23 5.297-12.33 5.297-6.09 0-11.03-2.376-14.81-7.126-3.75-4.781-5.63-11.109-5.63-18.984v-.562zm13.55.984c0 4.594.92 8.203 2.77 10.828 1.84 2.594 4.37 3.891 7.59 3.891 4.13 0 7.08-1.547 8.86-4.641V372c-1.81-3.094-4.73-4.641-8.77-4.641-3.25 0-5.81 1.329-7.68 3.985-1.85 2.656-2.77 6.625-2.77 11.906zm57.56 24.75h-13.59v-50.719h13.59V408zm-14.39-63.844c0-2.031.67-3.703 2.02-5.015 1.37-1.313 3.23-1.969 5.58-1.969 2.31 0 4.15.656 5.53 1.969 1.37 1.312 2.06 2.984 2.06 5.015 0 2.063-.7 3.75-2.11 5.063-1.37 1.312-3.2 1.969-5.48 1.969-2.28 0-4.13-.657-5.53-1.969-1.38-1.313-2.07-3-2.07-5.063zm38.07 13.125l.42 5.86c3.62-4.532 8.48-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.96 7.875 4.03 14.156V408h-13.55v-32.438c0-2.874-.62-4.953-1.88-6.234-1.24-1.312-3.32-1.969-6.23-1.969-3.81 0-6.67 1.625-8.58 4.875V408h-13.54v-50.719h12.75zM2423.75 408c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.37-4.313-3.25-2.875-4.88-6.5-4.88-10.875 0-5.375 1.99-9.5 5.96-12.375 4-2.875 9.76-4.328 17.29-4.359h6.24v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.28 0-4.08.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.55c0-2.938.91-5.657 2.72-8.157s4.37-4.453 7.69-5.859c3.31-1.438 7.03-2.156 11.15-2.156 6.25 0 11.2 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.02 10.922V408h-13.69zm-11.2-9.422c2 0 3.84-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.79 0-10.39 2.343-10.83 7.031l-.05.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.88 1.64zm60.75-4.594c0-1.656-.83-2.953-2.49-3.89-1.62-.969-4.25-1.828-7.87-2.578-12.06-2.532-18.1-7.657-18.1-15.375 0-4.5 1.86-8.25 5.58-11.25 3.75-3.032 8.64-4.547 14.67-4.547 6.44 0 11.58 1.515 15.43 4.547 3.87 3.031 5.81 6.968 5.81 11.812h-13.55c0-1.937-.62-3.531-1.87-4.781-1.25-1.281-3.21-1.922-5.86-1.922-2.28 0-4.05.516-5.3 1.547s-1.87 2.344-1.87 3.937c0 1.5.7 2.719 2.1 3.657 1.44.906 3.85 1.703 7.22 2.39 3.38.657 6.22 1.407 8.53 2.25 7.16 2.625 10.74 7.172 10.74 13.641 0 4.625-1.99 8.375-5.95 11.25-3.97 2.844-9.1 4.266-15.38 4.266-4.25 0-8.03-.75-11.34-2.25-3.28-1.532-5.86-3.61-7.74-6.235-1.87-2.656-2.81-5.515-2.81-8.578h12.84c.13 2.406 1.02 4.25 2.68 5.531 1.65 1.282 3.87 1.922 6.65 1.922 2.6 0 4.55-.484 5.86-1.453 1.34-1 2.02-2.297 2.02-3.891zm43.73-11.718c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.93 0 9.01 1.844 12.23 5.531V336h13.59v72h-12.23l-.66-5.391c-3.37 4.219-7.72 6.329-13.03 6.329-5.97 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.48 10.922 1.66 2.531 4.06 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.76-5.297-6.54 0-9.8 5.297-9.8 15.891zm66 25.688c-7.44 0-13.5-2.282-18.19-6.844-4.66-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.43-6.937-1.57-1.656-3.78-2.485-6.66-2.485zm93.56 15h7.74v10.922h-7.74V408h-13.54v-14.766h-27.99l-.61-8.531 28.46-44.953h13.68v42.562zm-28.64 0h15.1v-24.093l-.89 1.547-14.21 22.546zm86.58 5.344l-4.87 4.875V408h-13.55v-72h13.55v39.891l2.62-3.375 12.99-15.235h16.26l-18.33 21.141L2775.12 408h-15.56l-13.03-20.344zM2780.28 408v-68.25h23.91c8.28 0 14.56 1.594 18.84 4.781 4.28 3.157 6.42 7.797 6.42 13.922 0 3.344-.86 6.297-2.57 8.859-1.72 2.532-4.11 4.391-7.18 5.579 3.5.875 6.25 2.64 8.25 5.297 2.03 2.656 3.05 5.906 3.05 9.75 0 6.562-2.09 11.531-6.28 14.906s-10.16 5.094-17.91 5.156h-26.53zm14.06-29.719v18.422h12.05c3.31 0 5.89-.781 7.73-2.344 1.88-1.593 2.82-3.781 2.82-6.562 0-6.25-3.24-9.422-9.71-9.516h-12.89zm0-9.937h10.41c7.09-.125 10.64-2.953 10.64-8.485 0-3.093-.91-5.312-2.72-6.656-1.78-1.375-4.61-2.062-8.48-2.062h-9.85v17.203z"
        fill="#000"
      />
      <path
        d="M990.156 953.109h-27V981h-14.062v-68.25h44.437v11.391h-30.375v17.625h27v11.343zM1015.09 981h-13.59v-50.719h13.59V981zm-14.39-63.844c0-2.031.68-3.703 2.02-5.015 1.37-1.313 3.23-1.969 5.58-1.969 2.31 0 4.15.656 5.53 1.969 1.37 1.312 2.06 2.984 2.06 5.015 0 2.063-.7 3.75-2.11 5.063-1.37 1.312-3.2 1.969-5.48 1.969-2.28 0-4.13-.657-5.53-1.969-1.38-1.313-2.07-3-2.07-5.063zm54.1 25.828c-1.85-.25-3.47-.375-4.88-.375-5.12 0-8.48 1.735-10.08 5.203V981h-13.54v-50.719h12.79l.38 6.047c2.72-4.656 6.48-6.984 11.3-6.984 1.5 0 2.9.203 4.21.609l-.18 13.031zm34.03 24c0-1.656-.83-2.953-2.49-3.89-1.62-.969-4.25-1.828-7.87-2.578-12.06-2.532-18.09-7.657-18.09-15.375 0-4.5 1.85-8.25 5.57-11.25 3.75-3.032 8.64-4.547 14.67-4.547 6.44 0 11.58 1.515 15.43 4.547 3.87 3.031 5.81 6.968 5.81 11.812h-13.55c0-1.937-.62-3.531-1.87-4.781-1.25-1.281-3.21-1.922-5.86-1.922-2.28 0-4.05.516-5.3 1.547s-1.87 2.344-1.87 3.937c0 1.5.7 2.719 2.11 3.657 1.43.906 3.84 1.703 7.21 2.39 3.38.657 6.22 1.407 8.54 2.25 7.15 2.625 10.73 7.172 10.73 13.641 0 4.625-1.98 8.375-5.95 11.25-3.97 2.844-9.1 4.266-15.38 4.266-4.25 0-8.03-.75-11.34-2.25-3.28-1.532-5.86-3.61-7.74-6.235-1.87-2.656-2.81-5.515-2.81-8.578h12.84c.13 2.406 1.02 4.25 2.68 5.531 1.65 1.282 3.87 1.922 6.65 1.922 2.6 0 4.55-.484 5.86-1.453 1.35-1 2.02-2.297 2.02-3.891zm38.15-49.172v12.469h8.68v9.938h-8.68v25.312c0 1.875.36 3.219 1.08 4.031.72.813 2.1 1.219 4.13 1.219 1.5 0 2.83-.109 3.98-.328v10.266a27.866 27.866 0 01-8.2 1.219c-9.5 0-14.35-4.797-14.53-14.391v-27.328h-7.41v-9.938h7.41v-12.469h13.54zM1181.41 981h-13.6v-72h13.6v72zm34.54.938c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.46 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.72 4.407-3.18 7.781h18.84v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm48.47 24.141l9.42-34.172h14.15L1269.34 981h-12.93l-17.11-50.719h14.15l9.43 34.172zm52.26 17.485c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.65 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zM1358.03 981h-13.59v-72h13.59v72z"
        fill="#AE87DD"
      />
      <path
        d="M1150.48 559.094c0-2.656-.93-4.688-2.81-6.094-1.87-1.438-5.25-2.938-10.12-4.5-4.88-1.594-8.74-3.156-11.58-4.688-7.75-4.187-11.63-9.828-11.63-16.921 0-3.688 1.04-6.969 3.1-9.844 2.09-2.906 5.08-5.172 8.95-6.797 3.91-1.625 8.28-2.438 13.13-2.438 4.87 0 9.21.891 13.03 2.672 3.81 1.75 6.76 4.235 8.86 7.454 2.12 3.218 3.18 6.874 3.18 10.968h-14.06c0-3.125-.98-5.547-2.95-7.265-1.97-1.75-4.74-2.625-8.3-2.625-3.44 0-6.11.734-8.01 2.203-1.91 1.437-2.86 3.343-2.86 5.719 0 2.218 1.11 4.078 3.32 5.578 2.25 1.5 5.55 2.906 9.89 4.218 8 2.407 13.83 5.391 17.49 8.954 3.66 3.562 5.48 8 5.48 13.312 0 5.906-2.23 10.547-6.7 13.922-4.47 3.344-10.48 5.016-18.05 5.016-5.25 0-10.03-.954-14.34-2.86-4.31-1.937-7.61-4.578-9.89-7.922-2.25-3.344-3.38-7.218-3.38-11.625h14.11c0 7.531 4.5 11.297 13.5 11.297 3.35 0 5.96-.672 7.83-2.016 1.88-1.374 2.81-3.281 2.81-5.718zm46.13 18.844c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm51.24 30.704c2.5 0 4.53-.688 6.09-2.063 1.56-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.84 2.843-4.38 5.062-7.6 6.656-3.18 1.562-6.71 2.344-10.59 2.344-7.25 0-12.97-2.297-17.15-6.891-4.19-4.625-6.29-11-6.29-19.125v-.891c0-7.812 2.08-14.047 6.24-18.703 4.15-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.88-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.19-2.485-3.15 0-5.54 1.157-7.17 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.59 2.281 4.02 3.422 7.27 3.422zm26.86-15.844c0-5.031.96-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.17 7.032-17.49 7.032-7.31 0-13.15-2.344-17.53-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.54.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.41 3.797 7.78 3.797 3.28 0 5.85-1.25 7.69-3.75 1.84-2.532 2.77-6.563 2.77-12.094 0-4.719-.93-8.375-2.77-10.969-1.84-2.594-4.44-3.891-7.78-3.891-3.31 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zm55.32-25.875l.42 5.86c3.62-4.532 8.48-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.96 7.875 4.03 14.156V577h-13.55v-32.438c0-2.874-.62-4.953-1.88-6.234-1.24-1.312-3.32-1.969-6.23-1.969-3.81 0-6.67 1.625-8.58 4.875V577h-13.54v-50.719h12.75zm39.23 24.985c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.57-7.031 4.94 0 9.02 1.844 12.24 5.531V505h13.59v72h-12.23l-.66-5.391c-3.37 4.219-7.72 6.329-13.03 6.329-5.97 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.82 8.391 2.48 10.922 1.66 2.531 4.06 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.77-5.297-6.53 0-9.79 5.297-9.79 15.891zm80.86 24.75h-13.6v-72h13.6v72zm34.54.938c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.46 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.71 4.407-3.18 7.781h18.84v-1.078c-.06-3-.87-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm48.46 24.141l9.43-34.172h14.15L1563.59 577h-12.93l-17.11-50.719h14.15l9.42 34.172zm52.27 17.485c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zM1652.28 577h-13.59v-72h13.59v72zM3048.67 261.266c-.53 7.343-3.25 13.125-8.15 17.343-4.88 4.219-11.32 6.329-19.32 6.329-8.75 0-15.64-2.938-20.67-8.813-5-5.906-7.5-14-7.5-24.281v-4.172c0-6.563 1.16-12.344 3.47-17.344 2.31-5 5.61-8.828 9.89-11.484 4.31-2.688 9.31-4.032 15-4.032 7.88 0 14.22 2.11 19.03 6.329 4.81 4.218 7.6 10.14 8.35 17.765h-14.07c-.34-4.406-1.58-7.594-3.7-9.562-2.09-2-5.3-3-9.61-3-4.69 0-8.2 1.687-10.55 5.062-2.31 3.344-3.5 8.547-3.56 15.61v5.156c0 7.375 1.11 12.766 3.33 16.172 2.25 3.406 5.78 5.109 10.59 5.109 4.35 0 7.58-.984 9.71-2.953 2.15-2 3.39-5.078 3.7-9.234h14.06zm6.24-3.094c0-5.031.97-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.17 7.032-17.49 7.032-7.31 0-13.15-2.344-17.53-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.54.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.41 3.797 7.78 3.797 3.28 0 5.85-1.25 7.69-3.75 1.84-2.532 2.77-6.563 2.77-12.094 0-4.719-.93-8.375-2.77-10.969-1.84-2.594-4.44-3.891-7.78-3.891-3.31 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zM3140.69 284c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.37-4.313-3.25-2.875-4.88-6.5-4.88-10.875 0-5.375 1.99-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.24v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.29 0-4.08.547-5.39 1.641-1.29 1.093-1.93 2.593-1.93 4.5h-13.54c0-2.938.9-5.657 2.71-8.157 1.82-2.5 4.38-4.453 7.69-5.859 3.31-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.02 10.922V284h-13.69zm-11.21-9.422c2 0 3.85-.437 5.54-1.312 1.68-.907 2.93-2.11 3.75-3.61v-8.718h-5.07c-6.78 0-10.39 2.343-10.82 7.031l-.05.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.87 1.64zm61.79-28.594c-1.85-.25-3.47-.375-4.88-.375-5.12 0-8.48 1.735-10.08 5.203V284h-13.54v-50.719h12.79l.38 6.047c2.72-4.656 6.48-6.984 11.29-6.984 1.5 0 2.91.203 4.22.609l-.18 13.031zm34.03 24c0-1.656-.83-2.953-2.49-3.89-1.62-.969-4.25-1.828-7.87-2.578-12.06-2.532-18.1-7.657-18.1-15.375 0-4.5 1.86-8.25 5.58-11.25 3.75-3.032 8.64-4.547 14.67-4.547 6.44 0 11.58 1.515 15.43 4.547 3.87 3.031 5.81 6.968 5.81 11.812h-13.55c0-1.937-.62-3.531-1.87-4.781-1.25-1.281-3.21-1.922-5.86-1.922-2.28 0-4.05.516-5.3 1.547s-1.87 2.344-1.87 3.937c0 1.5.7 2.719 2.1 3.657 1.44.906 3.85 1.703 7.22 2.39 3.38.657 6.22 1.407 8.53 2.25 7.16 2.625 10.74 7.172 10.74 13.641 0 4.625-1.99 8.375-5.95 11.25-3.97 2.844-9.1 4.266-15.38 4.266-4.25 0-8.03-.75-11.34-2.25-3.28-1.532-5.86-3.61-7.74-6.235-1.87-2.656-2.81-5.515-2.81-8.578h12.84c.13 2.406 1.02 4.25 2.68 5.531 1.65 1.282 3.87 1.922 6.65 1.922 2.6 0 4.55-.484 5.86-1.453 1.34-1 2.02-2.297 2.02-3.891zm45.28 14.954c-7.44 0-13.5-2.282-18.19-6.844-4.66-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.43-6.937-1.57-1.656-3.78-2.485-6.66-2.485zm69 16.641V284h-14.06v-68.25h26.62c5.13 0 9.63.938 13.5 2.812 3.91 1.876 6.91 4.547 9 8.016 2.1 3.438 3.14 7.36 3.14 11.766 0 6.687-2.29 11.968-6.89 15.844-4.56 3.843-10.89 5.765-18.98 5.765h-12.33zm0-11.391h12.56c3.72 0 6.55-.874 8.49-2.624 1.97-1.75 2.95-4.25 2.95-7.5 0-3.344-.98-6.047-2.95-8.11-1.97-2.062-4.69-3.125-8.16-3.187h-12.89v21.421zM3413.88 284c-.63-1.219-1.08-2.734-1.36-4.547-3.29 3.656-7.55 5.485-12.8 5.485-4.97 0-9.1-1.438-12.38-4.313-3.25-2.875-4.87-6.5-4.87-10.875 0-5.375 1.98-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.23v-2.907c0-2.343-.61-4.218-1.83-5.625-1.18-1.406-3.07-2.109-5.67-2.109-2.28 0-4.07.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.55c0-2.938.91-5.657 2.72-8.157s4.38-4.453 7.69-5.859c3.31-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.68 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.01 10.922V284h-13.68zm-11.21-9.422c2 0 3.85-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.04.797c0 1.687.59 3.078 1.78 4.172 1.18 1.093 2.81 1.64 4.87 1.64zm31.31-16.312c0-7.782 1.85-14.047 5.54-18.797 3.71-4.75 8.71-7.125 15-7.125 5.56 0 9.89 1.906 12.98 5.718l.56-4.781h12.28v49.031c0 4.438-1.01 8.297-3.04 11.579-2 3.281-4.83 5.781-8.49 7.5-3.65 1.718-7.93 2.578-12.84 2.578-3.72 0-7.35-.75-10.88-2.25-3.53-1.469-6.2-3.375-8.01-5.719l6-8.25c3.37 3.781 7.47 5.672 12.28 5.672 3.59 0 6.39-.969 8.39-2.906 2-1.907 3-4.625 3-8.157v-2.718c-3.13 3.531-7.23 5.297-12.33 5.297-6.09 0-11.03-2.376-14.81-7.126-3.75-4.781-5.63-11.109-5.63-18.984v-.562zm13.55.984c0 4.594.92 8.203 2.77 10.828 1.84 2.594 4.37 3.891 7.59 3.891 4.13 0 7.08-1.547 8.86-4.641V248c-1.81-3.094-4.73-4.641-8.77-4.641-3.25 0-5.81 1.329-7.68 3.985-1.85 2.656-2.77 6.625-2.77 11.906zm66.61 25.688c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.65 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.07-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm80.39 16.922h-26.39v-10.922h26.39v10.922zm71.07 5.86c0-2.656-.94-4.688-2.82-6.094-1.87-1.438-5.25-2.938-10.12-4.5-4.88-1.594-8.73-3.156-11.58-4.688-7.75-4.187-11.62-9.828-11.62-16.921 0-3.688 1.03-6.969 3.09-9.844 2.09-2.906 5.08-5.172 8.95-6.797 3.91-1.625 8.28-2.438 13.13-2.438 4.87 0 9.22.891 13.03 2.672 3.81 1.75 6.77 4.235 8.86 7.454 2.12 3.218 3.19 6.874 3.19 10.968h-14.07c0-3.125-.98-5.547-2.95-7.265-1.97-1.75-4.73-2.625-8.3-2.625-3.43 0-6.11.734-8.01 2.203-1.91 1.437-2.86 3.343-2.86 5.719 0 2.218 1.11 4.078 3.33 5.578 2.25 1.5 5.54 2.906 9.89 4.218 8 2.407 13.83 5.391 17.48 8.954 3.66 3.562 5.49 8 5.49 13.312 0 5.906-2.24 10.547-6.71 13.922-4.47 3.344-10.48 5.016-18.04 5.016-5.25 0-10.03-.954-14.35-2.86-4.31-1.937-7.61-4.578-9.89-7.922-2.25-3.344-3.37-7.218-3.37-11.625h14.11c0 7.531 4.5 11.297 13.5 11.297 3.34 0 5.95-.672 7.82-2.016 1.88-1.374 2.82-3.281 2.82-5.718zm46.12 18.844c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.68 0-4.87.907-6.56 2.719-1.65 1.813-2.72 4.407-3.18 7.781h18.84v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.66-2.485zm51.24 30.704c2.5 0 4.53-.688 6.09-2.063 1.57-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.84 2.843-4.37 5.062-7.59 6.656-3.19 1.562-6.72 2.344-10.6 2.344-7.25 0-12.97-2.297-17.15-6.891-4.19-4.625-6.28-11-6.28-19.125v-.891c0-7.812 2.07-14.047 6.23-18.703 4.16-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.87-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.18-2.485-3.16 0-5.55 1.157-7.18 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.6 2.281 4.02 3.422 7.27 3.422zm26.86-15.844c0-5.031.97-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.85 0 12.42 2.094 16.74 6.281 4.34 4.187 6.76 9.875 7.26 17.063l.1 3.468c0 7.782-2.18 14.032-6.52 18.75-4.34 4.688-10.17 7.032-17.48 7.032-7.32 0-13.16-2.344-17.54-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.55.984c0 4.813.9 8.5 2.71 11.063 1.82 2.531 4.41 3.797 7.79 3.797 3.28 0 5.84-1.25 7.68-3.75 1.85-2.532 2.77-6.563 2.77-12.094 0-4.719-.92-8.375-2.77-10.969-1.84-2.594-4.43-3.891-7.78-3.891-3.31 0-5.87 1.297-7.69 3.891-1.81 2.563-2.71 6.547-2.71 11.953zm55.31-25.875l.42 5.86c3.62-4.532 8.48-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.97 7.875 4.03 14.156V284h-13.55v-32.438c0-2.874-.62-4.953-1.87-6.234-1.25-1.312-3.33-1.969-6.24-1.969-3.81 0-6.67 1.625-8.57 4.875V284h-13.55v-50.719h12.75zm39.23 24.985c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.93 0 9.01 1.844 12.23 5.531V212h13.6v72h-12.24l-.66-5.391c-3.37 4.219-7.71 6.329-13.03 6.329-5.97 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.48 10.922 1.66 2.531 4.07 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.76-5.297-6.54 0-9.8 5.297-9.8 15.891zm80.86 24.75h-13.6v-72h13.6v72zm34.55.938c-7.44 0-13.5-2.282-18.19-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.96-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.93 0 12.39 2.187 16.35 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.44 3.312 1.75 5.969 3.94 7.969 2.21 2 5.01 3 8.39 3 5.22 0 9.29-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.32 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.88.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.43-6.937-1.57-1.656-3.79-2.485-6.66-2.485zm48.47 24.141l9.42-34.172h14.16L4077.16 284h-12.94l-17.11-50.719h14.16l9.42 34.172zm52.26 17.485c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.46 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.72 4.407-3.18 7.781h18.84v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zM4165.84 284h-13.59v-72h13.59v72z"
        fill="#70C056"
      />
      <path
        d="M4789.12 461.891c0 3.312-.82 6.25-2.48 8.812-1.66 2.563-3.94 4.609-6.84 6.141 3.31 1.594 5.93 3.797 7.87 6.609 1.94 2.781 2.91 6.063 2.91 9.844 0 6.062-2.06 10.859-6.19 14.391-4.12 3.5-9.73 5.25-16.83 5.25-7.09 0-12.72-1.766-16.87-5.297-4.16-3.532-6.24-8.313-6.24-14.344 0-3.781.97-7.078 2.91-9.891 1.94-2.812 4.55-5 7.83-6.562-2.91-1.532-5.19-3.578-6.85-6.141-1.62-2.562-2.43-5.5-2.43-8.812 0-5.813 1.93-10.438 5.81-13.875 3.87-3.469 9.14-5.204 15.8-5.204 6.62 0 11.87 1.719 15.75 5.157 3.9 3.406 5.85 8.047 5.85 13.922zm-12.14 30.421c0-2.968-.86-5.343-2.57-7.124-1.72-1.782-4.03-2.672-6.94-2.672-2.88 0-5.17.89-6.89 2.672-1.72 1.75-2.58 4.124-2.58 7.124 0 2.907.84 5.25 2.53 7.032 1.69 1.781 4.03 2.672 7.03 2.672 2.94 0 5.24-.86 6.89-2.578 1.69-1.719 2.53-4.094 2.53-7.126zm-1.4-29.765c0-2.656-.7-4.781-2.11-6.375-1.41-1.625-3.39-2.438-5.95-2.438-2.54 0-4.5.782-5.91 2.344-1.41 1.563-2.11 3.719-2.11 6.469 0 2.719.7 4.906 2.11 6.562 1.41 1.657 3.39 2.485 5.95 2.485s4.53-.828 5.91-2.485c1.41-1.656 2.11-3.843 2.11-6.562zm63.61 25.406V512h-14.07v-68.25h26.63c5.13 0 9.63.938 13.5 2.812 3.91 1.876 6.91 4.547 9 8.016 2.09 3.438 3.14 7.36 3.14 11.766 0 6.687-2.3 11.968-6.89 15.844-4.56 3.843-10.89 5.765-18.98 5.765h-12.33zm0-11.391h12.56c3.72 0 6.55-.874 8.48-2.624 1.97-1.75 2.96-4.25 2.96-7.5 0-3.344-.99-6.047-2.96-8.11-1.96-2.062-4.68-3.125-8.15-3.187h-12.89v21.421zM4915.03 512c-.62-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.79 5.485-4.97 0-9.1-1.438-12.38-4.313-3.25-2.875-4.88-6.5-4.88-10.875 0-5.375 1.99-9.5 5.96-12.375 4-2.875 9.76-4.328 17.3-4.359h6.23v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.28 0-4.08.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.55c0-2.938.91-5.657 2.72-8.157s4.37-4.453 7.69-5.859c3.31-1.438 7.03-2.156 11.15-2.156 6.25 0 11.21 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.71 8.453 2.02 10.922V512h-13.69zm-11.2-9.422c2 0 3.84-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.05.797c0 1.687.6 3.078 1.78 4.172 1.19 1.093 2.82 1.64 4.88 1.64zm5.15-62.578h14.77l-12.98 14.531h-11.02l9.23-14.531zm26.16 46.266c0-7.782 1.84-14.047 5.53-18.797 3.72-4.75 8.72-7.125 15-7.125 5.56 0 9.89 1.906 12.99 5.718l.56-4.781h12.28v49.031c0 4.438-1.02 8.297-3.05 11.579-2 3.281-4.83 5.781-8.48 7.5-3.66 1.718-7.94 2.578-12.85 2.578-3.71 0-7.34-.75-10.87-2.25-3.53-1.469-6.2-3.375-8.02-5.719l6-8.25c3.38 3.781 7.47 5.672 12.29 5.672 3.59 0 6.39-.969 8.39-2.906 2-1.907 3-4.625 3-8.157v-2.718c-3.13 3.531-7.24 5.297-12.33 5.297-6.1 0-11.03-2.376-14.81-7.126-3.75-4.781-5.63-11.109-5.63-18.984v-.562zm13.55.984c0 4.594.92 8.203 2.76 10.828 1.85 2.594 4.38 3.891 7.6 3.891 4.12 0 7.07-1.547 8.86-4.641V476c-1.82-3.094-4.74-4.641-8.77-4.641-3.25 0-5.81 1.329-7.69 3.985-1.84 2.656-2.76 6.625-2.76 11.906zm57.56 24.75h-13.59v-50.719h13.59V512zm-14.39-63.844c0-2.031.67-3.703 2.02-5.015 1.37-1.313 3.23-1.969 5.57-1.969 2.32 0 4.16.656 5.53 1.969 1.38 1.312 2.07 2.984 2.07 5.015 0 2.063-.71 3.75-2.11 5.063-1.38 1.312-3.21 1.969-5.49 1.969-2.28 0-4.12-.657-5.53-1.969-1.37-1.313-2.06-3-2.06-5.063zm38.06 13.125l.42 5.86c3.63-4.532 8.49-6.797 14.58-6.797 5.38 0 9.38 1.578 12 4.734 2.63 3.156 3.97 7.875 4.03 14.156V512h-13.54v-32.438c0-2.874-.63-4.953-1.88-6.234-1.25-1.312-3.33-1.969-6.23-1.969-3.82 0-6.68 1.625-8.58 4.875V512h-13.55v-50.719h12.75zM5100.66 512c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.38-4.313-3.24-2.875-4.87-6.5-4.87-10.875 0-5.375 1.98-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.23v-2.907c0-2.343-.61-4.218-1.82-5.625-1.19-1.406-3.08-2.109-5.68-2.109-2.28 0-4.07.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.54c0-2.938.9-5.657 2.71-8.157 1.82-2.5 4.38-4.453 7.69-5.859 3.31-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.68 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.01 10.922V512h-13.68zm-11.21-9.422c2 0 3.85-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.04.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.87 1.64zm60.75-4.594c0-1.656-.82-2.953-2.48-3.89-1.63-.969-4.25-1.828-7.88-2.578-12.06-2.532-18.09-7.657-18.09-15.375 0-4.5 1.86-8.25 5.58-11.25 3.75-3.032 8.64-4.547 14.67-4.547 6.44 0 11.58 1.515 15.42 4.547 3.88 3.031 5.81 6.968 5.81 11.812h-13.54c0-1.937-.63-3.531-1.88-4.781-1.25-1.281-3.2-1.922-5.86-1.922-2.28 0-4.04.516-5.29 1.547s-1.88 2.344-1.88 3.937c0 1.5.7 2.719 2.11 3.657 1.44.906 3.84 1.703 7.22 2.39 3.37.657 6.22 1.407 8.53 2.25 7.16 2.625 10.74 7.172 10.74 13.641 0 4.625-1.99 8.375-5.96 11.25-3.97 2.844-9.09 4.266-15.37 4.266-4.25 0-8.03-.75-11.35-2.25-3.28-1.532-5.86-3.61-7.73-6.235-1.88-2.656-2.81-5.515-2.81-8.578H5133c.12 2.406 1.02 4.25 2.67 5.531 1.66 1.282 3.88 1.922 6.66 1.922 2.59 0 4.55-.484 5.86-1.453 1.34-1 2.01-2.297 2.01-3.891zm43.74-11.718c0-7.907 1.76-14.204 5.29-18.891 3.57-4.687 8.43-7.031 14.58-7.031 4.94 0 9.02 1.844 12.24 5.531V440h13.59v72h-12.23l-.66-5.391c-3.37 4.219-7.72 6.329-13.03 6.329-5.97 0-10.77-2.344-14.39-7.032-3.6-4.718-5.39-11.265-5.39-19.64zm13.54.984c0 4.75.83 8.391 2.49 10.922 1.65 2.531 4.06 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.77-5.297-6.53 0-9.8 5.297-9.8 15.891zm66 25.688c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.96-13.641 1.96-4.031 4.75-7.125 8.34-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.4 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.4 3 5.21 0 9.29-1.891 12.23-5.672l6.66 7.453c-2.04 2.875-4.79 5.125-8.25 6.75-3.47 1.594-7.32 2.391-11.54 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm93.56 15h7.73v10.922h-7.73V512h-13.55v-14.766h-27.98l-.61-8.531 28.45-44.953h13.69v42.562zm-28.64 0h15.09v-24.093l-.89 1.547-14.2 22.546zm86.58 5.344l-4.88 4.875V512h-13.54v-72h13.54v39.891l2.63-3.375 12.98-15.235h16.27l-18.33 21.141L5452.03 512h-15.56l-13.03-20.344zM5457.19 512v-68.25h23.9c8.29 0 14.57 1.594 18.85 4.781 4.28 3.157 6.42 7.797 6.42 13.922 0 3.344-.86 6.297-2.58 8.859-1.72 2.532-4.11 4.391-7.17 5.579 3.5.875 6.25 2.64 8.25 5.297 2.03 2.656 3.05 5.906 3.05 9.75 0 6.562-2.1 11.531-6.29 14.906-4.18 3.375-10.15 5.094-17.9 5.156h-26.53zm14.06-29.719v18.422h12.05c3.31 0 5.89-.781 7.73-2.344 1.88-1.593 2.81-3.781 2.81-6.562 0-6.25-3.23-9.422-9.7-9.516h-12.89zm0-9.937h10.41c7.09-.125 10.64-2.953 10.64-8.485 0-3.093-.91-5.312-2.72-6.656-1.78-1.375-4.61-2.062-8.49-2.062h-9.84v17.203z"
        fill="#F75183"
      />
      <path
        d="M6154.42 811.016h-11.2V836h-14.06v-68.25h25.36c8.06 0 14.28 1.797 18.65 5.391 4.38 3.593 6.56 8.671 6.56 15.234 0 4.656-1.01 8.547-3.04 11.672-2 3.094-5.05 5.562-9.14 7.406l14.76 27.891V836h-15.09l-12.8-24.984zm-11.2-11.391h11.34c3.53 0 6.27-.891 8.21-2.672 1.93-1.812 2.9-4.297 2.9-7.453 0-3.219-.92-5.75-2.76-7.594-1.82-1.844-4.61-2.765-8.39-2.765h-11.3v20.484zm69.7 37.313c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm75.79 15.797c0 7.813-1.78 14.079-5.34 18.797-3.53 4.688-8.31 7.032-14.35 7.032-5.12 0-9.26-1.782-12.42-5.344V855.5h-13.54v-70.219h12.56l.47 4.969c3.28-3.938 7.56-5.906 12.84-5.906 6.25 0 11.11 2.312 14.58 6.937 3.47 4.625 5.2 11 5.2 19.125v.703zm-13.55-.984c0-4.719-.84-8.359-2.53-10.922-1.65-2.562-4.07-3.844-7.26-3.844-4.25 0-7.17 1.625-8.77 4.875V821c1.66 3.344 4.61 5.016 8.86 5.016 6.47 0 9.7-5.297 9.7-15.891zm50.49-12.141c-1.84-.25-3.47-.375-4.88-.375-5.12 0-8.48 1.735-10.07 5.203V836h-13.55v-50.719h12.8l.37 6.047c2.72-4.656 6.49-6.984 11.3-6.984 1.5 0 2.9.203 4.22.609l-.19 13.031zm28.97 38.954c-7.44 0-13.5-2.282-18.19-6.844-4.66-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.34-9.281 3.63-2.187 7.75-3.281 12.38-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.891 12.23-5.672l6.66 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.55-41.626c-2.69 0-4.87.907-6.56 2.719-1.66 1.813-2.72 4.407-3.19 7.781h18.84v-1.078c-.06-3-.87-5.312-2.43-6.937-1.57-1.656-3.78-2.485-6.66-2.485zm57.61 26.672c0-1.656-.83-2.953-2.48-3.89-1.63-.969-4.25-1.828-7.88-2.578-12.06-2.532-18.09-7.657-18.09-15.375 0-4.5 1.86-8.25 5.58-11.25 3.75-3.032 8.64-4.547 14.67-4.547 6.44 0 11.58 1.515 15.42 4.547 3.87 3.031 5.81 6.968 5.81 11.812h-13.55c0-1.937-.62-3.531-1.87-4.781-1.25-1.281-3.2-1.922-5.86-1.922-2.28 0-4.05.516-5.3 1.547s-1.87 2.344-1.87 3.937c0 1.5.7 2.719 2.11 3.657 1.44.906 3.84 1.703 7.22 2.39 3.37.657 6.22 1.407 8.53 2.25 7.15 2.625 10.73 7.172 10.73 13.641 0 4.625-1.98 8.375-5.95 11.25-3.97 2.844-9.09 4.266-15.38 4.266-4.25 0-8.03-.75-11.34-2.25-3.28-1.532-5.86-3.61-7.73-6.235-1.88-2.656-2.82-5.515-2.82-8.578h12.85c.12 2.406 1.01 4.25 2.67 5.531 1.66 1.282 3.87 1.922 6.66 1.922 2.59 0 4.54-.484 5.85-1.453 1.35-1 2.02-2.297 2.02-3.891zm45.28 14.954c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm42.6-10.031l.43 5.86c3.62-4.532 8.48-6.797 14.57-6.797 5.38 0 9.38 1.578 12 4.734 2.63 3.156 3.97 7.875 4.04 14.156V836h-13.55v-32.438c0-2.874-.63-4.953-1.88-6.234-1.25-1.312-3.32-1.969-6.23-1.969-3.81 0-6.67 1.625-8.58 4.875V836h-13.55v-50.719h12.75zm57.57-12.469v12.469h8.67v9.938h-8.67v25.312c0 1.875.36 3.219 1.07 4.031.72.813 2.1 1.219 4.13 1.219 1.5 0 2.83-.109 3.98-.328v10.266a27.866 27.866 0 01-8.2 1.219c-9.5 0-14.34-4.797-14.53-14.391v-27.328h-7.41v-9.938h7.41v-12.469h13.55zM6598.66 836c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.38-4.313-3.24-2.875-4.87-6.5-4.87-10.875 0-5.375 1.98-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.23v-2.907c0-2.343-.61-4.218-1.82-5.625-1.19-1.406-3.08-2.109-5.68-2.109-2.28 0-4.07.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.54c0-2.938.9-5.657 2.71-8.157 1.82-2.5 4.38-4.453 7.69-5.859 3.31-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.68 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.01 10.922V836h-13.68zm-11.21-9.422c2 0 3.85-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.04.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.87 1.64zm54.38-.562c2.5 0 4.53-.688 6.09-2.063 1.56-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.84 2.843-4.37 5.062-7.59 6.656-3.19 1.562-6.72 2.344-10.6 2.344-7.25 0-12.97-2.297-17.15-6.891-4.19-4.625-6.29-11-6.29-19.125v-.891c0-7.812 2.08-14.047 6.24-18.703 4.16-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.88-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.19-2.485-3.15 0-5.54 1.157-7.17 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.6 2.281 4.02 3.422 7.27 3.422zm4.92 9.703l-.52 2.719c4.69.843 7.04 3.546 7.04 8.109 0 3.437-1.44 6.156-4.32 8.156-2.84 2-6.86 3-12.04 3l-.33-7.828c3.5 0 5.25-1.266 5.25-3.797 0-1.312-.53-2.219-1.6-2.719-1.03-.468-2.71-.781-5.06-.937l1.45-6.703h10.13zm53.44.281c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.37-4.313-3.25-2.875-4.88-6.5-4.88-10.875 0-5.375 1.99-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.24v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.29 0-4.08.547-5.39 1.641-1.29 1.093-1.93 2.593-1.93 4.5h-13.54c0-2.938.9-5.657 2.71-8.157 1.82-2.5 4.38-4.453 7.69-5.859 3.31-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.02 10.922V836h-13.69zm-11.21-9.422c2 0 3.85-.437 5.54-1.312 1.68-.907 2.93-2.11 3.75-3.61v-8.718h-5.07c-6.78 0-10.39 2.343-10.82 7.031l-.05.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.87 1.64zm20.07-61.969c0 3.532-1.03 6.5-3.1 8.907-2.06 2.375-4.57 3.562-7.54 3.562-1.19 0-2.25-.125-3.19-.375-.91-.281-2.17-.859-3.8-1.734-1.62-.875-2.8-1.407-3.51-1.594a8.027 8.027 0 00-2.35-.328c-1.09 0-2.03.391-2.81 1.172-.75.781-1.13 1.89-1.13 3.328l-7.87-.469c0-3.469 1.02-6.422 3.05-8.859 2.06-2.438 4.58-3.657 7.54-3.657.94 0 1.82.126 2.63.376.84.218 2.2.781 4.08 1.687 1.87.906 3.17 1.453 3.89 1.641.72.187 1.47.281 2.25.281 1.09 0 2.03-.375 2.81-1.125.81-.781 1.22-1.891 1.22-3.328l7.83.515zm11.11 45.563c0-5.031.96-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.17 7.032-17.49 7.032-7.31 0-13.15-2.344-17.53-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.54.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.41 3.797 7.78 3.797 3.28 0 5.85-1.25 7.69-3.75 1.84-2.532 2.77-6.563 2.77-12.094 0-4.719-.93-8.375-2.77-10.969-1.84-2.594-4.44-3.891-7.78-3.891-3.31 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zm64.64-.89c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.58-7.031 4.94 0 9.01 1.844 12.23 5.531V764h13.6v72h-12.24l-.65-5.391c-3.38 4.219-7.72 6.329-13.04 6.329-5.96 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.83 8.391 2.49 10.922 1.65 2.531 4.06 3.797 7.21 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.68-3.531-4.61-5.297-8.76-5.297-6.53 0-9.8 5.297-9.8 15.891zm40.55-1.078c0-5.031.97-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.17 7.032-17.49 7.032-7.31 0-13.15-2.344-17.53-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.54.984c0 4.813.91 8.5 2.72 11.063 1.82 2.531 4.41 3.797 7.78 3.797 3.29 0 5.85-1.25 7.69-3.75 1.85-2.532 2.77-6.563 2.77-12.094 0-4.719-.92-8.375-2.77-10.969-1.84-2.594-4.44-3.891-7.78-3.891-3.31 0-5.87 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zM6933.62 836v-68.25h23.91c8.28 0 14.56 1.594 18.85 4.781 4.28 3.157 6.42 7.797 6.42 13.922 0 3.344-.86 6.297-2.58 8.859-1.72 2.532-4.11 4.391-7.17 5.579 3.5.875 6.25 2.64 8.25 5.297 2.03 2.656 3.04 5.906 3.04 9.75 0 6.562-2.09 11.531-6.28 14.906-4.18 3.375-10.15 5.094-17.9 5.156h-26.54zm14.07-29.719v18.422h12.04c3.32 0 5.89-.781 7.74-2.344 1.87-1.593 2.81-3.781 2.81-6.562 0-6.25-3.23-9.422-9.7-9.516h-12.89zm0-9.937h10.4c7.1-.125 10.64-2.953 10.64-8.485 0-3.093-.9-5.312-2.71-6.656-1.79-1.375-4.61-2.062-8.49-2.062h-9.84v17.203zm76.73 34.5c-3.34 4.062-7.97 6.094-13.87 6.094-5.44 0-9.6-1.563-12.47-4.688-2.85-3.125-4.3-7.703-4.36-13.734v-33.235h13.55v32.766c0 5.281 2.4 7.922 7.21 7.922 4.6 0 7.75-1.594 9.47-4.781v-35.907h13.6V836h-12.75l-.38-5.156zm21.24-20.578c0-7.907 1.76-14.204 5.29-18.891 3.57-4.687 8.43-7.031 14.58-7.031 4.94 0 9.02 1.844 12.24 5.531V764h13.59v72h-12.24l-.65-5.391c-3.38 4.219-7.72 6.329-13.03 6.329-5.97 0-10.77-2.344-14.39-7.032-3.6-4.718-5.39-11.265-5.39-19.64zm13.54.984c0 4.75.83 8.391 2.49 10.922 1.65 2.531 4.06 3.797 7.22 3.797 4.18 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.77-5.297-6.53 0-9.8 5.297-9.8 15.891zm40.55-.984c0-7.907 1.77-14.204 5.3-18.891 3.56-4.687 8.42-7.031 14.57-7.031 4.94 0 9.02 1.844 12.24 5.531V764h13.59v72h-12.23l-.66-5.391c-3.37 4.219-7.72 6.329-13.03 6.329-5.97 0-10.76-2.344-14.39-7.032-3.59-4.718-5.39-11.265-5.39-19.64zm13.55.984c0 4.75.82 8.391 2.48 10.922 1.66 2.531 4.06 3.797 7.22 3.797 4.19 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.77-5.297-6.53 0-9.79 5.297-9.79 15.891zm61.59 5.578l9.38-31.547h14.53l-20.39 58.594-1.13 2.672c-3.03 6.625-8.03 9.937-15 9.937-1.97 0-3.97-.296-6-.89v-10.266l2.06.047c2.57 0 4.47-.391 5.72-1.172 1.28-.781 2.28-2.078 3-3.891l1.6-4.171-17.77-50.86h14.58l9.42 31.547zM5980.8 926.266c-.53 7.343-3.25 13.125-8.16 17.343-4.87 4.219-11.31 6.329-19.31 6.329-8.75 0-15.64-2.938-20.67-8.813-5-5.906-7.5-14-7.5-24.281v-4.172c0-6.563 1.15-12.344 3.46-17.344 2.32-5 5.61-8.828 9.9-11.484 4.31-2.688 9.31-4.032 15-4.032 7.87 0 14.21 2.11 19.03 6.329 4.81 4.218 7.59 10.14 8.34 17.765h-14.06c-.35-4.406-1.58-7.594-3.71-9.562-2.09-2-5.29-3-9.6-3-4.69 0-8.21 1.687-10.55 5.062-2.31 3.344-3.5 8.547-3.56 15.61v5.156c0 7.375 1.11 12.766 3.32 16.172 2.25 3.406 5.79 5.109 10.6 5.109 4.34 0 7.58-.984 9.7-2.953 2.16-2 3.39-5.078 3.7-9.234h14.07zm6.23-3.094c0-5.031.97-9.516 2.91-13.453 1.94-3.938 4.72-6.985 8.34-9.141 3.66-2.156 7.89-3.234 12.7-3.234 6.85 0 12.43 2.094 16.74 6.281 4.34 4.187 6.76 9.875 7.26 17.063l.1 3.468c0 7.782-2.17 14.032-6.52 18.75-4.34 4.688-10.17 7.032-17.48 7.032-7.31 0-13.16-2.344-17.53-7.032-4.35-4.687-6.52-11.062-6.52-19.125v-.609zm13.55.984c0 4.813.9 8.5 2.72 11.063 1.81 2.531 4.4 3.797 7.78 3.797 3.28 0 5.84-1.25 7.69-3.75 1.84-2.532 2.76-6.563 2.76-12.094 0-4.719-.92-8.375-2.76-10.969-1.85-2.594-4.44-3.891-7.79-3.891-3.31 0-5.87 1.297-7.68 3.891-1.82 2.563-2.72 6.547-2.72 11.953zm55.54-25.875l.43 5.672c3.59-4.406 8.45-6.609 14.57-6.609 6.54 0 11.02 2.578 13.46 7.734 3.56-5.156 8.64-7.734 15.23-7.734 5.5 0 9.6 1.609 12.28 4.828 2.69 3.187 4.03 8 4.03 14.437V949h-13.59v-32.344c0-2.875-.56-4.968-1.69-6.281-1.12-1.344-3.11-2.016-5.95-2.016-4.06 0-6.87 1.938-8.44 5.813l.05 34.828h-13.55v-32.297c0-2.937-.57-5.062-1.73-6.375-1.16-1.312-3.13-1.969-5.91-1.969-3.84 0-6.62 1.594-8.34 4.782V949h-13.55v-50.719h12.7zm93.8 51.657c-7.44 0-13.5-2.282-18.19-6.844-4.65-4.563-6.98-10.641-6.98-18.235v-1.312c0-5.094.98-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.3c.44 3.312 1.75 5.969 3.94 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.47 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.72 4.407-3.19 7.781h18.85v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm51.23 30.704c2.5 0 4.53-.688 6.09-2.063 1.57-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.96 6.593-2.81 9.469-1.84 2.843-4.37 5.062-7.59 6.656-3.19 1.562-6.72 2.344-10.6 2.344-7.25 0-12.96-2.297-17.15-6.891-4.19-4.625-6.28-11-6.28-19.125v-.891c0-7.812 2.07-14.047 6.23-18.703 4.16-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.87-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.18-2.485-3.16 0-5.55 1.157-7.18 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.6 2.281 4.02 3.422 7.27 3.422zm4.92 9.703l-.51 2.719c4.68.843 7.03 3.546 7.03 8.109 0 3.437-1.44 6.156-4.32 8.156-2.84 2-6.85 3-12.04 3l-.33-7.828c3.5 0 5.25-1.266 5.25-3.797 0-1.312-.53-2.219-1.59-2.719-1.04-.468-2.72-.781-5.07-.937l1.46-6.703h10.12zm53.44.281c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.37-4.313-3.25-2.875-4.88-6.5-4.88-10.875 0-5.375 1.99-9.5 5.96-12.375 4-2.875 9.76-4.328 17.29-4.359h6.24v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.28 0-4.08.547-5.39 1.641-1.28 1.093-1.93 2.593-1.93 4.5h-13.54c0-2.938.9-5.657 2.72-8.157 1.81-2.5 4.37-4.453 7.68-5.859 3.32-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.02 10.922V949h-13.69zm-11.2-9.422c2 0 3.84-.437 5.53-1.312 1.68-.907 2.93-2.11 3.75-3.61v-8.718h-5.07c-6.78 0-10.39 2.343-10.82 7.031l-.05.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.88 1.64zm78.28-.562c2.5 0 4.53-.688 6.09-2.063 1.56-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.85 2.843-4.38 5.062-7.59 6.656-3.19 1.562-6.72 2.344-10.6 2.344-7.25 0-12.97-2.297-17.16-6.891-4.18-4.625-6.28-11-6.28-19.125v-.891c0-7.812 2.08-14.047 6.24-18.703 4.15-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.88-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.19-2.485-3.15 0-5.54 1.157-7.17 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.6 2.281 4.02 3.422 7.27 3.422zm26.86-15.844c0-5.031.97-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.17 7.032-17.49 7.032-7.31 0-13.15-2.344-17.53-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.54.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.41 3.797 7.78 3.797 3.28 0 5.85-1.25 7.69-3.75 1.84-2.532 2.77-6.563 2.77-12.094 0-4.719-.93-8.375-2.77-10.969-1.84-2.594-4.44-3.891-7.78-3.891-3.31 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zm55.55-25.875l.42 5.672c3.6-4.406 8.46-6.609 14.58-6.609 6.53 0 11.02 2.578 13.45 7.734 3.57-5.156 8.64-7.734 15.24-7.734 5.5 0 9.59 1.609 12.28 4.828 2.69 3.187 4.03 8 4.03 14.437V949h-13.59v-32.344c0-2.875-.57-4.968-1.69-6.281-1.13-1.344-3.11-2.016-5.95-2.016-4.07 0-6.88 1.938-8.44 5.813l.05 34.828h-13.55v-32.297c0-2.937-.58-5.062-1.74-6.375-1.15-1.312-3.12-1.969-5.9-1.969-3.85 0-6.63 1.594-8.35 4.782V949h-13.54v-50.719h12.7zM6547.7 949h-13.54v-52.219l-16.18 5.016v-11.016l28.27-10.125h1.45V949zm92.39-24.891c0 8.125-1.73 14.469-5.2 19.032-3.47 4.531-8.31 6.797-14.53 6.797-5.5 0-9.89-2.11-13.17-6.329l-.61 5.391h-12.19v-72h13.55v25.828c3.12-3.656 7.23-5.484 12.33-5.484 6.18 0 11.03 2.281 14.53 6.844 3.53 4.531 5.29 10.921 5.29 19.171v.75zm-13.54-.984c0-5.125-.82-8.859-2.44-11.203-1.63-2.375-4.05-3.563-7.27-3.563-4.31 0-7.28 1.766-8.9 5.297v20.016c1.65 3.562 4.65 5.344 9 5.344 4.37 0 7.25-2.157 8.62-6.469.66-2.063.99-5.203.99-9.422zM6662.78 949h-13.59v-72h13.59v72zm9.1-25.828c0-5.031.96-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.34-9.141 3.66-2.156 7.9-3.234 12.71-3.234 6.84 0 12.42 2.094 16.73 6.281 4.35 4.187 6.77 9.875 7.27 17.063l.09 3.468c0 7.782-2.17 14.032-6.51 18.75-4.35 4.688-10.18 7.032-17.49 7.032-7.31 0-13.15-2.344-17.53-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.54.984c0 4.813.91 8.5 2.72 11.063 1.81 2.531 4.41 3.797 7.78 3.797 3.28 0 5.85-1.25 7.69-3.75 1.84-2.532 2.77-6.563 2.77-12.094 0-4.719-.93-8.375-2.77-10.969-1.84-2.594-4.44-3.891-7.78-3.891-3.31 0-5.88 1.297-7.69 3.891-1.81 2.563-2.72 6.547-2.72 11.953zm63.94 14.86c2.5 0 4.53-.688 6.09-2.063 1.57-1.375 2.38-3.203 2.44-5.484h12.7c-.03 3.437-.97 6.593-2.81 9.469-1.84 2.843-4.37 5.062-7.59 6.656-3.19 1.562-6.72 2.344-10.6 2.344-7.25 0-12.97-2.297-17.15-6.891-4.19-4.625-6.28-11-6.28-19.125v-.891c0-7.812 2.07-14.047 6.23-18.703 4.16-4.656 9.86-6.984 17.11-6.984 6.34 0 11.42 1.812 15.23 5.437 3.85 3.594 5.8 8.391 5.86 14.391h-12.7c-.06-2.625-.87-4.75-2.44-6.375-1.56-1.656-3.62-2.485-6.18-2.485-3.16 0-5.55 1.157-7.18 3.469-1.59 2.281-2.39 6-2.39 11.157v1.406c0 5.218.8 8.968 2.39 11.25 1.6 2.281 4.02 3.422 7.27 3.422zm26.86-15.844c0-5.031.97-9.516 2.9-13.453 1.94-3.938 4.72-6.985 8.35-9.141 3.65-2.156 7.89-3.234 12.7-3.234 6.85 0 12.42 2.094 16.74 6.281 4.34 4.187 6.76 9.875 7.26 17.063l.1 3.468c0 7.782-2.18 14.032-6.52 18.75-4.34 4.688-10.17 7.032-17.48 7.032-7.32 0-13.16-2.344-17.54-7.032-4.34-4.687-6.51-11.062-6.51-19.125v-.609zm13.55.984c0 4.813.9 8.5 2.71 11.063 1.82 2.531 4.41 3.797 7.79 3.797 3.28 0 5.84-1.25 7.68-3.75 1.85-2.532 2.77-6.563 2.77-12.094 0-4.719-.92-8.375-2.77-10.969-1.84-2.594-4.43-3.891-7.78-3.891-3.31 0-5.87 1.297-7.69 3.891-1.81 2.563-2.71 6.547-2.71 11.953zm64.64-.89c0-7.907 1.76-14.204 5.29-18.891 3.57-4.687 8.42-7.031 14.58-7.031 4.94 0 9.02 1.844 12.24 5.531V877h13.59v72h-12.23l-.66-5.391c-3.38 4.219-7.72 6.329-13.03 6.329-5.97 0-10.77-2.344-14.39-7.032-3.6-4.718-5.39-11.265-5.39-19.64zm13.54.984c0 4.75.83 8.391 2.49 10.922 1.65 2.531 4.06 3.797 7.22 3.797 4.18 0 7.14-1.766 8.86-5.297v-20.016c-1.69-3.531-4.61-5.297-8.77-5.297-6.53 0-9.8 5.297-9.8 15.891zm66 25.688c-7.43 0-13.5-2.282-18.18-6.844-4.66-4.563-6.99-10.641-6.99-18.235v-1.312c0-5.094.99-9.641 2.95-13.641 1.97-4.031 4.75-7.125 8.35-9.281 3.62-2.187 7.75-3.281 12.37-3.281 6.94 0 12.39 2.187 16.36 6.562 4 4.375 6 10.578 6 18.61v5.531h-32.29c.43 3.312 1.75 5.969 3.93 7.969 2.22 2 5.02 3 8.39 3 5.22 0 9.3-1.891 12.24-5.672l6.65 7.453c-2.03 2.875-4.78 5.125-8.25 6.75-3.46 1.594-7.31 2.391-11.53 2.391zm-1.54-41.626c-2.69 0-4.88.907-6.57 2.719-1.65 1.813-2.72 4.407-3.18 7.781h18.84v-1.078c-.06-3-.88-5.312-2.44-6.937-1.56-1.656-3.78-2.485-6.65-2.485zm97.97-9.421c0 3.312-.83 6.25-2.49 8.812-1.66 2.563-3.94 4.609-6.84 6.141 3.31 1.594 5.93 3.797 7.87 6.609 1.94 2.781 2.91 6.063 2.91 9.844 0 6.062-2.06 10.859-6.19 14.391-4.12 3.5-9.73 5.25-16.83 5.25-7.09 0-12.72-1.766-16.87-5.297-4.16-3.532-6.24-8.313-6.24-14.344 0-3.781.97-7.078 2.91-9.891 1.94-2.812 4.55-5 7.83-6.562-2.91-1.532-5.19-3.578-6.85-6.141-1.62-2.562-2.43-5.5-2.43-8.812 0-5.813 1.93-10.438 5.81-13.875 3.87-3.469 9.14-5.204 15.8-5.204 6.62 0 11.87 1.719 15.75 5.157 3.9 3.406 5.86 8.047 5.86 13.922zm-12.15 30.421c0-2.968-.85-5.343-2.57-7.124-1.72-1.782-4.04-2.672-6.94-2.672-2.88 0-5.17.89-6.89 2.672-1.72 1.75-2.58 4.124-2.58 7.124 0 2.907.84 5.25 2.53 7.032 1.69 1.781 4.03 2.672 7.03 2.672 2.94 0 5.24-.86 6.89-2.578 1.69-1.719 2.53-4.094 2.53-7.126zm-1.4-29.765c0-2.656-.71-4.781-2.11-6.375-1.41-1.625-3.39-2.438-5.95-2.438-2.54 0-4.5.782-5.91 2.344-1.41 1.563-2.11 3.719-2.11 6.469 0 2.719.7 4.906 2.11 6.562 1.41 1.657 3.39 2.485 5.95 2.485 2.57 0 4.53-.828 5.91-2.485 1.4-1.656 2.11-3.843 2.11-6.562zm94.31 24.562c0 7.813-1.78 14.079-5.34 18.797-3.53 4.688-8.32 7.032-14.35 7.032-5.12 0-9.26-1.782-12.42-5.344V968.5h-13.55v-70.219h12.57l.47 4.969c3.28-3.938 7.56-5.906 12.84-5.906 6.25 0 11.11 2.312 14.58 6.937 3.47 4.625 5.2 11 5.2 19.125v.703zm-13.55-.984c0-4.719-.84-8.359-2.53-10.922-1.65-2.562-4.08-3.844-7.26-3.844-4.25 0-7.18 1.625-8.77 4.875V934c1.66 3.344 4.61 5.016 8.86 5.016 6.47 0 9.7-5.297 9.7-15.891zM7148.97 949c-.63-1.219-1.08-2.734-1.36-4.547-3.28 3.656-7.55 5.485-12.8 5.485-4.97 0-9.09-1.438-12.37-4.313-3.25-2.875-4.88-6.5-4.88-10.875 0-5.375 1.99-9.5 5.96-12.375 4-2.875 9.76-4.328 17.29-4.359h6.24v-2.907c0-2.343-.61-4.218-1.83-5.625-1.19-1.406-3.08-2.109-5.67-2.109-2.28 0-4.08.547-5.39 1.641-1.28 1.093-1.93 2.593-1.93 4.5h-13.54c0-2.938.9-5.657 2.72-8.157 1.81-2.5 4.37-4.453 7.68-5.859 3.32-1.438 7.03-2.156 11.16-2.156 6.25 0 11.2 1.578 14.86 4.734 3.69 3.125 5.53 7.531 5.53 13.219v21.984c.03 4.813.7 8.453 2.02 10.922V949h-13.69zm-11.2-9.422c2 0 3.84-.437 5.53-1.312 1.68-.907 2.93-2.11 3.75-3.61v-8.718h-5.07c-6.78 0-10.39 2.343-10.82 7.031l-.05.797c0 1.687.59 3.078 1.78 4.172 1.19 1.093 2.81 1.64 4.88 1.64zm5.15-62.578h14.77l-12.99 14.531h-11.01l9.23-14.531zm26.16 46.266c0-7.782 1.84-14.047 5.53-18.797 3.72-4.75 8.72-7.125 15-7.125 5.56 0 9.89 1.906 12.98 5.718l.57-4.781h12.28v49.031c0 4.438-1.02 8.297-3.05 11.579-2 3.281-4.83 5.781-8.48 7.5-3.66 1.718-7.94 2.578-12.85 2.578-3.72 0-7.34-.75-10.87-2.25-3.53-1.469-6.21-3.375-8.02-5.719l6-8.25c3.38 3.781 7.47 5.672 12.28 5.672 3.6 0 6.39-.969 8.39-2.906 2-1.907 3-4.625 3-8.157v-2.718c-3.12 3.531-7.23 5.297-12.32 5.297-6.1 0-11.04-2.376-14.82-7.126-3.75-4.781-5.62-11.109-5.62-18.984v-.562zm13.54.984c0 4.594.93 8.203 2.77 10.828 1.84 2.594 4.38 3.891 7.59 3.891 4.13 0 7.08-1.547 8.86-4.641V913c-1.81-3.094-4.73-4.641-8.76-4.641-3.25 0-5.81 1.329-7.69 3.985-1.84 2.656-2.77 6.625-2.77 11.906zm57.57 24.75h-13.6v-50.719h13.6V949zm-14.39-63.844c0-2.031.67-3.703 2.01-5.015 1.38-1.313 3.24-1.969 5.58-1.969 2.31 0 4.16.656 5.53 1.969 1.38 1.312 2.06 2.984 2.06 5.015 0 2.063-.7 3.75-2.1 5.063-1.38 1.312-3.21 1.969-5.49 1.969-2.28 0-4.12-.657-5.53-1.969-1.38-1.313-2.06-3-2.06-5.063zm38.06 13.125l.42 5.86c3.63-4.532 8.49-6.797 14.58-6.797 5.37 0 9.37 1.578 12 4.734 2.62 3.156 3.97 7.875 4.03 14.156V949h-13.55v-32.438c0-2.874-.62-4.953-1.87-6.234-1.25-1.312-3.33-1.969-6.24-1.969-3.81 0-6.67 1.625-8.57 4.875V949h-13.55v-50.719h12.75zM7334.59 949c-.62-1.219-1.07-2.734-1.36-4.547-3.28 3.656-7.54 5.485-12.79 5.485-4.97 0-9.1-1.438-12.38-4.313-3.25-2.875-4.87-6.5-4.87-10.875 0-5.375 1.98-9.5 5.95-12.375 4-2.875 9.77-4.328 17.3-4.359h6.23v-2.907c0-2.343-.61-4.218-1.83-5.625-1.18-1.406-3.07-2.109-5.67-2.109-2.28 0-4.08.547-5.39 1.641-1.28 1.093-1.92 2.593-1.92 4.5h-13.55c0-2.938.91-5.657 2.72-8.157s4.38-4.453 7.69-5.859c3.31-1.438 7.03-2.156 11.16-2.156 6.24 0 11.2 1.578 14.85 4.734 3.69 3.125 5.54 7.531 5.54 13.219v21.984c.03 4.813.7 8.453 2.01 10.922V949h-13.69zm-11.2-9.422c2 0 3.84-.437 5.53-1.312 1.69-.907 2.94-2.11 3.75-3.61v-8.718h-5.06c-6.78 0-10.39 2.343-10.83 7.031l-.05.797c0 1.687.6 3.078 1.79 4.172 1.18 1.093 2.81 1.64 4.87 1.64zm60.75-4.594c0-1.656-.83-2.953-2.48-3.89-1.63-.969-4.25-1.828-7.88-2.578-12.06-2.532-18.09-7.657-18.09-15.375 0-4.5 1.86-8.25 5.58-11.25 3.75-3.032 8.64-4.547 14.67-4.547 6.44 0 11.58 1.515 15.42 4.547 3.87 3.031 5.81 6.968 5.81 11.812h-13.55c0-1.937-.62-3.531-1.87-4.781-1.25-1.281-3.2-1.922-5.86-1.922-2.28 0-4.05.516-5.3 1.547s-1.87 2.344-1.87 3.937c0 1.5.7 2.719 2.11 3.657 1.44.906 3.84 1.703 7.22 2.39 3.37.657 6.22 1.407 8.53 2.25 7.15 2.625 10.73 7.172 10.73 13.641 0 4.625-1.98 8.375-5.95 11.25-3.97 2.844-9.09 4.266-15.38 4.266-4.25 0-8.03-.75-11.34-2.25-3.28-1.532-5.86-3.61-7.73-6.235-1.88-2.656-2.82-5.515-2.82-8.578h12.85c.12 2.406 1.01 4.25 2.67 5.531 1.66 1.282 3.87 1.922 6.66 1.922 2.59 0 4.54-.484 5.85-1.453 1.35-1 2.02-2.297 2.02-3.891zM6206.59 1039.27c-.53 7.34-3.25 13.12-8.15 17.34-4.88 4.22-11.32 6.33-19.32 6.33-8.74 0-15.64-2.94-20.67-8.82-5-5.9-7.5-14-7.5-24.28v-4.17c0-6.56 1.16-12.34 3.47-17.34 2.31-5 5.61-8.83 9.89-11.486 4.31-2.688 9.31-4.032 15-4.032 7.88 0 14.22 2.11 19.03 6.329 4.82 4.219 7.6 10.139 8.35 17.769h-14.07c-.34-4.41-1.57-7.6-3.7-9.57-2.09-2-5.3-3-9.61-3-4.69 0-8.2 1.69-10.54 5.07-2.32 3.34-3.5 8.54-3.57 15.61v5.15c0 7.38 1.11 12.77 3.33 16.17 2.25 3.41 5.78 5.11 10.59 5.11 4.35 0 7.58-.98 9.71-2.95 2.15-2 3.39-5.08 3.7-9.23h14.06zm6.24-3.1c0-5.03.97-9.51 2.9-13.45 1.94-3.94 4.72-6.99 8.35-9.14 3.65-2.16 7.89-3.24 12.7-3.24 6.84 0 12.42 2.1 16.74 6.28 4.34 4.19 6.76 9.88 7.26 17.07l.1 3.47c0 7.78-2.18 14.03-6.52 18.75-4.34 4.68-10.17 7.03-17.48 7.03-7.32 0-13.16-2.35-17.54-7.03-4.34-4.69-6.51-11.07-6.51-19.13v-.61zm13.55.99c0 4.81.9 8.5 2.71 11.06 1.82 2.53 4.41 3.8 7.79 3.8 3.28 0 5.84-1.25 7.68-3.75 1.85-2.54 2.77-6.57 2.77-12.1 0-4.72-.92-8.37-2.77-10.97-1.84-2.59-4.44-3.89-7.78-3.89-3.31 0-5.87 1.3-7.69 3.89-1.81 2.57-2.71 6.55-2.71 11.96zm71.34-13.18c-1.84-.25-3.47-.37-4.88-.37-5.12 0-8.48 1.73-10.07 5.2V1062h-13.55v-50.72h12.8l.37 6.05c2.72-4.66 6.49-6.99 11.3-6.99 1.5 0 2.9.21 4.22.61l-.19 13.03zm28.97 38.96c-7.44 0-13.5-2.28-18.19-6.85-4.66-4.56-6.98-10.64-6.98-18.23v-1.31c0-5.1.98-9.64 2.95-13.64 1.97-4.03 4.75-7.13 8.34-9.29 3.63-2.18 7.75-3.28 12.38-3.28 6.93 0 12.39 2.19 16.36 6.57 4 4.37 6 10.57 6 18.61v5.53h-32.3c.44 3.31 1.75 5.97 3.94 7.97 2.22 2 5.01 3 8.39 3 5.22 0 9.3-1.9 12.23-5.68l6.66 7.46c-2.03 2.87-4.78 5.12-8.25 6.75-3.47 1.59-7.31 2.39-11.53 2.39zm-1.55-41.63c-2.69 0-4.87.91-6.56 2.72-1.66 1.81-2.72 4.41-3.19 7.78h18.84v-1.08c-.06-3-.87-5.31-2.43-6.93-1.57-1.66-3.78-2.49-6.66-2.49zm57.61 26.67c0-1.65-.83-2.95-2.48-3.89-1.63-.97-4.25-1.82-7.88-2.57-12.06-2.54-18.09-7.66-18.09-15.38 0-4.5 1.86-8.25 5.58-11.25 3.74-3.03 8.64-4.55 14.67-4.55 6.43 0 11.57 1.52 15.42 4.55 3.87 3.03 5.81 6.97 5.81 11.81h-13.55c0-1.93-.62-3.53-1.87-4.78-1.25-1.28-3.2-1.92-5.86-1.92-2.28 0-4.05.52-5.3 1.55s-1.87 2.34-1.87 3.93c0 1.5.7 2.72 2.11 3.66 1.44.91 3.84 1.7 7.22 2.39 3.37.66 6.22 1.41 8.53 2.25 7.15 2.63 10.73 7.17 10.73 13.64 0 4.63-1.98 8.38-5.95 11.25-3.97 2.85-9.09 4.27-15.38 4.27-4.25 0-8.03-.75-11.34-2.25-3.28-1.53-5.86-3.61-7.73-6.24-1.88-2.65-2.82-5.51-2.82-8.57h12.85c.12 2.4 1.01 4.24 2.67 5.53 1.66 1.28 3.87 1.92 6.66 1.92 2.59 0 4.54-.49 5.85-1.45 1.35-1 2.02-2.3 2.02-3.9zm60.14 14.02h-13.59v-50.72h13.59V1062zm-14.39-63.844c0-2.031.67-3.703 2.02-5.015 1.37-1.313 3.23-1.969 5.57-1.969 2.32 0 4.16.656 5.53 1.969 1.38 1.312 2.07 2.984 2.07 5.015 0 2.064-.71 3.754-2.11 5.064-1.38 1.31-3.2 1.97-5.49 1.97-2.28 0-4.12-.66-5.53-1.97-1.37-1.31-2.06-3-2.06-5.064zm38.06 13.124l.42 5.86c3.63-4.53 8.49-6.8 14.58-6.8 5.38 0 9.38 1.58 12 4.74 2.63 3.15 3.97 7.87 4.03 14.15V1062h-13.54v-32.44c0-2.87-.63-4.95-1.88-6.23-1.25-1.31-3.33-1.97-6.23-1.97-3.82 0-6.67 1.62-8.58 4.87V1062h-13.55v-50.72h12.75zm39.24 24.99c0-7.91 1.76-14.21 5.29-18.89 3.57-4.69 8.43-7.04 14.58-7.04 4.94 0 9.02 1.85 12.24 5.54V990h13.59v72h-12.23l-.66-5.39c-3.38 4.22-7.72 6.33-13.03 6.33-5.97 0-10.77-2.35-14.39-7.03-3.6-4.72-5.39-11.27-5.39-19.64zm13.54.98c0 4.75.83 8.39 2.49 10.92 1.65 2.53 4.06 3.8 7.22 3.8 4.18 0 7.14-1.77 8.86-5.3v-20.01c-1.69-3.54-4.61-5.3-8.77-5.3-6.53 0-9.8 5.3-9.8 15.89zm56.96 24.75h-13.6v-50.72h13.6V1062zm-14.39-63.844c0-2.031.67-3.703 2.01-5.015 1.38-1.313 3.24-1.969 5.58-1.969 2.31 0 4.16.656 5.53 1.969 1.38 1.312 2.06 2.984 2.06 5.015 0 2.064-.7 3.754-2.11 5.064-1.37 1.31-3.2 1.97-5.48 1.97-2.28 0-4.12-.66-5.53-1.97-1.38-1.31-2.06-3-2.06-5.064zm46.68 53.864c2.5 0 4.53-.69 6.1-2.07 1.56-1.37 2.37-3.2 2.43-5.48h12.71c-.03 3.44-.97 6.59-2.81 9.47-1.85 2.84-4.38 5.06-7.6 6.65-3.19 1.57-6.72 2.35-10.59 2.35-7.25 0-12.97-2.3-17.16-6.89-4.19-4.63-6.28-11-6.28-19.13v-.89c0-7.81 2.08-14.05 6.23-18.7 4.16-4.66 9.86-6.99 17.11-6.99 6.35 0 11.43 1.82 15.24 5.44 3.84 3.6 5.8 8.39 5.86 14.39h-12.71c-.06-2.62-.87-4.75-2.43-6.37-1.57-1.66-3.63-2.49-6.19-2.49-3.16 0-5.55 1.16-7.17 3.47-1.6 2.28-2.39 6-2.39 11.16v1.4c0 5.22.79 8.97 2.39 11.25 1.59 2.29 4.01 3.43 7.26 3.43zm58.36 9.98c-.62-1.22-1.07-2.73-1.36-4.55-3.28 3.66-7.54 5.49-12.79 5.49-4.97 0-9.1-1.44-12.38-4.32-3.25-2.87-4.87-6.5-4.87-10.87 0-5.37 1.98-9.5 5.95-12.37 4-2.88 9.77-4.33 17.3-4.36h6.23v-2.91c0-2.34-.61-4.22-1.83-5.63-1.18-1.4-3.08-2.1-5.67-2.1-2.28 0-4.08.54-5.39 1.64-1.28 1.09-1.92 2.59-1.92 4.5h-13.55c0-2.94.91-5.66 2.72-8.16s4.38-4.45 7.69-5.86c3.31-1.44 7.03-2.16 11.15-2.16 6.25 0 11.21 1.58 14.86 4.74 3.69 3.12 5.53 7.53 5.53 13.22v21.98c.04 4.81.71 8.45 2.02 10.92v.8h-13.69zm-11.2-9.42c2 0 3.84-.44 5.53-1.31 1.69-.91 2.94-2.11 3.75-3.61v-8.72h-5.06c-6.78 0-10.39 2.34-10.83 7.03l-.05.8c0 1.68.6 3.07 1.79 4.17 1.18 1.09 2.81 1.64 4.87 1.64zm45.98-41.3l.43 5.67c3.59-4.4 8.45-6.61 14.57-6.61 6.54 0 11.02 2.58 13.46 7.74 3.56-5.16 8.64-7.74 15.23-7.74 5.5 0 9.6 1.61 12.28 4.83 2.69 3.19 4.03 8 4.03 14.44V1062h-13.59v-32.34c0-2.88-.56-4.97-1.69-6.28-1.12-1.35-3.11-2.02-5.95-2.02-4.06 0-6.88 1.94-8.44 5.81l.05 34.83h-13.55v-32.3c0-2.93-.58-5.06-1.73-6.37-1.16-1.31-3.13-1.97-5.91-1.97-3.84 0-6.62 1.59-8.34 4.78V1062h-13.55v-50.72h12.7zm123.75 50.72c-.62-1.22-1.07-2.73-1.36-4.55-3.28 3.66-7.54 5.49-12.79 5.49-4.97 0-9.1-1.44-12.38-4.32-3.25-2.87-4.87-6.5-4.87-10.87 0-5.37 1.98-9.5 5.95-12.37 4-2.88 9.77-4.33 17.3-4.36h6.23v-2.91c0-2.34-.61-4.22-1.83-5.63-1.18-1.4-3.07-2.1-5.67-2.1-2.28 0-4.08.54-5.39 1.64-1.28 1.09-1.92 2.59-1.92 4.5h-13.55c0-2.94.91-5.66 2.72-8.16s4.38-4.45 7.69-5.86c3.31-1.44 7.03-2.16 11.16-2.16 6.25 0 11.2 1.58 14.85 4.74 3.69 3.12 5.54 7.53 5.54 13.22v21.98c.03 4.81.7 8.45 2.01 10.92v.8h-13.69zm-11.2-9.42c2 0 3.84-.44 5.53-1.31 1.69-.91 2.94-2.11 3.75-3.61v-8.72h-5.06c-6.78 0-10.39 2.34-10.83 7.03l-.05.8c0 1.68.6 3.07 1.79 4.17 1.18 1.09 2.81 1.64 4.87 1.64zm55.08-16.31c0-7.91 1.76-14.21 5.3-18.89 3.56-4.69 8.42-7.04 14.57-7.04 4.94 0 9.02 1.85 12.24 5.54V990h13.59v72h-12.23l-.66-5.39c-3.37 4.22-7.72 6.33-13.03 6.33-5.97 0-10.76-2.35-14.39-7.03-3.59-4.72-5.39-11.27-5.39-19.64zm13.55.98c0 4.75.82 8.39 2.48 10.92 1.66 2.53 4.06 3.8 7.22 3.8 4.19 0 7.14-1.77 8.86-5.3v-20.01c-1.69-3.54-4.61-5.3-8.77-5.3-6.53 0-9.79 5.3-9.79 15.89zm56.95 24.75h-13.59v-50.72h13.59V1062zm-14.39-63.844c0-2.031.67-3.703 2.01-5.015 1.38-1.313 3.24-1.969 5.58-1.969 2.32 0 4.16.656 5.53 1.969 1.38 1.312 2.07 2.984 2.07 5.015 0 2.064-.71 3.754-2.11 5.064-1.38 1.31-3.21 1.97-5.49 1.97-2.28 0-4.12-.66-5.53-1.97-1.37-1.31-2.06-3-2.06-5.064zm44.58 47.294l9.42-34.17h14.15l-17.1 50.72h-12.94l-17.11-50.72h14.15l9.43 34.17zm43.87 16.55h-13.59v-50.72h13.59V1062zm-14.39-63.844c0-2.031.67-3.703 2.02-5.015 1.37-1.313 3.23-1.969 5.57-1.969 2.32 0 4.16.656 5.54 1.969 1.37 1.312 2.06 2.984 2.06 5.015 0 2.064-.7 3.754-2.11 5.064-1.38 1.31-3.2 1.97-5.49 1.97-2.28 0-4.12-.66-5.53-1.97-1.37-1.31-2.06-3-2.06-5.064zm53.06 49.824c0-1.65-.82-2.95-2.48-3.89-1.63-.97-4.25-1.82-7.88-2.57-12.06-2.54-18.09-7.66-18.09-15.38 0-4.5 1.86-8.25 5.58-11.25 3.75-3.03 8.64-4.55 14.67-4.55 6.44 0 11.58 1.52 15.42 4.55 3.88 3.03 5.81 6.97 5.81 11.81h-13.54c0-1.93-.63-3.53-1.88-4.78-1.25-1.28-3.2-1.92-5.86-1.92-2.28 0-4.04.52-5.29 1.55s-1.88 2.34-1.88 3.93c0 1.5.71 2.72 2.11 3.66 1.44.91 3.84 1.7 7.22 2.39 3.38.66 6.22 1.41 8.53 2.25 7.16 2.63 10.74 7.17 10.74 13.64 0 4.63-1.99 8.38-5.96 11.25-3.97 2.85-9.09 4.27-15.37 4.27-4.25 0-8.03-.75-11.35-2.25-3.28-1.53-5.86-3.61-7.73-6.24-1.88-2.65-2.81-5.51-2.81-8.57h12.84c.13 2.4 1.02 4.24 2.67 5.53 1.66 1.28 3.88 1.92 6.66 1.92 2.59 0 4.55-.49 5.86-1.45 1.34-1 2.01-2.3 2.01-3.9zm51.33 14.02c-.62-1.22-1.08-2.73-1.36-4.55-3.28 3.66-7.54 5.49-12.79 5.49-4.97 0-9.1-1.44-12.38-4.32-3.25-2.87-4.87-6.5-4.87-10.87 0-5.37 1.98-9.5 5.95-12.37 4-2.88 9.76-4.33 17.3-4.36h6.23v-2.91c0-2.34-.61-4.22-1.83-5.63-1.19-1.4-3.08-2.1-5.67-2.1-2.28 0-4.08.54-5.39 1.64-1.28 1.09-1.92 2.59-1.92 4.5h-13.55c0-2.94.91-5.66 2.72-8.16s4.37-4.45 7.69-5.86c3.31-1.44 7.03-2.16 11.15-2.16 6.25 0 11.21 1.58 14.86 4.74 3.69 3.12 5.53 7.53 5.53 13.22v21.98c.03 4.81.71 8.45 2.02 10.92v.8h-13.69zm-11.2-9.42c2 0 3.84-.44 5.53-1.31 1.69-.91 2.94-2.11 3.75-3.61v-8.72h-5.06c-6.78 0-10.39 2.34-10.83 7.03l-.05.8c0 1.68.6 3.07 1.78 4.17 1.19 1.09 2.82 1.64 4.88 1.64zm20.06-61.971c0 3.532-1.03 6.5-3.09 8.907-2.07 2.374-4.58 3.564-7.55 3.564-1.19 0-2.25-.13-3.19-.38-.9-.28-2.17-.86-3.79-1.73-1.63-.88-2.8-1.408-3.52-1.595a8.007 8.007 0 00-2.34-.328c-1.1 0-2.03.391-2.82 1.173-.75.78-1.12 1.89-1.12 3.33l-7.88-.47c0-3.471 1.02-6.424 3.05-8.861 2.06-2.438 4.58-3.657 7.55-3.657.94 0 1.81.126 2.62.376.85.218 2.21.781 4.08 1.687 1.88.906 3.17 1.453 3.89 1.641.72.187 1.47.281 2.25.281 1.1 0 2.03-.375 2.81-1.125.82-.781 1.22-1.891 1.22-3.328l7.83.515zm11.11 45.561c0-5.03.97-9.51 2.91-13.45 1.93-3.94 4.72-6.99 8.34-9.14 3.66-2.16 7.89-3.24 12.7-3.24 6.85 0 12.43 2.1 16.74 6.28 4.34 4.19 6.76 9.88 7.26 17.07l.1 3.47c0 7.78-2.17 14.03-6.52 18.75-4.34 4.68-10.17 7.03-17.48 7.03-7.32 0-13.16-2.35-17.53-7.03-4.35-4.69-6.52-11.07-6.52-19.13v-.61zm13.55.99c0 4.81.9 8.5 2.72 11.06 1.81 2.53 4.4 3.8 7.78 3.8 3.28 0 5.84-1.25 7.68-3.75 1.85-2.54 2.77-6.57 2.77-12.1 0-4.72-.92-8.37-2.77-10.97-1.84-2.59-4.43-3.89-7.78-3.89-3.31 0-5.87 1.3-7.68 3.89-1.82 2.57-2.72 6.55-2.72 11.96z"
        fill="#3870FF"
      />
	  </svg>
	)
  }