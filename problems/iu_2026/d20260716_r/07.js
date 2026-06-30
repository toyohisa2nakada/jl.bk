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
				"出力<br>3",
				"出力<br>9",
				"出力<br>0",
				"出力<br>55",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"values",initValue:["[0,1,2]","[1,3,5]","[6,-6]","[1,2,3,4,5,6,7,8,9,10]"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"values"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"sum"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[
					[{line:6,ch:13},{line:6,ch:17}],
					[{line:8,ch:5},{line:8,ch:13}],
				],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「2か所」です。\n\
\/\/ \n\
var sum = 0;\n\
 \n\
           //↓追加箇所(1)\n\
for(var i in     ){\n\
      //↓追加箇所(2)\n\
	sum         ;\n\
}\n\
 \n\
print(sum);\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			plib.startOutputCheck();

			HINT.setScriptName(scriptName);
			HINT.hint("7_1");
			HINT.hint("7_2");
			HINT.hint("equal1");
			HINT.hint("for");
			HINT.hint("a_i");
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
	]);
}

