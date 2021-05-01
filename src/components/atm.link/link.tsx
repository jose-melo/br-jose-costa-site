import LinkANT from "antd/lib/typography/Link";
import styled from "styled-components";
import { GrayColor } from "../../utils/ui/color";

export const Link = styled(LinkANT)`
	color: ${GrayColor.GrayXDark};
	:hover {
		color: #1fc6db;
	}
`;
