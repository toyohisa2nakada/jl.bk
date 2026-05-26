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

			plib.setExpectedOutputs(["出力 20"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:"例 1",
				value:[
					{name:"a",initValue:""},
					{name:"b",initValue:""},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 20と出力される入力をセットしてください。\n\
\/\/ \n\
\/\/ print();は、()内のものを出力します。\n\
\/\/ 数字はそのまま出力されます。\n\
\/\/ 英字からはじまるものは、変数といい、その変数に入っている数字が出力されます。\n\
\/\/ \n\
print(a + b);\n\
"}});

			window.exec({module:"input",command:"enable"});
//			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("05");

			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"プログラムの指示にある出力をする入力データをセットしてください。",
				closeButton:true,
			});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",
				func:function(params,e){
					var out = window.exec({module:"output",command:"outputs"});
					if(plib.checkOutput(out,plib.getExpectedOutputs()[0])===true){
						problems.next();
					}
				}
			}});
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

