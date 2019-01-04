const $searchField = document.querySelector('[type=search]');
const $searchIcon = document.querySelector('.search-icon');
const $closeIcon = document.querySelector('.close-icon');

$searchIcon.addEventListener("click", () => {
    $searchField.classList.toggle("-active");
    $searchIcon.classList.toggle("-active");
    $closeIcon.classList.toggle("-active");
});

$closeIcon.addEventListener("click", () => {
    $searchField.classList.toggle("-active");
    $searchIcon.classList.toggle("-active");
    $closeIcon.classList.toggle("-active");
})