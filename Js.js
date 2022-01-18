class Circle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}
function createCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var hinhtron= new Circle(100, 100, 40);
    ctx.beginPath();
    ctx.arc(hinhtron.x, hinhtron.y, hinhtron.radius, 0,2*Math.PI);
    ctx.fill();
}
createCircle();


