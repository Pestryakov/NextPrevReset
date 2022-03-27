const images = document.querySelectorAll('.img-12-min');

let count = 0; // переменная, которая указывает на номер активного изображения в images
let imgMax = document.querySelector('.img-12-max');

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function nextFunction() {
    // console.log(images.length);
    if (count + 1 < images.length) {
        count++;
    } else {
        count = 0;
    }
    images.forEach(element => {
        element.classList.remove('active-img');
    })
    images[count].classList.add('active-img');
    imgMax.src = images[count].src;

}

function prevFunction() {
    if (count - 1 >= 0) {
        count--;
    } else {
        count = images.length - 1;
    }
    images.forEach(element => {
        element.classList.remove('active-img');
    })
    images[count].classList.add('active-img');
    imgMax.src = images[count].src;
}

function resetFunction() {
    images.forEach(element => {
        element.classList.remove('active-img');
    })
    count = 0;
    images[count].classList.add('active-img');
    imgMax.src = images[count].src;
}