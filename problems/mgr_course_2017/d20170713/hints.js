
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"9_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(1)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数sum2の最初の値（初期値といいます）を決定します。変数sum2は、配列aのある条件に一致しない数値の合計を計算するために使用します。その合計を計算するときに、最初に入っているべき数値を設定してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(2)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数cと、変数a[i]の比較を行います。比較に一致する配列aの数値は、13行目で処理が行われます。一致しない場合は、16行目の処理が行われます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(3)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数sum1にa[i]の数値を加えます。例えば変数aに変数bの値を加えるには、 a += b と記述します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_4":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(4)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"配列変数aの該当する数字を記述して、sum2に足し合わせます。配列変数aのi番目の数字は、a[i]と記述します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},



		"7_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(1)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"配列変数を指定します。ここでは、配列変数を複数の数字が1つになったという配列のままで指定するので、例えばa[i]のように[i]を書く必要はありません。for文は、ここに指定された配列の中の数字の個数だけ、{ }の中の処理を繰り返します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"7_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(2)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数sumにa[i]の数字を加えます。例えば変数aに変数bの値を加える場合は、 a += b と記述します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},

		"4_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(1)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数cと、変数vの比較をする条件式を記述します。変数vは配列変数なので数値1つの変数であるcと比較するために[ ]を付けなければいけないことに注意してください。また、数値の大小を比較する場合には、c &lt; dのように記述します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"4_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(2)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数flagに値をセットします。変数に値をセットするには、flag=xxとします。xxは数字です。ここでセットした値は、プログラムの最後のif文で比較することを考慮して、どの数値にするのかを考えてみてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"2_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(1)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数cと、変数valuesの比較をする条件式を記述します。変数valuesは配列変数なので数値1つの変数であるcと比較するために[ ]を付けなければいけないことに注意してください。また、数値が同じかどうかを比較する方法は、==とする必要があります。=の1つの場合は、比較ではなく代入になります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"2_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(2)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数abcに値をセットします。変数に値をセットするには、abc=xxとします。xxは数字です。ここでセットした値は、プログラムの最後のif文で比較することを考慮して、どの数値にするのかを考えてみてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"print_sum":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"print(sum)とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"print(sum)は、sum変数の中の数値を出力します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"abc":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"abcとは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"abcは変数です。プログラムの中でのこのabc変数の役割は、これまでの問題のflag変数と同じです。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"lessthan":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"c < a[i] とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数cの値がa[i]の値よりも小さい場合に、条件に一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"abs_comp":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"abs,compとは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"変数です。abs, compという名前には意味はありません。absという名前の箱を用意して、そこにこのプログラムの場合は、欠席回数を保存して、プログラムの中で扱っています。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"Math.round":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"Math.roundとは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えばMath.round(5.4)とすると、小数点以下を四捨五入して、5が計算されます。計算された数字は、このプログラムの場合は、変数scoreに代入されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"plus_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"+=とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"sum += 1を実行すると、sumの値に1を足します。例えばsumの値に0が入っているときにsum += 1を実行すると、1になります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"var":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"varとは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"var a;とすると、変数aをプログラムの中で使うことを宣言したことになります。宣言とは、その名前の変数を使うということを実際に使うよりも前に教えることです。多くのプログラミング言語では、この宣言をしないと変数を使うことができません。また入力のところにある変数は、varと記述されていないのですがvar 変数名としたときと同じです。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"double_quotation":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"\" \"とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"\" は、ダブルクオーテーションと呼びます。例えば\"a\"は、文字の「a」という意味です。ダブルクオーテーションなしの「a」とプログラム中に書くと変数の「a」を表すことになります。print(\"a\")は「a」が出力され、print(a)は変数「a」の中身が表示されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"flag":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"flagとは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"flagは変数です。プログラムの開始時に、入力欄またはプログラムの最初の方で値がセットされます。そのあとでプログラムの中では、if(c==a[i])に一致したときに、flag=xxのプログラムによってxxの数字に上書きされます。そして最後にif(flag==xx)において、flagの中がxxの場合にはifのあとの{ }の中が実行され、そうではない場合にはelseのあとの{ }の中が実行されます。",
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
		"equal1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"= とは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"=の右の数値を左にコピーします。a=1ならば、変数aに1が代入されます。a=bならば、変数aには変数bの中身がコピーされます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"equal2":function(key){
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
