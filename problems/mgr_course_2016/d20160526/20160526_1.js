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
\/\/ a, bは変数、==は比較、printは右に文字を表示する関数です。\n\
\/\/ if(条件){ }else{ }は、条件に一致するときに最初の { }の中を、\n\
\/\/ 一致しないときにelseの後の{ }の中を実行します。\n\
\/\/ && は、かつ、です。\n\
 \n\
if(a == 1 && b == 2 ){\n\
	print(\"○\");\n\
}else{\n\
	print(\"×\");\n\
}"});
			window.exec({module:"code",command:"setEditable",params:[[{line:5,ch:7},{line:5,ch:10}],[{line:5,ch:17},{line:5,ch:20}]]});
			window.exec({module:"code",command:"clearEvent"});

			window.exec({module:"output",command:"clearEvent"});

			["code","input"].forEach(function(elem){
				window.exec({module:elem,command:"disable"});
			});
			problems.next();
		},
		function(){
//			$("#input").css("pointer-events","none");
			window.exec({module:"code",command:"disable"});
			var w = $("#code")[0].contentWindow;
			w.$("#run").css("pointer-events","auto");
			w.$("#run").instruct({
				string:"まずはこのボタンを押してみてください。",
			});
			window.exec({
				module:"code",command:"setEvent",params:{
					name:"afterEnd",
					func:function(params){
/*
						$("#input").css("pointer-events","auto");
						w.$("#contents").css("pointer-events","auto");
*/
						w.$("#run").css("pointer-events","none");
						problems.next();
						return false;
					},
					class:className,
				}
			});
		},
		function(){
			var w = $("#output")[0].contentWindow;
			setTimeout(function(){
				w.$("#panel").instruct({
					string:"ここに○が表示されていることを確認してください。",
					offsetX:-15,
					closeButton:true,
					closedHandler:function(){
						problems.next();
					},
				});
			},1000);
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$(window.exec({module:"input",command:"element",params:"a"})).css("pointer-events","auto");
			setTimeout(function(){
				w.$("#input").instruct({
					string:"この1を3に変えてみてください。",
					closeButton:true,
					closedHandler:function(){
						if(window.exec({module:"input",command:"val",params:"a"})==3){
							problems.next();
						}else{
							window.exec({
								module:"input",
								command:"setEvent",
								params:{
									name:"a",
									func:function(a){
										if(window.exec({module:"input",command:"val",params:"a"})==3){
											window.exec({module:"input",command:"clearEvent",params:"a"});
											problems.next();
										}
									},
								},
							});
						}
					},
					targetEventToClose:null,
				})
			},1000);
		},
		function(){
			$("#input")[0].contentWindow.$(window.exec({module:"input",command:"element",params:"a"})).css("pointer-events","none");
//			$("#code").css("pointer-events","auto");
			var w = $("#code")[0].contentWindow;
			w.$("#run").css("pointer-events","auto");
			setTimeout(function(){
				w.$("#run").instruct({
					string:"もう一度、この実行ボタンを押してください。",
					//closeButton:true,
				})
			},1000);
			window.exec({
				module:"code",command:"setEvent",params:{
					name:"afterEnd",
					func:function(params){
//						w.$("#contents").css("pointer-events","auto");
						w.$("#run").css("pointer-events","none");
						problems.next();
						return false;
					},
					class:className,
				}
			});
		},
		function(){
			var w = $("#output")[0].contentWindow;
			setTimeout(function(){
				w.$("#panel").instruct({
					string:"次はここに×が表示されていることを確認してください。",
					offsetX:-15,
					closeButton:true,
					closedHandler:function(){
						problems.next();
					},
				});
			},1000);
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"この問題では、これ以降はこの数字を変更することはできません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"code",command:"enable"});
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
