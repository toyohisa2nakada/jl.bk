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

			plib.setExpectedOutputs(["出力 4","出力 12","出力 0","出力 53"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:self_n,
				value:[
					{name:"a",initValue:["[1, 2, 3]","[2, 3, 4, 5]","[2]","[1,2,3,4,5,6,7,8,9,10]"]},
					{name:"sum",initValue:["0","0","0","0"]},
				],
				message:plib.getExpectedOutputs(),
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"sum"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:self_n}});

			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:0},{line:7,ch:0}]],
				text:"\
\/\/ 入力データのうち、「2以外」を足し合わせた数字を出力するプログラムを作成してください。\n\
\/\/ 例えばa = [1, 2, 3]の場合には、2以外の 1と3を足した、4が出力されれば良いです。\n\
\/\/ \n\
\/\/ a != bは、aの値とbの値が違うかどうかを調べます。if(a!=b){ }とすると、\n\
\/\/ aとbの値が違うときに、{ }の中を実行します。\n\
\/\/ \n\
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

