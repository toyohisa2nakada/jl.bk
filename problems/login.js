var loginJs = new function(){
	var self = this;
	var scriptName = plib.getScriptName();
	self.login = function(){
		var id = $("#loginId").val();
/*
		if(/[sc]\d{5}[a-z]{2}/.test(id)===false){
			$("#loginMessage").text("ログインIDが正しくありません。windowsにログインするsから始まる文字を入力してください。");
*/
		if(/\d{8}/.test(id)===false){
			$("#loginMessage").text("学籍番号が正しくありません。8文字の半角数字で入力してください。");
			return;
		}
		var name = $("#loginName").val();
		if(name.length === 0){
			$("#loginMessage").text("氏名を入力してください。");
			return;
		}
		window.exec({module:"main",command:"setLoginId",params:{userid:id,username:name}});
		$("#loginPanel").animate({top:-2500},{duration:1500});
		setTimeout(function(){
			$("#loginPanel").remove();
		},5000);
		setTimeout(function(){
			problems.next();
		},1000);
	}
	var n = problems.problems.push([
		function(){
			window.exec({module:"main",command:"updateStatus",params:{scriptName:scriptName}});
			["input","code","output","watch"].forEach(function(elem){
				window.exec({module:elem,command:"clear"});
				window.exec({module:elem,command:"clearEvent"});
				window.exec({module:elem,command:"clearInput"});
			});
			window.exec({module:"main",command:"closeReq"});
			window.exec({module:"code",command:"setText",params:""});
			window.exec({module:"scripts",command:"setScriptName",params:""});

			var w = window.innerWidth+800,
				h = window.innerHeight+800;
//console.log($.cookie("loginId"));
			if($.cookie("loginId")===undefined || $.cookie("loginId")===""){
				var tds = " style=\"padding:10px\" ";
				$("body").append(
					"<div id=\"loginPanel\" style=\"z-index:999;background:white;width:"+
					w+"px;height:"+h+"px;position:absolute;left:-400px;top:-400px;display:table;\">"+
						"<div id=\"login\" style=\"width:50%;margin:0 auto;text-align:center;display:table-cell;vertical-align:middle;\">"+

/*
"<div><h3>本日(7/16)の情報システム演習2 J4クラスでは、このサイトは使用しません。</h3></div>"+
"<div><h3><a href='https://www.nuis.ac.jp/~nakada/lectures/sys_prac/'>授業のホームページ</a>に戻ってください。</h3></div>"+
"<div style=\"margin:40px;\"></div>"+
*/
/*
"<div><h1>情報システム演習2 J4クラス 今後の授業スケジュール</h1></div>"+
"				<div style=\"margin:10px;\">"+
"					<table align=\"center\" border=\"1\">"+
"						<tr>"+
"							<th>日付</th><th>内容</th><th>WebExへの接続</th>"+
"						</tr>"+
"						<tr>"+
"							<td>7/9</td><td>JavaScript演習とHTML改造（これまで通り）</td><td>質問なければ接続不要</td>"+
"						</tr>"+
"						<tr>"+
"							<td>7/16</td><td>自由課題（独自のHTMLファイルを作成する）：作業日</td><td>中田まで（やり方の説明）</td>"+
"						</tr>"+
"						<tr>"+
"							<td>7/23</td><td>自由課題（独自のHTMLファイルを作成する）：提出日</td><td>質問なければ接続不要</td>"+
"						</tr>"+
"						<tr>"+
"							<td>7/30</td><td>B分野部分<span style=\"font-size:x-small;\">(教科書はこのページにあります。)</span></td><td>上西園先生</td>"+
"						</tr>"+
"						<tr>"+
"							<td>8/6</td><td>B分野部分<span style=\"font-size:x-small;\">(教科書はこのページにあります。)</span></td><td>上西園先生</td>"+
"						</tr>"+
"					</table>"+
"					<div>※自由課題の発表会や展覧会などは実施いたしません。自分の課題が他者に見られることはありません。</div>"+
"				</div>"+
"               <div style=\"margin:40px;\"></div>"+
"<div style=\"color:blue;font-size:x-large;\">最初に、<a href=\"https://bit.ly/zaigaku2020\" target=\"_blank\">在学生アンケート<span style=\"font-size:xx-small;\">(ここをクリックする)</span></a>へのご協力をお願いいたします。</div>"+
"<div style=\"margin:4px;\"></div>"+
"<div style=\"color:blue;\">全学生が対象のアンケートです。</div>"+
"<div style=\"margin:20px;\"></div>"+
"               <div style=\"color:blue;font-size:x-large;\">来週の7/16は、13:10にwebexで中田までつなげてください。</div>"+
"               <div style=\"color:blue;\">自由課題のやり方を説明いたします。</div>"+
"               <div style=\"margin:40px;\"></div>"+
*/


							"<table align=\"center\" border=\"1\" style=\"border-collapse: collapse;\">"+
								"<tr>"+
									"<td"+tds+">氏名<br /><span style=\"font-size:x-small\">(例 情報 太郎)</span></td>"+
									"<td"+tds+"><input id=\"loginName\"></input></td>"+
								"</tr>"+
								"<tr>"+
									"<td"+tds+">学籍番号<br /><span style=\"font-size:x-small\">(例 32019000)</span></td>"+
									"<td"+tds+"><input id=\"loginId\" type=\"text\" maxlength=\"8\"></input></td>"+
								"</tr>"+
							"</table>"+
							"<br /><br />"+
							"<button onClick=\"javascript:loginJs.login()\" style=\"font-size:36px;padding:24px\">ログイン</button><br /><br />"+
							"<div id=\"loginMessage\"></div>"+
						"</div>"+
					"</div>");
				setTimeout(function(){
					$("#loginName").focus();
				},1000);
			}else{
				problems.next();
			}
		},
	]);
	problems.noShowButton(n-1);
}
