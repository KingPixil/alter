const ID_CANVAS = "canv";
const ID_IMG = "image";
const ID_BUTTON = "submit";
const ID_TEXT = "text";

const canvas = document.getElementById(ID_CANVAS);
const ctx = canvas.getContext('2d');
const img = document.getElementById(ID_IMG);

function grow(el) {
	el.style.height = "10rem";
	el.style.height = (el.scrollHeight)+"px";
}

const generate = function() {
	let text = document.getElementById(ID_TEXT).value.split("\n").join("\n");
	let x = 12.5;
	let y = 15;
	let lineheight = 30;
	let lines = text.split('\n');
	let lineLengthOrder = lines.slice(0).sort(function(a, b) {
		return b.length - a.length;
	});
	ctx.canvas.width = ctx.measureText(lineLengthOrder[0]).width + 25;
	ctx.canvas.height = (lines.length * lineheight);

	ctx.fillStyle = "#232323";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.textBaseline = "middle";
	ctx.font="20px Anonymous Pro";
	ctx.fillStyle = "#BBBBBB";
	for (let i = 0; i<lines.length; i++) {
		ctx.fillText(lines[i], x, y + (i*lineheight) );
	}
	img.src = ctx.canvas.toDataURL();
}

document.getElementById(ID_BUTTON).addEventListener('click', function (){
	document.getElementById("image").style.display = 'block';
	generate();
});

generate();
