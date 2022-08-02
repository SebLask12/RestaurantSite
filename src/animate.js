let width = 400;
let i = 0;
const img = ["image1", "image2", "image3", "image4", "image5"];
function myMove(img) {
    let id = null;
    let nextImage = i * 50;
    const elem = document.getElementById(img[i]);   
    let pos = nextImage;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (pos == width) {
        elem.style.left = 0 + "px";
        pos=nextImage;
    } else {
        pos++; 
        elem.style.left = pos + "px"; 
    }
    }
    }
for (i = 0; i < 6; i++) {
    myMove(img[i]);
}