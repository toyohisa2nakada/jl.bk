new function(){
	var self_n = problems.push({
		pnumber:1,
		scriptName:"20160630_1.js",
		inputs:[{name:"a",type:"number",example:"5"},{name:"b",type:"number",example:"6"}],
		answer:function(req){
			var ret = "";
			var a = Number(req.a);
			var b = Number(req.b);
			if(a>b){
				ret += a;
			}else{
				ret += b;
			}
			return ret;
		},
	});
}

