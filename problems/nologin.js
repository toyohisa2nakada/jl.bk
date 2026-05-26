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
/* */
						"<div>本日(6/20)のシステム演習は、「履修者全員 vs. 50問の問題」です。</div><br/>"+
						"<div>最初に、やり方について説明するので、少々お待ちください。</div><br/>"+
/**/
/*
							"<table align=\"center\" border=\"1\" style=\"border-collapse: collapse;\">"+
								"<tr>"+
									"<td"+tds+">氏名<br /><span style=\"font-size:x-small\">(例 情報 太郎)</span></td>"+
									"<td"+tds+"><input id=\"loginName\"></input></td>"+
								"</tr>"+
								"<tr>"+
									"<td"+tds+">学籍番号<br /><span style=\"font-size:x-small\">(例 32018000)</span></td>"+
									"<td"+tds+"><input id=\"loginId\" type=\"text\" maxlength=\"8\"></input></td>"+
								"</tr>"+
							"</table>"+
							"<br /><br />"+
							"<button onClick=\"javascript:loginJs.login()\" style=\"font-size:36px;padding:24px\">ログイン</button><br /><br />"+
							"<div id=\"loginMessage\"></div>"+
*/
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
