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

	var exp_outputs = "";
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

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:"[1,2,3,4]"}});
			exp_outputs                                                               ="4";

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});

			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 出力を予想して入力し、実行ボタンを押してください。\n\
\/\/ \n\
 \n\
print((a[0]+a[2])*a[1]-a[3]);\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"input",command:"setReadOnly"});
			window.exec({module:"code",command:"disable"});
			window.exec({module:"code",command:"setReadOnly"});
			window.exec({module:"output",command:"setInput"});

			problems.next();

		},
		function(){
			log.add("instruct_check_outputInput");
			var w = $("#output")[0].contentWindow;
			w.$("#inputPanel").instruct({
				string:"出力される文字を入力して、実行してください。",
				closeButton:true,
				closedHandler:function(){
					$("#code")[0].contentWindow.$("#run").css("pointer-events","auto");
					problems.next();
				},
			});
		},
		function(){
			window.exec({module:"code",command:"setEvent",params:{
				name:"beforeRun",
				func:function(params,e){
					var txt = $.trim(window.exec({module:"output",command:"getInput"}));
					if(exp_outputs!=txt){
						if(txt.length===0){
							var w = $("#output")[0].contentWindow;
							w.$("#inputPanel").instruct({
								string:"出力される文字を入力してから、実行してください。",
								closeButton:true,
							});
						}else{
							alert(errorMessages[(errorNo++)%errorMessages.length]);
						}
						e.preventDefault = true;
					}
				},
			}});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",func:function(params,e){
					problems.next();
				},
			}});
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

