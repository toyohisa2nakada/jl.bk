new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。","違いますよ","ヒント：printが実行される回数を考えてみてください。"];
	var errorNo = 0;

	var self_n = problems.problems.push([
		function(){
			plib.log.add(scriptName+":startProblem");
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});

			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"main",command:"closeReq"});
			["input","code","output"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:self_n}});
			});

			plib.setExpectedOutputs(["出力 13","出力 5","出力 0"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:self_n,
				value:[
					{name:"a",initValue:["[3, 5, 7, 10]","[1,2,3,4]","[-5, 2, -8, 5]"]},
				],
				message:plib.getExpectedOutputs(),
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"sum"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:self_n}});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:5,ch:4},{line:5,ch:7}],[{line:8,ch:4},{line:8,ch:7}]],
				text:"\
\/\/ 入力の下に書かれた予想出力と同じ出力になるプログラムを作成してください。\n\
\/\/ 灰色の部分は変更することができません。\n\
\/\/ \n\
var sum = 0;\n\
 \n\
i =    ;\n\
sum += a[i];\n\
 \n\
i =    ;\n\
sum += a[i];\n\
 \n\
print(sum);\n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});

			plib.startOutputCheck();
			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem0").instruct({
				string:"すべての入力データで、正しく出力されることを確認してください。",
				closeButton:true,
				closedHandler:function(){
				},
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

