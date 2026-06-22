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

			plib.setExpectedOutputs(["出力<br>p<br>r<br>t","出力<br>Q<br>S","出力<br>"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"c",initValue:["1","2","0"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:5,ch:4},{line:5,ch:14}],[{line:6,ch:8},{line:6,ch:13}]],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ \n\
var a = [\"p\",\"Q\",\"r\",\"S\",\"t\"];\n\
var b = [\"1\",\"2\",\"1\",\"2\",\"1\"];\n\
for(var i in a){\n\
	if(          ){\n\
		print(      );\n\
	}\n\
}\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			plib.startOutputCheck();

			HINT.setScriptName(scriptName);
			HINT.hint("double_quotation");
			HINT.hint("no_else");
			HINT.hint("for");
			HINT.hint("if");
			HINT.hint("a_i");
			HINT.hint("equal");
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

