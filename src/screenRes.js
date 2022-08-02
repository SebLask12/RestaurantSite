var availableArea = {
    pos: {
        x: window.screen.availLeft,
        y: window.screen.availTop
    },
    size: {
        width: window.screen.availWidth,
        height: window.screen.availHeight
    }
};
/*console.log(availableArea.size.height);
console.log(availableArea.size.width);
let myPageWidth;
setInterval(myTimer, 10);
function myTimer() {
    m
}*/
window.onresize = resize;
function resize() {
    console.log("resize event detected!");
    myPageWidth = window.innerWidth;
    myPageHeight = window.innerHeight;
    var r = document.querySelector(':root');
    r.style.setProperty('--sizeWidth', myPageWidth);
    r.style.setProperty('--sizeHeight', myPageHeight);
    console.log(myPageWidth);
    console.log(myPageHeight);
}