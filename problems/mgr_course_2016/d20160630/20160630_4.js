new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。","違うんです。","違うんですってば","もう一度..."];
	var errorNo = 0;

	var exp_outputs = "";
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

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:"[4, 7, 3, 1, 2]"}});
			exp_outputs                                                               ="0\n1\n2\n3\n4";

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});

			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 出力を予想して入力し、実行ボタンを押してください。\n\
\/\/ \n\
\/\/ for(var i in a){ }は、配列aの数字分だけ{ } 内を繰り返します。\n\
\/\/  このとき変数iには、何個目の数字かを示す番号が入っています。\n\
\/\/  そのiは、最初の数字を0から数えます。\n\
 \n\
for(var i in a){\n\
	print(i);\n\
}\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"disable"});
			window.exec({module:"code",command:"setReadOnly"});
			window.exec({module:"output",command:"setInput"});

			problems.next();

		},
		function(){
			plib.log.add("instruct_check_outputInput");
			var w = $("#output")[0].contentWindow;
			w.$("#inputPanel").instruct({
				string:"出力される文字を入力して、実行してください。",
				closeButton:true,
				closedHandler:function(){
					$("#code")[0].contentWindow.$("#run").css("pointer-events","auto");
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var txt = $.trim(window.exec({module:"output",command:"getInput"}));
					if(exp_outputs!=txt){
						if(txt.length===0){
							var w = $("#output")[0].contentWindow;
							w.$("#inputPanel").instruct({
								string:"出力される文字を入力してから、実行してください。",
								closeButton:true,
							});
						}else{
							alert(errorMessages[(errorNo++)%errorMessages.length]);
						}
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

