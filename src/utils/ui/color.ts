export class GrayColor {
	public static readonly Black = "#000000";
	public static readonly White = "#FFFFFF";
	public static readonly Neutral = "#F8F8F8";

	public static readonly GrayXXXLight = "#F5F5F5";
	public static readonly GrayXXLight = "#F3F5FD";
	public static readonly GrayXLight = "#BDBDBD";
	public static readonly GrayLight = "#AAAAAA";
	public static readonly Gray = "#757575";
	public static readonly GrayDark = "#525252";
	public static readonly GrayXDark = "#333333";
	public static readonly GrayXXDark = "#121212";
}

/**
 * "L" stands for "level" (so L1 is "level 1")
 */
export enum Alpha {
	L1 = 0.05,
	L2 = 0.1,
	L3 = 0.3,
	L4 = 0.6,
	L5 = 0.9
}
