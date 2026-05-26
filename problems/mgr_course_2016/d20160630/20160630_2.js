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

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:"[5, 4, 6, 7, 2]"}});
			exp_outputs                                                               ="6\n4\n5\n9";

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});

			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 出力を予想して入力し、実行ボタンを押してください。\n\
\/\/ \n\
\/\/ 変数aは、配列と呼ばれ、複数の数字を格納できます。\n\
\/\/ 格納したそれぞれの数字は、a[0]のように[]の中に何番目の数字かを指定して、\n\
\/\/ 使用することができます。\n\
\/\/ ただし[]内の数字は 0 から始まります。\n\
\/\/ よって例えば3番目の数字を使用したい時は、a[3]ではなく、a[2]とします。\n\
 \n\
print(a[2]);\n\
print(a[1]);\n\
print(a[0]);\n\
print(a[3]+a[4]);\n\
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
				string:"出力される文字を入力して、実行してください。数字は<span style='color:red'>改行</span>で区切ってください。",
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

