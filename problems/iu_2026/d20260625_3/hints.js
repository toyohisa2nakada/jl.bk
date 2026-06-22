
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"string":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"文字の出力",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"文字を出力するには、ダブルクオーテーション( \" )でその文字を囲む必要があります。ダブルクオーテーションで囲まない文字は、プログラムの中では変数として扱われます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"addpoint1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（１）には？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えば、??[i]==cのように入力の変数cと比較をする条件を指定します。??に入る言葉は、プログラムの中から見つけてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"addpoint2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（２）には？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えば、??[i]のように、ある配列変数を指定して、出力させます。??に入る言葉は、プログラムの中から見つけてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"double_quotation2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"\"みず\"とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"\" は、ダブルクオーテーションと呼びます。\"みず\"は、文字の「みず」という意味です。ダブルクオーテーションなしの「みず」とプログラム中に書くと変数の「みず」を表すことになります。print(\"みず\")は「みず」が出力され、print(みず)は変数「みず」の中身が表示されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"double_quotation":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"\"p\"とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"\" は、ダブルクオーテーションと呼びます。\"p\"は、文字のpという意味です。ダブルクオーテーションなしのpとプログラム中に書くと変数pを表すことになります。print(\"p\")はpが出力され、print(p)は変数pの中身が表示されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"print_b_i":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"b[i]について",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えばa=[1,2]、b=[\"a\",\"b\"]のとき、a[i]が1を表すときb[i]は、\"a\"を表します。iには「何番目？」という情報が入っていて、forの{ }の中でa[i]がaの1番目の数値を表しているときは、b[i]はbの1番目の数字を表すことになります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"no_else":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"elseがないとは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"ifの条件に「一致しない」ときには、何も処理をしません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"input_count1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"変数aの中の数字の個数?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"出力される文字の個数と同じです。出力文字は5文字なので、[1,2,3,4,5]のように5個の数字を並べます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
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
						string:"printが実行された回数です。<br>print(\"p\");は削除されていることに注意してください。<br>forは変数aの数字の個数分だけ繰り返しますが、そのうち、ifの条件に一致しないときだけ、printは実行されます。",
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
						string:"aの中の数字の個数分だけ出力されます。それは、ifの{ }、elseの{ }の中にそれぞれ1つのprintがあり、if、elseは必ずどちらか1つの{ }を実行するため、forの{ }の中を繰り返す数とprintの実行される数が一致するからです。",
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
						string:"printは文字を出力したら改行するため、例えばprint(\"p\");print(\"r\");の出力は、<br>p<br>r<br>となります。",
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
				name:"forとは?",
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
				name:"ifとは?",
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
		"b_i":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"b[i]とは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"b[i]は、例えば、a[i]が1番目の数値を表しているときに、変数bの1番目の数値を表します。これは、a[i]がaのi番目なので、そのiをそのまま使ってb[i]とするとｂのi番目になるということです。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"a_i":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a[i]とは?",
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
				name:"== とは?",
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
		"a":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"変数aについて",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"変数aは、複数の数字が保存されている配列変数ではありません。よってa[i]==...と使用するのではなく、a==...と[ ]を付けずに使用してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
	};
	self.keys = function(key){
		var keyString = "HINTS";
		for(var key in self.hints){
			keyString += ","+key;
		}
		return keyString;
	};
console.log(self.keys());
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
