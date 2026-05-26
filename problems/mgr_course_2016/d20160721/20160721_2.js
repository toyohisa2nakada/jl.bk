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
				window.exec({module:elem,command:"autoSave",params:{pnumber:self_n}});
			});


			window.exec({module:"input",command:"setInitial",params:{
				pnumber:self_n,
				message:"例 [1,2,3]",
				value:{name:"a",initValue:"",inputCheck:"array"},
			}});
			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"i"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"output",command:"setInitial",params:{pnumber:self_n}});
			window.exec({module:"code",command:"setInitialText",params:{
				text:"\
\/\/ 10と表示する入力をセットしてください。\n\
\/\/ \n\
 \n\
var c = 2;\n\
for(var i in a){\n\
	c += 2;\n\
}\n\
print(c);\
"}});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			problems.next();

		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"10と表示する入力をセットしてください。",
				closeButton:true,
			});
			window.exec({module:"code",command:"setEvent",params:{
				name:"afterEnd",
				func:function(params,e){
console.log("afterEnd",window.exec({module:"output",command:"outputs"}));
					if("10"==window.exec({module:"output",command:"outputs"})){
						problems.next();
					}
				}
			}});
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

