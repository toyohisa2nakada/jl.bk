// url params control
var URLParams = (new function(){
	if(typeof window === "object"){
		var self = this;
		var hashes = window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
		hashes.forEach(function(elem){
			var h = elem.split("=");
			self[h[0]] = h[1];
		});
	}
});

// rgb hsl control object
var RGB = (new function(){
	var self = this;
	/**
 	*  hslからrgbに変換する関数
 	* 
 	*  hue 色相：0〜360の数値を指定
 	*  saturation 彩度：0〜100%の値を指定
 	*  lightness 明度：0〜100%の値を指定
	*/
	self.hslToRgb = function(hue,saturation,lightness){
		var h = Number(hue),
			s = Number(saturation) / 100,
			l = Number(lightness) / 100,
			max = l <= 0.5 ? l * (1 + s) : l * (1 - s) + s,
			min = 2 * l - max,
			rgb = {};

		if(s == 0){
			rgb.r = rgb.g = rgb.b = l;
		}else{
			var list = {};

			list['r'] = h >= 240 ? h - 240 : h + 120;
			list['g'] = h;
			list['b'] = h < 120 ? h + 240 : h - 120;

			for(var key in list){
				var val = list[key],
					res;

				switch(true){
					case val < 60:
						res = min + (max - min) * val / 60;
						break;

					case val < 180:
						res = max;
						break;

					case val < 240:
						res = min + (max - min) * (240 - val) / 60;
						break;

					case val < 360:
						res = min;
						break;
				}
				rgb[key] = res;
			}
		}
		Object.keys(rgb).forEach(function(elem){
			rgb[elem] = Math.round(rgb[elem]*255);
		});
		return rgb;
		// CSS用に変換して返す
		//return 'rgb(' + Math.round(rgb.r * 255) + ',' + Math.round(rgb.g * 255) + ',' + Math.round(rgb.b * 255) + ')';
	};
	/**
	 *  rgbからhslに変換する関数
	 *
	 *  red 赤。0〜255の数値を指定
	 *  green 緑。 0〜255の値を指定
	 *  blue 青。 0〜255の値を指定
	*/
	self.rgbToHsl = function(red,green,blue){
		var r = red / 255,
			g = green / 255,
			b = blue / 255,
			rgb = {
				'r': r,
				'g': g,
				'b': b
			},
			max = Math.max(r, g, b),
			min = Math.min(r, g, b),
			hsl = {
				'h': 0,
				's': 0,
				'l': (max + min) / 2
			};
	
		// 彩度と色相の算出
		if (max != min) {
			var m = hsl.l <= 0.5 ? (max + min) : (2 - max - min);
			hsl.s = (max - min) / m;

			var c = {};
			for(var k in rgb){
				var v = rgb[k];
				c[k] = (max - v) / (max - min);
			}

			var h;
			switch(max){
				case r:
					h = c.b - c.g;
					break;

				case g:
					h = 2 + c.r - c.b;
					break;

				case b:
					h = 4 + c.g - c.r;
					break;
			}
			h = h * 60;

			hsl.h = h < 0 ? h + 360 : h;
		}
		hsl.s *= 100;
		hsl.l *= 100;

		return hsl;
		// CSS用に変換して返す
		// return 'hsl(' + hsl.h + ', ' + hsl.s * 100 + '%, ' + hsl.l * 100 + '%)';
	};
	self.r = function(color){
		return color>>16 & 0xff;
	}
	self.g = function(color){
		return color>>8 & 0xff;
	}
	self.b = function(color){
		return color & 0xff;
	}
	self.rgb = function(r,g,b){
		if(r.hasOwnProperty("r") && r.hasOwnProperty("g") && r.hasOwnProperty("b")){
			g = r.g;
			b = r.b;
			r = r.r;
		}
		return r<<16|g<<8|b;
	}
});


// events control object
function Events(events){
	var self = this;

	self.events = events || {};

	// opt.name:	event name
	// opt.func:	event handler
	// opt.params:	parameter for event handler
	// opt.value:	check the value when it is set
	// opt.valueFunc:	check handler
	// opt.class:	event class which is used for deleting the event
	// opt.loop:	when loop === false, the event will be deleted after fired. default is true.
	self.add = function(opt){
		self.events[opt.name] = self.events.hasOwnProperty(opt.name)?self.events[opt.name]:[];
		self.events[opt.name].push(opt);
	}
	self.clear = function(name){
		self.clearByAttr("name",name);
	}
	self.clearByClass = function(className){
		self.clearByAttr("class",className);
	}
	self.clearByAttr = function(attr,value){
		Object.keys(self.events).forEach(function(elem){
			for(var i=0;i<self.events[elem].length;i++){
				if(value===undefined || (self.events[elem][i][attr]!==undefined && self.events[elem][i][attr]===value)){
					self.events[elem].splice(i);
					i--;
				}
			}
		});
	}
	self.set = function(name,value){
		if(self.events.hasOwnProperty(name)===false){
			return false;
		}

		self.events[name].forEach(function(elem,index){
			if(elem.hasOwnProperty("value") && elem.hasOwnProperty("valueFunc")){
				var oldValue = elem.value;
				elem.value = value;
				if(elem.valueFunc(value,oldValue)){
					self.call(name);
				}
			}
		});
		return true;
	}
	self.call = function(name,e){
		if(self.events.hasOwnProperty(name)===false){
			return false;
		}
		e = e===undefined?{preventEvent:false}:e;
		var toRemove = [];
		self.events[name].forEach(function(elem,index){
			elem.func(elem.params,e);
			if(/*false === elem.func(elem.params,e) || */(elem["loop"]!==undefined && elem["loop"]===false)){
				toRemove.push(index);
			}
		});
		for(var i=toRemove.length-1;i>=0;i--){
			self.events[name].splice(toRemove[i],1);
		}
		return true;
	}
}

// values control
function Values(n){
	var self = this;
	self.maxN = n||8;
	self.values = [];
	self.maxValue = undefined;
	self.minValue = undefined;
	self.aveValue = undefined;
	self.needForAve = false;
	self.ignoreCount = 0;

	self.ignore = function(count){
		self.ignoreCount = count;
	}
	self.add = function(v){
		if(self.ignoreCount>0){
			self.ignoreCount--;
			return undefined;
		}
		self.values.push(v);
		self.maxValue = self.maxValue===undefined?v:(v>self.maxValue?v:self.maxValue);
		self.minValue = self.minValue===undefined?v:(v<self.minValue?v:self.minValue);
		if(self.values.length > self.maxN){
			self.remove(0);
		}
		self.needForAve = true;
		return v;
	}
	self.remove = function(index){
		if(index<0 || index>=self.values.length){
			return undefined;
		}
		var dv = Number(self.values.splice(index,1));
		if(dv===self.maxValue || dv===self.minValue){
			self.findMaxMinValue();
		}
		self.needForAve = true;
	}
	self.max = function(){
		return self.maxValue;
	}
	self.min = function(){
		return self.minValue;
	}
	self.ave = function(){
		if(self.needForAve === true){
			self.findAveValue();
			self.needForAve = false;
		}
		return self.aveValue;
	}
	self.size = function(){
		return self.values.length;
	}
	self.maxSize = function(){
		return self.maxN;
	}
	self.full = function(){
		return self.values.length===self.maxN;
	}
	self.clear = function(){
		self.values = [];
		self.maxValue = undefined;
		self.minValue = undefined;
		self.needForAve = false;
	}

	self.findMaxMinValue = function(){
		self.maxValue = undefined;
		self.minValue = undefined;
		self.values.forEach(function(v){
			self.maxValue = self.maxValue===undefined?v:(v>self.maxValue?v:self.maxValue);
			self.minValue = self.minValue===undefined?v:(v<self.minValue?v:self.minValue);
		});
	}
	self.findAveValue = function(){
		self.aveValue = 0.0;
		self.values.forEach(function(v){
			self.aveValue += v;
		});
		self.aveValue /= self.values.length;
	}
}

// Command used in each module control object
function Commands(cmds){
	var self = this;
	Object.keys(cmds).forEach(function(elem){
		self[elem] = cmds[elem];
	});
	self.exec = function(command,params){
		return self[command]===undefined?false:self[command](params);
	};
}
function inSequence(funcs,returnIndex){
	var ret = true;
	funcs.forEach(function(elem,i){
		var r = elem();
		if(returnIndex===undefined){
			ret = ret && r;
		}else if(returnIndex===i){
			ret = r;
		}
	});
	return ret;
}

// uuid
var UUID = (new function(){
	var self = this;
	self.uuid = function(){
		var S4 = function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		}
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4() +S4());
	};
	self.shortUuid = function(){
		var S4 = function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		}
		return (S4()+S4());
	};
});
if(typeof exports!=="undefined"){
	exports.UUID = UUID;
}

// Verifies the large object contains the small object.
// "contains" means the two objects are same or the large object has all properties of the small object.
function contains(large,small){
	if(typeof large !== typeof small){
		return false;
	}
	if(typeof small === "object"){
		var ret = !Object.keys(small).some(function(elem){
			return !large.hasOwnProperty(elem) || large[elem] !== small[elem];
		});
		return ret;
	}else{
		return large === small;
	}
}

// Convert zenkaku to hankaku
var zen2han = function(str){
	str = str.replace(/[Ａ-Ｚａ-ｚ]/g,function(s){
		return String.fromCharCode(s.charCodeAt(0) - 65248);
	});
	str = str.replace(/[０-９]/g,function(s){
		return String.fromCharCode(s.charCodeAt(0) - 65248);
	});
        str = str.replace(/[！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g,function(s){
		return String.fromCharCode(s.charCodeAt(0) - 65248);
        }).replace(/[‐－―]/g, '-');
	str = str.replace(/[～〜]/g, '~');
	str = str.replace(/　/g, ' ');
	str = str.replace(/”/g, '"');
	str = str.replace(/￥/g, '\\');
	var map = {'。': '｡', '、': '､', '「': '｢', '」': '｣', '・': '･'};
	var reg = new RegExp('(' + Object.keys(map).join('|') + ')', 'g');
	str = str.replace(reg,function(match){
		return map[match];
	});
	return str;
};

// random
var UtilRandom = new function(){
	var self = this;
	self.random = function(min,max){
			return Math.floor(Math.random()*(max-min+1))+min;
	}
};

