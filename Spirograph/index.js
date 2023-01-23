const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let timer;
const R = 150; // радиус
const r = 90; //
const d = 80; // плечо
let teta = 0; // угол

function spiro() {
  let x = (R - r) * Math.cos(teta) + d * Math.cos(((R - r) * teta) / r);
  let y = (R - r) * Math.sin(teta) - d * Math.sin(((R - r) * teta) / r);
  teta += 0.1;

  ctx.fillRect(300 + x, 300 + y, 4, 4);

  timer = setTimeout(spiro, 20);
}
