var playbackRate = 1.00;
var cl = ["cht", "chs", "py", "en"];
var h = ["Traditional", "Simplified", "pinyin", "english", ""];

function showVal(newVal){
  document.getElementById("valBox").innerHTML=newVal;
  playbackRate = 1.0*newVal/100.0;
}

function makeDropDown() {
  var dd = document.getElementById("dropDown");
  for(var i=0 ; i<all.length ; i++) {
    var opt = document.createElement('OPTION');
	opt.value = i;
	opt.appendChild(document.createTextNode(all[i][0]));
	dd.appendChild(opt);
  }
  dd.value = 0;
  makePreamble(dd);
  makeTable(dd);
}

var nonCharMap = new Object;
nonCharMap[' '] = 1;
nonCharMap[','] = 1;
nonCharMap['，'] = 1;
nonCharMap['?'] = 1;
nonCharMap['？'] = 1;
nonCharMap['!'] = 1;
nonCharMap['！'] = 1;
nonCharMap['。'] = 1;
nonCharMap[z] = 1;

function removeFrame() {
  document.body.removeChild(idiv);
}

function makeFrame(src) {
idiv = document.createElement("DIV");
idiv.style.zIndex="-1";
idiv.style.display = "block";
idiv.style.width = 100+"%";
idiv.style.height = 100+"%";
idiv.style.position = "fixed";
idiv.style.top="0px";
idiv.style.left="0px";
idiv.style.visibility = "hidden";

ifrm = document.createElement("IFRAME");
ifrm.setAttribute("src",src);
ifrm.setAttribute("onmouseout","removeFrame();")
ifrm.style.display = "block";
ifrm.style.width = 100+"%";
ifrm.style.height = 100+"%";
ifrm.style.position = "fixed";
ifrm.style.top="0px";
ifrm.style.left="0px";
ifrm.style.zIndex= "-1";
ifrm.style.visibility = "hidden";

b = document.createElement("DIV");
b.setAttribute("onclick","removeFrame();")
b.style.position = "fixed";
b.style.float = "right";
b.style.backgroundColor = "red";
b.style.zIndex="102";
		var im = document.createElement('IMG');
		im.setAttribute('src', 'x2.jpg');
		b.appendChild(im);

		
idiv.appendChild(ifrm);
idiv.appendChild(b);
document.body.appendChild(idiv);
document.body.style.cursor="progress";
ifrm.onload = function() {
ifrm.style.zIndex= "101";
idiv.style.zIndex="101";
ifrm.style.visibility = "visible";
idiv.style.visibility = "visible";
document.body.style.cursor="";
}
}

function GetCharDetails(elt) {
  var chr = elt.childNodes[0].nodeValue;
  var url = "http://www.archchinese.com/chinese_english_dictionary.html?find="+chr;
  makeFrame(url);
}

function makeNode(n, str, str2) {
  if (str2 != null && str.length != str2.length && str.length > 0 && str2.length > 0) {
	    alert("str.length="+ str.length+" and str2.length="+str2.length + " (str=" + str);
  }
  for (var i=0 ; i<str.length ; i++) {
	if (nonCharMap[str[i]] != 1) {
	  var ts2 = document.createElement('SPAN');
	  if (str2 != null && str.length == str2.length && str[i] != str2[i]) {
	    ts2.className = "tr_s_diff";
	  }
	  ts2.addEventListener("click", function(e) {if (1 || e.ctrlKey || e.shiftKey) {e.stopPropagation(); GetCharDetails(this);}});
	  ts2.appendChild(document.createTextNode(str[i]));
	  n.appendChild(ts2);
	}
	else {
	  if (str[i] === z) {
		n.appendChild(document.createElement("br"));
	  }
	  else {
	    n.appendChild(document.createTextNode(str[i]));
	  }
	}
  }
}

function makePreamble(sel) {
  var dd = document.getElementById("dropDown");
  var myPream = document.getElementById("preAmble");
  if (all[sel.value].length > 2) {
    var preAm = all[sel.value][2];
	myPream.innerHTML = preAm;
  }
  else {
    var c = myPream.childNodes;
	if (c.length > 0) {
	  myPream.innerHTML = "";
	}
  }
}
  
function makeTable(sel) {
  var myTableDiv = document.getElementById("myTable");
  var dd = document.getElementById("dropDown");
  data = all[sel.value][1];
  var c = myTableDiv.childNodes;
  if (c.length > 0) {
    myTableDiv.removeChild(myTableDiv.childNodes[0]);
  }
  var tbl = document.createElement("TABLE");
  
  var tblHd = document.createElement("THEAD");
  tbl.appendChild(tblHd);
  var tr = document.createElement("TR");
  tblHd.appendChild(tr);
  for(var i=0 ; i<h.length ; i++) {
    var td = document.createElement('TD');
	td.appendChild(document.createTextNode(h[i]));
	tr.appendChild(td);
	if (i<4) {
	  td.id=cl[i];
	  td.setAttribute("state", "1");
	  td.addEventListener("click", function() {toggleCol(this);});
	}
  }
  
  var tblBody = document.createElement("TBODY");
  tbl.appendChild(tblBody);
  for (var i=0 ; i<data.length ; i++) {
    var tr = document.createElement("TR");
	tblBody.appendChild(tr);
	for (var j=1 ; j<5 ; j++) {
	  var td = document.createElement('TD');
	  var ts = document.createElement('SPAN'); // span -> div
	  if (j==1) {
		makeNode(ts, data[i][1], data[i][2]);
		td.addEventListener("click", function(e) {if (! (e.ctrlKey || e.shiftKey)) { toggleMe(this.childNodes[0]);}});
	  }
	  else if (j == 2) {
	    makeNode(ts, data[i][2], data[i][1]);
		td.addEventListener("click", function(e) {if (! (e.ctrlKey || e.shiftKey)) { toggleMe(this.childNodes[0]);}});
	  }
	  else {
	    ts.appendChild(document.createTextNode(data[i][j]));
		td.addEventListener("click", function() {toggleMe(this.childNodes[0]);});
	  }
	  ts.className = cl[j-1];
	  td.appendChild(ts);
	  tr.appendChild(td);
	}
	var td = document.createElement('TD');
	if (data[i][0] != null) {
		td.id=i;
		td.addEventListener("click", function() {playMe(this);});
		var im = document.createElement('IMG');
		im.setAttribute('src', 'sound.jpg');
		td.appendChild(im);
	}
	tr.appendChild(td);
  }
  myTableDiv.appendChild(tbl);
  toggleCol(tblHd.childNodes[0].childNodes[2]);
  toggleCol(tblHd.childNodes[0].childNodes[3]);
}
function toggleCol(elt) {
  var state = elt.getAttribute("state");
  var myElements = document.querySelectorAll("." + elt.id);
  if (state == "1") {
	for (var i = 0; i < myElements.length; i++) {
	  myElements[i].style.visibility = "hidden";
	}
	elt.setAttribute("state", "0");
  }
  else {
  	for (var i = 0; i < myElements.length; i++) {
	  myElements[i].style.visibility = "visible";
	}
	elt.setAttribute("state", "1");
  }
}
function toggleMe(elt) {
  if (elt.style.visibility != "hidden") {
    elt.style.visibility = "hidden";
  }
  else {
    elt.style.visibility = "visible";
  }
}
  /* use global variable for ease */
var audioPlayer = document.getElementById('audioPlayer');
  /* play button */
//  document.getElementById('buttonPlay').addEventListener('click',function(e){ audioPlayer.play(); },true);
  /* pause button */
//  document.getElementById('buttonPause').addEventListener('click',function(e){ audioPlayer.pause(); },true);
  
	
function go() {
	 var step = playList[stepNdx];
	 audioPlayer.src = step[0];
	 audioPlayer.load();
	 audioPlayer.playbackRate = playbackRate;
	 audioPlayer.onloadeddata = function() {
		if (step.length > 1) {
		audioPlayer.currentTime = step[1];
		}
		if (step.length > 2) {
		setTimeout(function() {
			keepGoing();
		}, step[2]/playbackRate);
		}
		stepNdx++;
		audioPlayer.play();
	 }
}

function keepGoing() {
  	     audioPlayer.pause();
		 if (playList.length > stepNdx) {
			go();
		 }
}

function playMe(elt) {
  if (data[elt.id][0] instanceof Array) {
	 stepNdx = 0; // global
	 playList = data[elt.id][0]; // global
	 go();
  }
  else {
	audioPlayer.src = data[elt.id][0];
	audioPlayer.load(); 
	audioPlayer.playbackRate = playbackRate;
	audioPlayer.onloadeddata = function() {
		audioPlayer.currentTime = 0;
		audioPlayer.play();
	 }
  }
}
