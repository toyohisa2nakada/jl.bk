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
				"出力<br>ブラジル戦 先発",
				"出力<br>ブラジル戦 先発ではない",
				"出力<br>ブラジル戦 先発ではない",
				"出力<br>ブラジル戦 先発",
				"出力<br>ブラジル戦 先発",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"c",initValue:["\"堂安律\"","\"久保建英\"","\"菅原由勢\"","\"前田大然\"","\"上田綺世\""]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"players"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"starter"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:9,ch:13},{line:9,ch:22}],[{line:11,ch:4},{line:11,ch:18}],[{line:13,ch:2},{line:13,ch:16}],[{line:17,ch:14},{line:17,ch:18}]],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「4か所」です。\n\
\/\/ \n\
var players = [\"鈴木彩艶\",	\"谷口彰悟\",	\"伊藤洋輝\",\n\
	\"冨安健洋\",	\"堂安律\",	\"前田大然\",	\"中村敬斗\",	\n\
	\"伊東純也\",	\"鎌田大地\",	\"佐野海舟\",	\"上田綺世\"];\n\
 \n\
var starter = 0;\n\
\/\/           ↓プログラムの追加箇所（１）\n\
for(var i in          ){\n\
	\/\/ ↓プログラムの追加箇所（２）\n\
	if(              ){\n\
	 \/\/ ↓プログラムの追加箇所（３）\n\
		               ;\n\
	}\n\
}\n\
\/\/            ↓プログラムの追加箇所（４）\n\
if(starter ==     ){\n\
	print(\"ブラジル戦 先発\");\n\
}else{\n\
	print(\"ブラジル戦 先発ではない\");\n\
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
			HINT.hint("must");
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

