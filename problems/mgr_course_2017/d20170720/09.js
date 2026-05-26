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
				"出力<br>3<br>1",
				"出力<br>3<br>1",
				"出力<br>9<br>2",
				"出力<br>5<br>5",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["[1,2,3]","[3,2,1]","[3,7,2,9,2,4]","[5,5,5,5,5]"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"max"}});
			window.exec({module:"watch",command:"addValue",params:{name:"min"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[
					[{line:4,ch:10},{line:4,ch:18}],
					[{line:6,ch:10},{line:6,ch:18}],
					[{line:10,ch:8},{line:10,ch:13}],
					[{line:12,ch:2},{line:12,ch:10}],
					[{line:15,ch:8},{line:15,ch:13}],
					[{line:17,ch:2},{line:17,ch:10}],
				],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「6か所」です。\n\
\/\/ \n\
        //↓追加箇所(1)\n\
var max =         ;\n\
        //↓追加箇所(2)\n\
var min =         ;\n\
 \n\
for(var i in a){\n\
         //↓追加箇所(3)\n\
	if(max       a[i]){\n\
	  //↓追加箇所(4)\n\
		        ;\n\
	}\n\
         //↓追加箇所(5)\n\
	if(min      a[i]){\n\
	  //↓追加箇所(6)\n\
		        ;\n\
	}\n\
}\n\
 \n\
print(max);\n\
print(min);\
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
			HINT.hint("9_5");
			HINT.hint("9_6");
			HINT.hint("equal1");
			HINT.hint("for");
			HINT.hint("if");
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

