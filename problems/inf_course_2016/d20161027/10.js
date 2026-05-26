new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。"];
	var errorNo = 0;

	var self_n = problems.problems.push([
		function(){
			plib.log.add(scriptName+":startProblem");
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});

			["input","code","output","watch","hint"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"main",command:"closeReq"});
			["input","code","output"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:scriptName}});
			});

			plib.setExpectedOutputs(["出力 10"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["1"]},
					{name:"b",initValue:["1"]},
					{name:"c",initValue:["5"]},
					{name:"d",initValue:["8"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"d"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:5,ch:8},{line:5,ch:20}]],
				text:"\
\/\/ 正しく出力するプログラムを作成してください。\n\
\/\/ ただし、a b c d の文字は1回だけ必ず使用し、\n\
\/\/ ( ) + - * / の文字は、使用する回数に制限は無く、必要に応じて使ってください。\n\
\/\/ それ以外の文字は、使用することができません。\n\
 \n\
var x =             ;\n\
 \n\
print(x);\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});

			HINT.setScriptName(scriptName);
			HINT.hint("10_1");
			HINT.hint("10_2");
			HINT.hint("10_3");
			HINT.hint("10_4");
			HINT.hint("var_equal");

			plib.startOutputCheck();
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var str = window.exec({module:"code",command:"getEditableString"});
					var okstr = ["a","b","c","d","\\(","\\)","\\+","-","\\*","/"];
					okstr.forEach(function(elem){
						str = str.replace(new RegExp(elem,"g"),"");
					});
					str = str.replace(/\s/g,"");
					if(str.length!==0){
						alert(okstr.join(" ").replace(new RegExp("\\\\","g"),"")+" 以外の文字は使用しないでください。");
						e.preventDefault = true;
						return;
					}

					// check for only one
					str = window.exec({module:"code",command:"getEditableString"});
					var counter = function(str,seq){
						return str.split(seq).length-1;
					}
					var onestr = ["a","b","c","d"];
					for(var i in onestr){
						var elem = onestr[i];
						if(1 !== counter(str,elem)){
							alert(elem+" 文字を1回だけ使用してください。");
							e.preventDefault = true;
							break;
						}
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
				//string:"このメッセージを「了解」を押して消して、プログラムとログイン名が見えるように印刷して提出してください。",
				string:"講師を呼んで、次の課題をもらってください。",
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

