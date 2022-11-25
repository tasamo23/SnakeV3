let cnvs;
const fieldSize=11;
const fieldsInRow=40;
let pressed;
const directions={UP:0,DOWN:1,LEFT:2,RIGHT:3,STOP:4};
let direction=directions.STOP;
const states={EMPTY:0,HEAD:1,TAIL:2,APPLE:3};
const stages={START:0,PLAYING:1,GAME_OVER:2}
let tempMem
let apple;
let totalFields=fieldsInRow*fieldsInRow;
let snakeArray=[];
let fields=[];

let img;
let snakeLength=1;
let stage=stages.START;
let highscore=0;

function setup() {
	img=loadImage("apple.png");
	frameRate(10);
	
	
	cnvs=createCanvas(500, 500);
	

	for(let i=0;i<totalFields;i++)
	{
		fields[i]=new createField(i*(fieldSize)%(fieldsInRow*(fieldSize))+(500-fieldsInRow*(fieldSize))/2,
		(Math.floor(i/fieldsInRow))*(fieldSize)+((500-fieldsInRow*(fieldSize))/2)
		);
		
		
	}
	
	gameInit();

	
}

function draw() {
	pressed=false;
	if(Math.round((snakeLength-1)/3)>highscore)
	highscore=Math.round((snakeLength-1)/3);
	background(255);
	fill(0);
	noStroke();
	textSize(20);
	text(`Score: ${Math.round((snakeLength-1)/3)} / ${highscore}`,25,20)
	noFill();
	
	
	
cnvs.position(window.innerWidth/2-250,window.innerHeight/2-250);
strokeWeight(5);
stroke('red');
fill('black')
rect(26,26,448,448);
strokeWeight(1);
noFill();
// for(let y=0;y<fieldsInRow;y++)
// 	{
		
// 		stroke('gray');
		
// 		line(fields[y].x,fields[y].y,fields[y+1560].x,fields[y+1560].y+10);
// 	}
if(stage!=stages.GAME_OVER)
updateFields();
else 
{
	reset();gameInit();
	
}

for(let i=0;i<totalFields;i++){
	

	fields[i].display();
}


if(snakeArray.length>=2)
{
	

for(let i=0;i<snakeArray.length-1;i++)
{
	noFill();
	strokeWeight(9);
	stroke('lime');
	line(fields[snakeArray[i]].x+6,fields[snakeArray[i]].y+6,fields[snakeArray[i+1]].x+6,fields[snakeArray[i+1]].y+6)
}
}
}
let gameInit=function()
{
	let temp1=Math.floor(random(totalFields));
	let temp2;

	fields[temp1].state=states.APPLE;
	apple=temp1;
	do
		temp2=Math.floor(random(totalFields));
	while(temp1==temp2);
	fields[temp2].state=states.HEAD;
	snakeArray[0]=temp2;
	
}
let reset=function()
{
	fields=[];
	snakeArray=[];
	for(let i=0;i<totalFields;i++)
	{
		fields[i]=new createField(i*(fieldSize)%(fieldsInRow*(fieldSize))+(500-fieldsInRow*(fieldSize))/2,
		(Math.floor(i/fieldsInRow))*(fieldSize)+((500-fieldsInRow*(fieldSize))/2)
		);
	}
	stage=stages.START;
	direction=directions.STOP;
	snakeLength=1;
}

// 
// 
// 
// 
// 

function keyPressed(){
	if(stage==stages.START)
	stage=stages.PLAYING;
	if(!pressed)
	{
	switch (keyCode)
	{
		case UP_ARROW:
			if(direction!=directions.DOWN&&stage==stages.PLAYING)
			direction=directions.UP;break;
		case DOWN_ARROW:
			if(direction!=directions.UP&&stage==stages.PLAYING)
			direction=directions.DOWN;break;
		case LEFT_ARROW:
			if(direction!=directions.RIGHT&&stage==stages.PLAYING)
			direction=directions.LEFT;break;
		case RIGHT_ARROW:
			if(direction!=directions.LEFT&&stage==stages.PLAYING)
			direction=directions.RIGHT;break;
		case 87:
			if(direction!=directions.DOWN&&stage==stages.PLAYING)
			direction=directions.UP;break;
		case 65:
			if(direction!=directions.RIGHT&&stage==stages.PLAYING)
			direction=directions.LEFT;break;
		case 83:
			if(direction!=directions.UP&&stage==stages.PLAYING)
			direction=directions.DOWN;break;
		case 68:
			if(direction!=directions.LEFT&&stage==stages.PLAYING)
			direction=directions.RIGHT;break;
		default:
			break;
	}
	pressed=true;
}
	return false;
}
// let keyTest=function()
// {
// 	if(keyIsDown(UP_ARROW)&&direction!=directions.DOWN&&stage==stages.PLAYING)
// 	direction=directions.UP;
// 	else if(keyIsDown(DOWN_ARROW)&&direction!=directions.UP&&stage==stages.PLAYING)
// 	direction=directions.DOWN;
// 	else if(keyIsDown(LEFT_ARROW)&&direction!=directions.RIGHT&&stage==stages.PLAYING)
// 	direction=directions.LEFT;
// 	else if(keyIsDown(RIGHT_ARROW)&&direction!=directions.LEFT&&stage==stages.PLAYING)
// 	direction=directions.RIGHT;
// 	else if(keyIsDown(87)&&direction!=directions.DOWN&&stage==stages.PLAYING)
// 	direction=directions.UP;
// 	else if(keyIsDown(65)&&direction!=directions.RIGHT&&stage==stages.PLAYING)
// 	direction=directions.LEFT;
// 	else if(keyIsDown(83)&&direction!=directions.UP&&stage==stages.PLAYING)
// 	direction=directions.DOWN;
// 	else if(keyIsDown(68)&&direction!=directions.LEFT&&stage==stages.PLAYING)
// 	direction=directions.RIGHT;
// }
