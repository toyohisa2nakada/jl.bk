new function(){
	var errorMessages = ["違います。","違うんです。","違うんですってば","もう一度..."];
	var errorNo = 0;
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:2}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:3}});
			window.exec({module:"input",command:"addValue",params:{name:"d",initValue:4}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"d"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ 出力を予想して右で入力し、実行してください。\n\
\/\/ a = bは、bの値ををaに代入します。\n\
 \n\
b = a;\n\
d = c;\n\
 \n\
print(b + d);\
"});

			window.exec({module:"input",command:"disable"});
			window.exec({module:"code",command:"disable"});
			window.exec({module:"code",command:"setReadOnly"});

			window.exec({module:"output",command:"setInput"});

			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"ここの数字を変更することはできません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"このプログラムも変更できません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
			w.$("#run").css("pointer-events","auto");
		},
		function(){
			var w = $("#output")[0].contentWindow;
			w.$("#inputPanel").instruct({
				string:"出力される数字を予測して入力し、実行してください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var ans = $.trim(window.exec({module:"output",command:"getInput"}));
					if(ans.length===0){
						e.preventDefault = true;
						var w = $("#output")[0].contentWindow;
						w.$("#inputPanel").instruct({
							string:"出力される数字を予測して入力し、実行してください。",
							closeButton:true,
						});
					}
				},
			}});
			window.exec({module:"output",command:"setEvent",params:{
				name:"beforePrint",func:function(params,e){
					console.log(e);
					if(e.text==$.trim(window.exec({module:"output",command:"getInput"}))){
						problems.next();
					}else{
						e.preventDefault = true;
						alert(errorMessages[errorNo++]);
					}
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

