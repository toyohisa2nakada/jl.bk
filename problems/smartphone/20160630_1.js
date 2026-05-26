new function(){
	var scriptName = plib.getScriptName();
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

			plib.setExpectedOutputs(["出力<br>2","出力<br>2"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["1","2"]},
					{name:"b",initValue:["2","1"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:0},{line:10,ch:0}]],
				text:"\
\/\/ 変数aとbのうち大きい方の値を出力してください。\n\
\/\/ \n\
\/\/ if(a > b){ }else{ }は、変数aとbを比較してaが大きい場合にはifの後ろの{ }を、\n\
\/\/ そうではない場合にはelseの後ろの{ }の中を実行します。\n\
\/\/ \n\
\/\/ print(a);は、変数aの中身を出力します。\n\
\n\
\n\
\n\
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
			window.exec({module:"code",command:"disable"});
			plib.enableOutputCheck(false);
			$("body").instruct({
				string:"スマフォで<span style='color:red'>JavaScriptコントローラー</span>を開き、"+
					"適切な入力をセットしてプログラムをテストして下さい。<br>"+
					"このスマフォでのテストは、できれば誰か他の人にやってもらってください。<br><br>"+
					"テストの間は、プログラムを変更することはできません。<br>"+
					"また正しい出力にならない場合、全ての入力データを確認するところからやり直しになります。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){
					window.exec({module:"main",command:"openReq"});
				},
			});
		},
		function(){
			window.exec({module:"main",command:"closeReq"});
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

