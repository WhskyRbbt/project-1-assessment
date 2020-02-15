let numValue = document.querySelector("h1");
let numFromUser = document.getElementById("quantity");
let plus = document.getElementById("plusBtn");
let minus = document.getElementById("minusBtn");
let num = 0;
let newNum;


numValue.textContent = num;


plus.addEventListener("click", () => {
    newNum = parseInt(numFromUser.value);
    num = num + newNum;
    numValue.textContent = num;
    posNeg();
});

minus.addEventListener("click", () => {
    newNum = parseInt(numFromUser.value);
    num = num - newNum;
    numValue.textContent = num;
    posNeg();
});

function posNeg() {
    if (num < 0){
    numValue.style.color = "red";
} else {
    numValue.style.color = "green";
}
};

