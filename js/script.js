const searchInput = document.getElementById("search");
const searchButton = document.getElementById("seacrh-button");
const categorySection1 = document.querySelector(".categorysection");


searchInput.addEventListener("click", (e) => {
    e.stopPropagation();
    searchButton.style.border = "1px solid white";
});

document.addEventListener("click", () => {
    searchButton.style.border = "0.1px solid #858484";
});

categorySection1.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        categorySection1.scrollLeft += e.deltaY;
    }
});

console.log("Hello World");