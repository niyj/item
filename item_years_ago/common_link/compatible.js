/*basic js*/
//跨浏览器事件对象：
var EventUtil={
	addHandler:function(element,type,handler){              //注册事件
		if(element.addEventListener){
			element.addEventListener(type,handler,false);   //dom2注册事件
			}
		else if(element.attachEvent){
			element.attachEvent("on"+type,handler);         //IE注册事件
			}
		else{
			element["on"+type]=handler;                     //dom0注册事件
			}
		},
	removeHandler:function(element,type,handler){           //取消事件
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);                    //dom2取消事件
			}
		else if(element.detach){
			element.detachEvent("on"+type,handler);              //IE取消事件
			}
		else{
			element["on"+type]=null;                     //dom0取消事件
			}
		
		},
	getEvent:function(event){                   //获取事件对象event
		return event?event:window.event;
		},
	getTarget:function(event){                  //获取事件的目标
		return event.target||event.srcElement;
		},
	preventDefault:function(event){             //取消事件的默认行为
		if(event.preventDefault){
			event.preventDefault();             //dom0和dom2
		}
		else{
			event.returnValue=false;            //IE
			}
		},
	stopPropagation:function(event){            //取消事件捕获或冒泡
		if(event.stopPropagation){
			event.stopPropagation();            //dom0和dom2
			}
		else{
			event.cancelBubble=true;            //IE
			}
		},
	getRelatedTarget:function(event){           //获取mouseover和mouseout的相关元素
		if(event.relatedTarget){
			return event.relatedTarget;                     
			}
		else if(event.toElement){               //IE8以前版本mouseout触发
			return event.toElement;
			}
		else if(event.fromElement){             //IE8以前版本mouseover触发
			return eventfromElement;
			}
		else{
			return null;
			}
		},
	getButton:function(event){                  //获取鼠标按下或释放的按钮信息
		if(document.implementation.hasFeature("MouseEvents","2.0")){
			return event.button;
			}
		else{
			switch(event.button){               //IE8以前版本的button属性转化为DOM模型的button属性
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
				return 0;           //按下鼠标左键
				case 4:
				return 1;           //按下鼠标滚轮
				case 2:
				case 6:
				return 2;           //按下鼠标右键
				}
			}
		},
	getWheelDelta:function(event){              //获取鼠标滚轮增量值
		if(event.wheelDelta){
			return (client.engine.opera&&client.engine.opera<9.5?-event.wheelDalit:event.wheelDalit);
			}
		else{
			return -event.detail*40;
			}
		},
	getCharCode:function(event){                //获取字符编码
		if(typeof event.charCode=="number"){
			return event.charCode;
			}
		else{
			return event.keyCode;
			}
		}
	}
//将函数绑定到window.onload：
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
		}
	else{
		window.onload=function(){
		oldonload();
		func();
		}
		}
	}
//getElementsByClassName()
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}