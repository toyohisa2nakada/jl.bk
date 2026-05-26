new function(){
	var className = UUID.uuid();
	problems.problems.push([
		function(){
			window.exec({module:"input",command:"clear"});
			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:2}});

			window.exec({module:"watch",command:"clear"});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ =は右の値を左にコピーします。\n\
\/\/ 右に数字ではなく変数がある場合には、\n\
\/\/ その変数の中の数値を、左の変数にコピーします。\n\
 \n\
a = b;\n\
if(a == 5){\n\
	a = 1;\n\
	b = 2;\n\
}\n\
if(a == 1 && b == 2 ){\n\
	print(\"○\");\n\
}else{\n\
	print(\"×\");\n\
}"});
			window.exec({module:"code",command:"setReadOnly"});
			window.exec({module:"code",command:"clearEvent"});

			window.exec({module:"output",command:"clearEvent"});
/*
			$("#input").css("pointer-events","auto");
			$("#code").css("pointer-events","auto");
*/
			["input","code"].forEach(function(elem){
				window.exec({module:elem,command:"enable"});
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
				string:"この変数の初期化部分だけを変更して、右側に○が表示されるようにしてください。変更をしたら、実行ボタンを押してください。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"○",
				func:function(){
					var str = window.exec({module:"code",command:"getEditableString"});
					var okstr = ["5"];
					okstr.forEach(function(elem){
						str = str.replace(new RegExp(elem,"g"),"");
					});
					str = str.replace(/\s/g,"");
//					console.log("["+str+"]");
					if(str.length===0){
						problems.next();
					}else{
						alert(okstr.join()+" 以外の文字は使用しないでください。");
					}
				},
//				loop:false,
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
