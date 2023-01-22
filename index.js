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

function draw2d() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let myColor = 'red';
  
  document.getElementById('color').oninput = function(){
    myColor = this.value;
  };

  canvas.onmousedown = (event) => {
    canvas.onmousemove = (event) => {
      let x = event.offsetX;
      let y = event.offsetY;
      ctx.fillRect(x-5, y-5, 10, 10);
      ctx.fillStyle = myColor;
      ctx.lineCap = 'round';
      ctx.fill();
    }
    canvas.onmouseup = () => {
      canvas.onmousemove = null;
    }
  }
}

function drawCircle() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const pi = Math.PI;

  if (canvas.getContext) {
    ctx.beginPath();
    ctx.arc(150, 100, 75, 0, 2 * pi, false); // false/true - по часовой/против часовой
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'rgba(0, 100, 100, 0.8)';
    ctx.stroke(); // отрисовать фигуру
    ctx.fill(); // для того что бы залить фигуру
    ctx.closePath();
  }

  canvas.onmousedown = function() {
    canvas.onmousemove = function(event) {
      let x = event.offsetX;
      let y = event.offsetY;
      let summ = Math.pow(x-200, 2) + Math.pow(y-100, 2);
      let radius = Math.pow(summ, 0.5)
  
      ctx.clearRect(0, 0, 400, 200);
      ctx.beginPath();
      ctx.arc(200, 100, radius, 0, 2*pi, false);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  }
  canvas.onmouseup = () => {
    canvas.onmousemove = null;
  }
} 