const canvas=document.getElementById('gameCaagi');
console.log(canvas);
const ctx= canvas.getContext("2d");
console.log(ctx);
const gridSize = 20;
const snakeColor="cyan";
const foodColor="red";

let snake = [{x:15,y:10}];
let food ={x:15,y:15};
let dx=1;
let dy=0;
let snake1 = [{x:5,y:0}];
let fx=1;
let fy=0;

function drawSnake(snake,color){
	snake.forEach(segment=>{
		ctx.fillStyle=color;
		ctx.fillRect(segment.x*gridSize,segment.y*gridSize,gridSize,gridSize)
	});
}
function drawFood(){
	ctx.fillStyle=foodColor;
	ctx.fillRect(food.x*gridSize,food.y*gridSize,gridSize,gridSize);
}
function check(){
	
}
function update(){
	const head ={x:snake[0].x-dx,y:snake[0].y+dy}
	const head1 ={x:snake1[0].x+fx,y:snake1[0].y+fy}
	// .unshift -> nemeh, .pop -> hasah
	snake.unshift(head);
	snake1.unshift(head1);
	if(head.x==food.x && head.y==food.y ){
		food ={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};
	}else{
		snake.pop();
	}
	if( head1.x==food.x && head1.y==food.y){
		food ={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};
	}else{
		snake1.pop();
	}
	
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawSnake(snake,snakeColor)
	drawSnake(snake1,"yellow")
	
	drawFood();
}
const gameLoop = setInterval(update,180);

document.addEventListener("keydown",(event)=>{
	console.log(event.key)
	switch(event.key){
		case "ArrowUp":
			if(dy!==1){
				dx=0;
				dy=-1;
			}
			break;
		case "ArrowDown":
			if(dy!==1){
				dx=0;
				dy=1;
			}
			break;
		case "ArrowRight":
			if(dx!==-1){
				dx=-1;
				dy=0;
			}
			break;
		case "ArrowLeft":
			if(dx!==1){
				dx=1;
				dy=0;
			}
			break;
		case "w":
			if(fy!==1){
				fx=0;
				fy=-1;
			}
			break;
		case "s":
			if(fy!==1){
				fx=0;
				fy=1;
			}
			break;
		case "d":
			if(fx!==-1){
				fx=1;
				fy=0;
			}
			break;
		case "a":
			if(fx!==1){
				fx=-1;
				fy=0;
			}
			break;
	}
})
