var moveFrom4=document.getElementById("moveFromIPv4"),moveFrom6=document.getElementById("moveFromIPv6");var to4=["Application","Presentation","Session","Transport","Network","Data link","Physical"];var to6=["Application","Transport","Internetwork","Network Access"];var endTo4="";for(var i=0,j=to4.length;i<j;i++){var num=Math.floor(Math.random()*to4.length);endTo4+='<div style="display:inline-block; vertical-align: text-top;width:120px;height:40px;border:1px solid #000;background-color:#ddd;" onclick="from4(this);">'+to4[num]+"</div>";to4.splice(num,1)}var endTo6="";for(var i=0,j=to6.length;i<j;i++){var num=Math.floor(Math.random()*to6.length);endTo6+='<div style="display:inline-block;vertical-align:text-top;width:120px;height:40px;border:1px solid #000;background-color:#ddd;" onclick="from6(this);">'+to6[num]+"</div>";to6.splice(num,1)}moveFrom4.innerHTML=endTo4;moveFrom6.innerHTML=endTo6;var cached4text=null;function from4(a){if(a.innerHTML!==""&&!cached4text){cached4text=a.innerHTML;a.innerHTML="";a.style.backgroundColor="#fff"}else{if(cached4text&&a.innerHTML===""){a.innerHTML=cached4text;cached4text=null;a.style.backgroundColor="#ddd"}}}function add4(a){if(!(/\S/.test(a.innerHTML))&&cached4text){a.innerHTML=cached4text;cached4text=null;a.style.backgroundColor="#ddd"}else{if(/\S/.test(a.innerHTML)&&!cached4text){cached4text=a.innerHTML;a.innerHTML="";a.style.backgroundColor="#fff"}}}var cached6text=null;function from6(a){if(a.innerHTML!==""&&!cached6text){cached6text=a.innerHTML;a.innerHTML="";a.style.backgroundColor="#fff"}else{if(cached6text&&a.innerHTML===""){a.innerHTML=cached6text;cached6text=null;a.style.backgroundColor="#ddd"}}}function add6(a){if(!(/\S/.test(a.innerHTML))&&cached6text){a.innerHTML=cached6text;cached6text=null;a.style.backgroundColor="#ddd"}else{if(/\S/.test(a.innerHTML)&&!cached6text){cached6text=a.innerHTML;a.innerHTML="";a.style.backgroundColor="#fff"}}}to4=["Application","Presentation","Session","Transport","Network","Data link","Physical"];to6=["Application","Transport","Internetwork","Network Access"];function check4(){for(var b=0,a=to4.length;b<a;b++){if(document.getElementById("4"+b).innerHTML!==to4[b]){document.getElementById("4ans").innerHTML="<strong>That does not look correct. Keep trying</strong>";return}}document.getElementById("4ans").innerHTML="<strong>Correct! Well done!</strong> One helpful way to learn the order of the OSI model is through anagrams such as <strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing or <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way"}function check6(){for(var b=0,a=to6.length;b<a;b++){if(document.getElementById(b).innerHTML!==to6[b]){document.getElementById("6ans").innerHTML="<strong>That does not look correct. Keep trying</strong>";return}}document.getElementById("6ans").innerHTML="<strong>Correct! Well done!</strong>"};