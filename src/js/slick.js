const heroes = Array.from(document.getElementsByClassName('social__slick-block'));
heroes.forEach((item) => {
   item.style.display = 'none';
});
heroes[0].style.display = 'flex';

const leftBtn = document.getElementsByClassName('social__slick-left')[0];
const rightBtn = document.getElementsByClassName('social__slick-right')[0];
let currentItem = 0;

function moveLeft() {
    let prevItem = currentItem - 1;
    heroes[currentItem].style.display = 'none';

    if (prevItem < 0) {
        prevItem = heroes.length - 1;
    }

    heroes[prevItem].style.display = 'flex';
    currentItem--;

    if (currentItem < 0) {
        currentItem = heroes.length - 1;
    }
}

function moveRight() {
    let nextItem = currentItem + 1;
    heroes[currentItem].style.display = 'none';

    if (nextItem > (heroes.length - 1)) {
        nextItem = 0;
    }

    heroes[nextItem].style.display = 'flex';
    currentItem++;

    if (currentItem > (heroes.length - 1)) {
        currentItem = 0;
    }
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);