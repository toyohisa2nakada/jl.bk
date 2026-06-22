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
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 適切な入力データをセットしてください。\n\
\/\/ \n\
var c = [1,2,3,4,5,6,7];\n\
for(var i in a){\n\
	if(a[i]==b[i]){\n\
		print(c[i]);\n\
	}else{\n\
		print(\"z\");\n\
	}\n\
}\
"}});

			window.exec({module:"input",command:"enable"});
//			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("for");
			HINT.hint("if");
			HINT.hint("a_i");
			HINT.hint("b_i");
			HINT.hint("equal");
			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"プログラムは変わっていません。ただし、変数cは変更不可となっています。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var ans = "1 2 z 4 5 z 7";
			plib.setExpectedOutputs(["出力<br>"+ans.replace(/ /g,"<br>")]);
			var instmsg = ans+" と表示されるように、入力データをセットしてください。<br>入力例： [1,2,3]<br>半角で入力してください。";
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:instmsg,
				value:[
					{name:"a",initValue:""},
					{name:"b",initValue:""},
				],
			}});
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:instmsg,
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

