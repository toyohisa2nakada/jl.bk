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

			plib.setExpectedOutputs(["出力 ABd","出力 dAp","出力 BCCd"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:self_n,
				value:[
					{name:"a",initValue:["[\"a\",\"b\",\"d\"]","[\"d\",\"a\",\"p\"]","[\"b\",\"c\",\"c\",\"d\"]"]},
					{name:"msg",initValue:["\"\"","\"\"","\"\""]},
				],
				message:plib.getExpectedOutputs(),
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"msg"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:self_n}});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:0},{line:8,ch:0}]],
				text:"\
\/\/ 配列変数aのa,b,cの小文字を、大文字にして出力するプログラムを作成してください。\n\
\/\/ a,b,c以外の小文字や大文字は、そのまま出力するようにしてください。\n\
\/\/ 例えばa=[\"a\",\"b\",\"d\"]の場合には、最初のaとbが大文字になってABdと出力されます。\n\
\/\/ \n\
\/\/ if(v==1){ }else if(v==2){ }else{ }は、変数vが1の時には最初の{ }の中を、\n\
\/\/ 2のときは2つ目の{ }、それ以外の数値の時はelseの後の{ }の中を実行します。\n\
\n\
\n\
\n\
print(msg);\
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
				closedHandler:function(){},
			});
		},
/*
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem0").instruct({
				string:"すべての入力データで、正しく出力されることを確認してください。",
				closeButton:true,
				closedHandler:function(){
					plib.log.add("start_writing");
				},
			});
		},
*/
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

