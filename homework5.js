const canvas = document.getElementById('canvas');
const plane = canvas.getContext('2d')
const createBoxes = fucnction(count, canvasWidth, canvasHeight){
	let array = [];
z	const boxWidth = 20;
	const boxHeight = 20;
	const rand = function(num) {
  return Math.floor(Math.random() * num);
};

	for (let i = 0; i < count; i+=)
		let object {
			width: boxWidth
			height: boxHeight
			x: rand(canvasWidth - boxWidth)
			y: rand(canvasHeight - boxHeight)
			xDelta: 8
			yDelta: 10
			color: colors[rand(colors.length)]
			draw: function() [
				plane.fillStyle = this.color
				plane.fillRect(this.x, this.y, this.width, this.height);
			]
		}

		update: function {
			this.x = this.x + this.xDelta;
			this.y = this.y + this.yDelta;
			}
	array[i] = object;

} return array;

let newArray = createBoxes(57, canvas.width, canvas.height);
const draw = function () {
	for (let i = 0, i < newArray.length, i++){
		newArray(i).draw();
	} 

}
const update = function() {
	for (let i = 0, i < newArray.length, i++){
		newArray(i).update();
	}

}
function animation() {
	reuqestAnimationFrame(animation);
	plane.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	update();
}

animation();