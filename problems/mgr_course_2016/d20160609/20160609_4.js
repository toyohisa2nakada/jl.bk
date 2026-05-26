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

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:2}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:3}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ c を出力するようにしてください。\n\
\/\/ ==は、左右の値を比較します。\n\
\/\/ &&は、かつ、を表します。\n\
 \n\
if(a == 1 && b == 2){\n\
	if(c == 1){\n\
		print(\"a\");\n\
	}else{\n\
		print(\"b\");\n\
	}\n\
}else{\n\
	if(c == 1){\n\
		print(\"c\");\n\
	}else{\n\
		print(\"d\");\n\
	}\n\
}\
"});

			window.exec({module:"input",command:"enable"});
			window.exec({module:"code",command:"enable"});
			window.exec({module:"code",command:"setReadOnly"});

			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"次は、ここの数字を変更して、c を出力させてください。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:"c",
				func:function(params,e){
					problems.next();
				}
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

