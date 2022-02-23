import styled from 'styled-components';
import { GrayColor } from "../../utils/ui/color";

const titleContainer = `
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI, Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #333333; 
   `;

export const Title = styled.div<{ fontSize: string}>`
    ${titleContainer}
    margin: 0;
    font-size: ${p => p.fontSize};
    letter-spacing: -0.02em;
    font-weight: bold;
`;

export const CardTitle = styled.div<{ fontSize: string}>`
    ${titleContainer}
    font-size: ${p => p.fontSize};
    letter-spacing: -0.02em;
    font-weight: bold;
    color: inherit;
`;

interface DescriptionProps{
    fontSize: string;
}

export const Card = styled.a`
    color: ${GrayColor.GrayXDark};
	:hover {
		color: #1fc6db;
        border-color: #1fc6db
	}
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    -webkit-transition: color 0.15s ease,border-color 0.15s ease;
    transition: color 0.15s ease,border-color 0.15s ease;
    flex: 40%;
`;

export const CardGrid = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1.5rem;
    box-sizing: border-box;
    width: 100%;
    flex-wrap: wrap;
`;

export const Description = styled.div<{ fontSize: string }>`
    ${titleContainer}
    text-align: center;
    line-height: 1.5;
    font-size: ${p => p.fontSize};
    margin: 30px;
`;

export const CardDescription = styled.div<{ fontSize: string }>`
    ${titleContainer}
    color: inherit;
    font-size: ${p => p.fontSize};
`;


export const CardSpinWrapper = styled.div`
    width: 100px;
	height: 100px;
	margin: auto;
    margin-top: 20%;
`;

