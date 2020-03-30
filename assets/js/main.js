let canvas;
let ctx;

function loadImages()
{
    const bedroomImg = new Image();
    bedroomImg.src = '../assets/images/roomPlaceHolder.jpg';

    background = bedroomImg;
}

function drawBackground()
{
	ctx.drawImage(background, 0,0, canvas.width,canvas.height);
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
    loadImages();
    draw();
};
