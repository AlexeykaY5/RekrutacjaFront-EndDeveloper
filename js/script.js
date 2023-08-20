let search_btn = document.getElementById("search_btn");
let nav_input = document.getElementById("nav_input");

function toggleActiveClass(event) {
    event.preventDefault();
    nav_input.classList.toggle("active");
}

search_btn.addEventListener("click", toggleActiveClass);

let rozwin_btn = document.getElementById("rozwin_btn");
let grid__block = document.getElementById("grid__block");
let open_grid = document.getElementById("open_grid");

rozwin_btn.addEventListener("click", () => {
    grid__block.classList.toggle("active");
    open_grid.classList.toggle("active");
    let hasActive = rozwin_btn.classList.toggle("active");
    if(hasActive){
        // rozwin_btn.textContent = "Zamknąć";
        rozwin_btn.innerHTML = 'Zamknąć &uarr;';
    }else{
        // rozwin_btn.textContent = "Rozwiń";
        rozwin_btn.innerHTML = 'Rozwiń &darr;';
    }
});

