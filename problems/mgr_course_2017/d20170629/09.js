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

			plib.setExpectedOutputs([
				"出力<br>ネコではない",
				"出力<br>ネコである",
				"出力<br>ネコではない",
				"出力<br>ネコである",
				"出力<br>ネコではない",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"c",initValue:["\"イヌ\"","\"マンチカン\"","\"キティちゃん\"","\"ニャンコ先生\"","\"夏目漱石\""]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"cats"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"flag"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:13},{line:6,ch:22}],[{line:8,ch:4},{line:8,ch:18}],[{line:10,ch:2},{line:10,ch:16}],[{line:14,ch:11},{line:14,ch:15}]],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「4か所」です。\n\
\/\/ \n\
var cats = [\"ミケネコ\",\"アメショ\",\"マンチカン\",\"ドラえもん\",\"ニャンコ先生\"];\n\
var flag = 0;\n\
\/\/           ↓プログラムの追加箇所（１）\n\
for(var i in          ){\n\
	\/\/ ↓プログラムの追加箇所（２）\n\
	if(              ){\n\
	 \/\/ ↓プログラムの追加箇所（３）\n\
		               ;\n\
	}\n\
}\n\
\/\/        ↓プログラムの追加箇所（４）\n\
if(flag ==     ){\n\
	print(\"ネコである\");\n\
}else{\n\
	print(\"ネコではない\");\n\
}\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			plib.startOutputCheck();

			HINT.setScriptName(scriptName);
			HINT.hint("9_1");
			HINT.hint("9_2");
			HINT.hint("9_3");
			HINT.hint("9_4");
			HINT.hint("flag");
			HINT.hint("double_quotation");
			HINT.hint("equal1");
			HINT.hint("for");
			HINT.hint("if");
			HINT.hint("no_else");
			HINT.hint("a_i");
			HINT.hint("equal");
			HINT.hint("var");
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
				string:"よくできました。授業のホームページを参照し、次の課題に移ってください。",
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

