var utils = require("./utils.js");

function jld(){
	return (new function(){
		var mysql = (new function(){
			var self = this;
			self.mysql = require("mysql");
			self.connect = function(){
				console.log("connect to database jl");
				self.con = self.mysql.createConnection({
					host: "localhost",
					user: "root",
					password: "password1!",
				});
				self.con.connect(function(err){
					if(err){
						console.log("error when connecting to db",err);
						setTimeout(self.connect,2000);
					}
					console.log("connected status=",err);
				});
				self.con.on("error",function(err){
					console.log("db error occurred ",err);
					if(err.code === "PROTOCOL_CONNECTION_LOST"){
						self.connect();
					}else{
						throw err;
					}
				});
				self.con.query("use jl");
			};
			self.connect();
		});

		var self = this;
		self.sockets = [];
		self.escape = function(str){
			return str.replace(/'/g,"\\'");
		};
		self.onLog = function(logdata){
			var sql = "insert into logs values("+
				"'"+utils.UUID.uuid()+"',"+
				"'"+logdata.userid+"',"+
				"'"+logdata.username+"',"+
				Date.now()+","+
				"'"+self.escape(logdata.message)+"',"+
				"'"+self.escape(logdata.input_text)+"',"+
				"'"+self.escape(logdata.code_text)+"',"+
				"'"+self.escape(logdata.output_text)+"',"+
				"'"+self.escape(logdata.watch_text)+"',"+
				logdata.count_click_run+","+
				logdata.count_click_step+","+
				logdata.count_click_stop+
			")";
console.log(sql);
			mysql.con.query(sql);
		};
		self.onUpdateProblems = function(data){
console.log("onUpdateProblems",data);
			for(var i in self.sockets){
console.log("type",self.sockets[i]["type"]);
				if(self.sockets[i]["type"]!==undefined && self.sockets[i]["type"]==="problems"){
					self.sockets[i].socket.emit("updateProblems",data);
				}
			}
		}
		self.onStatus = function(data){
			for(var i in self.sockets){
				if(self.sockets[i].socket === this){
					Object.keys(data).forEach(function(elem){
						self.sockets[i][elem] = data[elem];
					});
					break;
				}
			}
/*
console.log("onStatus");
self.sockets.forEach(function(elem){
	console.log("\""+(elem.userid||"")+"\",\""+(elem.scriptName||"")+"\"");
});
*/
		};
		self.onReq = function(den){
/*
self.sockets.forEach(function(elem){
	console.log("\""+(elem.userid||"")+"\"");
});
*/
			var sock = this;
			var suc = false;
			var err = "ログインユーザが見つかりません。";
			self.sockets.forEach(function(elem){
				var preventMe = elem.preventMe===undefined?true:elem.preventMe;
				var userid = elem.userid||"";
				var scriptName = elem.scriptName||"";
				if(!(preventMe===true && elem.socket===sock)){
					if(userid===den.userid){
						if(scriptName===den.scriptName){
//console.log("req emit",den);
							suc = true;
							elem.socket.emit("req",den);
							elem.reqSocket = sock;
						}else{
							err = "問題番号が違います。";
						}
					}
				}
			});
			if(suc === false){
				sock.emit("res",{status:false,message:err});
			}
		};
		self.onRes = function(den){
			var sock = this;
			for(var i in self.sockets){
//console.log("res i = "+i);
				var elem = self.sockets[i];
				if(elem.reqSocket!==undefined && elem.socket===sock){
//console.log("res emit = ",den);
					elem.reqSocket.emit("res",den);
					elem.reqSocket = {};
					break;
				}
			}
		}
		self.onSnowfall = function(params){
			var sock = this;
			for(var i in self.sockets){
				if(self.sockets[i].socket !== sock){
					self.sockets[i].socket.emit("snowfall",params);
				}
			}
		}
		self.onConnect = function(socket){
			socket.on("log",self.onLog);
			socket.on("status",self.onStatus);
			socket.on("updateProblems",self.onUpdateProblems);
			socket.on("req",self.onReq);
			socket.on("res",self.onRes);
			socket.on("snowfall",self.onSnowfall);
			socket.on("disconnect",self.onDisconnect);
			self.sockets.push({socket:socket});
			console.log("[jl] connected "+socket+" sockets.length="+self.sockets.length);
		};
		self.onDisconnect = function(){
			for(var i in self.sockets){
				if(self.sockets[i].socket === this){
					self.sockets.splice(i,1);
					break;
				}
			}
			console.log("[jl] disconnected sockets.length="+self.sockets.length);
		};
		self.io = require.main.io;
		self.wsock = this.io.of("/jl");
		this.wsock.on("connection",self.onConnect);
	});
}
var jld = jld();
