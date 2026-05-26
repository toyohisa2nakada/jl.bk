new function(){
	var errorMsgNo = 0;
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:2}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ 実行ボタンを押して、予想される出力数値を入力してください。\n\
\/\/ b = b+1 は、bの値は1だけ足されます。\n\
 \n\
b = a + 5;\n\
 \n\
b = b + 1;\n\
 \n\
a = b + 1;\n\
 \n\
print(a);\n\
"});
			window.exec({module:"code",command:"setReadOnly"});

			["input","code"].forEach(function(elem){
				window.exec({module:elem,command:"disable"});
			});
			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この問題では、こちら側のプログラム部分を変更することができません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"この入力データについても変更をすることができません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#output")[0].contentWindow;
			w.$("#panel").instruct({
				string:"ここに出力される数字を予想し、実行ボタンを押してください。",
				closeButton:true,
				closedHandler:function(){
					$("#code")[0].contentWindow.$("#run").css("pointer-events","auto");
				},
			});
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var txt = window.prompt("出力される文字を入力してください。");
					if("8"!=txt){
						if(txt !== null){
							var msgs = ["間違いです。","間違いなんです。","あっていないんです。","もう一度、お願いします。"];
							alert(msgs[(errorMsgNo++)%msgs.length]);
						}
						e.preventDefault = true;
					}
				},
			}});
			window.exec({module:"output",command:"setEvent",params:{
				name:"8",
				func:function(){
					problems.next();
				},
			}});
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
