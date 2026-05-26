new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。","違うやん（大阪風）。","違うじゃき（高知風）","違うじゃん（横浜風）","違うたい（博多風）","違うだぎゃー（名古屋風）","違うにゃ（猫風）"];
	var errorNo = 0;

	var self_n = problems.problems.push([
		function(){
			plib.log.init();
			plib.log.add("startProblem");
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});

			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"main",command:"closeReq"});
			["input","code"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:self_n}});
			});

			window.exec({module:"input",command:"addValue",params:{name:"name",initValue:["\"新潟\"","\"大阪\"","\"福岡\""]}});
			plib.setExpectedOutputs(						["出力 新潟はお米が有名です。","出力 大阪はたこ焼きが有名です。","出力 福岡はめんたいこが有名です。"]);
			window.exec({module:"input",command:"setInitialMessage",params:{pnumber:self_n,params:plib.getExpectedOutputs()}});

			window.exec({module:"watch",command:"addValue",params:{name:"name"}});

			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:3,ch:0},{line:4,ch:0}]],
				text:"\
\/\/ 入力の下に書かれている出力どおりになるプログラムを作成してください。\n\
\/\/ \n\
\/\/ print(\"お米\"); は、「お米」を出力します。\n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"enable"});

			plib.startOutputCheck();
			problems.next();

		},
		function(){
			plib.log.add("instruct_check_program_comment");
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
		function(){
			plib.log.add("instruct_check_input");
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem0").instruct({
				string:"すべての入力データで、正しく出力されることを確認してください。",
				closeButton:true,
				closedHandler:function(){
					plib.log.add("start_writing");
				},
			});
		},
		function(){
			plib.log.add("finished_problem");
			window.exec({
				module:"main",
				command:"writeLog",
				params:{message:"scriptName:"+scriptName+","+plib.log.text()}});
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

