new function(){
	var errorMessages = ["違います。","違うんです。","違うんですってば","もう一度..."];
	var errorNo = 0;
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:0}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:0}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ ○ を出力するようにしてください。\n\
\/\/ 使用できる文字は、 a b = の3文字です。同じ文字を複数回使用しても構いません。\n\
 \n\
if(      ){\n\
	print(\"○\");\n\
}else{\n\
	print(\"×\");\n\
}\
"});

			window.exec({module:"input",command:"disable"});
			window.exec({module:"code",command:"enable"});

			window.exec({module:"code",command:"setEditable",params:[[{line:3,ch:3},{line:3,ch:9}]]});

			problems.next();
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"プログラムを追加して○が表示されるようにしてください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"ただし使用できる文字は、 <span style='color:red'>a b =</span> の3文字です。同じ文字を何回使用しても構いません。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"○",
				func:function(){
					var str = window.exec({module:"code",command:"getEditableString"});
					var okstr = ["a","b","="];
					okstr.forEach(function(elem){
						str = str.replace(new RegExp(elem,"g"),"");
					});
					str = str.replace(/\s/g,"");
					if(str.length===0){
						problems.next();
					}else{
						alert(okstr.join(" ")+" 以外の文字は使用しないでください。");
					}
				},
			}});
		},
		function(){
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

