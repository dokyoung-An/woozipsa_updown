// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: ??? - ??? ??.ggsk
// Generated 2025-04-15T14:50:06

function pano2vrSkin(player,base) {
	player.addVariable('vis_m_roomMove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aptinfo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_ad', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aircon', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hide', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hide_pc', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 15%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-height:52px; min-width:267px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me._bg=document.createElement('div');
		el.ggId="bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background:rgba(255,255,255,0.8); backdrop-filter: blur(8px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._bg);
		el=me._logo=document.createElement('div');
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 16px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAABiCAYAAAAIoaKNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZj'+
			'pEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0MDBDNkIyN0ZERTExRUY5ODQzRkQzODIyRkM0QzgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0MDBDNkIzN0ZERTExRUY5ODQzRkQzODIyRkM0'+
			'QzgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQwMEM2QjA3RkRFMTFFRjk4NDNGRDM4MjJGQzRDODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQwMEM2QjE3RkRFMTFFRjk4NDNGRDM4MjJGQzRDODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5UANboAAAMfElEQVR42uxdDZQWVRmeBVRQjMyTpFJKVhhWECEnEISkXaVTQImyIL8GpVmnbeUE/SkVkUVtKpYEGqCJQBEE6YmlVRYWBS0NtfAv5ZgYEiuihBC42/Ps3D1t0507M7vzfd98y/Oc857Znbkzc+feZ+6873vf+34lXh'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._logo.appendChild(me._image_1);
		me._header.appendChild(me._logo);
		el=me._container_20=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		els=me.__26__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\ud30c\ud2b8\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 60%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 5px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__26.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\uc131\uacf5\ub3c4\uc6b0\ubc29\uc544\uc774\uc720\uc258", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__26.ggUpdateText();
		el.appendChild(els);
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me._container_20.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd2c\uc601\ub0a0\uc9dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 35%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd2c\uc601\uc77c : 2025.03.04", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me._container_20.appendChild(me.__25);
		me._header.appendChild(me._container_20);
		me.divSkin.appendChild(me._header);
		el=me._type=document.createElement('div');
		el.ggId="type";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._type.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._type.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(161,161,161,0.117647);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(6px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(85,85,85,0);';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0 1px 1px rgba(0,0,0,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("104 TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._text_1);
		me._type.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._type);
		el=me.__24=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 20px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 960))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__24.style.transition='';
				if (me.__24.ggCurrentLogicStateVisible == 0) {
					me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
					me.__24.ggVisible=true;
				}
				else {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
			}
		}
		me.__24.logicBlock_visible();
		me.__24.onclick=function (e) {
			player.openUrl("www.lnahouse.kr","");
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_12=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2_1=document.createElement('div');
		els=me._image_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_2_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_12.appendChild(me._image_2_1);
		me.__24.appendChild(me._container_12);
		el=me._text_3_1=document.createElement('div');
		els=me._text_3_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(85,85,85,0.470588);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Made by", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3_1.ggUpdateText();
		el.appendChild(els);
		me._text_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3_1.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me._text_3_1);
		me.divSkin.appendChild(me.__24);
		el=me.__23=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((98% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 768))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23.style.transition='';
				if (me.__23.ggCurrentLogicStateVisible == 0) {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
				else if (me.__23.ggCurrentLogicStateVisible == 1) {
					me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
					me.__23.ggVisible=true;
				}
				else {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
			}
		}
		me.__23.logicBlock_visible();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA6CAYAAADVwos0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbeSURBVHgBzVlbT1RXFN5zYS50BgSGyyilI8XEYglQNDReGhqqqZQafTCtMT740IfeHtpG44PJ6JOP/gJjjIkmJkofTKoh0ZoYo2jFKpdoMGkVRVEuXguMsPutPWszmykwcM4hdiUr58yZPXO+s/f3rcs+QvxPzGV+kFLSZ+mC6WvxeFyd79+/X9J3YoHMbX7A/eW+ffvcW7duVY5LntOnT3u6uroIjBug3AzWJRbQ1A0aGhq8OPrg/oqKCj+OQTrna1kMfkGB0Cx46IYvX75sxJPvGR8f3zM4OPglroWLi4vfIUAM1KOBC4fM/CO1FK9evdqQnZ29Euc1fP'+
			'3GkydPuouKilpxnoC/gY+TS1onLKdwwNwGIBeWwg0QVQxiM3tDYWHhB3fu3FmNc18kEqHloRlxG5x2DIiynp6e6f65Af7xsmXLVra3t9c9ffo0C8vk0WDS/8MRIGT9/f3XcbjBru1zeKympmb1sWPH3hsZGSHietldwgEwHj5q4nmeP38+0NjYWJ6VldWPzxXwEI9ZDu9YsWJFCcb8dfHixVG+7kh80UAExw3XmTNnJnJycu6vWrUq5vV67zOAgEg+/XLwomfdunVRkPr+5cuXR6PRqCwrKxMgtDAeypapGYnFYnTTnL179y4l+UIYB+H/yJT1wQ+8ePHih40bN5bSWJGMNT6R4o11w58L/hNSRfYi2KlTp6pxPQ4/LKdaO11/9OjR1xgbyc/PJzCBuro6rShbQDTpVFCDUwDLu3nz5mcM5rc0MOfpend3dzPGFcDD'+
			'IrmEOvraMhcDIjB+BpN/9+7dJgZzPg0MgYtD1utpnEgS28fR182zbA8Q3Mt8CYXD4QJaBgbTngbmMF0/evToRwSGU4Hmi34wW+amNScwxIFNmzYtRvz4nojKhNVGRD5IxIaR3BdBSdmVlZUmGGHZDPLSNAfy8vJySUkA8zMracgAQ+cH6btdu3a9T2Dg2fQgnEjtR1+e2qzS0tIggcFTl1Nmnk3Wzc3NS/CbXDFV1vaXiQoiwbKGL2ppaamZTdb37t3bFgqFCgk4g3GsjtHS1kqaq6wjyNykJB2ZnZE1rTeTMIQ0MG9ZExjby5NOXpEMYAUPHjyYVdbI1rXCkDXHGEfAqBhDYFAkhUnWRNC5yFokOeZjzk0BM6+8gJZiyufXr1+L27dvT3g8nt41a9aUzZStMQvRRCLxd2dn5yjAy4cPH4q+vj71bMKuGUqak6yHh4'+
			'e/wdgIPExB0pElYlM5ichLkRTneSdOnJhV1mfPnq3Pzc3NE8kl0pnaEUkrMNz/KPJeu3ZtwwyyPgBib6MxujURRmyxo2vJ5JUouidEssWQ4Ite90D6D0Bqakfcjx8/NruHSTlatvR24siRIxEqsEWSsA3GV1SIj/T29g4g4goQVmAW9cM4whPVHdLSHDp0aDGk+tM0ZKWEeODZs2c/YjyVlgUUbYlb9Ftps2bR/FB9MmqR6NjYmAbxn6wMmf+yc+fOSowtYbIGKTOz8qwZTaVMVXEUtoOYiW85oA2lBzQCsX379qpgMEizoeQL9/NsWF8WA4SKIdSks0q601RynK7v3r2b+uh34UWCSwOKIdLG9ob+oco3VJ8MDAysl9MnPfocb21t/QJjy+DFwgjxwmY9q0HQTAQQpj+ZDcSlS5e2BAKBGMaWwIkXU2pZYdV4Komc'+
			'/gsXLixlEMfTQNDyxG/duvUVxsXgUSoXcAxx0Juxhs3IWgZAWxCq9oRC8teuXUvbFTTVm42hw/Bf0RcPVlVVteF8jByfaT/lTW1tLR2T6dvidsakTE+ePJlRpjt27PhQJOMFKSTHSHDWSkWZqj0mFQIQ32WSKcZR4Zxer1rnhUy1oKqCtyBTewox9K1kSlObSabnzp2bIlMuC7RCLJvLUEhGmV65cmWLYIUIlqnZ5QmrxiBUIsNmb/kcZboYns+tg1/YbR0MXiiFzCGblsOXUJMuuAR0osWcVAhKvpJ5yLQQnkOEFty3SJupfZKcAJExmxogchmE/bZSGmkdkbB5jjLVsUIVwkavYj+PEEFlsiVokdPLtElMn01tV+OKVPr9DIrg6Uj2O3lbW9ufTU1NHYJziEjuy+s9eSqebRHDy0cJtsurV69KRNA/sEPkN8bcwP'+
			'uarvr6+ut88zHINIF9VfVyAEviyIsBl3HUDbYP+2Wf4mZUY4qOjo7O6urq66i+E3h98obBmG8pHHk7YQLRhPWChL6hoaHJoIQ4IdGTjBsgxp0EIUQq8Oj9dNUoobJKYEZor30UyzQKECN0jtA9hup7gsctzPs9mUp2KqhxvvBr1xtz0qGGKJO5jDDv4XCtX53ZjxNWQYm3cNO3bv8Cqdf4uaoidSYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="right";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((49px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._right);
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjYyNzQ1MSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._svg_2_1);
		me.__23.appendChild(me._container_3);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_left';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((49px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._left);
		el=me._svg_1_1=document.createElement('div');
		els=me._svg_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuNjI3NDUxIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._svg_1_1);
		me.__23.appendChild(me._container_4);
		me.divSkin.appendChild(me.__23);
		el=me.__18=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9_\uba54\ub274";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__18.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__18.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__18.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStatePosition == 0) {
					me.__18.style.left = 'calc(50% - (100% / 2))';
					me.__18.style.top='70px';
				}
				else {
					me.__18.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__18.style.top='60px';
				}
			}
		}
		me.__18.logicBlock_position();
		me.__18.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width > 1604))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1280))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getViewerSize(true).width > 1140))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getViewerSize(true).width >= 940))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateSize = 4;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__18.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__18.ggCurrentLogicStateSize = newLogicStateSize;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStateSize == 0) {
					me.__18.style.width='40%';
					me.__18.style.height='80%';
					me.__18.style.left = 'calc(50% - (40% / 2))';
					skin.updateSize(me.__18);
				}
				else if (me.__18.ggCurrentLogicStateSize == 1) {
					me.__18.style.width='50%';
					me.__18.style.height='80%';
					me.__18.style.left = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__18);
				}
				else if (me.__18.ggCurrentLogicStateSize == 2) {
					me.__18.style.width='60%';
					me.__18.style.height='80%';
					me.__18.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__18);
				}
				else if (me.__18.ggCurrentLogicStateSize == 3) {
					me.__18.style.width='70%';
					me.__18.style.height='80%';
					me.__18.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__18);
				}
				else if (me.__18.ggCurrentLogicStateSize == 4) {
					me.__18.style.width='80%';
					me.__18.style.height='84%';
					me.__18.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me.__18);
				}
				else {
					me.__18.style.width='100%';
					me.__18.style.height='88%';
					me.__18.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__18);
				}
			}
		}
		me.__18.logicBlock_size();
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
				else {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background:rgba(255,255,255,0.9); backdrop-filter: blur(8px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 269.336px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 565.4px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.96;
				me._scrollarea_1.ggDragInertiaY *= 0.96;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : -10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 88.5%;';
		hs+='pointer-events:auto;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 2;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 2;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._container_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__620px_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__620px_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 180;
		el.ggHeight = 110.4;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__620px_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__620px_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__620px_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__620px_.childNodes[currElement].clientHeight < me.__620px_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__620px_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__620px_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__620px_.childNodes[currElement].style.overflow = 'hidden';
						me.__620px_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__620px_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__620px_.childNodes[currElement].scrollHeight);
						me.__620px_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__620px_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__620px_.ggUpdating == true) return;
			me.__620px_.ggUpdating = true;
			var el=me.__620px_;
			var curNumCols = 0;
			curNumCols = me.__620px_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__620px_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__620px_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__620px_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__620px_.getFilteredNodes(tourNodes, filter);
			me.__620px_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__620px_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__620px_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__620px_.ggWidth) + 'px';
				parameter.width=me.__620px_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__620px__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__620px_.ggNodeCount = me.__620px_.ggNumFilterPassed;
			me.__620px_.ggAutoPosition(true);
			me.__620px_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__620px_.parentNode && me.__620px_.parentNode.classList.contains('ggskin_subelement') && me.__620px_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__620px_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-620px \uc774\uc0c1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40.8381%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__620px_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__620px_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 620))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__620px_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__620px_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__620px_.style.transition='';
				if (me.__620px_.ggCurrentLogicStateVisible == 0) {
					me.__620px_.style.visibility=(Number(me.__620px_.style.opacity)>0||!me.__620px_.style.opacity)?'inherit':'hidden';
					me.__620px_.ggVisible=true;
				}
				else {
					me.__620px_.style.visibility="hidden";
					me.__620px_.ggVisible=false;
				}
			}
		}
		me.__620px_.logicBlock_visible();
		me.__620px_.ggCurrentLogicStateVisible = -1;
		me.__620px_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__620px_.childNodes.length; i++) {
				var child=me.__620px_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__620px_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*40.8381)/100.0;
			me.__620px_.ggUpdate();
		}
		me._container_2.appendChild(me.__620px_);
		el=me.__480px_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__480px_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 110;
		el.ggHeight = 88.8;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__480px_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__480px_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__480px_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__480px_.childNodes[currElement].clientHeight < me.__480px_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__480px_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__480px_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__480px_.childNodes[currElement].style.overflow = 'hidden';
						me.__480px_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__480px_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__480px_.childNodes[currElement].scrollHeight);
						me.__480px_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__480px_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__480px_.ggUpdating == true) return;
			me.__480px_.ggUpdating = true;
			var el=me.__480px_;
			var curNumCols = 0;
			curNumCols = me.__480px_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__480px_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__480px_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__480px_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__480px_.getFilteredNodes(tourNodes, filter);
			me.__480px_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__480px_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__480px_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__480px_.ggWidth) + 'px';
				parameter.width=me.__480px_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__480px__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__480px_.ggNodeCount = me.__480px_.ggNumFilterPassed;
			me.__480px_.ggAutoPosition(true);
			me.__480px_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__480px_.parentNode && me.__480px_.parentNode.classList.contains('ggskin_subelement') && me.__480px_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__480px_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-480px \uc774\ud558";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32.848%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__480px_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__480px_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 480)) && 
				((player.getViewerSize(true).width > 390))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__480px_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__480px_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__480px_.style.transition='';
				if (me.__480px_.ggCurrentLogicStateVisible == 0) {
					me.__480px_.style.visibility=(Number(me.__480px_.style.opacity)>0||!me.__480px_.style.opacity)?'inherit':'hidden';
					me.__480px_.ggVisible=true;
				}
				else {
					me.__480px_.style.visibility="hidden";
					me.__480px_.ggVisible=false;
				}
			}
		}
		me.__480px_.logicBlock_visible();
		me.__480px_.ggCurrentLogicStateVisible = -1;
		me.__480px_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__480px_.childNodes.length; i++) {
				var child=me.__480px_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__480px_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*32.848)/100.0;
			me.__480px_.ggUpdate();
		}
		me._container_2.appendChild(me.__480px_);
		el=me.__620_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__620_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 91.2;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__620_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__620_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__620_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__620_.childNodes[currElement].clientHeight < me.__620_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__620_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__620_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__620_.childNodes[currElement].style.overflow = 'hidden';
						me.__620_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__620_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__620_.childNodes[currElement].scrollHeight);
						me.__620_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__620_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__620_.ggUpdating == true) return;
			me.__620_.ggUpdating = true;
			var el=me.__620_;
			var curNumCols = 0;
			curNumCols = me.__620_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__620_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__620_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__620_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__620_.getFilteredNodes(tourNodes, filter);
			me.__620_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__620_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__620_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__620_.ggWidth) + 'px';
				parameter.width=me.__620_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__620__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__620_.ggNodeCount = me.__620_.ggNumFilterPassed;
			me.__620_.ggAutoPosition(true);
			me.__620_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__620_.parentNode && me.__620_.parentNode.classList.contains('ggskin_subelement') && me.__620_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__620_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-620 \uc774\ud558";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33.7358%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__620_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__620_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 480)) && 
				((player.getViewerSize(true).width < 620))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__620_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__620_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__620_.style.transition='';
				if (me.__620_.ggCurrentLogicStateVisible == 0) {
					me.__620_.style.visibility=(Number(me.__620_.style.opacity)>0||!me.__620_.style.opacity)?'inherit':'hidden';
					me.__620_.ggVisible=true;
				}
				else {
					me.__620_.style.visibility="hidden";
					me.__620_.ggVisible=false;
				}
			}
		}
		me.__620_.logicBlock_visible();
		me.__620_.ggCurrentLogicStateVisible = -1;
		me.__620_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__620_.childNodes.length; i++) {
				var child=me.__620_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__620_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*33.7358)/100.0;
			me.__620_.ggUpdate();
		}
		me._container_2.appendChild(me.__620_);
		el=me.__320px_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__320px_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140;
		el.ggHeight = 112.8;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__320px_1.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__320px_1.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__320px_1.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__320px_1.childNodes[currElement].clientHeight < me.__320px_1.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__320px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__320px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__320px_1.childNodes[currElement].style.overflow = 'hidden';
						me.__320px_1.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__320px_1.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__320px_1.childNodes[currElement].scrollHeight);
						me.__320px_1.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__320px_1.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__320px_1.ggUpdating == true) return;
			me.__320px_1.ggUpdating = true;
			var el=me.__320px_1;
			var curNumCols = 0;
			curNumCols = me.__320px_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__320px_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__320px_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__320px_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__320px_1.getFilteredNodes(tourNodes, filter);
			me.__320px_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__320px_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__320px_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__320px_1.ggWidth) + 'px';
				parameter.width=me.__320px_1.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__320px_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__320px_1.ggNodeCount = me.__320px_1.ggNumFilterPassed;
			me.__320px_1.ggAutoPosition(true);
			me.__320px_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__320px_1.parentNode && me.__320px_1.parentNode.classList.contains('ggskin_subelement') && me.__320px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__320px_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-320px \uc774\ud558_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41.7258%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__320px_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__320px_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 390))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__320px_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__320px_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__320px_1.style.transition='';
				if (me.__320px_1.ggCurrentLogicStateVisible == 0) {
					me.__320px_1.style.visibility=(Number(me.__320px_1.style.opacity)>0||!me.__320px_1.style.opacity)?'inherit':'hidden';
					me.__320px_1.ggVisible=true;
				}
				else {
					me.__320px_1.style.visibility="hidden";
					me.__320px_1.ggVisible=false;
				}
			}
		}
		me.__320px_1.logicBlock_visible();
		me.__320px_1.ggCurrentLogicStateVisible = -1;
		me.__320px_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__320px_1.childNodes.length; i++) {
				var child=me.__320px_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__320px_1.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*41.7258)/100.0;
			me.__320px_1.ggUpdate();
		}
		me._container_2.appendChild(me.__320px_1);
		me._scrollarea_1__content.appendChild(me._container_2);
		me.__22.appendChild(me._scrollarea_1);
		me.__19.appendChild(me.__22);
		el=me.__20=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		els=me.__21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__21.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__21.ggUpdateText();
		el.appendChild(els);
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		el=me._container_11=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_11.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._container_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_22=document.createElement('div');
		els=me._image_22__img=document.createElement('img');
		els.className='ggskin ggskin_image_22';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_22.ggUpdatePosition=function (useTransition) {
		}
		me._container_11.appendChild(me._image_22);
		me.__20.appendChild(me._container_11);
		me.__19.appendChild(me.__20);
		me.__18.appendChild(me.__19);
		me.divSkin.appendChild(me.__18);
		el=me._mfooter=document.createElement('div');
		el.ggId="m-footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 15%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-height:52px; min-width:267px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mfooter.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mfooter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 960))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mfooter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mfooter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mfooter.style.transition='';
				if (me._mfooter.ggCurrentLogicStateVisible == 0) {
					me._mfooter.style.visibility=(Number(me._mfooter.style.opacity)>0||!me._mfooter.style.opacity)?'inherit':'hidden';
					me._mfooter.ggVisible=true;
				}
				else {
					me._mfooter.style.visibility="hidden";
					me._mfooter.ggVisible=false;
				}
			}
		}
		me._mfooter.logicBlock_visible();
		me._mfooter.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_=document.createElement('div');
		el.ggId="Rectangle ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background:rgba(255,255,255,0.8); backdrop-filter: blur(8px); box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_.ggUpdatePosition=function (useTransition) {
		}
		el=me._button=document.createElement('div');
		el.ggId="button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((20% + 0px) / 2) + 20%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', !player.getVariableValue('vis_aptinfo'));
				me.__1.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/438480?ctype=01&xy=37.0059278,127.1994713,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__1.ggUpdateText();
			me.__1.ggTextDiv.scrollTop = 0;
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1nbG9iZSIgc3Ryb2tlPSIjNTU1NTU1IiBzdHJva2Utb3BhY2l0eT0iMSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KIDxjaXJjbGUgY3g9IjEyIiByPSIxMCIgY3k9IjEyIi8+CiA8bGluZSB4MT0iMiIgeDI9IjIyIiB5Mj0iMTIiIHkxPSIxMiIvPgogPHBhdGggZD0iTTEyIDJhMTUuMyAxNS4zIDAgMCAxIDQgMT'+
			'AgMTUuMyAxNS4zIDAgMCAxLTQgMTAgMTUuMyAxNS4zIDAgMCAxLTQtMTAgMTUuMyAxNS4zIDAgMCAxIDQtMTB6Ii8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1_2=document.createElement('div');
		els=me._text_1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -24px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub0b4\uc9d1\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_2.ggUpdateText();
		el.appendChild(els);
		me._text_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._svg_1.appendChild(me._text_1_2);
		me.__17.appendChild(me._svg_1);
		me._button.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggId="\uc1fc\ud551";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.onclick=function (e) {
			player.setVariableValue('vis_ad', !player.getVariableValue('vis_ad'));
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1zaG9wcGluZy1jYXJ0IiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS1vcGFjaXR5PSIxIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGNpcmNsZSBjeD0iOSIgcj0iMSIgY3k9IjIxIi8+CiA8Y2lyY2xlIGN4PSIyMCIgcj0iMSIgY3k9IjIxIi8+CiA8cGF0aCBkPSJNMSAxaDRsMi42OCAxMy4zOWEyIDIgMCAwID'+
			'AgMiAxLjYxaDkuNzJhMiAyIDAgMCAwIDItMS42MUwyMyA2SDYiLz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -24px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("SHOP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._svg_3.appendChild(me._text_2);
		me.__16.appendChild(me._svg_3);
		me._button.appendChild(me.__16);
		el=me.__15=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((20% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', !player.getVariableValue('vis_m_roomMove'));
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,127,0.862745);';
		hs+='border : 5px solid rgba(255,255,255,0.705882);';
		hs+='border-radius : 50px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 10px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -50%;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 4px 10px rgba(0,0,0,0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1ob21lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIxIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBhdGggZD0iTTMgOWw5LTcgOSA3djExYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPgogPHBvbHlsaW5lIHBvaW50cz0iOSAyMiA5IDEyIDE1IDEyIDE1IDIyIi8+Cjwvc3ZnPg'+
			'o=';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._svg_2);
		me.__15.appendChild(me._rectangle_2);
		me._button.appendChild(me.__15);
		el=me.__13=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ub044\uae30";
		el.ggDx=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((20% + 0px) / 2) - 20%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.onclick=function (e) {
			me._mfooter.style.transition='none';
			me._mfooter.style.visibility='hidden';
			me._mfooter.ggVisible=false;
			if (
				(
					((player.getViewerSize(true).width > 768))
				)
			) {
				me._pc1.style.transition='none';
				me._pc1.style.visibility='hidden';
				me._pc1.ggVisible=false;
			}
			if (
				(
					((player.getViewerSize(true).width <= 768))
				)
			) {
				me.__23.style.transition='none';
				me.__23.style.visibility='hidden';
				me.__23.ggVisible=false;
			}
			player.setVariableValue('vis_hide', true);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUtb2ZmIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS1vcGFjaXR5PSIxIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBhdGggZD0iTTE3Ljk0IDE3Ljk0QTEwLjA3IDEwLjA3IDAgMCAxIDEyIDIwYy03IDAtMTEtOC0xMS04YTE4LjQ1IDE4LjQ1IDAgMCAxIDUuMDYtNS45NE05LjkgNC4yNEE5LjEyIDkuMT'+
			'IgMCAwIDEgMTIgNGM3IDAgMTEgOCAxMSA4YTE4LjUgMTguNSAwIDAgMS0yLjE2IDMuMTltLTYuNzItMS4wN2EzIDMgMCAxIDEtNC4yNC00LjI0Ii8+CiA8bGluZSB4MT0iMSIgeDI9IjIzIiB5Mj0iMjMiIHkxPSIxIi8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8\ub044\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -24px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc84\ud2bc\ub044\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__14.ggUpdateText();
		el.appendChild(els);
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me._svg_4.appendChild(me.__14);
		me.__13.appendChild(me._svg_4);
		me._button.appendChild(me.__13);
		el=me.__1_1=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\uc815\ubcf4_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_1.onclick=function (e) {
			player.openUrl("www.lanhouse.kr","");
		}
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAjCAYAAABsFtHvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATZSURBVHgBtVdbaFxVFN3nkXmlTWaaaaQtaSNSmtRHP2xLEKG2oiBVqCKmIkJpRSgFLYioVBChpR8W8yOIiNh8iH6UUPtRqR8SRKIVtdg0SVuKtU0hU2uSmclkZjL3PNzn3Jkmmcy9c5PUBXvunftaZ6+9zz77EFgaKJo6uSe6/dUt4fOZGe1elQBa4FG4R+2416phrrMkKA6LBzOfvPVe8zfJRto9OaUUJXYw9WHGqAB4m3se7CUXBI3u35SMlU6syjRqeDGfUzoQMb6pUQESQuIN5UEggnpuve3fH92z4xHV9++YFIzYa/WhyzK3Inm0HIrZMdWFGaBIHY'+
			'l/3xwmT01P+8hcHfOSe87WuYOoeFyG8iO393p2hzoOdzcNQUoSDXVgkssp2wxAKiudSJI0mAHUgCe59XbkVNOHp78unD414FxpUYFUuov190UTn70SGc1MKq9Hama7JZ4813w+3kq3nxtxPvp9DPKwSLywEhL1pJobO+MZObo3ukb/lnD4uH4UchocuTiPFwM+5yj++nzlW+0d7ET2shScYjZL+F9hSM2UEVPfxS/xnN5c+Ftpbq4b4uWSE/CeT6bIHN8badMDCa1vq00yr4nGxEIDY1A3vesAvSA+xt/pDl/PjCjJKf6tJhPLCHcMZnWtBeTi+QkwMjOoNSM8Z0lAGA+Z321T/rzkXS65mUt+npuC7xnbZSYc8fPckPt6dw8Szm/54b5ZbWryOCyJ9vJYIQ2hqK/n1EqrfGxxMNODvf7smtCfF18anbiZldbzWsYr'+
			'st+bmNs1/+ferU93Pb/xbPHipGgIUeab7dqPIDi5u+b/sevM6lj4udLQuGIMuMOJb8xppa9aouy2tTq8L75CpZ7MxfOlZ8R4Hj8qqO0mmJvtXubWcL+E84aV+VJvx8sP7mr5qjicEYxzbvs1cL9JPDwXEkTzakJd2b2qqLfnVuY7A5t/TDD++MzVnKKUctubUPc9MwDC8JfN80xrvL/iAZrZeCC9zs124WELY27XqWOvNbboG50zjZnSYzJbIkShzErhl/El5TZyxBz5rMSagIi0UpJW5Eu+I528dg0k9y0keqG3wyfXHurcGv4kPzgtGMK2xAzKKuHnqCE2ZEZyVwmhQDR1Mn62r9i1+3jhV3D1Edx2m16yi/nEU7+0Xghl9ZbC9RnNMGTGHTvGBQPA9gfvmXWSRAg0rCKpnW9P3t/ff7eHtW7ReX+rDXEF7eOD4f'+
			'V6sEWRUfmwygtCJHaypjRaiZVl17IcJyXsf6mkiKxl5J+i6ok9kW5DYoCqQPrWdmdcw5k3Gg907WzomRp0UGb0z8EMsjsQV1JiJ5sGbesl3qKocUnJ2IYG3vvF9EP7emC4rO2CuUMm3m1WUEt4lFHewaRwgJlZi1sdYlYpG4DKXKocXfGNCJrjlohG4WrT0VxHJVxezi3YeRDqxlDcwHMNTEbwoRgSR9ztDgmjmXOMJYkao9Z0mDmJ9gZyu0iOlIkZ1KkU8/p23FuAnEDyrHseCOiw1EQl1xF27NtC+/s/FG+Cq2Td4jxLjuMUt8BVMeD2ER9V0SghJaIvkDfT22BOUIKAGuHNdDMyWwTsGc3cTbQyOpQSB+MfZLZBAJmrwVUapM5hTIPLbAZIcMeaP9Qn2z/9KZeBgDJX4z9CfSTjlZFlWgAAAABJRU5ErkJggg=='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1_1=document.createElement('div');
		els=me._text_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 8px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("LANHOUSE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_1.ggUpdateText();
		el.appendChild(els);
		me._text_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_21.appendChild(me._text_1_1);
		me.__1_1.appendChild(me._image_21);
		me._button.appendChild(me.__1_1);
		me._rectangle_.appendChild(me._button);
		me._mfooter.appendChild(me._rectangle_);
		me.divSkin.appendChild(me._mfooter);
		el=me._m=document.createElement('div');
		el.ggId="m-\uc2a4\ud0a8\ucf1c\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 55px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m.style.transition='';
				if (me._m.ggCurrentLogicStateVisible == 0) {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
				else {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
			}
		}
		me._m.logicBlock_visible();
		me._m.onclick=function (e) {
			if (
				(
					((player.getViewerSize(true).width <= 960))
				)
			) {
				me._mfooter.style.transition='none';
				me._mfooter.style.visibility=(Number(me._mfooter.style.opacity)>0||!me._mfooter.style.opacity)?'inherit':'hidden';
				me._mfooter.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize(true).width > 768))
				)
			) {
				me._pc1.style.transition='none';
				me._pc1.style.visibility=(Number(me._pc1.style.opacity)>0||!me._pc1.style.opacity)?'inherit':'hidden';
				me._pc1.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize(true).width <= 768))
				)
			) {
				me.__23.style.transition='none';
				me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
				me.__23.ggVisible=true;
			}
			player.setVariableValue('vis_hide', false);
		}
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUiIHN0cm9rZT0iIzU1NTU1NSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGhlaWdodD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8cGF0aCBkPSJNMSAxMnM0LTggMTEtOCAxMSA4IDExIDgtNCA4LTExIDgtMTEtOC0xMS04eiIvPgogPGNpcmNsZSBjeD0iMTIiIHI9IjMiIGN5PSIxMiIvPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		els=me.__12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8\ucf1c\uae30 \ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -19px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__12.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubc84\ud2bc\ucf1c\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__12.ggUpdateText();
		el.appendChild(els);
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me._svg_5.appendChild(me.__12);
		me._rectangle_3.appendChild(me._svg_5);
		me._m.appendChild(me._rectangle_3);
		me.divSkin.appendChild(me._m);
		el=me._pc1=document.createElement('div');
		el.ggId="pc-\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width >= 1250))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1024))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._pc1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._pc1.ggCurrentLogicStateSize = newLogicStateSize;
				me._pc1.style.transition='width 0s, height 0s';
				if (me._pc1.ggCurrentLogicStateSize == 0) {
					me._pc1.style.width='95%';
					me._pc1.style.height='42px';
					me._pc1.style.left = 'calc(50% - (95% / 2))';
					me._pc1.style.top = 'calc(50% - (42px / 2))';
					skin.updateSize(me._pc1);
				}
				else if (me._pc1.ggCurrentLogicStateSize == 1) {
					me._pc1.style.width='93%';
					me._pc1.style.height='42px';
					me._pc1.style.left = 'calc(50% - (93% / 2))';
					me._pc1.style.top = 'calc(50% - (42px / 2))';
					skin.updateSize(me._pc1);
				}
				else {
					me._pc1.style.width='90%';
					me._pc1.style.height='42px';
					me._pc1.style.left = 'calc(50% - (90% / 2))';
					me._pc1.style.top = 'calc(50% - (42px / 2))';
					skin.updateSize(me._pc1);
				}
			}
		}
		me._pc1.logicBlock_size();
		me._pc1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc1.style.transition='width 0s, height 0s';
				if (me._pc1.ggCurrentLogicStateVisible == 0) {
					me._pc1.style.visibility=(Number(me._pc1.style.opacity)>0||!me._pc1.style.opacity)?'inherit':'hidden';
					me._pc1.ggVisible=true;
				}
				else {
					me._pc1.style.visibility="hidden";
					me._pc1.ggVisible=false;
				}
			}
		}
		me._pc1.logicBlock_visible();
		me._pc1.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 189px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((189px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		els=me.__11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjYyNzQ1MSIgaGVpZ2h0PSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me.__11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc624\ub978\ucabd\ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me.__11);
		me._pc1.appendChild(me._container_5);
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 189px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((189px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_6.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		els=me.__10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuNjI3NDUxIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me.__10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc67c\ucabd\ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__10);
		me._pc1.appendChild(me._container_6);
		me.divSkin.appendChild(me._pc1);
		el=me._pcfooter=document.createElement('div');
		el.ggId="pc-footer";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcfooter.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pcfooter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 960))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pcfooter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pcfooter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pcfooter.style.transition='';
				if (me._pcfooter.ggCurrentLogicStateVisible == 0) {
					me._pcfooter.style.visibility=(Number(me._pcfooter.style.opacity)>0||!me._pcfooter.style.opacity)?'inherit':'hidden';
					me._pcfooter.ggVisible=true;
				}
				else {
					me._pcfooter.style.visibility="hidden";
					me._pcfooter.ggVisible=false;
				}
			}
		}
		me._pcfooter.logicBlock_visible();
		me._pcfooter.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc0=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\uc815\ubcf4-pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc0.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', !player.getVariableValue('vis_aptinfo'));
				me.__1.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/438480?ctype=01&xy=37.0059278,127.1994713,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__1.ggUpdateText();
			me.__1.ggTextDiv.scrollTop = 0;
		}
		me._pc0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_aptinfo') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4.style.transition='background-color 0s';
				if (me._rectangle_4.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_4.style.backgroundColor="rgba(255,255,255,0.313726)";
				}
			}
		}
		me._rectangle_4.logicBlock_backgroundcolor();
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub0b4\uc9d1\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_aptinfo') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_3.style.transition='color 0s';
				if (me._text_3.ggCurrentLogicStateTextColor == 0) {
					me._text_3.style.color="rgba(85,85,85,1)";
				}
				else {
					me._text_3.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._text_3.logicBlock_textcolor();
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me._text_3);
		me._pc0.appendChild(me._rectangle_4);
		me._pcfooter.appendChild(me._pc0);
		el=me._pc_1=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9-pc_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((30% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_1.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', !player.getVariableValue('vis_m_roomMove'));
		}
		me._pc_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__40.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__40.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__40.style.transition='background-color 0s';
				if (me.__40.ggCurrentLogicStateBackgroundColor == 0) {
					me.__40.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__40.style.backgroundColor="rgba(255,255,255,0.313726)";
				}
			}
		}
		me.__40.logicBlock_backgroundcolor();
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		els=me.__30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc774\ub3d9 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__30.ggUpdateText();
		el.appendChild(els);
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__30.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__30.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__30.style.transition='color 0s';
				if (me.__30.ggCurrentLogicStateTextColor == 0) {
					me.__30.style.color="rgba(85,85,85,1)";
				}
				else {
					me.__30.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me.__30.logicBlock_textcolor();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__30);
		me._pc_1.appendChild(me.__40);
		me._pcfooter.appendChild(me._pc_1);
		el=me._shoppc_2=document.createElement('div');
		el.ggId="SHOP-pc_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._shoppc_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shoppc_2.onclick=function (e) {
			player.setVariableValue('vis_ad', !player.getVariableValue('vis_ad'));
		}
		me._shoppc_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._shop_4=document.createElement('div');
		el.ggId="SHOP 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._shop_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shop_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._shop_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._shop_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._shop_4.style.transition='background-color 0s';
				if (me._shop_4.ggCurrentLogicStateBackgroundColor == 0) {
					me._shop_4.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._shop_4.style.backgroundColor="rgba(255,255,255,0.313726)";
				}
			}
		}
		me._shop_4.logicBlock_backgroundcolor();
		me._shop_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._shop_3=document.createElement('div');
		els=me._shop_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="SHOP 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._shop_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("SHOP", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._shop_3.ggUpdateText();
		el.appendChild(els);
		me._shop_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shop_3.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._shop_3.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._shop_3.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._shop_3.style.transition='color 0s';
				if (me._shop_3.ggCurrentLogicStateTextColor == 0) {
					me._shop_3.style.color="rgba(85,85,85,1)";
				}
				else {
					me._shop_3.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._shop_3.logicBlock_textcolor();
		me._shop_3.ggUpdatePosition=function (useTransition) {
		}
		me._shop_4.appendChild(me._shop_3);
		me._shoppc_2.appendChild(me._shop_4);
		me._pcfooter.appendChild(me._shoppc_2);
		me.divSkin.appendChild(me._pcfooter);
		el=me._pc=document.createElement('div');
		el.ggId="pc-\uc2a4\ud0a8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 960))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc.style.transition='';
				if (me._pc.ggCurrentLogicStateVisible == 0) {
					me._pc.style.visibility=(Number(me._pc.style.opacity)>0||!me._pc.style.opacity)?'inherit':'hidden';
					me._pc.ggVisible=true;
				}
				else {
					me._pc.style.visibility="hidden";
					me._pc.ggVisible=false;
				}
			}
		}
		me._pc.logicBlock_visible();
		me._pc.onclick=function (e) {
			player.setVariableValue('vis_hide_pc', !player.getVariableValue('vis_hide_pc'));
			me._pcfooter.ggVisible = !me._pcfooter.ggVisible;
			var flag=me._pcfooter.ggVisible;
			me._pcfooter.style.transition='none';
			me._pcfooter.style.visibility=((flag)&&(Number(me._pcfooter.style.opacity)>0||!me._pcfooter.style.opacity))?'inherit':'hidden';
			me._pc1.ggVisible = !me._pc1.ggVisible;
			var flag=me._pc1.ggVisible;
			me._pc1.style.transition='none';
			me._pc1.style.visibility=((flag)&&(Number(me._pc1.style.opacity)>0||!me._pc1.style.opacity))?'inherit':'hidden';
		}
		me._pc.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_hide_pc') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__9.style.transition='background-color 0s';
				if (me.__9.ggCurrentLogicStateBackgroundColor == 0) {
					me.__9.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
				else {
					me.__9.style.backgroundColor="rgba(255,255,255,0.313726)";
				}
			}
		}
		me.__9.logicBlock_backgroundcolor();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUtb2ZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIxIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBhdGggZD0iTTE3Ljk0IDE3Ljk0QTEwLjA3IDEwLjA3IDAgMCAxIDEyIDIwYy03IDAtMTEtOC0xMS04YTE4LjQ1IDE4LjQ1IDAgMCAxIDUuMDYtNS45NE05LjkgNC4yNEE5LjEyIDkuMT'+
			'IgMCAwIDEgMTIgNGM3IDAgMTEgOCAxMSA4YTE4LjUgMTguNSAwIDAgMS0yLjE2IDMuMTltLTYuNzItMS4wN2EzIDMgMCAxIDEtNC4yNC00LjI0Ii8+CiA8bGluZSB4MT0iMSIgeDI9IjIzIiB5Mj0iMjMiIHkxPSIxIi8+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hide_pc') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_8.style.transition='';
				if (me._svg_8.ggCurrentLogicStateVisible == 0) {
					me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
					me._svg_8.ggVisible=true;
				}
				else {
					me._svg_8.style.visibility="hidden";
					me._svg_8.ggVisible=false;
				}
			}
		}
		me._svg_8.logicBlock_visible();
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._svg_8);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUiIHN0cm9rZT0iIzU1NTU1NSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGhlaWdodD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8cGF0aCBkPSJNMSAxMnM0LTggMTEtOCAxMSA4IDExIDgtNCA4LTExIDgtMTEtOC0xMS04eiIvPgogPGNpcmNsZSBjeD0iMTIiIHI9IjMiIGN5PSIxMiIvPgo8L3N2Zz4K';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hide_pc') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_7.style.transition='';
				if (me._svg_7.ggCurrentLogicStateVisible == 0) {
					me._svg_7.style.visibility=(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity)?'inherit':'hidden';
					me._svg_7.ggVisible=true;
				}
				else {
					me._svg_7.style.visibility="hidden";
					me._svg_7.ggVisible=false;
				}
			}
		}
		me._svg_7.logicBlock_visible();
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._svg_7);
		me._pc.appendChild(me.__9);
		me.divSkin.appendChild(me._pc);
		el=me.__4=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30_\uc5d0\uc5b4\ucee8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.left = 'calc(50% - (100% / 2))';
					me.__4.style.top='70px';
				}
				else {
					me.__4.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__4.style.top='60px';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width > 1604))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1280))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getViewerSize(true).width > 1140))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getViewerSize(true).width >= 940))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateSize = 4;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__4.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__4.ggCurrentLogicStateSize = newLogicStateSize;
				me.__4.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__4.ggCurrentLogicStateSize == 0) {
					me.__4.style.width='40%';
					me.__4.style.height='80%';
					me.__4.style.left = 'calc(50% - (40% / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 1) {
					me.__4.style.width='50%';
					me.__4.style.height='80%';
					me.__4.style.left = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 2) {
					me.__4.style.width='60%';
					me.__4.style.height='80%';
					me.__4.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 3) {
					me.__4.style.width='70%';
					me.__4.style.height='80%';
					me.__4.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__4);
				}
				else if (me.__4.ggCurrentLogicStateSize == 4) {
					me.__4.style.width='80%';
					me.__4.style.height='84%';
					me.__4.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me.__4);
				}
				else {
					me.__4.style.width='100%';
					me.__4.style.height='88%';
					me.__4.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__4);
				}
			}
		}
		me.__4.logicBlock_size();
		me.__4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_aircon') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
				else {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc5d0\uc5b4\ucee8-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background:rgba(255,255,255,0.9); backdrop-filter: blur(8px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc5d0\uc5b4\ucee8-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uc5d0\uc5b4\ucee8-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc9d1\uafb8\ubbf8\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__8.ggUpdateText();
		el.appendChild(els);
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me.__8);
		el=me._container_10=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc5d0\uc5b4\ucee8-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_10.onclick=function (e) {
			player.setVariableValue('vis_aircon', false);
		}
		me._container_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-\uc5d0\uc5b4\ucee8-Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me._container_10.appendChild(me._image_20);
		me.__7.appendChild(me._container_10);
		me.__5.appendChild(me.__7);
		el=me._iframe0=document.createElement('div');
		el.ggId="\uc5d0\uc5b4\ucee8-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		els=me.__6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc5d0\uc5b4\ucee8\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__6.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__6.ggUpdateText();
		el.appendChild(els);
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me._iframe0.appendChild(me.__6);
		me.__5.appendChild(me._iframe0);
		me.__4.appendChild(me.__5);
		me.divSkin.appendChild(me.__4);
		el=me.__=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.left = 'calc(50% - (100% / 2))';
					me.__.style.top='70px';
				}
				else {
					me.__.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__.style.top='60px';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width > 1604))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1280))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getViewerSize(true).width > 1140))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getViewerSize(true).width >= 940))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateSize = 4;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='40%';
					me.__.style.height='80%';
					me.__.style.left = 'calc(50% - (40% / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 1) {
					me.__.style.width='50%';
					me.__.style.height='80%';
					me.__.style.left = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 2) {
					me.__.style.width='60%';
					me.__.style.height='80%';
					me.__.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 3) {
					me.__.style.width='70%';
					me.__.style.height='80%';
					me.__.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 4) {
					me.__.style.width='80%';
					me.__.style.height='84%';
					me.__.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='100%';
					me.__.style.height='88%';
					me.__.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_aptinfo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				else {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background:rgba(255,255,255,0.9); backdrop-filter: blur(8px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc544\ud30c\ud2b8\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__3);
		el=me._container_1=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', false);
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_2);
		me.__2.appendChild(me._container_1);
		me.__0.appendChild(me.__2);
		el=me._iframe=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		els=me.__1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub124\uc774\ubc84\uc815\ubcf4\ub780";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1.ggUpdateText();
		el.appendChild(els);
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd9c\ucc98 : KB \ubd80\ub3d9\uc0b0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._text_4);
		me._iframe.appendChild(me.__1);
		me.__0.appendChild(me._iframe);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__24.logicBlock_visible();
		me.__23.logicBlock_visible();
		me.__18.logicBlock_position();
		me.__18.logicBlock_size();
		me.__18.logicBlock_visible();
		me.__620px_.logicBlock_visible();
		me.__480px_.logicBlock_visible();
		me.__620_.logicBlock_visible();
		me.__320px_1.logicBlock_visible();
		me._mfooter.logicBlock_visible();
		me._m.logicBlock_visible();
		me._pc1.logicBlock_size();
		me._pc1.logicBlock_visible();
		me._pcfooter.logicBlock_visible();
		me._rectangle_4.logicBlock_backgroundcolor();
		me._text_3.logicBlock_textcolor();
		me.__40.logicBlock_backgroundcolor();
		me.__30.logicBlock_textcolor();
		me._shop_4.logicBlock_backgroundcolor();
		me._shop_3.logicBlock_textcolor();
		me._pc.logicBlock_visible();
		me.__9.logicBlock_backgroundcolor();
		me._svg_8.logicBlock_visible();
		me._svg_7.logicBlock_visible();
		me.__4.logicBlock_position();
		me.__4.logicBlock_size();
		me.__4.logicBlock_visible();
		me.__.logicBlock_position();
		me.__.logicBlock_size();
		me.__.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-에어컨')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-에어컨'].length; i++) {
					hotspotTemplates['집꾸미기버튼-에어컨'][i].ggEvent_changenode();
				}
			}
			me.__18.logicBlock_visible();
			me.__620px_.ggUpdateConditionNodeChange();
			me.__480px_.ggUpdateConditionNodeChange();
			me.__620_.ggUpdateConditionNodeChange();
			me.__320px_1.ggUpdateConditionNodeChange();
			me._m.logicBlock_visible();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._text_3.logicBlock_textcolor();
			me.__40.logicBlock_backgroundcolor();
			me.__30.logicBlock_textcolor();
			me._shop_4.logicBlock_backgroundcolor();
			me._shop_3.logicBlock_textcolor();
			me.__9.logicBlock_backgroundcolor();
			me._svg_8.logicBlock_visible();
			me._svg_7.logicBlock_visible();
			me.__4.logicBlock_visible();
			me.__.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-에어컨')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-에어컨'].length; i++) {
					hotspotTemplates['집꾸미기버튼-에어컨'][i].ggEvent_configloaded();
				}
			}
			me.__18.logicBlock_visible();
			me._scrollarea_1.ggUpdatePosition();
			me._m.logicBlock_visible();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._text_3.logicBlock_textcolor();
			me.__40.logicBlock_backgroundcolor();
			me.__30.logicBlock_textcolor();
			me._shop_4.logicBlock_backgroundcolor();
			me._shop_3.logicBlock_textcolor();
			me.__9.logicBlock_backgroundcolor();
			me._svg_8.logicBlock_visible();
			me._svg_7.logicBlock_visible();
			me.__4.logicBlock_visible();
			me.__.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__24.logicBlock_visible();
			me.__23.logicBlock_visible();
			me.__18.logicBlock_position();
			me.__18.logicBlock_size();
			me.__620px_.logicBlock_visible();
			me.__480px_.logicBlock_visible();
			me.__620_.logicBlock_visible();
			me.__320px_1.logicBlock_visible();
			me._mfooter.logicBlock_visible();
			me._pc1.logicBlock_size();
			me._pc1.logicBlock_visible();
			me._pcfooter.logicBlock_visible();
			me._pc.logicBlock_visible();
			me.__4.logicBlock_position();
			me.__4.logicBlock_size();
			me.__.logicBlock_position();
			me.__.logicBlock_size();
		});
		player.addListener('varchanged_vis_ad', function(event) {
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-에어컨')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-에어컨'].length; i++) {
					hotspotTemplates['집꾸미기버튼-에어컨'][i].ggEvent_varchanged_vis_ad();
				}
			}
			me._shop_4.logicBlock_backgroundcolor();
			me._shop_3.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_aircon', function(event) {
			me.__4.logicBlock_visible();
		});
		player.addListener('varchanged_vis_aptinfo', function(event) {
			me._rectangle_4.logicBlock_backgroundcolor();
			me._text_3.logicBlock_textcolor();
			me.__.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hide', function(event) {
			me._m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hide_pc', function(event) {
			me.__9.logicBlock_backgroundcolor();
			me._svg_8.logicBlock_visible();
			me._svg_7.logicBlock_visible();
		});
		player.addListener('varchanged_vis_m_roomMove', function(event) {
			me.__18.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__30.logicBlock_textcolor();
		});
		player.addListener('viewerinit', function(event) {
			me.__620px_.ggUpdate();
			me.__480px_.ggUpdate();
			me.__620_.ggUpdate();
			me.__320px_1.ggUpdate();
		});
	};
	function SkinCloner__320px_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 89px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
	};
	function SkinCloner__620__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a0_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a0.onclick=function (e) {
			if (me._nodeimage_118a0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a0.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a0.appendChild(me.__18a0);
		me._nodeimage_118a0.appendChild(me._rectangle_118a0);
		me.__div.appendChild(me._nodeimage_118a0);
	};
	function SkinCloner__480px__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a1_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 67px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a1.onclick=function (e) {
			if (me._nodeimage_118a1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a1.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a1.appendChild(me.__18a1);
		me._nodeimage_118a1.appendChild(me._rectangle_118a1);
		me.__div.appendChild(me._nodeimage_118a1);
	};
	function SkinCloner__620px__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a2_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 105px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a2.onclick=function (e) {
			if (me._nodeimage_118a2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a2.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a2.appendChild(me.__18a2);
		me._nodeimage_118a2.appendChild(me._rectangle_118a2);
		me.__div.appendChild(me._nodeimage_118a2);
	};
	function SkinHotspotClass__27(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__27=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_27']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_27']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\uc5d0\uc5b4\ucee8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		hs+='background: linear-gradient(to top, #d94c2b, #e25e25); border: 1px solid #b8421f; border-radius: 50%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), \/* soft drop *\/ inset 0 -2px 4px rgba(0, 0, 0, 0.1); \/* subtle inner shadow *\/';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__28.onclick=function (e) {
				skin.__6.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/woozipsa.com\/pro.php?cateGroup=%EC%9E%85%EC%A3%BC%EC%B2%AD%EC%86%8C%EC%A0%84&cate=%EC%8B%9C%EC%8A%A4%ED%85%9C+%EC%97%90%EC%96%B4%EC%BB%A8\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__6.ggUpdateText();
			skin.__6.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_aircon', true);
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(226,94,37,0.705882);';
		hs+='border : 1px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1zaG9wcGluZy1jYXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIxIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGNpcmNsZSBjeD0iOSIgcj0iMSIgY3k9IjIxIi8+CiA8Y2lyY2xlIGN4PSIyMCIgcj0iMSIgY3k9IjIxIi8+CiA8cGF0aCBkPSJNMSAxaDRsMi42OCAxMy4zOWEyIDIgMCAwID'+
			'AgMiAxLjYxaDkuNzJhMiAyIDAgMCAwIDItMS42MUwyMyA2SDYiLz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 48%;';
		hs+='left : calc(50% - ((48% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._svg_6);
		me.__28.appendChild(me._rectangle_5);
		me._external_2.appendChild(me.__28);
		me.__27.appendChild(me._external_2);
		me.__27.logicBlock_visible();
		me.elementMouseOver['_27']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_changenode=function() {
				me.__27.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me.__27.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_ad=function() {
				me.__27.logicBlock_visible();
			};
			me.__div = me.__27;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=640;
		el.ggDy=300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 640px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 300px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : -122px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			var flag=me.__29.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__29.style.transition='none';
			} else {
				me.__29.style.transition='all 1000ms linear 0ms';
			}
			if (flag) {
				me.__29.ggParameter.sx=1.2;me.__29.ggParameter.sy=1.2;
			} else {
				me.__29.ggParameter.sx=1.2;me.__29.ggParameter.sy=1.2;
			}
			me.__29.ggScaleActive=!flag;
				me.__29.style.transform=parameterToTransform(me.__29.ggParameter);
			setTimeout(function() {skin.updateSize(me.__29);}, 1050);
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._timer_2);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__29=document.createElement('div');
		el.ggId="\uc6d0\ub4e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__29.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 540))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__29.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__29.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__29.style.transition='transform 0s';
				if (me.__29.ggCurrentLogicStateScaling == 0) {
					me.__29.ggParameter.sx = 1;
					me.__29.ggParameter.sy = 1;
					me.__29.style.transform=parameterToTransform(me.__29.ggParameter);
					skin.updateSize(me.__29);
				}
				else {
					me.__29.ggParameter.sx = 1.2;
					me.__29.ggParameter.sy = 1.2;
					me.__29.style.transform=parameterToTransform(me.__29.ggParameter);
					skin.updateSize(me.__29);
				}
			}
		}
		me.__29.logicBlock_scaling();
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="4\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='::before { content: \"\"; position: absolute; top: -15px; left: -15px; right: -15px; bottom: -15px; background: inherit; \/* \ubd80\ubaa8\uc758 \ubc30\uacbd\uc744 \uc0c1\uc18d *\/ filter: blur(10px); \/* \ube14\ub7ec \ud6a8\uacfc *\/ z-index: -1; \/* \ubc30\uacbd \ub4a4\uc5d0 \uc704\uce58\ud558\ub3c4\ub85d *\/ }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__41);
		el=me._timer_31=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31.ggIsActive=function() {
			return (me._timer_31.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31.ggTimestamp) / me._timer_31.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31.style.transition='';
				if (me._timer_31.ggCurrentLogicStateVisible == 0) {
					me._timer_31.style.visibility="hidden";
					me._timer_31.ggVisible=false;
				}
				else {
					me._timer_31.style.visibility=(Number(me._timer_31.style.opacity)>0||!me._timer_31.style.opacity)?'inherit':'hidden';
					me._timer_31.ggVisible=true;
				}
			}
		}
		me._timer_31.logicBlock_visible();
		me._timer_31.ggActivate=function () {
			var flag=me.__41.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__41.style.transition='none';
			} else {
				me.__41.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__41.ggParameter.sx=1;me.__41.ggParameter.sy=1;
			} else {
				me.__41.ggParameter.sx=1.8;me.__41.ggParameter.sy=1.8;
			}
			me.__41.ggScaleActive=!flag;
				me.__41.style.transform=parameterToTransform(me.__41.ggParameter);
			setTimeout(function() {skin.updateSize(me.__41);}, 550);
		}
		me._timer_31.ggCurrentLogicStateVisible = -1;
		me._timer_31.ggUpdateConditionTimer=function () {
			me._timer_31.logicBlock_visible();
		}
		me._timer_31.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._timer_31);
		el=me.__32=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__32);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_3.ggTimestamp) / me._timer_3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggActivate=function () {
			var flag=me.__32.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__32.style.transition='none';
			} else {
				me.__32.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__32.ggParameter.sx=1;me.__32.ggParameter.sy=1;
			} else {
				me.__32.ggParameter.sx=1.4;me.__32.ggParameter.sy=1.4;
			}
			me.__32.ggScaleActive=!flag;
				me.__32.style.transform=parameterToTransform(me.__32.ggParameter);
			setTimeout(function() {skin.updateSize(me.__32);}, 550);
		}
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._timer_3);
		el=me.__210=document.createElement('div');
		el.ggId="2\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__210);
		el=me.__31=document.createElement('div');
		el.ggId="\uc911\uc559\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__31);
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 19";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.352941);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:13px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_19.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_19.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_19.ggUpdateText();
		});
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_19.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.comment) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_19.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_19.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_19.style.transition='width 0s, height 0s';
				if (me._text_19.ggCurrentLogicStateSize == 0) {
					me._text_19.style.width='88px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (88px / 2))';
					skin.updateSize(me._text_19);
				}
				else {
					me._text_19.style.width='65px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._text_19);
				}
			}
		}
		me._text_19.logicBlock_size();
		me._text_19.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._text_19);
		me._external_1.appendChild(me.__29);
		me._ht_node.appendChild(me._external_1);
		me.elementMouseOver['ht_node']=false;
		me._timer_2.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__29.logicBlock_scaling();
		me._timer_31.logicBlock_visible();
		me._timer_3.logicBlock_visible();
		me._text_19.logicBlock_size();
			me.ggEvent_activehotspotchanged=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_changenode=function() {
				me._timer_2.logicBlock_visible();
				me._timer_31.logicBlock_visible();
				me._timer_3.logicBlock_visible();
				me._text_19.logicBlock_size();
			};
			me.ggEvent_configloaded=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me.__29.logicBlock_scaling();
			};
			me.hotspotTimerEvent=function() {
				me._timer_2.ggUpdateConditionTimer();
				if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
					me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
					if (me._timer_2.ggLastIsActive) {
						var flag=me.__29.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__29.style.transition='none';
						} else {
							me.__29.style.transition='all 1000ms linear 0ms';
						}
						if (flag) {
							me.__29.ggParameter.sx=1.2;me.__29.ggParameter.sy=1.2;
						} else {
							me.__29.ggParameter.sx=1.2;me.__29.ggParameter.sy=1.2;
						}
						me.__29.ggScaleActive=!flag;
							me.__29.style.transform=parameterToTransform(me.__29.ggParameter);
						setTimeout(function() {skin.updateSize(me.__29);}, 1050);
					} else {
					}
				}
				me._timer_31.ggUpdateConditionTimer();
				if (me._timer_31.ggLastIsActive!=me._timer_31.ggIsActive()) {
					me._timer_31.ggLastIsActive=me._timer_31.ggIsActive();
					if (me._timer_31.ggLastIsActive) {
						var flag=me.__41.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__41.style.transition='none';
						} else {
							me.__41.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__41.ggParameter.sx=1;me.__41.ggParameter.sy=1;
						} else {
							me.__41.ggParameter.sx=1.8;me.__41.ggParameter.sy=1.8;
						}
						me.__41.ggScaleActive=!flag;
							me.__41.style.transform=parameterToTransform(me.__41.ggParameter);
						setTimeout(function() {skin.updateSize(me.__41);}, 550);
					} else {
					}
				}
				me._timer_3.ggUpdateConditionTimer();
				if (me._timer_3.ggLastIsActive!=me._timer_3.ggIsActive()) {
					me._timer_3.ggLastIsActive=me._timer_3.ggIsActive();
					if (me._timer_3.ggLastIsActive) {
						var flag=me.__32.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__32.style.transition='none';
						} else {
							me.__32.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__32.ggParameter.sx=1;me.__32.ggParameter.sy=1;
						} else {
							me.__32.ggParameter.sx=1.4;me.__32.ggParameter.sy=1.4;
						}
						me.__32.ggScaleActive=!flag;
							me.__32.style.transform=parameterToTransform(me.__32.ggParameter);
						setTimeout(function() {skin.updateSize(me.__32);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '집꾸미기버튼-에어컨';
				hsinst = new SkinHotspotClass__27(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};