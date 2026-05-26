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
				"出力<br>25<br>0",
				"出力<br>24<br>1",
				"出力<br>16<br>9",
				"出力<br>0<br>25",
			]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"c",initValue:[0,1,6,10]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"sum1"}});
			window.exec({module:"watch",command:"addValue",params:{name:"sum2"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[
					[{line:6,ch:11},{line:6,ch:14}],
					[{line:10,ch:6},{line:10,ch:9}],
					[{line:12,ch:7},{line:12,ch:10}],
					[{line:15,ch:10},{line:15,ch:14}],
				],
				text:"\
\/\/ それぞれの入力に対して正しく出力するプログラムを完成させてください。\n\
\/\/ プログラムを追加する箇所は、「4か所」です。\n\
\/\/ \n\
var a = [1,3,5,7,9];\n\
var sum1 = 0;\n\
         //↓追加箇所(1)\n\
var sum2 =    ;\n\
 \n\
for(var i in a){\n\
       //↓追加箇所(2)\n\
	if(c     a[i]){\n\
           //↓追加箇所(3)\n\
		sum1     a[i];\n\
	}else{\n\
              //↓追加箇所(4)\n\
		sum2 +=     ;\n\
	}\n\
}\n\
 \n\
print(sum1);\n\
print(sum2);\
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
			HINT.hint("plus_equal");
			HINT.hint("equal1");
			HINT.hint("for");
			HINT.hint("if");
			HINT.hint("a_i");
			HINT.hint("equal2");
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

