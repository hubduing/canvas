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
