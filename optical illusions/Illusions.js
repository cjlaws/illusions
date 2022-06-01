function MüllerLyer() {
	let canvas = document.getElementById("MüllerLyerCanvas");
	let ctx = canvas.getContext("2d");
	let cx = canvas.width / 2;
	let cy = canvas.height / 2;
	let dx = cx / 2;
	let dy = cy / 2;
	let hx = dx / 2;
	let hy = dy / 2;
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(dx, dy);
	ctx.lineTo(cx + dx, dy);
	ctx.lineTo(cx + hx, hy);
	ctx.moveTo(cx + dx, dy);
	ctx.lineTo(cx + hx, cy - hy);
	ctx.moveTo(dx, dy);
	ctx.lineTo(dx + hx, hy);
	ctx.moveTo(dx, dy);
	ctx.lineTo(dx + hx, dy + hy);
	ctx.moveTo(dx, cy + dy);
	ctx.lineTo(cx + dx, cy + dy);
	ctx.lineTo(cx + dx + hx, cy + hy);
	ctx.moveTo(cx + dx, cy + dy);
	ctx.lineTo(cx + dx + hx, cy + dy + hy);
	ctx.moveTo(dx, cy + dy);
	ctx.lineTo(hx, cy + hy);
	ctx.moveTo(dx, cy + dy);
	ctx.lineTo(hx, cy + dy + hy);
	ctx.stroke();
	ctx.closePath();
}

function Kindergarten() {
	const X_OFFSET = 27;
	const SQUARE_SIZE = 35;
	let canvas = document.getElementById("KindergartenCanvas");
	let ctx = canvas.getContext("2d");
	for (let j = 0; j < 8; j++) {
		if (j < 3){
			for (let i = SQUARE_SIZE - j * X_OFFSET; i < SQUARE_SIZE * 8; i += SQUARE_SIZE * 2) {
				makeSquares(ctx, i, j * SQUARE_SIZE, SQUARE_SIZE);
				}
		} else if (j > 2 && j < 5) {
			for (let i = SQUARE_SIZE + (j-4) * X_OFFSET; i < SQUARE_SIZE * 8; i += SQUARE_SIZE * 2) {
				makeSquares(ctx, i, j * SQUARE_SIZE, SQUARE_SIZE);
			}
		} else {
			for (let i = SQUARE_SIZE - (j-4) * X_OFFSET; i < SQUARE_SIZE * 8; i += SQUARE_SIZE * 2) {
				makeSquares(ctx, i, j * SQUARE_SIZE, SQUARE_SIZE);
			}
		}
		ctx.beginPath();
		ctx.moveTo(0, j * SQUARE_SIZE);
		ctx.lineTo(canvas.width, j * SQUARE_SIZE);
		ctx.closePath();
		ctx.strokeStyle = "Gray";
		ctx.stroke();
	}
}

function SubjectiveHeart() {
	const GRID_RADIUS = 25;

	let canvas = document.getElementById("SubjectiveHeartCanvas");
	let ctx = canvas.getContext("2d");

	ctx.fillStyle = "Red";
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			fillCircle(ctx, 
				GRID_RADIUS + j * GRID_RADIUS * 2.5, 
				GRID_RADIUS + i * GRID_RADIUS * 2.5, 
				GRID_RADIUS);
		}
	}
	
	let half = canvas.width / 2;
	ctx.fillStyle = "White";
	ctx.beginPath();
	ctx.moveTo(half, canvas.height - GRID_RADIUS * 1.5);
	ctx.lineTo(GRID_RADIUS * 1.5, half);
	ctx.lineTo(half, GRID_RADIUS * 1.5);
	ctx.lineTo(canvas.width - GRID_RADIUS * 1.5, half);
	ctx.closePath();
	ctx.fill();

	fillCircle(ctx, GRID_RADIUS * 3.5, GRID_RADIUS * 3.5, GRID_RADIUS * 3.2);
	fillCircle(ctx, GRID_RADIUS * 8.5, GRID_RADIUS * 3.5, GRID_RADIUS * 3.2);

	
}

function Hermann() {
	const SQUARE_SIZE = 50;
	const GAP_SIZE = 10;

	let canvas = document.getElementById("HermannCanvas");
	let ctx = canvas.getContext("2d");
	
	for (let j = -SQUARE_SIZE / 2; j <= canvas.height; j += SQUARE_SIZE + GAP_SIZE) {
		for (let i = -SQUARE_SIZE / 2; i <= canvas.width; i += SQUARE_SIZE + GAP_SIZE) {
			makeSquares(ctx, i, j, SQUARE_SIZE);
		}
	}
}

function Scintillating() {
	const SQUARE_SIZE = 50;
	const LINE_WIDTH = 10;
	
	let canvas = document.getElementById("ScintillatingCanvas");
	let ctx = canvas.getContext("2d");

	ctx.strokeStyle = "Gray";
	ctx.lineWidth = LINE_WIDTH;
	for (let j = -SQUARE_SIZE / 2; j <= canvas.height; j += SQUARE_SIZE) {
		for (let i = -SQUARE_SIZE / 2; i <= canvas.width; i += SQUARE_SIZE) {
			makeSquares(ctx, i, j, SQUARE_SIZE);
			ctx.strokeRect(i, j, SQUARE_SIZE, SQUARE_SIZE);
		}
	}
	ctx.fillStyle = "White";
	for (let j = -SQUARE_SIZE / 2; j <= canvas.height; j += SQUARE_SIZE) {
		for (let i = -SQUARE_SIZE / 2; i <= canvas.width; i += SQUARE_SIZE) {
			fillCircle(ctx, i, j, LINE_WIDTH/2);
		}
	}
	ctx.fill();
}