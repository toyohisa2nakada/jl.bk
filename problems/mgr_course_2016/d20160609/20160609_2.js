new function(){
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:2}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:0}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ プログラムを追加して、○を表示するようにしてください。\n\
\/\/ 使用できる文字は、 a b c = ; (セミコロン)　の5つです。\n\
\n\
\n\
\n\
if(a == 1 && b == 2 ){\n\
	print(\"○\");\n\
}else{\n\
	print(\"×\");\n\
}"});
			window.exec({module:"code",command:"setEditable",params:[[{line:2,ch:0},{line:4,ch:1}]]});

			window.exec({module:"input",command:"disable"});
			window.exec({module:"code",command:"enable"});
			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"この問題でも、ここの数字を変更することはできません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"プログラムを追加して、右側に○が表示されるようにしてください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"ただし使用できる文字は、<span style=\"color:red\">a b c = ;</span>の5つのみです。同じ文字を何回も使用して構いません。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"○",
				func:function(){
					var str = window.exec({module:"code",command:"getEditableString"});
					var okstr = ["a","b","c","=",";"];
					okstr.forEach(function(elem){
						str = str.replace(new RegExp(elem,"g"),"");
					});
					str = str.replace(/\s/g,"");
					if(str.length===0){
						problems.next();
					}else{
						alert(okstr.join(" ")+" 以外の文字は使用しないでください。");
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

