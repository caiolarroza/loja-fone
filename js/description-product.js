const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);
$stars.forEach(function ($star){
    $star.addEventListener("click", handleClick);
})

function handleClick() {
    $stars.forEach(function ($star){
        $star.classList.remove("-active");
    })

    this.classList.toggle("-active");
    const index = Array.prototype.indexOf.call($stars, this);

    for (let i = 0; i < index; i++) {
        $stars[i].classList.add("-active");
    }
}