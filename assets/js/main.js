let canvas;
let ctx;

function drawBackground()
{
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0, canvas.width/2,canvas.height/2);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(canvas.width/2,0, canvas.width/2,canvas.height/2);
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0,canvas.height/2, canvas.width/2,canvas.height/2);
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(canvas.width/2,canvas.height/2, canvas.width/2,canvas.height/2);
}

function draw()
{
    ctx.clearRect(0,0, canvas.width,canvas.height);
    drawBackground();

    requestAnimationFrame(draw);
}

window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    draw();
};
