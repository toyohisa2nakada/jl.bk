new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。"];
	var errorNo = 0;

	var self_n = problems.problems.push([
		function(){
			plib.log.add(scriptName+":startProblem");
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});

			["input","code","output","watch","hint"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"main",command:"closeReq"});
			["input","code","output"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:scriptName}});
			});

			plib.setExpectedOutputs(["出力 3","出力 2","出力 0"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["[1,2,1,2,1]","[1,2,2,1]","[2,2]"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:16,ch:0},{line:17,ch:0}]],
				text:"\
\/\/ 配列変数aの数値の中に、1がいくつあるか出力するプログラムを作成してください。\n\
\/\/ 例えば、[1,2,1,2,1]の場合には、1が3つあるので、3と出力されればよいです。\n\
\/\/ \n\
\/\/ print(c);は、cという名前の変数の中身を出力します。\n\
\/\/ \n\
\/\/ for(var i in a){ }は、配列変数aの数字の個数だけ、{ }の中を繰り返し実行します。\n\
\/\/ { }の中で変数iには、何回目の実行かを表す数字が入っています。数は0から数えます。\n\
\/\/ また、a[i]と{ }の中に書くと、forの例えば1回目の実行の時はaの1番目の数字を\n\
\/\/ 表すようになります。\n\
\/\/ \n\
\/\/ var c; は、cという名前の変数を作成します。\n\
\/\/ c = 0;は、変数cに0を代入します。\n\
\/\/ c += 1;は、変数cの値を1つ増やします。\n\
\/\/ \n\
\/\/ if(v==1){ }は、変数vの中身が1の場合に、{ }の中を実行します。\n\
\/\/ \n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
//			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("for");
			HINT.hint("a");
			HINT.hint("a_i");

			plib.startOutputCheck();
			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){},
			});
		},
		function(){
			plib.log.add(scriptName+":finished_problem");
			window.exec({
				module:"main",
				command:"writeLog",
				params:{message:plib.log.text()}});
			plib.log.init();
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

