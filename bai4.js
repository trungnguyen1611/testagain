class Rectangle{
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    renderRectangle(){
        let  paper = document.getElementById("myCanvas");
        let pen = paper.getContext("2d");
        pen.beginPath();
        pen.fillRect(this.x, this.y,this.width,this.height);
        pen.strokeStyle(this.color);
    }
}
