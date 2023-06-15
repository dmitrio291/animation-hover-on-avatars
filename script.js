let icons = document.querySelectorAll('.icons__icon');
let contentBoxes = document.querySelectorAll('.content__box');

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', function() {
        for(let i = 0; i < contentBoxes.length; i++) {
            contentBoxes[i].classList.remove('active');
        }
        document.getElementById(this.dataset.id).classList.add('active');
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove('active');
        }
        this.classList.add('active');
    });
}