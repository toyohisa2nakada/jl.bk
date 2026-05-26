new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います","違いますよ","違うんですってば","だから、違うです",
		"違うって...","違うんだなぁ","違うと申し上げております","はい、もう一回お願いします"];
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

			plib.setExpectedOutputs(["出力<br>q"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				value:[
					{name:"a",initValue:"2"},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName,input:true}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 出力を予測してください。\n\
\/\/ \n\
 \n\
if(a == 1){\n\
	print(\"p\");\n\
}else{\n\
	print(\"q\");\n\
}\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("equal2");
			HINT.hint("print");
			HINT.hint("if_else");
			HINT.hint("double_quotation");

			problems.next();
		},
		function(){
			var w = $("#output")[0].contentWindow;
			w.$("#inputPanel").instruct({
				string:"出力される文字を入力して、実行してください。",
				closeButton:true,
				closedHandler:function(){
					$("#code")[0].contentWindow.$("#run").css("pointer-events","auto");
					$("#code")[0].contentWindow.$("#runInterval").css("pointer-events","auto");
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var outs = $.trim(window.exec({module:"output",command:"getInput"}));
					if(outs.length===0){
						var w = $("#output")[0].contentWindow;
						w.$("#inputPanel").instruct({
							string:"出力される文字を入力してから、実行してください。",
							closeButton:true,
						});
						e.preventDefault = true;
					}else if(plib.checkOutput(outs,plib.getExpectedOutputs()[0])==false){
						alert(errorMessages[(errorNo++)%errorMessages.length]);
						e.preventDefault = true;
					}
				},
			}});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",func:function(params,e){
					problems.next();
				},
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

