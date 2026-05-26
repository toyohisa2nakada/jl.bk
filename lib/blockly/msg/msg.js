function getLang(){
	return getCookie("lang","ja");
}
function getCookie(key,def){
	var values = (";"+document.cookie+";").match(".*;\\s*"+key+"=(.*?)\\s*;.*");
	return values==null?def:values[1];
}
document.write('<script src="lib/blockly/msg/'+getLang()+'.js"></script>');
