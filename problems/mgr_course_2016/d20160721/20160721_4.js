new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。文字列の足し算は、文字を結合します。","違います。msgは文字列です。","違います。msg+=\"a\"は、msgに例えば\"b\"という文字が入っている場合、baとなります。"];
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

			plib.setExpectedOutputs(["出力 abb"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:self_n,
				value:[
					{name:"a",initValue:["3"]},
					{name:"b",initValue:["7"]},
					{name:"c",initValue:["2"]},
				],
//				message:plib.getExpectedOutputs(),
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"msg"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:self_n,input:true,value:""}});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 出力を予想して入力し、実行ボタンを押してください。\n\
\/\/ \n\
 \n\
var msg = \"\";\n\
 \n\
if(a==3){\n\
	msg += \"a\";\n\
}else{\n\
	msg += \"b\";\n\
}\n\
 \n\
if(b==4){\n\
	msg += \"a\";\n\
}else{\n\
	msg += \"b\";\n\
}\n\
 \n\
if(c==5){\n\
	msg += \"a\";\n\
}else{\n\
	msg += \"b\";\n\
}\n\
print(msg);\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"disable"});
			window.exec({module:"code",command:"setReadOnly"});

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

