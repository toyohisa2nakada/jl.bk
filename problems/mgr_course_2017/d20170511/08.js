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

			plib.setExpectedOutputs(["出力 q","出力 p","出力 q"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["1","3","3"]},
					{name:"b",initValue:["3","3","1"]},
					{name:"c",initValue:["0","0","0"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:14,ch:3},{line:14,ch:13}]],
				text:"\
\/\/ 空欄にプログラムを追加し、すべての入力で正しく表示することを確認してください。\n\
\/\/ \n\
\/\/ 例えばここに示すプログラムは、\n\
\/\/ if(...)の...の条件に一致するときにprint(\"p\")を実行し、\n\
\/\/ 一致しないときにはprint(\"q\")を実行します。\n\
\/\/ if(...){\n\
\/\/  print(\"p\");\n\
\/\/ }else{\n\
\/\/  print(\"q\");\n\
\/\/ }\n\
\/\/ \n\
\/\/ ==は、2つの数が同じ場合に条件に一致します。\n\
\/\/ aなどの変数名の場合には、その変数に入っている数が比較されます。\n\
 \n\
if(          ){\n\
	c = 1;\n\
}else{\n\
	c = 2;\n\
}\n\
 \n\
if(c == 1){\n\
	print(\"p\");\n\
}else{\n\
	print(\"q\");\n\
}\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
//			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("08_1");
			HINT.hint("08_2");
			HINT.hint("equal2");
			HINT.hint("print");

			plib.startOutputCheck();
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
	]);
}

