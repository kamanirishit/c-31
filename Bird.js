class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.pathimage=loadImage("sprites/bird.png");
    this.array=[];
  }

  display() {
    super.display();
    if(this.body.speed>10  && this.body.position.x>200 ){
   var array2=[this.body.position.x,this.body.position.y];
   this.array.push(array2);
  }
   
   for(var i=0;i<this.array.length;i++){
    
     //console.log(this.array[0]);
     image(this.pathimage,this.array[i][0],this.array[i][1],7,7);
   }
  }
}
   
