const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = 0;
let timer;

function drawGraph() {
    y = Math.sin(x);
    
    if (x >= 400) {
        x = 0;
    } else {
        x += 0.1;
    }
    ctx.fillRect(5 * x, 100 + y * 20, 2, 2); // координаты залитого прямоугольника с шириной и высотой 2px
    timer = setTimeout(drawGraph, 20);
}
