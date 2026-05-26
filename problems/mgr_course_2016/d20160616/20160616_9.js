new function(){
	var errorMessages = ["違います。","違うんです。","違うんですってば","もう一度..."];
	var errorNo = 0;
	var messages = ["出力 b","出力 c","出力 a","出力 a","出力 c","出力 b"];
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
			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:[1,2,4,3,7,9]}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:[3,9,3,6,2,8]}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:[7,3,5,1,3,7]}});
/*
			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:[1,1,2,2,3,3]}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:[2,3,1,3,1,2]}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:[3,2,3,1,2,1]}});
*/
			window.exec({module:"input",command:"addMessage",params:messages});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ 中間値の入っている変数名を出力するプログラムを作成してください。\n\
\/\/ print(\"a\");とすると、aという文字を出力します。\n\
\/\/ && は「かつ」、||は「または」を表します。\n\
\/\/ a>bは、aがbより大きいか評価します。\n\
\/\/ \n\
\/\/ if, else if, elseの書き方のサンプルです。...は条件です。\n\
\/\/ if(...){\n\
\/\/     print(\"a\");\n\
\/\/ }else if(...){\n\
\/\/     print(\"b\");\n\
\/\/ }else{\n\
\/\/     print(\"c\");\n\
\/\/ }\n\
\n\
"});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});

			window.exec({module:"code",command:"setEditable",params:[[{line:13,ch:0},{line:15,ch:0}]]});

			initEvents();
			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
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
		function(){
			$("body").instruct({
				string:"このメッセージを「了解」を押して消して、プログラムとログイン名が見えるように印刷して提出してください。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2+200,
				targetEventToClose:null,
				closeButton:true,
			});
		},
	]);
}

