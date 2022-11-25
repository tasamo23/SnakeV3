let updateFields=function()
{
    
    tempMem=snakeArray[snakeArray.length-1];
    
    if(snakeArray.length>1)
    {
    for(let i=snakeArray.length-1;i>1;i--)
    {
        snakeArray[i]=snakeArray[i-1];
    }
    
    snakeArray[1]=snakeArray[0];
    }
    

    switch (direction)
    {
        case directions.UP:
            gameOverTest(0,-1);
            if(stage!=stages.GAME_OVER)
            snakeArray[0]-=fieldsInRow;
            break;
        case directions.DOWN:
            gameOverTest(0,1);
            if(stage!=stages.GAME_OVER)
            snakeArray[0]+=fieldsInRow;
            break;
        case directions.LEFT:
            gameOverTest(-1,0);
            if(stage!=stages.GAME_OVER)
            snakeArray[0]-=1;
            break;
        case directions.RIGHT:
            gameOverTest(1,0);
            if(stage!=stages.GAME_OVER)
            snakeArray[0]+=1;
            break;
        default:
            break;
    }
    
        for(let k=1;k<snakeArray.length;k++)
    {
        if(snakeArray[k]===snakeArray[0])
        
        stage=stages.GAME_OVER;
    }
    
    if(snakeArray.length<snakeLength&&stage!=stages.GAME_OVER)
    snakeArray.push(tempMem);
    else if(stage!=stages.GAME_OVER)
    fields[snakeArray[snakeArray.length-1]].state=states.EMPTY;
    if(stage!=stages.GAME_OVER)
    {if(snakeArray[0]==apple)
    {
        let temp3;
        do
		temp3=Math.floor(random(totalFields));
    while(snakeArray.includes(temp3));
    apple=temp3;
    fields[temp3].state=states.APPLE;
    snakeLength+=3;
    }
    
    for(let i=0;i<totalFields;i++)
    {
        fields[i].state=states.EMPTY;
    }
    fields[snakeArray[0]].state=states.HEAD;
    fields[apple].state=states.APPLE;

    for(let i=1;i<snakeArray.length;i++)
    {
        fields[snakeArray[i]].state=states.TAIL;
    }}
}
let gameOverTest=function(x1,y1)
{
    if((snakeArray[0]%fieldsInRow)+x1>=fieldsInRow||
        (snakeArray[0]%fieldsInRow)+x1<=-1||
        Math.floor(snakeArray[0]/fieldsInRow)+y1>=fieldsInRow||
        Math.floor(snakeArray[0]/fieldsInRow)+y1<=-1)
    stage=stages.GAME_OVER;
    

    
     
}
