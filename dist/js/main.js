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





//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJ1dHRvbi1idXJnZXInKTtcclxuY29uc3QgbWVudU92ZXJmbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX292ZXJmbG93Jyk7XHJcbmNvbnN0IGJsb2NrUHJldmlld1VJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXdfX2l0ZW0taW5mbycpO1xyXG5jb25zdCBibG9ja1ByZXZpZXdMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXdfX2l0ZW0tbGFuZycpO1xyXG5jb25zdCBibG9ja1ByZXZpZXdTb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlld19faXRlbS1zb2MnKTtcclxuY29uc3QgYmxvY2tQcmV2aWV3TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXdfX2l0ZW0tbnVtYmVyJyk7XHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XHJcblxyXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJylcclxuICAgIG1lbnVPdmVyZmxvdy5jbGFzc0xpc3QuYWRkKCdtZW51LXZpc2libGUnKTtcclxuICAgIGlmIChidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuICAgICAgICBibG9ja1ByZXZpZXdVSS5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgYmxvY2tQcmV2aWV3TGFuZy5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgYmxvY2tQcmV2aWV3U29jLnN0eWxlLnpJbmRleCA9ICcxJztcclxuICAgICAgICBibG9ja1ByZXZpZXdOdW1iZXIuc3R5bGUuekluZGV4ID0gJzEnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9fbGluaycpO1xyXG5cclxubGlua3MuZm9yRWFjaChsaW5rID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpKVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gICAgbWVudU92ZXJmbG93LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdmlzaWJsZScpO1xyXG4gICAgYmxvY2tQcmV2aWV3VUkuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICAgIGJsb2NrUHJldmlld0xhbmcuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICAgIGJsb2NrUHJldmlld1NvYy5zdHlsZS56SW5kZXggPSAnMTAnO1xyXG4gICAgYmxvY2tQcmV2aWV3TnVtYmVyLnN0eWxlLnpJbmRleCA9ICcxMCc7XHJcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG59XHJcblxyXG5sZXQgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogJ21haW4nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlzVmlzaWJsZUxpc3Q6IGZhbHNlLFxyXG4gICAgICAgIGNhcnQ6IFtdLFxyXG4gICAgICAgIHRvdGFsUHJpY2U6IDE2OTBcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb3Blbkxpc3QoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlTGlzdCA9ICF0aGlzLmlzVmlzaWJsZUxpc3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
