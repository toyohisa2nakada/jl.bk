new function(){
	var scriptName = plib.getScriptName();
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

			window.exec({module:"input",command:"addValue",params:{name:"name",initValue:"",inputCheck:"string"}});
			window.exec({module:"code",command:"setInitialText",params:{
				text:""
			}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"code",command:"enable"});

			window.exec({module:"main",command:"openReq"});

			problems.next();
		},
		function(){
			$("body").instruct({
				string:"この問題では、自由にプログラムを作成してください。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			$("body").instruct({
				string:"作成したプログラムは、スマートフォンからも実行することができます。<br>"+
					"完成したプログラムを、できれば誰か他の人に試してもらってください。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			if($("#youtube").length===0){
				$("#panel_top_left").append("<a href='https://www.youtube.com/embed/vRtGOv0mtts?rel=0' "+
					"class='youtube' id='youtube' style='display:inline-block;margin-top:10px;'>スマフォで実行の説明動画</a>");
			}
			$("#youtube").css("pointer-events","none");
			$(".youtube").colorbox({
				iframe:true,
				innerWidth:560,
				innerHeight:315
			});
			$("#youtube").instruct({
				string:"スマフォでの実行について、分からなければこのボタンを押して説明動画を見てください。<br/>"+
					"動画は、音声で説明しているため、ヘッドフォンを使ってください。<br/><br/>"+
					"全ての説明が終わったら、動画ボタンをクリックすることができます。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			$("body").instruct({
				string:"この課題の終了は、自分自身で決めてください。<br>"+
					"プログラムが完成したと思ったら、画面を印刷して提出してください。<br><br>"+
					"提出したら、本日の演習は終わりです。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){
					$("#youtube").css("pointer-events","auto");
					plib.log.add("finished_problem");
					window.exec({
						module:"main",
						command:"writeLog",
						params:{message:"scriptName:"+scriptName+","+plib.log.text()}
					});
				},
			});
		},
	]);
}

