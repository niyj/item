/*header搜索框选择切换*/
function searchSelect(){
	var searchselect=document.getElementById("search-select");
	var selectoptions=document.getElementById("search-select-options");
	var selectas=selectoptions.getElementsByTagName("a");
	var selectlis=selectoptions.getElementsByTagName("li");
	var selecttext=document.getElementById("select-text");
	EventUtil.addHandler(searchselect,"mouseover",function(){
		selectoptions.style.display="block";
	},false);
	EventUtil.addHandler(searchselect,"mouseout",function(){
		selectoptions.style.display="none";
	},false);
	EventUtil.addHandler(selectoptions,"click",function(){
		var event=event||window.event;
		var target=event.target||event.srcELement;
		switch(target.id){
			case "select-one":
			selectHandle(0);
			break;
			case "select-two":
			selectHandle(1);
			break;
			case "select-three":
			selectHandle(2);
			break;
			case "select-four":
			selectHandle(3);
			break;
			case "select-five":
			selectHandle(4);
			break;
			case "select-six":
			selectHandle(5);
			break;
			case "select-seven":
			selectHandle(6);
			break;
			case "select-eight":
			selectHandle(7);
			break;
			case "select-nine":
			selectHandle(8);
			break;
		}
	},false);
	function selectHandle(num){
		selecttext.innerHTML=selectas[num].innerHTML;
		event.preventDefault();
		for (var i = 0; i < selectlis.length; i++) {
			selectlis[i].className="";
		}
		selectlis[num].className="select";
		
	}
}
searchSelect();
/*nav标签显示隐藏切换*/
function navTag(){
	var navmore=document.getElementById("nav-more");
	var navmoretag=document.getElementById("nav-more-tag");
	EventUtil.addHandler(navmore,"mouseover",function(){
		navmoretag.style.display="block";
	},false);
	EventUtil.addHandler(navmore,"mouseout",function(){
		navmoretag.style.display="none";
	},false);
}
navTag();
/*main-news-topics标签页切换*/
function newsTab(){
	var  news=document.getElementById("news");
	var cqnews=document.getElementById("cq-news");
	var newsshow=document.getElementById("news-show");
	var cqnewsshow=document.getElementById("cq-news-show");
	EventUtil.addHandler(news,"mouseover",function(){
		newsshow.style.display="block";
		cqnewsshow.style.display="none";
		news.className="active";
		cqnews.className="";
	},false);
	EventUtil.addHandler(cqnews,"mouseover",function(){
		newsshow.style.display="none";
		cqnewsshow.style.display="block";
		news.className="";
		cqnews.className="active";
	},false);
}
newsTab();
/*new-tag显示*/
function newTag(){
	var show=document.getElementById("show");
	var button=document.getElementById("button");
	EventUtil.addHandler(button,"click",function(){
		show.className="show active";
	},false);
	EventUtil.addHandler(show,"mouseleave",function(){
		show.className="show";
	},false);
}
newTag();
/*main-focus内容切换*/
function focusShow(){
	var focusshow=document.getElementById("focus-show");
	var focusprev=document.getElementById("focus-prev");
	var focusnext=document.getElementById("focus-next");
	var focusposition=document.getElementById("focus-position");
	EventUtil.addHandler(focusprev,"click",function(){
		focusposition.style.left=0+"px";
		focusprev.style.display="none";
		focusnext.style.display="block";
	},false);
	EventUtil.addHandler(focusnext,"click",function(){
		focusposition.style.left=-1236+"px";
		focusnext.style.display="none";
		focusprev.style.display="block";
	},false);
}
focusShow();
/*main-info内容切换*/
function mainShow(){
	var control=document.getElementsByClassName("control");
	var position=document.getElementsByClassName("position");
	var progressone=document.getElementById("progress-one");
	var onespans=progressone.getElementsByTagName("span");
	var i=0;
	EventUtil.addHandler(control[0],"click",function(){
		if (i<=0&&i>-2) {
			i--;
			position[0].style.left=815*i+"px";
			for (var j = 0; j < 3; j++) {
				onespans[j].className="";
			}
			onespans[-i].className="select";
		}
		else if(i==-2){
			position[0].style.left=0+"px";
			i=0;
			for (var j = 0; j < 3; j++) {
				onespans[j].className="";
			}
			onespans[i].className="select";
			}
		},false);
	var progresstwo=document.getElementById("progress-two");
	var twospans=progresstwo.getElementsByTagName("span");
	EventUtil.addHandler(control[1],"click",function(){
		if (i<=0&&i>-2) {
			i--;
			position[1].style.left=815*i+"px";
			for (var j = 0; j < 3; j++) {
				twospans[j].className="";
			}
			twospans[-i].className="select";
		}
		else if(i==-2){
			position[1].style.left=0+"px";
			i=0;
			for (var j = 0; j < 3; j++) {
				twospans[j].className="";
			}
			twospans[i].className="select";
			}
		},false);
	var progressthree=document.getElementById("progress-three");
	var threespans=progressthree.getElementsByTagName("span");
	EventUtil.addHandler(control[2],"click",function(){
		if (i<=0&&i>-2) {
			i--;
			position[2].style.left=815*i+"px";
			for (var j = 0; j < 3; j++) {
				threespans[j].className="";
			}
			threespans[-i].className="select";
		}
		else if(i==-2){
			position[2].style.left=0+"px";
			i=0;
			for (var j = 0; j < 3; j++) {
				threespans[j].className="";
			}
			threespans[i].className="select";
			}
		},false);
}
mainShow();
/*main-info标签切换*/
function infoTab(){
	var controlzhibo=document.getElementsByClassName("controlzhibo");
	var controlhuifang=document.getElementsByClassName("controlhuifang");
	var zhibo=document.getElementsByClassName("zhibo");
	var huifang=document.getElementsByClassName("huifang");
	EventUtil.addHandler(controlzhibo[0],"mouseover",function(){
		zhibo[0].style.display="block";
		huifang[0].style.display="none";
		controlzhibo[0].className="active controlzhibo";
		controlhuifang[0].className="controlhuifang";
	},false);
	EventUtil.addHandler(controlhuifang[0],"mouseover",function(){
		zhibo[0].style.display="none";
		huifang[0].style.display="block";
		controlzhibo[0].className="controlzhibo";
		controlhuifang[0].className="active controlhuifang";
	},false);
	EventUtil.addHandler(controlzhibo[1],"mouseover",function(){
		zhibo[1].style.display="block";
		huifang[1].style.display="none";
		controlzhibo[1].className="active controlzhibo";
		controlhuifang[1].className="controlhuifang";
	},false);
	EventUtil.addHandler(controlhuifang[1],"mouseover",function(){
		zhibo[1].style.display="none";
		huifang[1].style.display="block";
		controlzhibo[1].className="controlzhibo";
		controlhuifang[1].className="active controlhuifang";
	},false);
}
infoTab();
/*main-video标签页切换*/
function videoTab(){
	var title=document.getElementById("video-title");
	var h2s=title.getElementsByTagName("h2");
	var content=document.getElementById("video-content");
	var uls=content.getElementsByTagName("ul");
	EventUtil.addHandler(title,"mouseover",function(){
		var event=event||window.event;
		var target=event.target||event.srcELement;
		switch(target.id){
			case "zongyi":
			for (var i = 0; i < 4; i++) {
				h2s[i].className="";
				uls[i].className="";
			}
			h2s[0].className="active";
			uls[0].className="active";
			break;
			case "dianshiju":
			for (var i = 0; i < 4; i++) {
				h2s[i].className="";
				uls[i].className="";
			}
			h2s[1].className="active";
			uls[1].className="active";
			break;
			case "dianying":
			for (var i = 0; i < 4; i++) {
				h2s[i].className="";
				uls[i].className="";
			}
			h2s[2].className="active";
			uls[2].className="active";
			break;
			case "shaoer":
			for (var i = 0; i < 4; i++) {
				h2s[i].className="";
				uls[i].className="";
			}
			h2s[3].className="active";
			uls[3].className="active";
			break;
		}
	},false);
	
}
videoTab();
/*main-more-info标签页切换*/
function moreInfoTab(){
	var moreinfo=document.getElementById("main-more-info");
	var h2s=moreinfo.getElementsByTagName("h2");
	var uls=moreinfo.getElementsByTagName("ul");
	EventUtil.addHandler(moreinfo,"mouseover",function(){
		var event=event||window.event;
		var target=event.target||event.srcELement;
		switch(target.id){
			case "junshi":
			h2s[1].className="active";
			uls[1].className="active";
			h2s[2].className="";
			uls[2].className="";
			break;
			case "lishi":
			h2s[2].className="active";
			uls[2].className="active";
			h2s[1].className="";
			uls[1].className="";
			break;
			case "wenhua":
			h2s[3].className="active";
			uls[3].className="active";
			h2s[4].className="";
			uls[4].className="";
			break;
			case "xinguofeng":
			h2s[4].className="active";
			uls[4].className="active";
			h2s[3].className="";
			uls[3].className="";
			break;
			case "youxi":
			h2s[6].className="active";
			uls[6].className="active";
			h2s[7].className="";
			uls[7].className="";
			break;
			case "dongman":
			h2s[7].className="active";
			uls[7].className="active";
			h2s[6].className="";
			uls[6].className="";
			break;
		}
	},false);
}
moreInfoTab();
/*main-images内容切换*/
function imagesShow(){
	var imagesshow=document.getElementById("images-show");
	var imagesprev=document.getElementById("images-prev");
	var imagesnext=document.getElementById("images-next");
	var imagesposition=document.getElementById("images-position");
	EventUtil.addHandler(imagesprev,"click",function(){
		imagesposition.style.left=0+"px";
		imagesprev.style.display="none";
		imagesnext.style.display="block";
	},false);
	EventUtil.addHandler(imagesnext,"click",function(){
		imagesposition.style.left=-1236+"px";
		imagesnext.style.display="none";
		imagesprev.style.display="block";
	},false);
}
imagesShow();
/*aside-nav显示*/
function asideNav(){
	var asidenav=document.getElementById("aside-nav");
	EventUtil.addHandler(window,"scroll",function(){
		var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
		if (scrolltop>=500) {
			asidenav.className="aside-nav aside-show";
		}
		else{
			asidenav.className="aside-nav";
		}
	},false);
}
asideNav();