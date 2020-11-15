canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
color="black";
width_of_lin= 5;

canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouseEvent= "mousedown";
    color=document.getElementById("color").value;
    width_of_lin=document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseEvent= "mouseup"; 
}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent= "mouseleave"; 
}

canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_lin;
    ctx.moveTo(last_position_of_mouse_x,last_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
    }
    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y;
    
} 

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_position_of_touch_x=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y=e.touches[0].clientY - canvas.offsetTop;
            color = document.getElementById("color").value;
            width_of_line = document.getElementById("width_of_line").value;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_lin;
    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
} 


