
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"output_count1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力される個数?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"出力される文字は、変数aの中の数字の個数と同じです。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"output_count2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力される個数?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"printが実行された回数です。<br>print(\"q\");は削除されていることに注意してください。<br>forは変数aの数字の個数分だけ繰り返しますが、そのうち、ifの条件に一致したときだけ、printは実行されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"output_count3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力される個数?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"ifの条件に一致するときは2つの文字が出力され、そうではないときには1つの文字が出力されます。変数aの数値には1は2つあるので、ifの条件に2回一致して、2回不一致となり、計6個の文字が出力されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"output_count4":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力される個数?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"ifの条件に一致するときは2つの文字が出力され、そうではないときには1つの文字が出力されます。変数aの数値には1は1つしかないので、ifの条件に1回一致して、4回不一致となり、計6個の文字が出力されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"output_first":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"最初に表示される文字?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"プログラムの3行目のprint(\"す\");は、ifの{ }の中に入っているわけではないので、必ず実行されます。よって最初に表示される文字は「す」です。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"2line_print":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"2行連続したprintは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"printは文字を出力したら改行するため、print(\"p\");print(\"r\");の出力は、<br>p<br>r<br>となります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"3line_print":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"3行連続したprintは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					self.showInCenter("print(\"の\");print(\"う\");print(\"ち\");の出力は、<br>の<br>う<br>ち<br>となります。");
/*
					var w = $("#code")[0].contentWindow;
					w.$("#code").instruct({
						string:"print(\"の\");print(\"う\");print(\"ち\");の出力は、<br>の<br>う<br>ち<br>となります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
*/
				},
			}});
		},
		"for":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"for",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"「for」は、繰り返し処理といって、このfor(var i in a)の場合は、変数aの中にある数字の個数分だけ{ }の中の処理を繰り返します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"if":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"if",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"if(条件){ A }else{ B }は、条件に一致するときにはAを、そうではない場合にはBを実行します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"a":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"aは、配列変数といい、複数の数字を格納することができます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"a_i":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a[i]",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a[i]は、変数aのi番目の数値を表します。forは、変数aの数値の個数だけ{ }の中を実行し、その繰り返し中の1回目のa[i]は、aの1つ目の数字、2回目には、aの2つ目の数字を表すことになります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"==",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"==の左右が一致しているかどうかを判定する条件を作ります。例えば、a==1の場合、変数aの中に1が入っていると条件に一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
	};
	self.hint = function(key){
		self.hints[key](key);
	};
	self.setScriptName = function(scriptName){
		self.scriptName = scriptName;
	};
	self.showInCenter = function(str){
		$("body").instruct({
			string:str,
			align:'center',
			arrow:false,
			offsetX:$("body").width()/2,
			offsetY:$("body").height()/2+200,
			targetEventToClose:null,
			closeButton:true,
			closedHandler:function(){},
		});
	};

});
