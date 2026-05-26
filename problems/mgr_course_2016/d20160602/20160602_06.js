new function(){
	problems.problems.push([
		function(){
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
			});

			window.exec({module:"input",command:"addValue",params:{name:"a",initValue:1}});
			window.exec({module:"input",command:"addValue",params:{name:"b",initValue:7}});
			window.exec({module:"input",command:"addValue",params:{name:"c",initValue:5}});
			window.exec({module:"input",command:"addValue",params:{name:"d",initValue:2}});
			window.exec({module:"input",command:"addValue",params:{name:"ans",initValue:0}});

			window.exec({module:"watch",command:"addValue",params:{name:"a"}});
			window.exec({module:"watch",command:"addValue",params:{name:"b"}});
			window.exec({module:"watch",command:"addValue",params:{name:"c"}});
			window.exec({module:"watch",command:"addValue",params:{name:"d"}});
			window.exec({module:"watch",command:"addValue",params:{name:"ans"}});

			window.exec({module:"code",command:"setText",params:"\
\/\/ 10を出力するようにしてください。\n\
\/\/ +, -, *, / の4文字だけが使用することができます。\n\
ans = a   b   c   d;\n\
print(ans);\n\
"});
			window.exec({module:"code",command:"setEditable",params:[
				[{line:2,ch:7},{line:2,ch:10}],
				[{line:2,ch:11},{line:2,ch:14}],
				[{line:2,ch:15},{line:2,ch:18}],
			]});

			window.exec({module:"input",command:"disable"});
			window.exec({module:"code",command:"enable"});
			problems.next();
		},
		function(){
			var w = $("#input")[0].contentWindow;
			w.$("#input").instruct({
				string:"この問題は、ここの数字を変更することはできません。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"出力に 10 が表示されるように、プログラムを追加してください。",
				closeButton:true,
				closedHandler:function(){
					problems.next();
				},
			});
		},
		function(){
			var w = $("#code")[0].contentWindow;
			w.$(".CodeMirror").instruct({
				string:"ただし、<span style='color:red'>+, -, *, /</span> 以外の文字は使用できません。",
				closeButton:true,
			});
			window.exec({module:"output",command:"setEvent",params:{
				name:10,
				func:function(){
					var str = window.exec({module:"code",command:"getEditableString"});
					var okstr = ["\\+","\\-","\\*","/"];
					okstr.forEach(function(elem){
						str = str.replace(new RegExp(elem,"g"),"");
					});
					str = str.replace(/\s/g,"");
					if(str.length===0){
						problems.next();
					}else{
						alert(okstr.join().replace(/\\/g,"")+" のみが使用できます。");
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
		function(){
			$("body").instruct({
				string:"今日の課題は全て終了です。この画面を印刷して、学籍番号と氏名を記入して提出してください。",
				align:'center',
				arrow:false,
				offsetX:$("body").width()/2,
				offsetY:$("body").height()/2+250,
				targetEventToClose:null,
				closeButton:true,
				closedHandler:function(){problems.next();},
			});
		},
	]);
}

