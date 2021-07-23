// Price Slider
var slider = document.querySelector(".slide-container__range");
var output = document.querySelector(".search-filter__header-price");

output.innerHTML = slider.value + " $"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value + " $";
}


// search sort button active

const sortButton = document.querySelectorAll('.search-sort__btn');
console.log(sortButton);
for (let i = 0; i < sortButton.length; i++) {
    sortButton[i].onclick = function () {
        document.querySelector('.search-sort__btn--active').classList.remove('search-sort__btn--active');
        this.classList.add('search-sort__btn--active');
    }
}