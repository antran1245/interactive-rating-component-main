// global variables
let rating = null;

// rating selection
function select(element) {
    let numBtn = document.querySelectorAll('#number button');
    for(let i = 0; i < numBtn.length; i++) {
        numBtn[i].classList.remove('selected');
    }
    rating = Number(element.innerHTML);
    element.classList.add('selected');
}

// submit
function submit() {
    let rating_box = document.querySelector('#rating-box');
    let thank_you_box = document.querySelector('#thank-you-box');
    let rating_text = document.querySelector('#rating span');
    rating_box.style.display = 'none';
    thank_you_box.style.display = 'flex';
    if(rating != null) {
        rating_text.innerHTML = rating;
    }
}