document.getElementById("one-1").addEventListener("click", mark);
document.getElementById("one-2").addEventListener("click", mark);
document.getElementById("one-3").addEventListener("click", mark);
document.getElementById("two-1").addEventListener("click", mark);
document.getElementById("two-2").addEventListener("click", mark);
document.getElementById("two-3").addEventListener("click", mark);
document.getElementById("three-1").addEventListener("click", mark);
document.getElementById("three-2").addEventListener("click", mark);
document.getElementById("three-3").addEventListener("click", mark);

var i = 1;

function mark(event) {
    if (event.target.innerHTML === " ") {
        if (i % 2 === 0) {
            event.target.innerHTML = "O";
        } else {
            event.target.innerHTML = "X";
        }
        i++;
    }
}

//function
function clear() {
    document.getElementById("one-1").innerHTML = " ";
    document.getElementById("one-2").innerHTML = " ";
    document.getElementById("one-3").innerHTML = " ";
    document.getElementById("two-1").innerHTML = " ";
    document.getElementById("two-2").innerHTML = " ";
    document.getElementById("two-3").innerHTML = " ";
    document.getElementById("three-1").innerHTML = " ";
    document.getElementById("three-2").innerHTML = " ";
    document.getElementById("three-3").innerHTML = " ";
    i = 1;
}
//function clear(){

//}

document.getElementById("reset").addEventListener("click", clear);



window.addEventListener("load", function () {
});



















// window.addEventListener("load", function () {
// });
// var boxes = document.getElementsByClassName("cbtn").addEventListener("click", makeMove);
// var turn = 0;
// var result = false;


// function clicked () {
// 			for (i = 0; i < boxes.length; i++) {
// 				boxes[i].addEventListener("click", makeMove);
// 			}
// 		}
// 		clicked();



// function makeMove () {
// 		if (this.innerHTML != "X" && this.innerHTML != "O") {
// 			console.log("working");
// 			if (turn % 2 === 0 && result === false) {
// 				this.innerHTML="X";
// 			} else {
// 				this.innerHTML="O";
// 			}
// 			turn++;
// 		}
// 	}