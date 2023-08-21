const search_btn = document.getElementById("search_btn");
const nav_input = document.getElementById("nav_input");

function toggleActiveClass(event) {
    event.preventDefault();
    nav_input.classList.toggle("active");
}

search_btn.addEventListener("click", toggleActiveClass);

const images = document.querySelectorAll('.grid_item');

images.forEach(image => {
    const modal_block = document.getElementById('modal_block');
    const modal_content = document.getElementById('modal_content');
    const modal_text = document.getElementById('modal_text');
    const close_button = document.getElementById('close_button');    
    const darkness = document.getElementById('darkness'); 
    image.addEventListener('click', () => {
        darkness.classList.add("active");
        modal_block.style.display = 'block';
        modal_content.src = image.querySelector('img').src;
        modal_text.textContent = image.textContent;
        modal_text.style.display = 'block';
    });

    darkness.addEventListener('click', () => {
        darkness.classList.remove("active");
        modal_block.style.display = 'none';
    });

    close_button.addEventListener('click', () => {
        darkness.classList.remove("active");
        modal_block.style.display = 'none';
    });
});


const rozwin_btn = document.getElementById("rozwin_btn");
const grid__block = document.getElementById("grid__block");
const open_grid = document.getElementById("open_grid");

rozwin_btn.addEventListener("click", () => {
    grid__block.classList.toggle("active");
    open_grid.classList.toggle("active");
    let hasActive = rozwin_btn.classList.toggle("active");
    if(hasActive){
        rozwin_btn.innerHTML = 'Zamknąć &uarr;';
    }else{
        rozwin_btn.innerHTML = 'Rozwiń &darr;';
    }
});

