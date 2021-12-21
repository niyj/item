/*page pc1 js*/
/*搜索栏类别点击切换*/
function clickOne(){
	var head2cct=document.getElementsByClassName("head2-c-c-t");
	var spans=head2cct[0].getElementsByTagName("span");
	var none1=document.getElementsByClassName("head2-c-c-m-none");
	var none2=document.getElementsByClassName("head2-c-c-d-none");
	EventUtil.addHandler(spans[0],"click",function(){
		headTwoSelect("block","block");
		this.className="head2-c-c-t-select";
		});
	EventUtil.addHandler(spans[1],"click",function(){
		headTwoSelect("none","none");
		this.className="head2-c-c-t-select";
		});
	EventUtil.addHandler(spans[2],"click",function(){
		headTwoSelect("none","block");
		this.className="head2-c-c-t-select";
		});
	function headTwoSelect(str1,str2){
		for(var i=0;i<spans.length;i++){
		spans[i].className="";
				}
		none1[0].style.display=str1;
		none2[0].style.display=str2;
		}
	}
addLoadEvent(clickOne);
/*二维码点击隐藏*/
function clickTwo(){
	var head2cclose=document.getElementsByClassName("head2-c-close");
	var head2cr=document.getElementsByClassName("head2-c-r");
	EventUtil.addHandler(head2cclose[0],"click",function(){
		this.style.display="none";
		head2cr[0].style.display="none";
		});
	}
addLoadEvent(clickTwo);
/*轮播图*/
function show(pre,next,dot,con,show,str,width,timer,num){
	var index=1;
	var moveed=false;
	EventUtil.addHandler(pre,"click",function(){
		if(!moveed){
		if(index<=1){
			index=dot.length;
			}
		else{index--;}
		move(520);
		showdot();
		}
		});
	EventUtil.addHandler(next,"click",function(){
		if(!moveed){
		if(index>=dot.length){
			index=1;
			}
		else{index++;}
		move(-520);
		showdot();
		}
		});
	for(var i=0;i<dot.length;i++){
		EventUtil.addHandler(dot[i],"click",function(){
			if(!moveed){
			if(this.className==str){
				return;
				}
			var myindex=parseInt(this.getAttribute('index'));
			var offset=-520*(myindex-index);
			move(offset);
			index=myindex;
			showdot();
				}
			});
		}
	function move(offset){
		moveed=true;
		var newLeft=parseInt(con.style.left)+offset;
		var time=300;
		var onetime=30;
		var speed=offset/(time/onetime);
		function go(){
			if((speed<0&&parseInt(con.style.left)>newLeft)||(speed>0&&parseInt(con.style.left)<newLeft)){
				con.style.left=parseInt(con.style.left)+speed+'px';
				setTimeout(go,onetime);
				}
			else{
				moveed=false;
				con.style.left=newLeft+'px';
		    if(newLeft>-520){
	            con.style.left=-width+'px';
				}
			if(newLeft<-width){
				con.style.left=-520+'px';
				}
		}
		}
		go();
		}
	function showdot(){
		for(var i=0;i<dot.length;i++){
			if(dot[i].className==str){
				dot[i].className="";
				break;
				}
			}
		dot[index-1].className=str;
		if(num){
			num.innerHTML="<i>"+index+"</i>/6";
			}
		}
	function start(){
		timer=setInterval(function(){if(!moveed){
		if(index>=dot.length){
			index=1;
			}
		else{index++;}
		move(-520);
		showdot();
		}
		},6000);
		}
	function stop(){
		clearInterval(timer);
		}
	show.onmouseover=stop;
	show.onmouseout=start;
	start();
	}
/*轮播图1*/
function showOne(){
	var con1=document.getElementById("con1");
	var pre1=document.getElementById("pre1");
	var next1=document.getElementById("next1");
	var show1=document.getElementById("show1");
	var dot1=document.getElementById("dot1").getElementsByTagName("li");
	var timer1=null;
	show(pre1,next1,dot1,con1,show1,"con-one-c-t-dot-select",2600,timer1);
}	
addLoadEvent(showOne);
/*轮播图2*/
function showTwo(){
	var con2=document.getElementById("con2");
	var pre2=document.getElementById("pre2");
	var next2=document.getElementById("next2");
	var show2=document.getElementById("show2");
	var dot2=document.getElementById("dot2").getElementsByTagName("span");
	var timer2=null;
	var num=document.getElementById("num");
	show(pre2,next2,dot2,con2,show2,"con-one-c-b-dot-select",3120,timer2,num);
}	
addLoadEvent(showTwo);
/*tab标签页*/
function mouseOver(){
	var li=document.getElementById("tit").getElementsByTagName("li");
	var div=document.getElementById("con3").getElementsByTagName("div");
	var timer=null;
	for(var i=0;i<li.length;i++){
		li[i].id=i;
		li[i].onmouseover=function(){
			var that=this;
		    if(timer){
				clearTimeout(timer);
				timer=null;
				}
				timer=setTimeout(function(){
					for(var j=0;j<li.length;j++){
						li[j].className="";
						div[j].style.display="none";
						}
						li[that.id].className="select";
						div[that.id].style.display="block";
						},500);	
			}
		}
	}
addLoadEvent(mouseOver);
/*轮播图3*/
function showThr(){
	var show4=document.getElementById("show4");
	var con4=document.getElementById("con4");
	var index=0
	show4.onmouseover=stop;
	show4.onmouseout=start;
	function start(){
		timer=setInterval(function(){
			index++;
			if(index==3){
				index=0;
				}
			con4.style.transition="transform 1s ease";
			con4.style.transform="translateY("+(-index*100)+"px)";
			
			},6000);
		}
	function stop(){
		clearInterval(timer);
		}
	start();
	}
addLoadEvent(showThr);
/*倒计时*/
function countTime(){
	var hour=document.getElementById("hour");
	var minute=document.getElementById("minute");
	var second=document.getElementById("second");
	var timer=null;
	var times=21966;
	var hours=0;
	var minutes=0;
	var seconds=0;
	timer=setInterval(function(){
		if(times > 0){
			hours = Math.floor(times / (60 * 60));
			minutes = Math.floor(times / 60) - (hours * 60);
			seconds= Math.floor(times) - (hours * 60 * 60) - (minutes * 60);
			}
		if (hours <= 9){
			hours = "0" + hours;
			}
		if (minutes <= 9){
			minutes = "0" + minutes;
			}
		if (seconds <= 9){
			seconds = "0" + seconds;
			}
			hour.innerHTML=hours;
			minute.innerHTML=minutes;
			second.innerHTML=seconds;
			times--;
			},1000);
	if(times<=0){
		clearInterval(timer);
		}
}
addLoadEvent(countTime);
/*隐藏搜索栏类别点击切换*/
function clickThree(){
	var li=document.getElementById("head4-c-m-select").getElementsByTagName("li");
	var hidden=document.getElementById("hidden");
	var str="";
	var liid="";
	EventUtil.addHandler(li[1],"click",function(){
		str=li[0].innerHTML;
		li[0].innerHTML=li[1].innerHTML;
		li[1].innerHTML=str;
		if(li[0].innerHTML=="宝贝"){
			hidden.style.display="block";
			}
		else{
			hidden.style.display="none";
			}
		});
	EventUtil.addHandler(li[2],"click",function(){
		str=li[0].innerHTML;
		li[0].innerHTML=li[2].innerHTML;
		li[2].innerHTML=str;
		if(li[0].innerHTML=="宝贝"){
			hidden.style.display="block";
			}
		else{
			hidden.style.display="none";
			}
		});
	}
addLoadEvent(clickThree);
/*导航栏显示隐藏、位置移动*/
function headScroll(){
	var headhidden=document.getElementById("headhidden");
	var nav=document.getElementById("nav");
	var navnone=document.getElementById("navnone");
	var p=document.getElementById("nav").getElementsByTagName("p");
	var navcon=document.getElementsByClassName("navcon");
	var indexcon="1";
	EventUtil.addHandler(window,"scroll",function(){
		var headscroll=document.documentElement.scrollTop||document.body.scrollTop;
		if(headscroll>=120){
			headhidden.style.display="block";
			}
		else{
			headhidden.style.display="none";
			}	
		if(headscroll>=390){
			nav.style.position="fixed";
			nav.style.top=75+"px";
			}
		else{
			nav.style.position="absolute";
			nav.style.top=460+"px";
			}
		if(headscroll>=700){
			navnone.style.display="block";
			}
		else{
			navnone.style.display="none";
			}
		if(headscroll>=1300){
			for(var i=0;i<navcon.length;i++){
			var navcontop=navcon[i].offsetTop;
			if(headscroll>=navcontop-100){
				indexcon=navcon[i].getAttribute('index');
				}
			else{
				break;
				}
			}
			for(var i=0;i<p.length;i++){
				p[i].className="";
				}
			p[indexcon].className="select";
			}
		});
	}
addLoadEvent(headScroll);
/*导航栏点击页面滚动*/
function clickNav(){
	var p=document.getElementById("nav").getElementsByTagName("p");
	var navcon=document.getElementsByClassName("navcon");
	for(var i=0;i<p.length;i++){
		var j=i+1;
		if(j==6){j=0;}
		p[i].tag=j;
		EventUtil.addHandler(p[i],"click",function(){
			for(var k=0;k<p.length;k++){
				p[k].className="";
				}
			if(this.tag==0){
				navmove(document.documentElement.scrollTop,navcon[this.tag].offsetTop);
				/*document.documentElement.scrollTop=navcon[this.tag].offsetTop;*/
				p[0].className="select";
				}
			else{
				navmove(document.documentElement.scrollTop,navcon[this.tag].offsetTop-55);
				/*document.documentElement.scrollTop=navcon[this.tag].offsetTop-55;*/
				p[this.tag-1].className="select";
				}
			});
	    }
	function navmove(old,target){
		clearInterval(timer);
		timer=setInterval(function(){
		var speed=0;
		if(old>target){
			speed=(target-old)/10;
			document.documentElement.scrollTop=old+speed;
			old=document.documentElement.scrollTop;
			if(old==target){
				clearInterval(timer);
				
				}
			}
		if(old<target){
			speed=(target-old)/10;
			document.documentElement.scrollTop=old+speed;
			old=document.documentElement.scrollTop;
			if(old>=target-10){
				clearInterval(timer);
				}
			}
		},30);
	}		
}		
addLoadEvent(clickNav);
/*页面加载动画*/
EventUtil.addHandler(document,"readystatechange",function(){
	var timer=setTimeout(function(){
		if(document.readyState=="complete"){
			document.getElementById("load").style.display="none";
		}
		},3000);
	});
/*搜索栏下拉列表，隐藏搜索栏下拉列表*/
function searchColumn(){
	var searcharea1=document.getElementById("search-area1");
	var searcharea2=document.getElementById("search-area2");
	var searchul1=document.getElementById("search-ul1");
	var searchul2=document.getElementById("search-ul2");
	var searchicon1=document.getElementById("search-icon1");
	var searchicon2=document.getElementById("search-icon2");
	var searchprompt=document.getElementById("search-prompt");
	EventUtil.addHandler(searcharea1,"keyup",function(){
		searchicon1.style.display="none";
		searchul1.style.display="block";
		if(searcharea1.value==""){
		searchicon1.style.display="block";
		searchul1.style.display="none";
		}
		});
	EventUtil.addHandler(searcharea2,"keyup",function(){
		searchicon2.style.display="none";
		searchprompt.style.display="none";
		searchul2.style.display="block";
		if(searcharea2.value==""){
		searchicon2.style.display="block";
		searchprompt.style.display="blcok";
		searchul2.style.display="none";
		}
		});
	EventUtil.addHandler(document,"click",function(){
		searchul1.style.display="none";
		searchul2.style.display="none";
		});
}
addLoadEvent(searchColumn);