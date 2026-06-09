let btn1 = document.querySelector("#box1");
let btn2 = document.querySelector("#box2");
let btn3 = document.querySelector("#box3");
let btn4 = document.querySelector("#box4");
let btn5 = document.querySelector("#box5");
let btn6 = document.querySelector("#box6");
let btn7 = document.querySelector("#box7");
let btn8 = document.querySelector("#box8");
let btn9 = document.querySelector("#box9");
let btn = document.querySelector(".oxbox");
let clickCount = 0;
this.addEventListener("click", function () {
  clickCount++;
});

function ox() {
  if (this.className == "x" || this.className == "o") {
    this.className = "";
  } else if (this.innerText == "") {
    let click = 0;
    if (clickCount % 2 == 0) {
      click = 1;
    } else {
      click = 0;
    }
    if (click) {
      this.className = "x";
    } else {
      this.className = "o";
    }
  }
}
function reset(event) {
  // event.stopPropagation();
 btn1.className = "";
 btn2.className = "";
 btn3.className = "";
 btn4.className = "";
 btn5.className = "";
 btn6.className = "";
 btn7.className = "";
 btn8.className = "";
 btn9.className = "";
}
// reset function
let rest = document.querySelector("#reset");
rest.addEventListener("click", reset);

//ox function call
btn1.addEventListener("click", ox);
btn2.addEventListener("click", ox);
btn3.addEventListener("click", ox);
btn4.addEventListener("click", ox);
btn5.addEventListener("click", ox);
btn6.addEventListener("click", ox);
btn7.addEventListener("click", ox);
btn8.addEventListener("click", ox);
btn9.addEventListener("click", ox);
