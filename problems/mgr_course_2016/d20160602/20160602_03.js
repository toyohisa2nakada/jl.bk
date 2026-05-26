new function(){
	var className = UUID.uuid();
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:2}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:0}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ 10を出力するようにしてください。\n\
\/\/ = は代入、 + は足し算、 print(変数)は、変数に入っている数字を出力します。\n\
 \n\
c = a + b;\n\
print(c);\n\
"});
			window.exec({module:"code",command:"setReadOnly"});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"code",command:"enable"});

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
				string:"出力に 10 と表示されるように、ここの数字を変えてください。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"10",
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
