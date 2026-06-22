
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"10_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ハード設定で問題を解く(上級者向け)",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"if文を一切使用せずに、プログラムを作ってみてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"10_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"普通のヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数を2つ作成する必要があります。変数名は、pでもqでも構いません。自分で決めてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"10_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"軽いヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"var p = 0;と書くと変数pを作成し初期値として0を代入します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_print":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"「偶数」の出力の仕方",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"偶数と表示するためには、print(\"偶数\");と書いてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_forif":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"for, ifの書き方",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"forやifの書き方は、前の問題を見て書き写してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"8_plusplus":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"++",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"p++は、pの変数の中を1つ増やします。例えばpに2が入っていれば、p++によってpの中身は3に変わります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"8_var":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"var p",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"var p = 0;は、変数pを作成し初期値として0を代入しています。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"7_%":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"%",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"%は、割り算したときのあまりを計算します。5%2は1、9%3は0となります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"6_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"普通のヒント2",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a[c]==1は、aの数字が1の場合を表します。c==2は、aの3番目の数字を表します。aの3,1,5,2,4のうち、1はoneに、3番目の数字である5はtwoに変換されて出力されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"6_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"普通のヒント1",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"例えばfor(var c in a)は、この問題の場合は、最初の{ }の中ではa[c]は3、 cは0で処理されます。次は、a[c]は1、cは1で処理が実行されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"6_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"軽いのヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"ifの()の中を１つずつ、注意深く確認してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"6_for":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"for(var c in a)",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"for(var c in a)は、そのあとの{ }の中の処理を、変数aの数字の個数だけ繰り返します。その時にcは、0から変数aの個数-1まで、数字が1つずつ増えていきます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"6_ac":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a[c]",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a[c]は、変数aのc番目の数字を表します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"5_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"普通のヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"多くのプログラミング言語では、配列の要素は0から数えます。例えばa[0]は、この問題の場合、1を表します。",
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
						string:"1つ前の問題のa[c]では、何が出力されていたか確認し、そこからcの中身を考えてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"5_var":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"var c",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"for(var c in a)の、var cは、ここで新しい変数であるcを作成します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"4_for":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"for",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"forは、そのあとの{ } の中の処理を繰り返します。print(a[c])によって、何が、何回、出力されるか想像してみて下さい。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"4_a":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"変数aは、配列変数です。配列変数とは、いくつかの数字や文字が1セットになった変数のことです。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"4_ac":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a[c]",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a[c]は、変数aのc番目の数字を表します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"4_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"for(var c in a)は、配列変数aの中の数字の個数分だけ、そのあとの{ }の中の処理を繰り返します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"var_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"var x =",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数xを宣言し、初期値として = の右側の数字や文字を代入します。",
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
