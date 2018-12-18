const $heart = window.document.querySelector(".-heart");
const $secondButton = window.document.querySelector(".-second");
const cart = document.getElementById("count");

let count = 10;

$heart.addEventListener("click", handleClick);
$secondButton.addEventListener("click", handleButtonClick);

console.log("oi ", $heart);

function handleClick() {
    console.log("aeae");
}

console.log($secondButton);

cart.innerHTML = count;

function handleButtonClick() {
    console.log("alo alo w brasil");
    cart.innerHTML = ++count;
}
