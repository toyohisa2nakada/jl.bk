new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。"];
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
				window.exec({module:elem,command:"autoSave",params:{pnumber:scriptName}});
			});

			plib.setExpectedOutputs(["出力 10","出力 0","出力 11"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["[1,2,3,4,5]","[5,5,5,5,5]","[1,5,10]"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:8,ch:0},{line:10,ch:0}]],
				text:"\
\/\/ 変数aのすべての数字を合計した数を出力するプログラムを作成してください。\n\
\/\/ ただし、5だけは、除外して合計を計算してください。\n\
\/\/ \n\
\/\/ for(var i in a){ }は、配列変数aの数字の個数分だけ{ }の中を繰り返します。\n\
\/\/ forの{ }の中で変数iは、何回目の繰り返しかを示す数字が入っています。この\n\
\/\/ 数字は0から順番に数えます。\n\
\/\/ var sum = 0;は、変数sumを作成して0を代入します。\n\
\/\/ \n\
\n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
//			window.exec({module:"code",command:"setReadOnly"});

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

