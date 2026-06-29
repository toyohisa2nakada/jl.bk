
var HINT = (new function(){
	var self = this;
	self.scriptName = "";
	self.hints = {
		"10_4":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"ほぼ答えのヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#input")[0].contentWindow;
					w.$("#input").instruct({
						string:"入力の4つの数字を、そのままスペース等を入れずにaから順の4桁の数字にして、その数字をネットで検索してみて下さい。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"10_3":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"大きなヒント",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"上手くググれると、答えが見つかります。",
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
						string:"分数を使います。",
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
						string:"4つの数字で10を作ります。",
						closeButton:true,
						closedHandler:function(){
						},
					});
				},
			}});
		},
		"9_1":function(key){
			window.exec({module:"hint",command:"add",params:{
				name:"op変数",
				onclick:function(){
					plib.log.add(self.scriptName+":hint:"+key);
					var w = $("#code")[0].contentWindow;
					w.$(".CodeMirror").instruct({
						string:"op変数の値ごとに、何をするべきか考えてみて下さい。例えばop==1のときは..., op==2のときは...",
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
