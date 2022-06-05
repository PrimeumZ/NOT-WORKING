ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 5;
ctx.arc(100, 100, 40 ,0 , 2 * Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth = 5;
ctx.arc(350, 210, 40 ,0 , 2 * Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 1;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(300, 258, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 258, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas = 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d")