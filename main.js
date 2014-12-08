
var comicData;
    
function storeComic(data){
    comicData=data;
}


document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("title").innerHTML = comicData.title;
	document.getElementById("image").src = comicData.img;
	document.getElementById("image").title = comicData.alt;
});
