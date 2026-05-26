new function(){
	var isNumber = function(x){
		if(typeof(x) != 'number' && typeof(x) != 'string'){
        	return false;
    	}else{
        	return (x == parseFloat(x) && isFinite(x));
		}
	}
	var check = function(str){
console.log(str);
		var ar = eval(str);
		if(false === Array.isArray(ar)){
			return false;
		}
		for(var i in ar){
			if(false === isNumber(ar[i])){
				return false;
			}
		}
		return true;
	}
	var self_n = problems.push({
		pnumber:7,
		scriptName:"20160630_7.js",
		reqType:"check",
		inputs:[{name:"a",type:"text",example:"[1,2,3]"},{name:"b",type:"text",example:"[1,2,3]"}],
		inputCheck:{a:check,b:check},
		answer:function(req){
			var a = eval(req.a);
			var b = eval(req.b);
			var ret = "";
			for(var i in a){
				ret += ret.length===0?"":"<br>";
				if(a[i] * b[i] == 12){
					ret += "1";
				}else{
					ret += "0";
				}
			}
			return ret;
		},
	});
}

