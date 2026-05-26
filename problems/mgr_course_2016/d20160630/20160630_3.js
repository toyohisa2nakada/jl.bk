new function(){
	var scriptName = plib.getScriptName();
	var self_n = problems.problems.push([
		function(){
			plib.log.init();
			plib.log.add("startProblem");
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});

			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			["input","code"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:self_n}});
			});
			plib.setMessages([]);
			window.exec({module:"main",command:"closeReq"});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:["[10, 2, 3]","[5, 5, 5]","[5, 0, 1]"]}});
			plib.setMessages(														  ["出力<br>5","出力<br>-5","出力<br>4"]);
			window.exec({module:"input",command:"setInitialMessage",params:{pnumber:self_n,params:plib.getMessages()}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});

			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:0},{line:9,ch:0}]],
				text:"\
\/\/ 入力の下に書かれている出力どおりになるプログラムを作成してください。\n\
\/\/ \n\
\/\/ print(\"1\"); は、1を出力します。\n\
\/\/ a[0]は、配列aの最初の数字を表します。\n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"disable"});

			plib.initEvents();
			problems.next();

		},
		function(){
			plib.log.add("instruct_check_program_comment");
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
		function(){
			plib.log.add("instruct_check_input");
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem0").instruct({
				string:"すべての入力データで、正しく出力されることを確認してください。",
				closeButton:true,
				closedHandler:function(){
					window.exec({module:"code",command:"enable"});
					plib.log.add("start_writing");
				},
			});
		},
		function(){
			plib.log.add("finished_problem");
			window.exec({
				module:"main",
				command:"writeLog",
				params:{message:"scriptName:"+scriptName+","+plib.log.text()}});
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

