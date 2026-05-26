new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。","違いますよ","違うんですってば","もう一回お願いします。"];
	var errorNo = 0;

	var self_n = problems.problems.push([
		function(){
			plib.log.add(scriptName+":startProblem");
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});

			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"main",command:"closeReq"});
			["input","code","output"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:self_n}});
			});

			plib.setExpectedOutputs(["出力 3","出力 2","出力 0"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:self_n,
				value:[
					{name:"a",initValue:["[1, 2, 2, 2]","[2, 2, 4, 4]","[3, 4, 5, 6]"]},
					{name:"sum",initValue:["0","0","0"]},
				],
				message:plib.getExpectedOutputs(),
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"sum"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:self_n}});

			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:9,ch:4},{line:9,ch:9}],[{line:10,ch:9},{line:10,ch:12}]],
				text:"\
\/\/ 入力データの中の 2 の数を数えるプログラムを作成してください。\n\
\/\/ 例えばa = [1, 2, 2, 2]の場合には、2が3つあるので、3と表示されます。\n\
\/\/ \n\
\/\/ ==は比較を表します。a[i]は、例えばiが0ならば、a[0]となり、\n\
\/\/ 配列変数aの最初の数字を表します。\n\
\/\/ iは、for{ }の中では、forが繰り返されるたびに数値が変わります。\n\
\/\/ 最初は0からスタートして、配列変数aの数-1まで変わります。\n\
 \n\
for(var i in a){\n\
	if(     ){\n\
		sum +=     ;\n\
	}\n\
}\n\
print(sum);\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});

			plib.startOutputCheck();
			problems.next();

		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem0").instruct({
				string:"すべての入力データで、正しく出力されることを確認してください。",
				closeButton:true,
				closedHandler:function(){
				},
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

