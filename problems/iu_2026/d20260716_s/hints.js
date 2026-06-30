
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
						string:"変数maxは、プログラムの22行目で、変数aの数字の中の最大値を出力することになります。最初にmaxに入っているべき数字は、変数aのどれかの数字です。例えば1番目ならば、a[0]をセットします。",
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
						string:"変数minは、プログラムの23行目で、変数aの数字の中の最小値を出力することになります。最初にminに入っているべき数字は、変数aのどれかの数字です。例えば1番目ならば、a[0]をセットします。",
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
						string:"maxよりもa[i]の方が大きい場合は、maxを最大値にするために、maxにa[i]の値を代入します。そのmaxよりもa[i]の方が大きい、を条件として記述します。",
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
						string:"maxにa[i]を代入します。プログラムにおいて代入は、 = とイコール1つで記述します。=の右側の値が、左側にコピーされます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_5":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(5)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"minよりもa[i]の方が小さい場合は、minを最小値にするために、minにa[i]の値を代入します。そのminよりもa[i]の方が小さい、を条件として記述します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_6":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(6)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"minにa[i]を代入します。プログラムにおいて代入は、 = とイコール1つで記述します。=の右側の値が、左側にコピーされます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"out":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"出力は？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#output")[0].contentWindow;
					w.$("#input").instruct({
						string:"変数mの最初に代入される数値に注目してください。プログラムの3行目で、mに値が入っています。",
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
						string:"変数mの最初の値をセットします。このプログラムは、配列aの最大値を出力します。最初にmに代入する値は、配列aの数字のどれかを仮にセットしておけば大丈夫です。例えば配列aの最初の数字をセットする場合、a[0]となります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"6_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"追加箇所(1)？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数mに配列aの数字を代入する条件を設定します。このプログラムは「最小値」を出力します。a[i]がmよりも小さい場合には、mの値を上書きする必要があります。",
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
						string:"変数fに値をセットします。変数に値をセットするには、f=xxとします。xxは数字です。ここでセットした値は、プログラムの最後のif文で比較することを考慮して、どの数値にするのかを考えてみてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"print_m":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"print(m)とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"print(m)は、変数mの中の数値を出力します。mは数字1つなので、[ ]等は必要ありません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"f":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"fとは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"fは変数です。プログラムの中でのこのf変数の役割は、これまでの問題のflag変数と同じです。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"m":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"m?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"最初にa[0](この場合は4)が代入されます。そのあとは、if(m&lt;a[i])の条件に一致するとmの値をa[i]の数値で上書きします。forの繰り返しの中で、mの値がどのように変わっていくかを考えてみて下さい。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"init":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"m=a[0]とは?",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数mに、配列aの最初の数字（この場合は4）を代入します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"lessthan2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"m < a[i] とは？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数mの値がa[i]の値よりも小さい場合に、条件に一致します。",
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
