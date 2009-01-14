
//base url
url = "http://blipbadge.marciogarcia.com/widget/v100?username=" + BLIP_USERNAME;
// url = "http://localhost:3000/widget/v100?username=" + BLIP_USERNAME;

//music list lenght...
MASTER_BLIP_LIST_LENGTH = 10;
if (isDefined('BLIP_LIST_LENGTH')) {
	MASTER_BLIP_LIST_LENGTH = BLIP_LIST_LENGTH;
}

url += "&limit=" + MASTER_BLIP_LIST_LENGTH;

//debug mode...
if (isDefined('BLIP_DEBUG')) {
	if (BLIP_DEBUG == 'true') {
		url += "&debug=true";
	}
	MASTER_BLIP_LIST_LENGTH = BLIP_LIST_LENGTH;
}

//different style...
if (isDefined('BLIP_STYLE')) {
		url += "&style=" + BLIP_STYLE;
}

//iframe style..
iframe_height = '310px';
if (!isDefined('BLIP_FRAME_HEIGHT')) {
	if (MASTER_BLIP_LIST_LENGTH <= 5) {
		iframe_height = '180px';
	} else if (MASTER_BLIP_LIST_LENGTH > 5 && MASTER_BLIP_LIST_LENGTH <= 10) {
		iframe_height = '310px';	
	} else if (MASTER_BLIP_LIST_LENGTH > 10 && MASTER_BLIP_LIST_LENGTH <= 15) {
		iframe_height = '410px';	
	} else if (MASTER_BLIP_LIST_LENGTH > 15 && MASTER_BLIP_LIST_LENGTH <= 20) {
		iframe_height = '525px';	
	}	
} else {
	iframe_height = BLIP_FRAME_HEIGHT;
}

iframe_style = "border:0px;padding:0px;margin:0px;overflow:hidden;width:252px;height:" + iframe_height;

document.write(
	"<iframe style=\"" + iframe_style + "\"" + 
	"src=\"" + url + "\"></iframe>"
	);

function isDefined(variable) {
    return (typeof(window[variable]) == "undefined")?  false: true;
}