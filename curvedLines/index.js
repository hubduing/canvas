// const canvas = document.getElementById('canvas');
var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))
const ctx = canvas.getContext('2d');


function drawCurved() {
    ctx.moveTo(200, 50);
    ctx.quadraticCurveTo(150, 0, 100, 50);
    ctx.quadraticCurveTo(50, 100, 200, 280);
    ctx.quadraticCurveTo(350, 150, 300, 50);
    ctx.quadraticCurveTo(250, 0, 200, 50);
    ctx.stroke();
}