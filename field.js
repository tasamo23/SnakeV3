


function createField(x,y)
{
    this.x=x;
    this.y=y;
    this.state=states.EMPTY;

    this.col;


    
    this.display=function()
    {   
        if(this.state!=states.EMPTY&&this.state!=states.APPLE)
    {
        // stroke('gray');
        // noFill();
        // rect(this.x,this.y,fieldSize,fieldSize);
        // noStroke();
        if(snakeArray.length==1)
        {
            strokeWeight(9);
            
            stroke('lime');
            point(this.x+6,this.y+6)
            noStroke();
            strokeWeight(1);
        }
    }
    else if(this.state==states.EMPTY){ 
        // stroke('gray');
        // fill('black');
        // rect(this.x,this.y,fieldSize,fieldSize);
        // noStroke();
        // noFill();
    }
    else if(this.state==states.APPLE)
    {
        // stroke('gray');
        // noFill();
        // rect(this.x,this.y,fieldSize,fieldSize);
        // noStroke();
        // noFill();
        
        image(img,this.x+1,this.y+1);
        
    }


     
    
    }

}


