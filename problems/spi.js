const spiJs = new function(){
	const self = this;
	const scriptName = plib.getScriptName();

	// spiの問題と解答の定義
	self.p_def = {
		p_no:"22",
		ans:["E","A","D"],
		text:"選択肢のアルファベッドを「半角」「大文字(例:A)」で入力してください。例題のすべてを解いてください。",
		zoom_denominator:3,
	};

	self.ans = function(){
		let img_el = document.getElementById("spi");
		let img_src = img_el.getAttribute("src");
		if(-1 == img_src.indexOf("desc_a")){
			img_src = img_src.replace("desc_","desc_a");
			$("#v_ans").text("解説を消す");
		}else{
			img_src = img_src.replace("desc_a","desc_");
			$("#v_ans").text("解説を見る");
		}
		img_el.setAttribute("src",img_src);
		
	};
	self.check = function(){
		if(spiJs.p_def.ans.every((e,i)=>{
console.log(e,i,$("#i"+(i+1)).val());
			const ret = ($("#i"+(i+1)).val()===e);
			$("#i"+(i+1)).css("background",ret?"green":"pink");
			return ret;
		})){
			self.next();
		}
	};
	self.next = function(){
		setTimeout(function(){
			$("#spiPanel").animate({top:-2500},{duration:1500});
			setTimeout(function(){
				$("#spiPanel").remove();
			},5000);
			setTimeout(function(){
				problems.next();
			},1000);
		},2000);
	};
	self.zoom_img = function(relative){
		console.log(relative);
		self.p_def.zoom_denominator = Math.max(1,self.p_def.zoom_denominator-relative);
		const r = 1.0/self.p_def.zoom_denominator;
		$("#spi").width(window.innerWidth * r);
	};
	const n = problems.problems.push([
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

			let w = window.innerWidth,
				h = window.innerHeight;

			let inp_panel = [...Array(spiJs.p_def.ans.length).keys()].map((i)=>("<label for='i"+(i+1)+"'>("+(i+1)+")</label><input id='i"+(i+1)+"' style='width:60px'>")).join(" ");

			const z_up_down = "<button onClick='javascript:spiJs.zoom_img(0.5)'>(+)</button><button onClick='javascript:spiJs.zoom_img(-0.5)'>(-)</button>";

			$("body").append(
				"<div id=\"spiPanel\" style=\"z-index:999;background:white;width:"+
				(w+800)+"px;height:"+(h+800)+"px;position:absolute;left:-400px;top:-400px;display:table;\">"+
					"<div id=\"login\" style=\"width:50%;margin:0 auto;text-align:center;display:table-cell;vertical-align:middle;\">"+
						"<img id='spi' src='problems/spi/spi_"+spiJs.p_def.p_no+"_desc_.png' width='"+(w/2)+"px'><br />"+
						z_up_down+"<br /><br />"+
						"演習の解答をここに記入してチェックしてください。また解説を見ることもできます。<br>"+
						spiJs.p_def.text+"<br>"+
						inp_panel+"<br />"+
						"<button id=\"v_ans\" onClick=\"javascript:spiJs.ans()\" style=\"font-size:12px;padding:8px\">解説を見る</button> "+
						"<button id=\"check\" onClick=\"javascript:spiJs.check()\" style=\"font-size:12px;padding:8px\">チェック</button><br /><br />"+
					"</div>"+
				"</div>");
			self.zoom_img(0);
		},
	]);
	problems.noShowButton(n-1);
}
