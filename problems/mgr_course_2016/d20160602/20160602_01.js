new function(){
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:2}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:0}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ ○を出力するようにしてください。\n\
\/\/ a, b の2文字は、使用することができません。\n\
\/\/ == は比較、 = は代入を表します。\n\
\n\
\n\
\n\
if(c == 9){\n\
	a = 1;\n\
	b = 2;\n\
}\n\
 \n\
if(a == 1 && b == 2 ){\n\
	print(\"○\");\n\
}else{\n\
	print(\"×\");\n\
}"});
			window.exec({module:"code",command:"setEditable",params:[[{line:3,ch:0},{line:5,ch:1}]]});

			window.exec({module:"input",command:"disable"});
			window.exec({module:"code",command:"enable"});
			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"この問題は、ここの数字を変更することはできません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"出力に ○ が表示されるように、プログラムを追加してください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"ただし、<span style='color:red'>a, b</span> の2文字は、使用できません。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"○",
				func:function(){
					var str = window.exec({module:"code",command:"getEditableString"});
					var ngstr = ["a","b"];
					var ck = true;
					for(var i=0;i<ngstr.length;i++){
						if(-1!==str.indexOf(ngstr[i])){
							alert(ngstr[i]+"の文字が使用されています。使用することはできません。");
							ck = false;
							break;
						}
					}
					if(ck === true){
						problems.next();
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

