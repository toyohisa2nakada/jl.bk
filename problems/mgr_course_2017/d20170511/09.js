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

			plib.setExpectedOutputs(["出力<br>ab<br>bc<br>ca","出力<br>ca","出力<br>ab","出力<br>bc",
									 "出力<br>bc","出力<br>ab","出力<br>ca","出力<br>ab<br>bc<br>ca"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["1","1","1","1","2","2","2","2"]},
					{name:"b",initValue:["1","2","1","2","1","2","1","2"]},
					{name:"c",initValue:["1","1","2","2","1","1","2","2"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:12,ch:0},{line:15,ch:0}]],
				text:"\
\/\/ すべての入力で正しく表示するプログラムを作成してください。\n\
\/\/ \n\
\/\/ 例えばここに示すプログラムは、\n\
\/\/ if(...)の...の条件に一致するときにprint(\"ab\")を実行します。\n\
\/\/ 一致しないときは何も実行しません。\n\
\/\/ if(...){\n\
\/\/  print(\"ab\");\n\
\/\/ }\n\
\/\/ \n\
\/\/ ==は、2つの数が同じ場合に条件に一致します。\n\
\/\/ aなどの変数名の場合には、その変数に入っている数が比較されます。\n\
\/\/ \n\
\n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
//			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("if_if");
			HINT.hint("if_else");
			HINT.hint("prev");
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
		function(){
			$("body").instruct({
				string:"これで終わりです。自動で課題が提出されますので「了解」ボタンを押してください。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2+200,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
	]);
}

