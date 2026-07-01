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
				hout+"<br>Switch2<br>PS5<br>PS5 DE<br>Xbox X<br>Steam Deck<br>ファミコン(当時)",
				hout+"<br>Switch2<br>PS5 DE<br>Xbox X<br>ファミコン(当時)",
				hout+"<br>Switch2<br>ファミコン(当時)",
				hout+"ファミコン(当時)",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"c",initValue:["140000","90000","60000","20000"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:13},{line:6,ch:22}],[{line:8,ch:4},{line:8,ch:18}],[{line:10,ch:8},{line:10,ch:16}]],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「3か所」です。\n\
\/\/ \n\
var items = [\"Switch2\",\"PS5\", \"PS5 DE\",\"Xbox X\",\"Steam Deck\",\"ファミコン(当時)\"];\n\
var costs = [59980    ,97980, 89980   ,87980   ,137980      ,14800];\n\
\/\/           ↓プログラムの追加箇所（１）\n\
for(var i in          ){\n\
	\/\/ ↓プログラムの追加箇所（２）\n\
	if(              ){\n\
		\/\/    ↓プログラムの追加箇所（３）\n\
		print(        );\n\
	}\n\
}\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			plib.startOutputCheck();

			HINT.setScriptName(scriptName);
			HINT.hint("out_9");
			HINT.hint("add_9_1");
			HINT.hint("add_9_2");
			HINT.hint("add_9_3");
			HINT.hint("format");
			HINT.hint("lessthan");
			HINT.hint("no_else");
			HINT.hint("for");
			HINT.hint("if");
			HINT.hint("a_i");
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

