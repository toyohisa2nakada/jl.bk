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
			plib.setMessages([]);
			window.exec({module:"main",command:"closeReq"});
			["input","code"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:self_n}});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:["[1,  2, 3]","[6, 6, 6]","[4, 4, 4]"]}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:["[12, 6, 4]","[3, 4, 5]","[2, 3, 4]"]}});
			plib.setMessages(														  ["出力<br>1<br>1<br>1","出力<br>0<br>0<br>0","出力<br>0<br>1<br>0"]);
			window.exec({module:"input",command:"setInitialMessage",params:{pnumber:self_n,params:plib.getMessages()}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});

			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:8,ch:0},{line:10,ch:0}]],
				text:"\
\/\/ 入力の下に書かれている出力どおりになるプログラムを作成してください。\n\
\/\/ \n\
\/\/ print(\"1\"); は、1を出力します。\n\
\/\/ for(var i in a){ }は、配列aの数字分だけ{ } 内を繰り返します。\n\
\/\/  このとき変数iには、何個目の数字かを示す番号が入っています。\n\
\/\/  そのiは、最初の数字を0から数えます。\n\
\/\/ if(a[i] == 1){ }else{ }は、配列aのi番目の数字が1であるかを評価します。\n\
\/\/  ifの条件に一致する場合はifの後の{ }、一致しない場合はelseの後の{ }の中を実行します。\n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});

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
					plib.log.add("start_writing");
					problems.next();
				},
			});
		},
		function(){
			plib.log.add("start_or_retry_writing");
			window.exec({module:"code",command:"enable"});
			window.exec({module:"main",command:"closeReq"});
			plib.enableOutputCheck(true);
		},
		function(){
			window.exec({module:"code",command:"disable"});
			plib.enableOutputCheck(false);
			$("body").instruct({
				string:"スマフォで<span style='color:red'>JavaScriptコントローラー</span>を開き、"+
					"適切な入力をセットしてプログラムをテストして下さい。<br>"+
					"このスマフォでのテストは、できれば誰か他の人にやってもらってください。<br><br>"+
					"テストの間は、プログラムを変更することはできません。<br>"+
					"また正しい出力にならない場合、全ての入力データを確認するところからやり直しになります。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){
					window.exec({module:"main",command:"openReq"});
				},
			});
		},
		function(){
			plib.log.add("finished_problem");
			plib.enableOutputCheck(true);
			window.exec({module:"main",command:"closeReq"});
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
		function(){
			$("body").instruct({
				string:"このメッセージを「了解」を押して消して、プログラムとログイン名が見えるように印刷して提出してください。",
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

