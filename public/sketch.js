var socket; 

function setup() {
  createCanvas(400, 400);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);

  background(45,200,90);
}

function newDrawing(data){
   noStroke();
   fill("black");
   ellipse(data.x,data.y,30,30);
}

function draw() {
  
}

function mouseDragged(){
  noStroke();
  fill("white");
  ellipse(mouseX,mouseY,30,30);
  
  var data = {
    x:mouseX,
    y:mouseY
  }

  socket.emit('mouse', data);


  console.log('sending ' + mouseX + ' , ' + mouseY);
}