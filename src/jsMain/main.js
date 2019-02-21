"use strict";

var callbackTitle = document.getElementsByClassName('callback-title')[0];
var callBtn = document.getElementsByClassName('callback__form-btn')[0];

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
var menuIcon = document.getElementsByClassName('header__menu-icon');
menuIcon[0].addEventListener("click", showMenu);

function showMenu() {
  var header = document.getElementsByClassName('container--header');
  header[0].classList.toggle('menu--open');
}

var heroes = ["<div class=\"social__slick-block\">\n    <div class=\"social__slick-person\">\n    <div class=\"social__slick-person__block\">\n    <img src=\"images/nil_armstrong.jpg\" alt=\"neil_armstrong\" class=\"social__slick-person__block-img\">\n    </div>\n    <div class=\"social__slick-person__info\">\n    <h5 class=\"social__slick-person__name\">Neil Armstrong</h5>\n<span class=\"social__slick-person__nick\">@nArmstrong</span>\n    </div>\n    </div>\n    <div class=\"social__slick__info\">\n    <p class=\"social__slick__info-feedback\"><span class=\"social__slick__info-name\">@huston </span>We have problem.</p>\n<span class=\"social__slick__info-last-feedback\">\n    50 years ago\n</span>\n</div>\n</div>", "<div class=\"social__slick-block\">\n                    <div class=\"social__slick-person\">\n                        <div class=\"social__slick-person__block\">\n                            <img src=\"images/gandalf.jpg\" alt=\"gandalf\" class=\"social__slick-person__block-img\">\n                        </div>\n                        <div class=\"social__slick-person__info\">\n                            <h5 class=\"social__slick-person__name\">Gandalf</h5>\n                            <span class=\"social__slick-person__nick\">@whiteMag</span>\n                        </div>\n                    </div>\n                    <div class=\"social__slick__info\">\n                        <p class=\"social__slick__info-feedback\"><span class=\"social__slick__info-name\">@frodoShaggyPaw </span>Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement.</p>\n                        <span class=\"social__slick__info-last-feedback\">\n                        many years ago\n                    </span>\n                    </div>\n                </div>", "<div class=\"social__slick-block\">\n                    <div class=\"social__slick-person\">\n                        <div class=\"social__slick-person__block\">\n                            <img src=\"images/Grand-Jedi.jpg\" alt=\"grand_jedi\" class=\"social__slick-person__block-img\">\n                        </div>\n                        <div class=\"social__slick-person__info\">\n                            <h5 class=\"social__slick-person__name\">Master Joda</h5>\n                            <span class=\"social__slick-person__nick\">@grandJedi</span>\n                        </div>\n                    </div>\n                    <div class=\"social__slick__info\">\n                        <p class=\"social__slick__info-feedback\"><span class=\"social__slick__info-name\">@skyWalker </span>When\n                            you look at the dark side, careful you must be, for the dark side looks back.</p>\n                        <span class=\"social__slick__info-last-feedback\">\n                        200000 years ago\n                    </span>\n                    </div>\n                </div>"];
var leftBtn = document.getElementsByClassName('social__slick-left')[0];
var rightBtn = document.getElementsByClassName('social__slick-right')[0];
var currentItem = heroes.length - 1;

function moveLeft() {
  var personBlock = document.getElementsByClassName('social__slick-block-person')[0];
  var prevItem = currentItem - 1;

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
  var personBlock = document.getElementsByClassName('social__slick-block-person')[0];
  var nextItem = currentItem + 1;

  if (nextItem > heroes.length - 1) {
    nextItem = 0;
  }

  personBlock.innerHTML = heroes[nextItem];
  currentItem++;

  if (currentItem > heroes.length - 1) {
    currentItem = 0;
  }
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);