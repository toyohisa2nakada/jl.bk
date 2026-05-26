
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"09_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント2",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"aとb, bとc, cとaの順にif(a==b){ }else{ }を作成します。一致するときのifのあとの{ } には、print(\"ab\"); 、elseの後には print(\"~ab\");を書きます。これをすべて作成してから、実行してokが付かないところは、余計なprint文を削除してください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"09_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント1",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"出力は、a,b,cの値が同じか、違うかによって出力する文字が決まります。そのルールを見つけ、すべてのケースについてif elseを書いてみてください。そのあとで、ルールに適合するのに出力されない文字があります。そこだけ、print文を削除すれば完成いたします。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"08_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント1",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"qを出力する入力2だけが持っている、aとbに関する特徴があります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"08_2":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ヒント2",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"aとbが同じ値のときに、プログラム内の変数cが1以外になる必要があるため、20行目が実行される必要があります。20行目は、elseの方なので、aとbが同じ「ではない」という条件を作成します。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"05_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"何をする？",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数と数値の比較を書きます。変数名は、入力パネルで使用されている名前を使ってください。数値は、入力パネルから適切に文字が表示されるルールを考えて、決めてください。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"04_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"print(\"o\");",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"ifやelseの後の { } の中に入っているわけではないので、ifの条件とは関係なく、常に出力されます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"01_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"a",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"変数を表します。その変数の名前が a となります。変数には数値または文字が入っていて、このプログラムの場合は、入力パネルでa=-1 としているので、 -1 が入っています。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"tilde":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"~",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"~ (チルダ)は、キーボードの右上の ^ (ハット)のあるキーをシフトキーを押しながら打つと書くことができます。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"input_check_ok":function(key){
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
		"code_check_error_zen":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"不明なエラーが表示されて実行できない",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"半角で数値を入力してください。全角の場合に、エラーになることがあります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"input_check_error_zen":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"不明なエラーが表示されて実行できない",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"半角で数値を入力してください。全角の場合に、エラーになることがあります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"input_check_error":function(key){
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
		"input_check":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"成功したのに問題が先に進まない",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"この問題には、入力データが複数あります。緑色の数値をクリックして入力を変更して、下に書かれた出力と同じ出力をするようにする必要があります。ただ、チェックの途中でプログラムの内容を変更することは出来ません。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"var_equal":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"var b =",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"「var b = ..」は、変数bを宣言し、初期値として = の右側の数字や文字を代入します。",
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
				name:"\"p\"",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"\"p\"は、文字pを表します。それに対して例えば \" (ダブルクォーテーション）の無いpは、変数pを表します。",
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
