/*page mobile1 js*/
/*点击隐藏下载*/
function downNone(){
	var downnone=document.getElementById("downnone");
	var mainone=document.getElementById("mainone");
	EventUtil.addHandler(downnone,"click",function(){
		mainone.style.display="none";
		});
	}
addLoadEvent(downNone);
/*返回顶部按钮显示和隐藏，返回顶部点击页面滚动*/
function pageScroll(){
	var pagescroll=document.getElementById("pagescroll");
	var timer1=null;
	EventUtil.addHandler(window,"scroll",function(){
		var showscroll=document.documentElement.scrollTop;
		if(showscroll>150){
			pagescroll.className="pagescroll";
			}
		else{
			pagescroll.className="pagescroll nonescroll";
			}
		});
	EventUtil.addHandler(pagescroll,"click",function(){
		var nowscroll=document.documentElement.scrollTop;
		timer1=setInterval(function pagemove(){
			if(nowscroll==0){
				timer=null;
				}
			else{
				nowscroll=Math.floor(nowscroll/2);
				document.documentElement.scrollTop=nowscroll;
				}
			},100);
		});
	}
addLoadEvent(pageScroll);
/*轮播图1*/
function show(){
	var con=document.getElementById("con");
	var dot=document.getElementById("dot").getElementsByTagName("span");
	var show=document.getElementById("show");
	var width=con.offsetWidth/10;
	con.style.left=-width+"px";
	var index=1;
	var moveed=false;
	var startx,endx;
	var timer2=null;
	timer2=setInterval(leftmove,5000);
	EventUtil.addHandler(show,"touchstart",function(){
		var event=window.event||event;
		startx=event.touches[0].pageX;
		});
	EventUtil.addHandler(show,"touchend",function(){
		var event=window.event||event;
		endx=event.changedTouches[0].pageX;
		if(endx-startx>100){
			if(!moveed){
				if(index<=1){
					index=dot.length;
					}
					else{index--;}
					move(width);
					showdot();
					}
			}
		if(endx-startx<-100){
			leftmove();
			}
		});
	function leftmove(){
		if(!moveed){
				if(index>=dot.length){
					index=1;
					}
					else{index++;}
					move(-width);
					showdot();
					}
				}
	function move(offset){
		moveed=true;
		var newLeft=parseInt(con.style.left)+offset;
		var time=1000;
		var onetime=15;
		var speed=offset/(time/onetime);
		function go(){
			if((speed<0&&parseInt(con.style.left)>newLeft)||(speed>0&&parseInt(con.style.left)<newLeft)){
				con.style.left=parseInt(con.style.left)+speed+'px';
				setTimeout(go,onetime);
				}
			else{
				moveed=false;
				con.style.left=newLeft+'px';
		    if(newLeft>-width){
	            con.style.left=-width*8+'px';
				}
			if(newLeft<-width*8){
				con.style.left=-width+'px';
				}
		}
		}
		go();
		}
	function showdot(){
		for(var i=0;i<dot.length;i++){
			if(dot[i].className=="select"){
				dot[i].className="";
				break;
				}
			}
		dot[index-1].className="select";
		}
	}
addLoadEvent(show);
/*轮播图2*/
function touTiao(){
	var toutiao=document.getElementById("toutiao");
	var toutiaocon=document.getElementById("toutiaocon");
	var height=toutiao.offsetHeight;
	var timer3=null;
	timer3=setInterval(function(){
		move3(-height);
		},3000);
	function move3(offset){
		var newTop=parseInt(toutiaocon.style.top)+offset;
		var time=600;
		var onetime=30;
		var speed=offset/(time/onetime);
		function go(){
			if((speed<0&&parseInt(toutiaocon.style.top)>newTop)||(speed>0&&parseInt(toutiaocon.style.top)<newTop)){
				toutiaocon.style.top=parseInt(toutiaocon.style.top)+speed+'px';
				setTimeout(go,onetime);
				}
			else{
				toutiaocon.style.top=newTop+'px';
		    if(newTop>0){
	            toutiaocon.style.top=-height*2+'px';
				}
			if(newTop<-height*2){
				toutiaocon.style.top=0+'px';
				}
		}
		}
		go();
		}
	}
addLoadEvent(touTiao);
/*页面加载动画*/
EventUtil.addHandler(document,"readystatechange",function(){
	var timer=setTimeout(function(){
		if(document.readyState=="complete"){
			document.getElementById("load").style.display="none";
		}
		},3000);
	});