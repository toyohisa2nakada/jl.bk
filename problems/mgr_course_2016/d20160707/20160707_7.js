new function(){
	var scriptName = plib.getScriptName();
	var errorMessages = ["違います。","違いますよ","違うんですってば","もう一回お願いします。"];
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

			window.exec({module:"input",command:"addValue",params:{name:"name",inputCheck:"string"}});
			window.exec({module:"input",command:"setInitialMessage",params:{pnumber:self_n,params:"例 \"東京\""}});

			window.exec({module:"watch",command:"addValue",params:{name:"name"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});

			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 「たこ焼き」と表示する入力をセットしてください。\n\
\/\/ \n\
 \n\
var pref  = [\"新潟\",\"大阪\",\"福岡\"];\n\
var goods = [\"お米\",\"たこ焼き\",\"めんたいこ\"];\n\
for(var i in pref){\n\
	if(name == pref[i]){\n\
		print(goods[i]);\n\
	}\n\
}\n\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			problems.next();

		},
		function(){
			plib.log.add("instruct_input");
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"「たこ焼き」と表示される入力をセットしてください。",
				closeButton:true,
			});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",
				func:function(params,e){
console.log("afterEnd",window.exec({module:"output",command:"outputs"}));
					if("たこ焼き"===window.exec({module:"output",command:"outputs"})){
						problems.next();
					}
				}
			}});
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

