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
				"出力<br>必修ではない",
				"出力<br>必修ではない",
				"出力<br>必修である",
				"出力<br>必修ではない",
				"出力<br>必修ではない",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"c",initValue:["\"システム論\"","\"情報検索\"","\"システム数学\"","\"データサイエンス\"","\"人工知能\""]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"lectures"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"must"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:17,ch:13},{line:17,ch:22}],[{line:19,ch:4},{line:19,ch:18}],[{line:21,ch:2},{line:21,ch:16}],[{line:25,ch:11},{line:25,ch:15}]],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「4か所」です。\n\
\/\/ \n\
var lectures = [\"コンピュータシステム\",\n\
				\"システム数学\",\n\
				\"ソフトウェア開発\",\n\
				\"プログラミング入門\",\n\
				\"オペレーティングシステム\",\n\
				\"オブジェクト指向開発概論\",\n\
				\"ネットワークコンピューティング\",\n\
				\"情報システム設計\",\n\
				\"情報プロジェクト特論\",\n\
				\"情報システム開発\"];\n\
 \n\
var must = 0;\n\
 \n\
\/\/           ↓プログラムの追加箇所（１）\n\
for(var i in          ){\n\
	\/\/ ↓プログラムの追加箇所（２）\n\
	if(              ){\n\
	 \/\/ ↓プログラムの追加箇所（３）\n\
		               ;\n\
	}\n\
}\n\
\/\/        ↓プログラムの追加箇所（４）\n\
if(must ==     ){\n\
	print(\"必修である\");\n\
}else{\n\
	print(\"必修ではない\");\n\
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

