// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = [0, 5, 10, 15, 20] , y = [0, 5, 10, 15, 20], dx = [7, -5, 5, -2, 6], dy = [5, 8, 9, -6, -3], r = [30, 30, 30, 30, 30], color = ["#b9c1aa", "#968d64", "#d3af75", "#a24929", "#25383e"], N = 5;

// 畫圓形
  function drawBall(x, y, r, color)
  {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
  }

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < N; i++){
      x[i] = x[i] + dx[i];
      y[i] = y[i] + dy[i];
    }

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
  for(let i = 0; i < N; i++){
    if(x[i]<0 || x[i]>canvas.width) dx[i] = -dx[i];
    if(y[i]<0 || y[i]>canvas.height) dy[i] = -dy[i];
  }

  for(let i = 0; i < N; i++){
    for(let j = i+1; j < N; j++){
      if((x[i]-x[j]) * (x[i]-x[j]) + (y[i]-y[j]) * (y[i]-y[j]) < (r[i]+r[j]) * (r[i]+r[j])){
        [[dx[i], dy[i]], [dx[j], dy[j]]] = [[dx[j], dy[j]], [dx[i], dy[i]]];
      }
    }
  }

 /* if((x-x2)*(x-x2)+(y-y2)*(y-y2)<(r+r2)*(r+r2)){
    dx = ((m-m2)*dx + 2*m2*dx2)/(m+m2);
    dy = ((m-m2)*dy + 2*m2*dy2)/(m+m2);
    dx2 = ((m2-m)*dx2 + 2*m*dx)/(m+m2);
    dy2 = ((m2-m)*dy2 + 2*m*dy)/(m+m2);
  } */

   for(let i = 0; i < N; i++){
    drawBall(x[i], y[i], r[i], color[i]);
   }
  requestAnimationFrame(draw);
}
draw();