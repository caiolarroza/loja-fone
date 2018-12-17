const $heart = window.document.querySelector(".-heart");

console.log("oi ", $heart);

$heart.addEventListener("click", handleClick);

function handleClick() {
    console.log("aeae");
}

const $secondButton = window.document.querySelector(".-second");

console.log($secondButton);