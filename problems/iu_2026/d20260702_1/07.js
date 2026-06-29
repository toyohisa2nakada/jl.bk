new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。","違いますよ","違うんですってば","もう一回お願いします。"];
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

			var hout = plib.getExpectedOutputHeader();
			plib.setExpectedOutputs([
				hout+"<br>2<br>3<br>4<br>終了",
				hout+"<br>3<br>4<br>終了",
				hout+"<br>4<br>終了",
				hout+"<br>終了",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"g",initValue:["1","2","3","4"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"d"}});
			window.exec({module:"watch",command:"addValue",params:{name:"g"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:4},{line:6,ch:18}],[{line:8,ch:8},{line:8,ch:14}]],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「2か所」です。\n\
\/\/ \n\
var d = [1,2,3,4];\n\
for(var i in d){\n\
	\/\/ ↓プログラムの追加箇所（１）\n\
	if(              ){\n\
		\/\/ ↓プログラムの追加箇所（２）\n\
		print(      );\n\
	}\n\
}\n\
print(\"終了\");\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			plib.startOutputCheck();

			HINT.setScriptName(scriptName);
			HINT.hint("out_7");
			HINT.hint("add_7_1");
			HINT.hint("add_7_2");
			HINT.hint("lessthan");
			HINT.hint("no_else");
			HINT.hint("for");
			HINT.hint("if");
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

