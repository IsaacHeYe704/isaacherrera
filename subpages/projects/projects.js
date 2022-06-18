
const HTML = document.documentElement;
const CANVAS = document.querySelector(".projects-scroll");
const context = CANVAS.getContext("2d");
let height = window.innerHeight
let width = window.innerWidth
//document.querySelector('.test').innerHTML = "hola"
window.addEventListener("load", function(event) {
    sizeChanged()
});
//check for rezise 
function sizeChanged(){
    height = window.innerHeight
    width = window.innerWidth
    if(width > height){
        //dimension is horizontal
        
    }
    else{
        //dimension is vertical
    }
}
window.onresize = sizeChanged
//function that changes current image url
const currentFrame = index => {
    return `../../assets/scenes/${index}.png`
}
//numer of max frames
const frameCount = 46;
const imageNumber = 45;
CANVAS.height = 1080;
CANVAS.width =    1920;
const img = new Image();
img.src = currentFrame(1);
img.onload = () => {
    context.drawImage(img,0,0)
}
const updateImage = index => {
    if(index <= imageNumber)
    {
        img.src = currentFrame(index);
        context.drawImage(img,0,0)
        //Makes sure the canvas is shown. so when you scroll up it apears
        CANVAS.classList.remove("fade");
    }else{
        //add class that fades out the canvas
        CANVAS.classList.add("fade");
    }
    
} 


window.addEventListener("scroll", ()=>{
    const scrollTop = HTML.scrollTop;
    const maxScrollTop = HTML.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop/maxScrollTop;
    const frameIndex = Math.min(frameCount -1 ,Math.floor(scrollFraction*frameCount)) + 1;
    requestAnimationFrame( ()=> updateImage(frameIndex))
})
