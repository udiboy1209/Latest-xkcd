var params = location.search.replace("?","").split("&");
var num = params[0];
var max_num = (params.length>1?params[1]:num);

console.log(num);
console.log(max_num);

var fileref=document.createElement('script')
fileref.setAttribute("type","text/javascript")
fileref.setAttribute("src", "https://dynamic.xkcd.com/api-0/jsonp/comic/"+num+"?callback=storeComic")

function loadRandom(){
    num = Math.floor(Math.random()*parseInt(max_num))
    window.open( "xkcd.htm?"+num+"&"+max_num,"_self")
} 

function storeComic(data){
	document.getElementById("title").innerHTML = data.title;
	document.getElementById("image").src = data.img;
	document.getElementById("image").title = data.alt;
    if(max_num=="") max_num=data.num
    num = data.num
}

document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('random').addEventListener('click', loadRandom);
        document.getElementsByTagName("body")[0].appendChild(fileref)
})
