var num = location.search.replace("?","");
console.log(num)
var fileref=document.createElement('script')
fileref.setAttribute("type","text/javascript")
fileref.setAttribute("src", "https://dynamic.xkcd.com/api-0/jsonp/comic/"+num+"?callback=storeComic")

function loadRandom(){
    num = Math.floor(Math.random()*parseInt(num))
    window.open( "xkcd.htm?"+num,"_self")
} 

function storeComic(data){
	document.getElementById("title").innerHTML = data.title;
	document.getElementById("image").src = data.img;
	document.getElementById("image").title = data.alt;
    num = data.num
}

document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('random').addEventListener('click', loadRandom);
        document.getElementsByTagName("body")[0].appendChild(fileref)
})
