const $second = document.querySelector(".-second");
// const cart = document.getElementById("count");

let valorInicial = 10;

$second.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    const $carrinho = document.querySelector(".-last");

    $carrinho.textContent = `Carrinho (${++valorInicial})`;
}