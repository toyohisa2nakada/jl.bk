
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"lessthan":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"< とは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a < b としたときに、aよりもbの数値が大きいときに条件に一致します。aとbが同じ数値の場合には一致しません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"loop_count":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"forの繰り返し回数?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"for(var i in <span style=\"color:#ff0000\">b</span>)となっているので、変数bの数字分だけ繰り返します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"print_b_i":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"print(b[i])について",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えばa=[1,2]、b=[4,5]のとき、a[i]が1を表すときb[i]は、5を表します。iには「何番目？」という情報が入っていて、forの{ }の中でa[i]がaの1番目の数値を表しているときは、b[i]はbの1番目の数字を表すことになります。",
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
		"for":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"forとは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"「for」は、繰り返し処理といって、for(var i in a)の場合は、変数aの中にある数字の個数分だけ{ }の中の処理を繰り返します。",
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
		"b_i":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"b[i]とは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"b[i]は、変数bのi番目の数値を表します。forは、変数aの数値の個数だけ{ }の中を実行し、その繰り返し中の1回目のb[i]は、bの1つ目の数字、2回目には、bの2つ目の数字を表すことになります。",
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
		"c":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"c の形式は?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"c には、数字1つをセットします。プログラムの中で、c[i]といった[ ]を使用していないので、cは配列ではありません。よって入力欄に[ ]を書く必要はありません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"out_5":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力について",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"出力は変数bの一部です。変数bの4つの数字のうち3つが出力される場合、2つが出力される場合、1つも出力されない場合があり、それらは、変数eの数字と関係があります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"add_5_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（１）",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数bと変数eの関係を条件式として記述します。条件に一致するときに、ifの{ }の中にあるprint(b[i])が実行されて変数bの数字が1つ出力されます。また変数bは配列変数なので、比較をするときにb[i]と記述することに注意をしてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"out_7":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力について",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"変数dの一部が出力されます。そしてどの一部になるのかは、変数gの値によって変わります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"add_7_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（１）",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数dと変数gの関係を条件式として記述します。条件に一致するときに、ifの{ }の中にあるprintが実行されます。また変数dは配列変数なので、比較をするときにd[i]と記述することに注意をしてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"add_7_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（２）",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"出力される数字は、変数dの一部です。よってprintの( )の中は、dに関する文字を記述するのですが、変数dは配列変数なので、そのままdと書いても正常に実行されません。[ ]を付けてその[ ]内に適切な文字を記述してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"out_9":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力について",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"変数cと変数costsの値を比較して、ある条件に一致するときの変数itemsの文字が出力されています。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"add_9_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（１）",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"配列変数を指定します。このプログラムの場合、配列変数は、items、costsの2つがありますが、どちらを指定しても正常に動作します。配列変数を配列の形式で指定するので、[ ]は必要ありません。ちなみに配列変数itemsの[ ]をつけた items[0]は、配列ではなく、その中の1つの数字という形式になります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"add_9_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（２）",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数cと変数costsの関係を条件式として記述します。条件に一致するときに、ifの{ }の中にあるprintが実行されます。また変数costsは配列変数なので、比較をするときにcosts[i]と記述することに注意をしてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"add_9_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所（３）",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"出力される数字は、変数itemsの一部です。よってprintの( )の中は、itemsに関する文字を記述するのですが、変数itemsは配列変数なので、そのままitemsだけを書いても正常に実行されません。[ ]を付けてその[ ]内に適切な文字を記述してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"format":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"配列に[ ]を付けないとき",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数には、1つの数字を表すものと、複数の数字を表す配列と2つの形式があります。そして配列変数は、[ ]を付けることで、その中の1つを1つの数字を表す変数と同じ形式にすることができます。for(var i in a)のaは、配列を指定する決まりになっていて、そこに記述するものは[ ]を付けない配列形式です。また、if(c == a[i])などは、cが1つの数字形式ならば、それと形式を一致させるために[ ]を付けます。",
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
	self.hint = function(key){
		self.hints[key](key);
	};
	self.setScriptName = function(scriptName){
//console.log(self.keys());
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
