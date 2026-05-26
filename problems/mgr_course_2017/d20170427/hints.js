
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"09_4":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"答えをみちゃう",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"3行のプログラムを書きます。 c=a; a=b; b=c; です。まずaの値をcに退避、そしてaをbで上書き、そしてbに退避しておいたcの値を入れる、です。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"09_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ほぼ答えのヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数cに一度退避して、値を上書きして、退避した値をもう1つに戻します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"09_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"普通のヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数cを使います。a=b; b=a; と書くと、a=bのタイミングでaが上書きされるので、次のb=aではもともと入っていたaの数値は消えてしまっています。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"09_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"軽いヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"プロぐらの最後は、print(a);print(b);なので、a,bの順番で出力されます。入力データと、期待する出力は、a,bが逆になっています。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"08_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"答えをみちゃう",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数aから変数bを引くと、出力して欲しい数値になります。よってプログラムは、c = a-b; と書きます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"08_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"okが消えてしまう",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"プログラムを変更すると、入力パネルのokはすべて消えます。1つのプログラムで3つの入力データのすべてについて正しく出力する必要があります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"08_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"何をするのか",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"プログラムを書いてください。最後の行は、print(c)なので、変数cに適切な数値を代入する必要があります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"07_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"入力データを切り替えられない。",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"ブラウザのリロードをして、再度、試してみてください。それでもダメな場合、チャットで問い合わせてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"07_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"成功したのに問題が先に進まない",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"この問題は、入力データが複数あります。緑色の数値をクリックして入力を変更して、すべての入力でプログラムが正しく動作する必要があります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"07_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"何をするのか",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"プログラムを書いてください。灰色の部分は変更できません。このプログラムの場合、最後に、print(b);を実行するので、bの変数の中を適切にセットすると正解です。bの変数をセットする場合には、b=とイコールを1つ書いて、その右側に数値や変数を書きます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"05":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a+b",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数a の数値と、変数bの数値が足しあわさって、出力に表示されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"04":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"何をするのか",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"入力パネルの入力欄に数値を入力して、実行ボタンを押してください。問題は、プログラムのところに書いてあります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"02":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"aは、最初に「入力パネル」で設定した値が入っていますが、プログラム内の a = の箇所を通ると、値が上書きされます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"01":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"aは変数といって、中に数字や文字が入ります。今、入っているのは、左の「入力パネル」でセットされた数字です。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"var_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"var a =",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"「var a = ..」は、変数aを宣言し、初期値として = の右側の数字や文字を代入します。",
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
						string:"var a;とすると、aという名前の変数をプログラムの中で使う、と宣言したことになります。",
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
		"if_else":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"if, else",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"if(条件)の条件に一致した場合はそのあとの{ }の中を実行します。ifの条件に一致しない場合は、elseのあとの{ }の中を実行します。",
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
		"outof_if":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ifの{中}と外",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"if(条件){ ... }の ... は、このif文の中と呼びます。条件に一致したときだけ実行されるところです。一方、この問題の4行目にあるprint(\"o\");は、if(条件){ }の波括弧{}の外にあるため、条件にかかわらず必ず実行されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"print":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"print",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"右側の「出力」に文字や数値を表示します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"double_quotation":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"\"a\"",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"\"a\"は、文字aを表します。それに対して \" (ダブルクォーテーション）の無いaは、変数aを表します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"smaller_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"<=",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a <= bの場合、aとbが同じときを含めて、aの方がbよりも小さい場合に条件に一致します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"smaller":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"<",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a < bの場合、aの方がbよりも小さい場合に、条件に一致します。aとbが同じ場合は、一致しません。",
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
						string:"a >= bの場合、aとbが同じときを含めて、aの方がbよりも大きい場合に条件に一致します。",
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
						string:"a > bの場合、aの方がbよりも大きい場合に、条件に一致します。aとbが同じ場合は、一致しません。",
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
						string:"a != bの場合、変数aの中身と変数bの中身が違う場合に、条件に一致します。",
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
		"input":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"入力パネル",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"プログラムへの入力がここに表示されます。ここに示された「出力」の通りにプログラムが出力するようにしてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"output":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"複数のprint",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#output")[0].contentWindow;
					w.$("#input").instruct({
						string:"複数の出力がある場合、スペースか改行で区切ってください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"prev":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"前の問題に戻る",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					$("#problemsPanel").instruct({
						string:"この数値のところをクリックすると前の問題に戻れます。途中まで書いたプログラムは自動的にセーブされているので、前の問題に戻っても、今書いているプログラムが消えることはありません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"commentout":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"コメントアウト(//)",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"行の最初に//を書くと、その行はプログラム上としては消えたことになります。例： //print(\"a1\");は実行されません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"condition_str":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"\"文字\"の比較",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"a == \"文字\" のように、文字を\"で囲んで比較します。",
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
