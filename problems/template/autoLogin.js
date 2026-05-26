var autoLoginJs = new function(){
	var self = this;
	var scriptName = plib.getScriptName();
	var n = problems.problems.push([
		function(){
			var id = "id"+(new Date()).getTime().toString().slice(-6);
			var name = "unknown";
			window.exec({module:"main",command:"setLoginId",params:{userid:id,username:name}});
			problems.next();
		},
	]);
	problems.noShowButton(n-1);
}
