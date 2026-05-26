new function(){
	var className = UUID.uuid();
	problems.problems.push([
		function(){
			window.exec({module:"input",command:"clear"});
			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:5}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:6}});

			window.exec({module:"watch",command:"clear"});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ =（イコール1つ）は、変数へ値を代入します。\n\
\/\/ ==（イコール2つ）は、2つの変数の中身を比較します。\n\
 \n\
b =    ;\n\
if(a == b){\n\
	a = 1;\n\
	b = 2;\n\
}\n\
if(a == 1 && b == 2 ){\n\
	print(\"○\");\n\
}else{\n\
	print(\"×\");\n\
}"});
			window.exec({module:"code",command:"setEditable",params:[[{line:3,ch:4},{line:3,ch:7}]]});
			window.exec({module:"code",command:"clearEvent"});

			window.exec({module:"output",command:"clearEvent"});
/*
			$("#input").css("pointer-events","none");
			$("#code").css("pointer-events","auto");
*/
			window.exec({module:"input",command:"disable"});
			window.exec({module:"code",command:"enable"});
			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"この問題では、最初から最後までここの数字を変更することはできません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"灰色になっていない書き換え可能なところだけを適切に変更して、右側に○が表示されるようにしてください。変更をしたら実行ボタンを押して確認してみてください。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"○",
				func:function(){
					problems.next();
				},
				class:className,
			}});
		},
		function(){
			$("body").instruct({
				string:"おめでとうございます !!",
				align:'center',
				arrow:false,
//				afterTag:scoreImage(getCurrentScene().getScore()),
				font_size:'72px',
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2+200,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		}
	]);
}


/*
	events.add({name:"beforeStep",func:function(params){console.log("beforeStep params=\""+params+"\"");return true;},params:"no params"});
	events.add({name:"afterStep",func:function(params){console.log("afterStep params=\""+params+"\"");return true;},params:"no! params"});
*/
