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

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 問題文は、左の入力のところにあります。\n\
\/\/ \n\
for(var i in a){\n\
	print(a[i]);\n\
}\
"}});

			window.exec({module:"input",command:"enable"});
//			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			HINT.setScriptName(scriptName);
			HINT.hint("re_explain");
			HINT.hint("a");
			HINT.hint("a_i");
			HINT.hint("for");

			problems.next();
		},
		function(){
			plib.setExpectedOutputs(["出力<br>1<br>2<br>3"]);
			var instmsg = "[1,2,3] と半角で括弧[ ]を含めて入力し、実行してください。<br><br> 1つの変数に複数の数字を記録するには、[ ] で囲み、数字をカンマ(,)で区切ります。<br><br>成功すると次の指示が表示されます。";
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:instmsg,
				value:[
					{name:"a",initValue:""},
				],
			}});
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:instmsg,
				closeButton:true,
			});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",
				func:function(params,e){
					var out = window.exec({module:"output",command:"outputs"});
					if(plib.checkOutput(out,plib.getExpectedOutputs()[0])===true){
						problems.next();
					}
				}
			}});
		},
		function(){
			var w = $("#output")[0].contentWindow;
			w.$("#panel").instruct({
				string:"1 2 3と表示されたことを確認してください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"このプログラムの「for」は、繰り返し処理といって、変数aの中にある数字の個数分だけ、つまり3回、{ }の中の処理を繰り返します。{ }の中にprintが1つあるので、3個の数字が出力されています。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			["code","output"].forEach(function(elem){
				window.exec({module:elem,command:"clearEvent"});
			});
			plib.setExpectedOutputs(["出力<br>3<br>5<br>6<br>8"]);
			var instmsg = "次は[1,2,3]を消して、[3,5,6,8] と入力して実行してください。<br><br>成功すると、次の指示が表示されます。";
			window.exec({module:"input",command:"setMessage",params:{
				text:instmsg,
			}});
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:instmsg,
				closeButton:true,
			});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",
				func:function(params,e){
					var out = window.exec({module:"output",command:"outputs"});
					if(plib.checkOutput(out,plib.getExpectedOutputs()[0])===true){
						problems.next();
					}
				}
			}});
		},
		function(){
			var w = $("#output")[0].contentWindow;
			w.$("#panel").instruct({
				string:"printが4回実行されて、4つの数字が出力されています。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"printの出力対象であるa[i]は、変数aのi番目の数字を表します。iは、0から順に、繰り返すたびに1つずつ数字が増えます。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			["code","output"].forEach(function(elem){
				window.exec({module:elem,command:"clearEvent"});
			});
			plib.setExpectedOutputs(["出力<br>1<br>2<br>4<br>6<br>3"]);
			var instmsg = "1 2 4 6 3と表示する入力データをセットしてください。";
			window.exec({module:"input",command:"setMessage",params:{
				text:instmsg,
			}});
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"それでは問題です。<br>"+instmsg,
				closeButton:true,
			});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",
				func:function(params,e){
					var out = window.exec({module:"output",command:"outputs"});
					if(plib.checkOutput(out,plib.getExpectedOutputs()[0])===true){
						problems.next();
					}
				}
			}});
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

