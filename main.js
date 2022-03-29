var canvas, reftocanvas, color, wD, lxp, lyp, cx, cy,me, radius;
canvas=document.getElementById("myCanvas");
reftocanvas=canvas.getContext("2d");
color="Black";
width=2;
me=""
radius = 5;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
me="mousedown";
canvas.style.cursor="arrow";
color= document.getElementById("colorpicker").value;
wD= document.getElementById("number").value;
radius= document.getElementById("radius").value;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
me="mouseup";
canvas.style.cursor="arrow";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
me="mouseleave";
canvas.style.cursor="arrow";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    cx=e.clientX-canvas.offsetLeft;
    cy=e.clientY-canvas.offsetTop;
if(me == "mousedown"){
    canvas.style.cursor="crosshair";
    reftocanvas.beginPath();
    reftocanvas.strokeStyle= color;
    reftocanvas.lineWidth= width;
    reftocanvas.arc(cx, cy, radius,0,2 * Math.PI);
    reftocanvas.stroke();
    reftocanvas.beginPath();
    reftocanvas.strokeStyle= color
}
lxp=cx;
lyp=cy;
}
function earaser(){
    reftocanvas.clearRect(0, 0, canvas.width, canvas.height);
}