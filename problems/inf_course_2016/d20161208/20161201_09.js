new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。"];
	var errorNo = 0;

	var self_n = problems.problems.push([
		function(){
			plib.log.add(scriptName+":startProblem");
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});

			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"main",command:"closeReq"});
			["input","code","output"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:scriptName}});
			});

			plib.setExpectedOutputs(["出力 3","出力 3","出力3","出力3","出力3","出力3"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["1","1","2","2","3","3"]},
					{name:"b",initValue:["2","3","1","3","1","2"]},
					{name:"c",initValue:["3","2","3","1","2","1"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:11,ch:8},{line:11,ch:16}]],
				text:"\
\/\/ a,b,cのうち最大の数値を出力するプログラムを作成してください。\n\
\/\/ ただし、使用できる文字は、f ( ) a b c ,(カンマ)の7文字です。\n\
 \n\
function f(p,q){\n\
	if(p > q){\n\
		return p;\n\
	}else{\n\
		return q;\n\
	}\n\
}\n\
 \n\
var m =         ;\n\
print(m);\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
//			window.exec({module:"code",command:"setReadOnly"});

			plib.startOutputCheck();
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var str = window.exec({module:"code",command:"getEditableString"});
					var okstr = ["f","\\(","\\)","a","b","c",","];
					okstr.forEach(function(elem){
						str = str.replace(new RegExp(elem,"g"),"");
					});
					str = str.replace(/\s/g,"");
					if(str.length!==0){
						alert(okstr.join(" ").replace(new RegExp("\\\\","g"),"")+" 以外の文字は使用しないでください。");
						e.preventDefault = true;
					}
				}
			}});
			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){},
			});
		},
		function(){
			plib.log.add(scriptName+":finished_problem");
			window.exec({
				module:"main",
				command:"writeLog",
				params:{message:plib.log.text()}});
			plib.log.init();
			$("body").instruct({
				string:"おめでとうございます !!",
				align:'center',
				arrow:false,
				font_size:'72px',
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2+200,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
		function(){
			$("body").instruct({
				string:"このメッセージを「了解」を押して消して、プログラムとログイン名が見えるように印刷して提出してください。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2+200,
				targetEventToClose:null,
				closeButton:true,
			});
		},
	]);
}

