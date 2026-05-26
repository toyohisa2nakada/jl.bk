
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"8_func":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"f",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"この問題のfは、関数名です。関数名は変数名と同じように、プログラマが自由に決めることができます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"5_func":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"func",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"この問題のfuncは、関数名です。関数名は変数名と同じように、プログラマが自由に決めることができます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"3_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"forの{ }は、左の入力にある配列変数aの数字の個数だけ処理を繰り返します。そして繰り返しているときに変数iは、0から繰り返している回数-1の数字をとります。例えば2回目の繰り返しのときにはiには1が入っているので、a[i]はaの2番目の数字の2を表すことになります。そのa[i]の数字をif文で比較して一致している場合に、if文のあとの{ }の中が実行されて、変数nの数字が増えることになります。変数nは、4行目で宣言されて最初は0が入っています。プログラムの最後のprintは、forの{ }の外にあるので繰り返し処理の対象ではなく、forの繰り返し処理が終わった後で1回だけ実行されます。よってこの問題では、数字1つが出力されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"params":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"function f(a)のa",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"引数（ひきすう）です。関数の呼び出しを例えばf(2)とすると、function f(a)の変数aに2が代入されます。そして関数fの中で変数aを利用することができます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"return":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"return",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"関数の{ }の中に記述して、関数の戻り値を定義します。戻り値は、関数を呼び出す（使用する）ところで使うことができます。var p = func()の場合、関数funcの戻り値は、変数pに代入されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"function":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"function",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"関数を定義します。関数とは、処理を{ }を使ってひとまとめにするものです。そして定義するとは、関数を作ることです。関数は、「作る」と「使う」に分かれていて、function f(){ }と定義して、f()と書いて使います。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"plus_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"+=",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a += 2とすると、変数aの値に2を足し合わせます。例えば、a+2 とイコールを抜いた場合、a+2の計算結果は、aに戻されず捨て去られます。b = a+2とすると、aに2を足した数値がbに入り、aの値はそのまま変わりません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"plus_plus":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"++",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a++の場合、変数aの値を1つ増やします。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"array_length":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"length",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"配列変数のあとに.lengthを付けると、その配列変数の要素数を表します。例えばvar a=[1,2,3]のときa.lengthは3を表します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"array":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"[ ]",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"var a = [4, 5, 6];と変数aを宣言すると、aは配列変数となります。配列変数は使用するときに、何番目の数字かをa[2]のように指定する必要があります。指定する数字は、0が1番目となります。この例の場合だと、a[0]は4、a[1]は5、a[2]は6を表します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
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
						string:"for(var c in a)は、そのあとの{ }の中を、配列変数aの数字の個数だけ繰り返します。aの数字の個数とは、例えばa=[5,2,4]ならば、3です。{ }の中を実行しているときに変数cには、最初は0、次は1、というように0から1つずつ増える数字となります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"var_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"var n =",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数nを宣言し、初期値として = の右側の数字や文字を代入します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"var":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"var",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"var a;とすると、aという名前の変数をプログラムの中で使う、と宣言したことになります。多くのプログラミング言語では、変数aを使いたい場合には、最初に宣言をする必要があります。但し、このJavaScriptは例外で、a = 1;とvarを書かなくても、その場で変数aを宣言したことと同じになります。ただ変数を宣言せずに使用すると、他の言語でプログラムを書くときに間違えやすいので、JavaScriptでも変数を宣言することが多いです。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"and":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"&&",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"「かつ」を表し、条件1 && 条件2の場合、条件1と条件2の両方が一致する場合に、条件1&&条件2は一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"or":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"||",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"「または」を表し、条件1 || 条件2の場合、条件1か、条件2、またはどちらもが一致する場合に、条件1||条件2は一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"not_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"!=",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a != b の場合、aとbの値が異なるときに、条件に一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"not":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"!",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"「否定」を表し、!条件1の場合、条件1が一致しない場合に、!条件1は一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"if_if":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"if, if .. ",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"それぞれのifは独立しています。よって例えば最初のif(条件)に一致しても、しなくても、次のif(条件)の条件は評価されます。それに対してif, else ifは、最初のif(条件)に一致しない場合だけ、次のelse ifの条件が評価されます。言い換えると、最初のif(条件)に一致したら、そのあとのelse if(条件)はすべて無視されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"if_else":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"if, else",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"if(条件)の条件に一致した場合はそのあとの{ }の中を実行します。条件に一致しない場合は、elseのあとの{ }の中が実行されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"if_elseif":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"if, else if",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"if(条件)の条件に一致した場合はそのあとの{ }の中を実行します。ifの条件に一致しない場合は、else if(条件)の条件がチェックされて一致すれば、そのあとの{ }の中が実行されます。そして、if, else ifのどの条件にも一致しない場合は、なにも処理を実行しません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"if_elseif_else":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"if, else if, else",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"if(条件)の条件に一致した場合はそのあとの{ }の中を実行します。ifの条件に一致しない場合は、else if(条件)の条件がチェックされて一致すれば、そのあとの{ }の中が実行されます。そして、if, else ifのどの条件にも一致しない場合は、elseのあとの{ }の中が実行されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"greater_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:">=",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a >= bならば、aとbが同じときを含めて、aの方がbよりも大きい場合に条件に一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"greater":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:">",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a > bならば、aの方がbよりも大きい場合に、条件に一致します。aとbが同じ場合は、一致しません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"divide_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"/=",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えばa /= 2とすると、aの中の数字を2で割ります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"plus_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"+=",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えばa += 2とすると、aの中の数字に2を足します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"equal1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"=",
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
