new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。"];
	var errorNo = 0;

	var self_n = problems.problems.push([
		function(){
			if(false === plib.checkLoginId()){
				alert("ログインに失敗しています。お手数をおかけしますが、右上の「noname」または「()」のボタンを押して、再ログインしてください。");
				$("#toolboxLoginName").instruct({
					string:"ここを押してください。",
					offsetX:-20,
					closeButton:true,
				});
				
			}else{
				problems.next();
			}
		},
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


			window.exec({module:"watch",command:"addValue",params:{name:"abs"}});
			window.exec({module:"watch",command:"addValue",params:{name:"comp"}});
			window.exec({module:"watch",command:"addValue",params:{name:"score"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ これは問題ではありません。\n\
\/\/ この授業の成績を決めるプログラムです。\n\
\/\/ 実際に「自分のデータ」を入力して試してみて下さい。\n\
\/\/ \n\
if(comp == -1){\n\
	print(\"次の問題に進む\");\n\
}else if(comp == 1){\n\
	var score = Math.round(100 * (15 - abs) / 15);\n\
	print(\"授業の点数は、\"+score);\n\
	if(abs>=5){\n\
		print(\"成績は、F\");\n\
	}else if(score>=90){\n\
		print(\"成績は、S\");\n\
	}else if(score>=80){\n\
		print(\"成績は、A\");\n\
	}else if(score>=70){\n\
		print(\"成績は、B\");\n\
	}else if(score>=60){\n\
		print(\"成績は、C\");\n\
	}else{\n\
		print(\"成績は、D\");\n\
	}\n\
}else{\n\
	print(\"成績は、クリアした問題数に比例します。\");\n\
}\
"}});

			window.exec({module:"input",command:"enable"});
//			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("abs_comp");
			HINT.hint("Math.round");
			HINT.hint("var");

			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"これは<span style=\"color:blue\">問題ではありません</span>。この授業の<span style=\"color:blue\">成績</span>を決めるプログラムです。実際に自分のデータを入力して試してみて下さい。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var hout = plib.getExpectedOutputHeader();
			var outstr = "次の問題に進む";
			plib.setExpectedOutputs([hout+"<br>"+outstr.replace(/ /g,"<br>")]);
			var instmsg = "15回目の授業が終わった時の「欠席回数」を予測して、abs変数にセットしてください。<br><br>また、出席したすべての授業で、時間内に最後の問題まで解いていた場合にはcomp変数に1を、そうではない場合には0をセットしてください。ただ初回授業の迷路プログラミングは除きます。<br><br>欠席2で、すべての授業で最後まで問題を解いた場合の例：abs = 2, comp = 1<br><br>このプログラムを終了して次に進みたい場合は、comp=-1ととして実行してください。";
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:instmsg,
				value:[
					{name:"abs",initValue:""},
					{name:"comp",initValue:""},
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
				string:"次の問題に進みます。",
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

