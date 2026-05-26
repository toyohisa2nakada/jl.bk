
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"9_4":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント2",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"関数からの戻り値は、var m = f();とすれば変数mに入ります。またf(g())とすれば、関数gの戻り値は関数fの引数となります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント1",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"関数fは、2つの数字のうち大きい方の数字を返します。例えば3つの数字のうちの最大値を求めたい場合、最初の2つのうち大きい方と、3つ目の数字を比べて大きい方を選べば最大値となります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"軽いヒント2",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"最大値が求まります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"軽いヒント1",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"6つの入力に対するすべての期待する出力は、3です。またちなみに、5,3,1の入力だった場合には、5が出力されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"8_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"関数minusの中で、if文を使用します。if文の中ではreturnを記述します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"8_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"軽いヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"引数a,bの引算を計算するわけですが、その答えがすべてプラスの値になっていることに注目してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"5_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"軽いヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"for文1つ、その中にprint文1つで完成します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"5_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"for(var i=4;i<7;i++)とした場合、forの後の{ }を実行しているときにiの数字は、4,5,6と変わります。7は、i<7のところにイコールのあるi<=7でははないので実行されません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"4_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント2",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					$("body").instruct({
						string:"外側のforはa.length回（つまり変数aの数字の個数回）だけ処理を繰り返します。<br>そして内側のforは2回処理を繰り返します。<br>iの数字が0のときにjの数字が0,1、iの数字が1のときにjの数字が0,1というように、<br>この2つの変数の数字は変わりながらforの処理が繰り返されます。<br>printで出力する変数aの「i」番目のiが何を表しているかをよく見て解答してみて下さい。",
						closeButton:true,
						align:"center",
						arrow:false,
						offsetX:$("body").width()/2,
						offsetY:$("body").height()/2+100,
					});
				},
			}});
		},
		"4_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント1",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"forのあとの{ }の中は、何回か処理することを繰り返します。例えば for(){ for(){xxx;} }となっている場合、外側（1つ目）のforが2回、内側（2つ目）のforが3回繰り返すとしたら、2×3の6回xxx;の処理が実行されることになります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"scope":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"変数の有効範囲",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					$("body").instruct({
						string:"<span style='font-size:small'>変数は、varで宣言した場所の下であり、かつ、その宣言をした{ }の中だけで使うことができます。<br>次のコードで変数aが使える場所は、(2),(3)、変数bが使える場所は(2)のみです。<br>//(1)a× b×<br>var a;<br>function f(){<br>　var b;<br>　//(2)a〇 b〇<br>}<br>//(3)a〇 b×<br>また同じ名前の変数名が、違う有効範囲で宣言されていた場合、より内側の有効範囲の変数が優先されます。<br>例えば上のコードで変数bがvar aと宣言されていた場合、(2)でのaは、そのvar aに変えた方のaです。<br>(1)の下のvar aとは名前が同じですが別の変数となります。</span>",
						closeButton:true,
						align:"center",
						arrow:false,
						offsetX:$("body").width()/2,
						offsetY:$("body").height()/2+100,
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
		"for_i":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"for",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えばfor(var i=0;i<3;i++)は、そのあとの{ }の中を、3回繰り返します。{ }の中を実行しているときに変数iには、最初は0、次は1、というように0から1つずつ増えて、3になったときにその時は{ }を実行せずにforの処理を終了します。",
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
				name:"var p =",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数pを宣言し、初期値として = の右側の数字や文字を代入します。",
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
		"percent":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"%",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"%は、あまりを計算します。例えば、5%2は1を出力します。",
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
