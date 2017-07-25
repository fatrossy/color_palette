import chroma from 'chroma-js';

const curColor = "#FFFFFF";
const goalColor = "#8AD71D";
const compColor = "#EA7F3E";
const borderColor = "#979797";
const bgColor = "#2D2E3A";
const transparent = 'rgba(0,0,0,0)';
const gridBorder = chroma(curColor).alpha(.36).css();

const colors = [{
	"header" : {
		"toolbarSel" : curColor,
		"iosBg" : '#0D0D10',
		"tiStaBg" : '#1A1A21',
		"bg" : '#272832',
		"hdWords" : curColor,
		"tispUnsele" : chroma(curColor).alpha(.61).css(),
		"tispOpBg" : bgColor,
		"border" : borderColor,
	}},

	{"home" : {
		"actual" : curColor,
		"goalComp" : compColor,
		"goalTot" : goalColor,
		"borderTB" : '#4E4E54',
		"toolbarBg" : '#1E1E2B',
		"tbUnsele" : chroma(curColor).alpha(.3).css(),
		"circBorder" : chroma(curColor).alpha(.25).css(),
		"circ" : 'radial-gradient(50% 100%, rgba(0,251,251,0) 50%, rgba(156,156,156,0.25) 100%)',
		"bar": '#5A5B62',
		"actuNum": curColor,
		"numPy": '#A4A5AA',
		"barStar": '#A7A7AA',
		"shadow": 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.7));',
	}},

	{"kpi" : {
		"liActTot" : curColor,
		"liPy" : '#CDCFEA',
		"liGoTot" : chroma(goalColor).alpha(.4).css(),
		"borderTot": goalColor,
		"liComp": chroma(compColor).alpha(.4).css(),
		"borderComp": compColor,
		"kpiBg" : '#4E4E54',
		"kpiSele" : '#272831',
		"kpiUnsele" : chroma('#67686d').alpha(.6).css(),
		"grafBox" : bgColor,
		"grafBoxBd" : borderColor,
		"tableLi" : '#828282',
		"boxLiGri" : chroma(curColor).alpha(.3).css(),
		"boxBar" : chroma(curColor).alpha(.42).css(),
		"arrow" : chroma(curColor).alpha(.3).css(),
		"boxGriNum" : chroma(curColor).alpha(.8).css(),
		"tabData" : '#BE330F',
		"tabData1" : curColor,
		"mix" : chroma(curColor).alpha(.56).css(),
		"mixBd" : curColor,
		"tabTit" : chroma('#D8D8D8').alpha(.1).css(),
		"tabTitBd" : gridBorder,
		"tabGri1Bd" : gridBorder,
		"tabGri2" : chroma('#272832').alpha(.4).css(),
		"tabGri2Bd" : gridBorder,
		"tabGri3" : '#282C33',
		"tabGri3Bd" : gridBorder,
	}},

	{"search" : {
		"schBox" : chroma('#393939').alpha(.5).css(),
		"schBoxBd": curColor,
		"tbUnsele" : chroma(curColor ).alpha(.5).css(),
		"tbSele" : curColor,
	}},
];

export default colors;
