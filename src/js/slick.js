const heroes = [`<div class="social__slick-block">
    <div class="social__slick-person">
    <div class="social__slick-person__block">
    <img src="images/nil_armstrong.jpg" alt="neil_armstrong" class="social__slick-person__block-img">
    </div>
    <div class="social__slick-person__info">
    <h5 class="social__slick-person__name">Neil Armstrong</h5>
<span class="social__slick-person__nick">@nArmstrong</span>
    </div>
    </div>
    <div class="social__slick__info">
    <p class="social__slick__info-feedback"><span class="social__slick__info-name">@huston </span>We have problem.</p>
<span class="social__slick__info-last-feedback">
    50 years ago
</span>
</div>
</div>`, `<div class="social__slick-block">
                    <div class="social__slick-person">
                        <div class="social__slick-person__block">
                            <img src="images/gandalf.jpg" alt="gandalf" class="social__slick-person__block-img">
                        </div>
                        <div class="social__slick-person__info">
                            <h5 class="social__slick-person__name">Gandalf</h5>
                            <span class="social__slick-person__nick">@whiteMag</span>
                        </div>
                    </div>
                    <div class="social__slick__info">
                        <p class="social__slick__info-feedback"><span class="social__slick__info-name">@frodoShaggyPaw </span>Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement.</p>
                        <span class="social__slick__info-last-feedback">
                        many years ago
                    </span>
                    </div>
                </div>`, `<div class="social__slick-block">
                    <div class="social__slick-person">
                        <div class="social__slick-person__block">
                            <img src="images/Grand-Jedi.jpg" alt="grand_jedi" class="social__slick-person__block-img">
                        </div>
                        <div class="social__slick-person__info">
                            <h5 class="social__slick-person__name">Master Joda</h5>
                            <span class="social__slick-person__nick">@grandJedi</span>
                        </div>
                    </div>
                    <div class="social__slick__info">
                        <p class="social__slick__info-feedback"><span class="social__slick__info-name">@skyWalker </span>When
                            you look at the dark side, careful you must be, for the dark side looks back.</p>
                        <span class="social__slick__info-last-feedback">
                        200000 years ago
                    </span>
                    </div>
                </div>`];

const leftBtn = document.getElementsByClassName('social__slick-left')[0];
const rightBtn = document.getElementsByClassName('social__slick-right')[0];
let currentItem = heroes.length - 1;

function moveLeft() {
    const personBlock = document.getElementsByClassName('social__slick-block-person')[0];
    let prevItem = currentItem - 1;

    if (prevItem < 0) {
        prevItem = heroes.length - 1;
    }

    personBlock.innerHTML = heroes[prevItem];
    currentItem--;
    if (currentItem < 0) {
        currentItem = heroes.length - 1;
    }
}

function moveRight() {
    const personBlock = document.getElementsByClassName('social__slick-block-person')[0];
    let nextItem = currentItem + 1;

    if (nextItem > (heroes.length - 1)) {
        nextItem = 0;
    }

    personBlock.innerHTML = heroes[nextItem];
    currentItem++;
    if (currentItem > (heroes.length - 1)) {
        currentItem = 0;
    }
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);