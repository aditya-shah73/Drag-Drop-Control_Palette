function drawShapes() {
  console.log("Test");
  var rectangle = document.getElementById("rectangle");
  var canvasContext = rectangle.getContext("2d");
  canvasContext.beginPath();
  canvasContext.rect(1, 1, 100, 100);
  canvasContext.strokeStyle ="darkblue";
  canvasContext.stroke();

  var circle = document.getElementById("circle");
  canvasContext = circle.getContext("2d");
  canvasContext.beginPath();
  canvasContext.arc(53, 53, 50, 0, 2 * Math.PI);
  canvasContext.strokeStyle ="darkblue";
  canvasContext.stroke();

  var triangle = document.getElementById("triangle");
  canvasContext = triangle.getContext("2d");
  canvasContext.beginPath();
  let height = 200 * Math.cos(Math.PI / 6);
  canvasContext.beginPath();
  canvasContext.moveTo(50, 0);
  canvasContext.lineTo(100, 100);
  canvasContext.lineTo(0, 100);
  canvasContext.closePath();
  canvasContext.strokeStyle ="darkblue";
  canvasContext.stroke();

}
