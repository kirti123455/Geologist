class Stone{
	constructor(x,y,width,height){
	// assign options to the stone
	var options={
		restitution:1,
		friction:2,
		density:9,
	    }
    
		this.body= Bodies.rectangle(x,y,width,height, options)
        
        this.width= width;
        this.height= height;
	    World.add(world, this.body);
    }   
	display(){
			var pos= this.body.position;		
            var angle=this.body.angle
			push();
			translate(pos.x, pos.y);
            rotate(angle);
			
			strokeWeight(4);
			stroke("black");
			fill("brown");

			//draw the rectangle here to display the stone
			rectMode(CENTER);
			rect(0,0, this.width, this.height)
			pop();
	}

}