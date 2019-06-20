/* gallery.js */

//alert("ok");
var images = [];
images.push("../images/a.jpeg");
images.push("../images/b.jpeg");
images.push("../images/c.jpeg");
images.push("../images/d.jpg");
images.push("../images/e.jpg");
images.push("../images/f.jpg");
images.push("../images/g.jpg");
images.push("../images/h.jpg");
images.push("../images/i.jpg");


currentImage = 0;
document.querySelector("#prevButton").addEventListener("click",
    function(){
        //alert("ok");
        currentImage --;
        if(currentImage<0)
            currentImage  = images.length -1 ;
        showImage();
});

document.querySelector("#nextButton").addEventListener("click",
    function(){
        //alert("ok");
        currentImage ++;
        if(currentImage>=images.length)
            currentImage  = 0;

        showImage();

});

function showImage(){
    pc = document.getElementById('picture');
    pc.src = images[currentImage];
}