const searchInput = document.getElementById("search");
const searchButton = document.getElementById("seacrh-button");
searchInput.addEventListener("click", (e) => {
    e.stopPropagation();
    searchButton.style.border = "1px solid white";
})

document.addEventListener("click", () => {
    searchButton.style.border = "0.1px solid #858484";
})

console.log("Hello World")