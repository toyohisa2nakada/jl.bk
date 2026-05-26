new function(){
	var errorMessages = ["違います。","違うんです。","違うんですってば","もう一度..."];
	var errorNo = 0;

	var currentScriptName = (function(){
		var name = "";
		if(document.currentScript){
			name = document.currentScript.src;
		}else{
			var scripts = document.getElementsByTagName("script");
			name = scripts[scripts.length-1].src;
		}
		return name.match(/([^\\/]*$)/)[1];
	})();

	var messages = [];
	var messageChanged = false;
	function clearAllMessages(){
		if(messageChanged===false){
			return;
		}
		messages.forEach(function(elem,i){
			window.exec({module:"input",command:"setMessage",params:{
				index:i,
				text:elem,
			}});
		});
		messageChanged = false;
	}
	function initEvents(){
		window.exec({module:"code",command:"setEvent",params:{
			name:"changed",
			func:function(params){
				clearAllMessages();
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"beforeStart",
			func:function(params){
				window.exec({module:"input",command:"disableDatasetPanel"});
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"afterEnd",
			func:function(params){
				window.exec({module:"input",command:"enableDatasetPanel"});
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"afterEnd",
			func:function(params){
				var out = window.exec({module:"output",command:"outputs"});
				var msg = window.exec({module:"input",command:"getMessage"});
				var exp = msg.match(/出力<br>\s*(.*)/)[1];
				if(out===exp){
					window.exec({module:"input",command:"setMessage",params:{
						text:msg+" <span style='color:red'>ok</span>",
					}});
					messageChanged = true;

					if(false === window.exec({module:"input",command:"getMessages"}).some(function(elem){
						return elem.indexOf("ok")===-1;
					})){
						problems.next();
					}
				}
			},
		}});
	}
	var log = (new function(){
		var self = this;
		self.labels = [];
		self.add = function(label){
			self.labels.push({name:label,time:(new Date()).getTime()});
		};
		self.text = function(){
			if(self.labels.length===0){
				return "";
			}
			var stime = self.labels[0].time;
			var str = "";
			self.labels.forEach(function(elem){
				str = str.length===0?str:(str+",");
				str += elem.name+":"+(elem.time-stime);
			});
			return str;
		};
	});

	var self_n = problems.problems.push([
		function(){
			log.add("startProblem");

			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			["input","code"].forEach(function(elem){
				window.exec({module:elem,command:"autoSave",params:{pnumber:self_n}});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:["[1,2,3]","[5,7,4]","[-5,-2,3]"]}});
			messages = 																  ["出力<br>1<br>2<br>3","出力<br>5<br>7<br>4","出力<br>-5<br>-2<br>3"];
			window.exec({module:"input",command:"setInitialMessage",params:{pnumber:self_n,params:messages}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});

			window.exec({module:"code",command:"setInitialText",params:{
				setEditable:[[{line:6,ch:0},{line:8,ch:0}]],
				text:"\
\/\/ 次のプログラムを入力して、実行してみてください。\n\
\/\/ ただし、\/\/は必要ありません。\/\/は、プログラム内にコメントを記載するときに使用します。\n\
\/\/ \n\
\/\/ print(a[0]);\n\
\/\/ print(a[1]);\n\
\/\/ print(a[2]);\n\
\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"disable"});

			initEvents();
			problems.next();

		},
		function(){
			log.add("instruct_check_program_comment");
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"この指示に従ったプログラムを作成してください。",
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
		function(){
			log.add("instruct_check_input");
			var w = $("#input")[0].contentWindow;
			w.$("#datasetItem0").instruct({
				string:"すべての入力データで、正しく出力されることを確認してください。",
				closeButton:true,
				closedHandler:function(){
					window.exec({module:"code",command:"enable"});

					window.exec({module:"code",command:"setEvent",params:{
						name:"beforeRun",
						func:function(params,e){
							var str = window.exec({module:"code",command:"getEditableString"});
							var okstr = ["print\\(a\\[0\\]\\);","print\\(a\\[1\\]\\);","print\\(a\\[2\\]\\);"];
							okstr.forEach(function(elem){
								str = str.replace(new RegExp(elem,"g"),"");
							});
							str = str.replace(/\s/g,"");
							if(str.length!==0){
								alert(okstr.join(" , ").replace(/\\/g,"")+" のみが使用できます。");
								e.preventDefault = true;
							}
						},
					}});
					log.add("start_writing");
				},
			});
		},
		function(){
			log.add("finished_problem");
			window.exec({module:"main",command:"writeLog",params:{message:"scriptName="+currentScriptName+","+log.text()}});
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

