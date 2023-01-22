function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const x = 100;
  const y = 50;
  const width = 100;
  const heigth = 100;

  if (canvas.getContext) {
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(x, y, width, heigth);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(x + 20, y + 20, width, heigth);

    ctx.fillStyle = "rgba(0, 200, 0, 0.5)";
    ctx.fillRect(x + 40, y + 40, width, heigth);
  }

  if (canvas.getContext) {
    ctx.rect(25, 25, 50, 50);
    ctx.strokeStyle = "red";
    ctx.lineWidth = '5';
    ctx.stroke();
    ctx.fill();
  }

  // ctx.clearRect(0, 0, width, heigth);
}
function drawLine() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  if (canvas.getContext) {
    ctx.beginPath(); // начать новую линию
    ctx.moveTo(100, 50); // начать с
    ctx.strokeStyle = 'rgb(200, 0, 0)'; // цвет линии
    ctx.lineWidth = '5'; // ширина линии
    ctx.lineTo(150, 150); // линия до
    ctx.lineTo(300, 50);
    ctx.lineTo(400, 200);
    ctx.stroke(); // нарисовать

    ctx.beginPath(); // начать новую линию
    ctx.strokeStyle = 'rgb(0, 200, 0)'; // цвет линии
    ctx.lineWidth = '20'; // ширина линии
    ctx.moveTo(110, 100);
    ctx.lineTo(390, 100);
    ctx.lineCap = 'round'; // round, butt, square скругление линии в начале/конце
    ctx.stroke(); // нарисовать
  }
}

function drawTriangle() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  if (canvas.getContext) {
    ctx.strokeStyle = 'rgb(150, 0, 0)';
    ctx.lineWidth = '20';
    ctx.lineCap = 'butt';
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(150, 50);
    ctx.lineTo(200, 150);
    ctx.lineTo(50, 150);
    ctx.closePath(); // закрываем
    ctx.stroke(); // отрисовываем
    ctx.fillStyle = 'rgb(0,0,100)';
    ctx.fill(); // заливка
  }
}