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

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:[1,1,1,0,0,2]}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:[1,1,0,1,1,2]}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:[1,0,1,1,2,2]}});
			window.exec({module:"input",command:"addMessage",params:["出力 abc","出力 ab","出力 ac","出力 bc","出力0","出力 abc"]});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ a b cの値が同じものを、文字として出力するプログラムを作成してください。\n\
\/\/ すべての値が違う場合には、0と出力してください。\n\
\/\/ \n\
\/\/ 例えば、a b cのすべてが同じ場合には、 abcとだけ出力されます。\n\
\/\/ aとbだけが同じ場合にはab、bとcだけが同じ場合にはbc、\n\
\/\/ aとcだけが同じ場合にはacとだけ出力されます。\n\
\/\/ \n\
\/\/ abcと表示は、print(\"abc\");とします。\n\
\/\/ if( )は、括弧内の条件に一致する場合には、次に続く{ }内を実行します。\n\
\/\/ ifの条件に一致しない場合には、elseがあればそれに続く{ }内を実行します。\n\
\/\/ ==は同じかどうかを比較、!=は違うかどうかを比較します。&&はかつを表します。\n\
\/\/ \n\
\/\/ 入力を変えてプログラムが正しく動作することを確認し、できたと思ったら手を挙げてください。\n\
\n\
\n\
"});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});

			window.exec({module:"code",command:"setEditable",params:[[{line:13,ch:0},{line:15,ch:0}]]});

			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"ここに書かれている指示に従って、プログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"この数字をクリックすると入力データが変わります。すべての出力が正しく表示されることを確認してください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この問題は自動で終わらないので、できたと思ったら手を挙げてください。",
				closeButton:true,
			});
		},
	]);
}

