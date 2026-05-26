new function(){
	var self_n = problems.push({
		pnumber:9,
		scriptName:"20160707_9.js",
		reqType:"exec",
		inputs:[{name:"name",type:"text",example:"\"日本語\""}],
		inputCheck:{name:function(str){return /^".*"$/.test(str);}},
		answer:function(req){
			return eval(req.name);
		},
	});
}

