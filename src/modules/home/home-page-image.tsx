/* eslint-disable no-unused-vars */
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface JoseImageProps {
	size: number;
}

const JoseImage: React.FunctionComponent<JoseImageProps> = props => {
	const data = useStaticQuery(graphql`
		query {
			jose: file(relativePath: { eq: "jose.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Img
			imgStyle={{
				height: "100%",
				width: "100%"
			}}
			style={{
				maxWidth: `${props.size}px`,
				display: "block",
				width: "100%",
				marginLeft: "auto",
				marginRight: "auto",
				marginTop: "2em"
			}}
			fluid={data.jose.childImageSharp.fluid}
		/>
	);
};

export const JoseImageStyled = styled(JoseImage)``;

export default JoseImageStyled;
