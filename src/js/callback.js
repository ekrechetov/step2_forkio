const callbackTitle = document.getElementsByClassName('callback-title')[0];
const callBtn = document.getElementsByClassName('callback__form-btn')[0];

function changeName() {
    if (document.documentElement.clientWidth > 767) {
        callbackTitle.innerText = 'Order callback';
        callBtn.innerText = 'call me!';
    } else {
        callbackTitle.innerText = 'Subscribe To Stay in Touch';
        callBtn.innerText = 'subscribe';
    }
}

window.addEventListener('resize', changeName);
window.addEventListener('load', changeName);