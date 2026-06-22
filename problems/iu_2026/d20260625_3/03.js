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

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 問題は、左の入力のところに表示されます。\n\
\/\/ \n\
for(var i in a){\n\
	if(a[i]==1){\n\
		print(\"p\");\n\
	}else{\n\
		print(\"q\");\n\
	}\n\
}\
"}});

			window.exec({module:"input",command:"enable"});
//			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("input_count1");
			HINT.hint("for");
			HINT.hint("if");
			HINT.hint("a_i");
			HINT.hint("equal");

			plib.setExpectedOutputs(["出力<br>q<br>q<br>q<br>p<br>p"]);
			var instmsg = "q q q p pと出力される入力データをセットしてください。<br>入力例：[0,1,2]";
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:instmsg,
				value:[
					{name:"a",initValue:""},
				],
			}});
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:instmsg,
				closeButton:true,
				closedHandler:function(){
				},
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

