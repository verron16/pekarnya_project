const burger = document.getElementById('js-button-burger');
const menuOverflow = document.querySelector('.menu__overflow');
const blockPreviewUI = document.querySelector('.preview__item-info');
const blockPreviewLang = document.querySelector('.preview__item-lang');
const blockPreviewSoc = document.querySelector('.preview__item-soc');
const blockPreviewNumber = document.querySelector('.preview__item-number');

burger.addEventListener('click', openMenu);

function openMenu() {
    burger.classList.toggle('open')
    menuOverflow.classList.add('menu-visible');
    if (burger.classList.contains('open')) {
        blockPreviewUI.style.zIndex = '1';
        blockPreviewLang.style.zIndex = '1';
        blockPreviewSoc.style.zIndex = '1';
        blockPreviewNumber.style.zIndex = '1';
    } else {
        closeMenu();
    }
}

const links = document.querySelectorAll('.menu__link');

links.forEach(link => link.addEventListener('click', closeMenu))

function closeMenu() {
    menuOverflow.classList.remove('menu-visible');
    blockPreviewUI.style.zIndex = '10';
    blockPreviewLang.style.zIndex = '10';
    blockPreviewSoc.style.zIndex = '10';
    blockPreviewNumber.style.zIndex = '10';
    burger.classList.remove('open');
}

let app = new Vue({
    el: 'main',
    data: {
        isVisibleList: false,
        cart: [],
        totalPrice: 1690
    },
    methods: {
        openList() {
            this.isVisibleList = !this.isVisibleList
        }
    }
})




