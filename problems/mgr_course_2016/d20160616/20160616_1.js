new function(){
	var errorMessages = ["違います。","違うんです。","違うんですってば","もう一度..."];
	var errorNo = 0;
	var messages = ["出力 p","出力 q","出力 r"];
	var messageChanged = false;
	function clearAllMessages(){
		if(messageChanged===false){
			return;
		}
		messages.forEach(function(elem,i){
			window.exec({module:"input",command:"setMessage",params:{
				index:i,
				text:elem,
			}});
		});
		messageChanged = false;
	}
	function initEvents(){
		window.exec({module:"code",command:"setEvent",params:{
			name:"changed",
			func:function(params){
				clearAllMessages();
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"beforeStart",
			func:function(params){
				window.exec({module:"input",command:"disableDatasetPanel"});
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"afterEnd",
			func:function(params){
				window.exec({module:"input",command:"enableDatasetPanel"});
			},
		}});
		window.exec({module:"output",command:"setEvent",params:{
			name:"afterPrint",
			func:function(params){
				var out = window.exec({module:"output",command:"text"});
				var msg = window.exec({module:"input",command:"getMessage"});
				var exp = msg.match(/出力\s*(.*)/)[1];
				if(out===exp){
					window.exec({module:"input",command:"setMessage",params:{
						text:msg+" <span style='color:red'>ok</span>",
					}});
					messageChanged = true;

					if(false === window.exec({module:"input",command:"getMessages"}).some(function(elem){
						return elem.indexOf("ok")===-1;
					})){
						problems.next();
					}
				}
			},
		}});
	}
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:[0,1,2]}});
			window.exec({module:"input",command:"addMessage",params:messages});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ 全ての入力で、期待される出力がされることを確認してください。\n\
\/\/ \n\
\/\/ else ifは、その前のifの条件に一致せず、\n\
\/\/ else ifの条件に一致する場合に、\n\
\/\/ { } の中を実行します。\n\
 \n\
if(a == 0){\n\
	print(\"p\");\n\
}else if(a == 1){\n\
	print(\"q\");\n\
}else{\n\
	print(\"r\");\n\
}\
"});

			window.exec({module:"input",command:"disable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"disable"});
			window.exec({module:"code",command:"setReadOnly"});

			initEvents();

			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem0").instruct({
				string:"3つの入力データがあり、そのうちの1番目が、今は選択されています。",
				offsetX:-20,
				offsetY:-10,
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#message").instruct({
				string:"それぞれの入力データには、期待される出力があります。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$("#run").css("pointer-events","auto");
			w.$("#run").instruct({
				string:"まずは、実行してみてください。",
				closedHandler:function(){
					w.$("#run").css("pointer-events","none");
					w.$("#run *").css("pointer-events","none");
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"output",command:"setEvent",params:{
				name:"p",
				loop:false,
				func:function(){
					var w = $("#output")[0].contentWindow;
					w.$("#panel").instruct({
						string:"pと表示されていることを確認してください。",
						closeButton:true,
						closedHandler:function(){
							problems.next();
						},
					});
				},
			}});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#message").instruct({
				string:"期待される出力と、実際の出力が一致すると<span style='color:red'>ok</span>と表示されます。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem1").instruct({
				string:"入力データの2を押してみてください。",
				offsetX:-20,
				offsetY:-10,
				closeButton:false,
				closedHandler:function(){
					window.exec({module:"input",command:"disable"});
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$("#run").css("pointer-events","auto");
			w.$("#run").instruct({
				string:"再度、実行してみてください。",
				closedHandler:function(){
					w.$("#run").css("pointer-events","none");
					w.$("#run *").css("pointer-events","none");
				},
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"q",
				loop:false,
				func:function(){problems.next();},
			}});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#message").instruct({
				string:"期待される出力と、実際の出力が一致したので<span style='color:red'>ok</span>と表示されています。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"入力データが複数ある問題は、全てにおいて<span style='color:red'>ok</span>が表示される必要があります。",
				arrow:false,
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"ただし、ここのプログラムを1文字でも修正するとすべての<span style='color:red'>ok</span>は消去されるので注意してください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem2").instruct({
				string:"それでは、最後の入力データ3を実行して、この問題を終わらせてください。",
				offsetX:-20,
				offsetY:-10,
				closeButton:false,
				closedHandler:function(){
					$("#code")[0].contentWindow.$("#run").css("pointer-events","auto");
					window.exec({module:"input",command:"enable"});
					window.exec({module:"input",command:"setReadOnly"});
				},
			});
		},
		function(){
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

