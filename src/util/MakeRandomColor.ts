class MakeRandomColor {
	count: number;
	colorArray: string[];

	constructor(count: number) {
		this.count = count;
		this.colorArray = [];
	}
	randomColor() {
		return Math.floor(Math.random() * 255);
	}
	setRgbaColor() {
		for (let i = 0; i < this.count; i++) {
			this.colorArray.push(`rgba(${this.randomColor()},${this.randomColor()},${this.randomColor()}, 0.6)`);
		}
		return this.colorArray;
	}
}

export default MakeRandomColor;
