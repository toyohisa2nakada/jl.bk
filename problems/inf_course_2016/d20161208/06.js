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

			plib.setExpectedOutputs(["出力 5","出力 6","出力 7"]);
			window.exec({module:"input",command:"setInitial",params:{
				pnumber:scriptName,
				message:plib.getExpectedOutputs(),
				value:[
					{name:"a",initValue:["1","3","5"]},
					{name:"b",initValue:["4","3","2"]},
				],
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:scriptName}});
			window.exec({module:"scripts",command:"setScriptName",params:scriptName});
			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:3,ch:6},{line:3,ch:10}]],
				text:"\
\/\/ 正しく出力するプログラムを作成してください。\n\
\/\/ ただし、使用できる文字は、a b + - * / だけです。\n\
 \n\
print(    );\n\
 \
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});
//			window.exec({module:"code",command:"setReadOnly"});

			plib.startOutputCheck();
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var str = window.exec({module:"code",command:"getEditableString"});
					var okstr = ["a","b","\\+","\\-","\\*","\\/"];
					okstr.forEach(function(elem){
						str = str.replace(new RegExp(elem,"g"),"");
					});
					str = str.replace(/\s/g,"");
					if(str.length!==0){
						alert(okstr.join(" ").replace(new RegExp("\\\\","g"),"")+" 以外の文字は使用しないでください。");
						e.preventDefault = true;
					}
				}
			}});
			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この問題では、プログラムを作成します。書き込み可能な部分に適切なプログラムを追加して、この指示に従ったプログラムを完成させてください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#datasetPanel").instruct({
				string:"また、ここに複数の入力データセットがあります。クリックしてデータセットを変更し、すべてのデータで正しく出力されることを確認する必要があります。",
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

