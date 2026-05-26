
var plib = new function(){
	var self = this;
	self.loadingScriptName = undefined;
	self.setScriptName = function(name){
		self.loadingScriptName = name;
	}
	self.unsetScriptName = function(){
		self.loadingScriptname = undefined;
	}
	self.getScriptName = function(){
		if(self.loadingScriptName!==undefined){
			return self.loadingScriptName;
		}
		var name = "";
		if(document.currentScript){
			name = document.currentScript.src;
		}else{
			var scripts = document.getElementsByTagName("script");
			name = scripts[scripts.length-1].src;
		}
		return name.match(/([^\\/]*$)/)[1];
	}

	self.checkLoginId = function(){
		return window.exec({module:"main",command:"getLoginId"}).length!==0;
	}

	self.expectedOutputs = [];
	self.outputCheck = true;

	self.enableOutputCheck = function(enable){
		self.outputCheck = enable;
	}
	self.getExpectedOutputs = function(){
		return self.expectedOutputs;
	}
	self.setExpectedOutputs = function(outs){
		self.expectedOutputs = outs;
	}
	self.getExpectedOutputHeader = function(){
		return "<span style=\"color:#0000ff\">出力</span>";
	}
	self.resetAllExpectedOutputs = function(){
		self.expectedOutputs.forEach(function(elem,i){
			window.exec({module:"input",command:"setMessage",params:{
				index:i,
				text:elem,
			}});
		});
	}
	self.checkOutput = function(outs,exp){
		var cr = /(<br>|<br \/>|\n|\r)/gi;
		var re = new RegExp("(出力|"+self.getExpectedOutputHeader().replace(/\//,"\\/")+")\s*(.*)");
/*
console.log(outs.replace(cr," ").trim());
console.log(exp.replace(cr," ").match(re)[2].trim());
*/
		return outs.replace(cr," ").trim()===exp.replace(cr," ").match(re)[2].trim();
	}
	self.startOutputCheck = function(){
		self.enableOutputCheck(true);
		window.exec({module:"code",command:"setEvent",params:{
			name:"changed",
			func:function(params){
				self.resetAllExpectedOutputs();
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"beforeStart",
			func:function(params){
				window.exec({module:"input",command:"disableDatasetPanel"});
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"afterEnd",
			func:function(params){
				window.exec({module:"input",command:"enableDatasetPanel"});
			},
		}});
		window.exec({module:"code",command:"setEvent",params:{
			name:"afterEnd",
			func:function(params){
//console.log("outputCheck",self.outputCheck);
				if(self.outputCheck===false){
					return;
				}
//console.log("checking");
				var outs = window.exec({module:"output",command:"outputs"});
/*
				var exp  = window.exec({module:"input",command:"getMessage"});
*/
				var inp = window.exec({module:"input",command:"getCurDataset"});
				var exp  = self.getExpectedOutputs()[inp];
				if(self.checkOutput(outs,exp)===true){
					window.exec({module:"input",command:"setMessage",params:{
						text:exp+" <span style='color:red'>ok</span>",
					}});
				}

				if(false === window.exec({module:"input",command:"getMessages"}).some(function(elem){
					return elem.indexOf("ok")===-1;
				})){
					problems.next();
				}
			},
		}});
	}
	self.log = (new function(){
		var self = this;
		self.labels;
		self.init = function(){
			self.labels = [];
		};
		self.add = function(label){
			self.labels.push({name:label,time:(new Date()).getTime()});
		};
		self.text = function(){
			if(self.labels.length===0){
				return "";
			}
			var stime = self.labels[0].time;
			var str = "";
			self.labels.forEach(function(elem){
				str = str.length===0?str:(str+",");
				str += elem.name+":"+(elem.time-stime);
			});
			return str;
		};
		self.init();
	});
}

