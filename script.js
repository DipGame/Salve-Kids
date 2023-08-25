// window.onresize = resize;

// function resize() {

// }

// Начало Скрипта для вопрос - ответ
const btnsDropdown = document.querySelectorAll('.answer');

btnsDropdown.forEach(btn => {
    btn.addEventListener('click', function () {
        btn.classList.toggle('open');
        if (btn.classList.contains('open')) {
            btn.querySelector('#answerPlus').src = "/images/ico (1).svg";
            btn.querySelector('#answerTitle').style.color = "rgba(215, 72, 85, 1)";
        } else {
            btn.querySelector('#answerPlus').src = "/images/ico.svg";
            btn.querySelector('#answerTitle').style.color = "rgba(96, 56, 19, 1)";
        }
    })
})
// Конец Скрипта для вопрос - ответ

// Начало Скрипта выдвижения окна слева
const headerSection = document.querySelector(".header");
const btnOpenWindow = headerSection.querySelectorAll("#header-mobile__open-block");
const containerWindow = headerSection.querySelector('.header-mobile__container');
const btnCloseWindow = headerSection.querySelector('.header-mobile__close-block');

btnOpenWindow.forEach(btn => {
    btn.addEventListener('click', function () {
        if (containerWindow.classList.contains('header-mobile__container-open')) {
            containerWindow.classList.remove('header-mobile__container-open');
            btnCloseWindow.classList.remove('header-mobile__container-open');
        } else {
            containerWindow.classList.add('header-mobile__container-open');
            btnCloseWindow.classList.add('header-mobile__container-open');
        }
    })
})
btnCloseWindow.addEventListener('click', function () {
    containerWindow.classList.remove('header-mobile__container-open');
    btnCloseWindow.classList.remove('header-mobile__container-open');
})
// Конец Скрипта выдвижения окна слева

// Начало Скрипта выдвижение ховера услуг(Должен быть после Скрипта выдвижения окна слева!!!)
const hoverBtnMenu = headerSection.querySelector('.hover__btn-menu');
const moreMenu = headerSection.querySelector('.header-hover__list');
const arrowMenu = headerSection.querySelector('.menu__add');
hoverBtnMenu.addEventListener('click', () => {
    moreMenu.classList.toggle('header-hover__list_open');
    if (moreMenu.classList.contains('header-hover__list_open')) {
        arrowMenu.classList.add('menu__add_rotate');
    } else {
        arrowMenu.classList.remove('menu__add_rotate');
    }
})
// Конец Скрипта выдвижение ховера услуг

// Начало Скрипта кнопки для прокрутки наверх страницы(Должен быть после Скрипта выдвижения окна слева!!!)
headerSection.querySelector('.header-mobile__btn-up').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
// Конец Скрипта кнопки для прокрутки наверх страницы

// Начало Скрипта слайдер отзывов при мобильной версии
// const mainPage = document.querySelector('.main');
// const reviewSection = mainPage.querySelector('.reviews');
// const containerCardReview = reviewSection.querySelectorAll('.container__card-review');

// containerCardReview.forEach(element => {
//     console.log(element);
// });
// Конец Скрипта слайдер отзывов при мобильной версии

// Начало Скрипта для спойлера
const bottomTextbox = document.querySelectorAll('.bottom__text');

bottomTextbox.forEach(el => {
    const box = el.querySelector('.bottom__text-box')
    const text = el.querySelector('#bottomText');
    const btnMore = el.querySelector('.read__more');
    if (box.offsetHeight < text.offsetHeight) {
        btnMore.classList.add('read__more_visual');
    }
    btnMore.addEventListener('click', () => {
        box.classList.toggle('bottom__text-box-open');
        if (box.classList.contains('bottom__text-box-open')) {
            btnMore.children[0].textContent = "скрыть";
            btnMore.children[1].classList.add('img__rotate');
        } else {
            btnMore.children[0].textContent = "читать далее";
            btnMore.children[1].classList.remove('img__rotate');
        }
    })
})
// Конец Скрипта для спойлера

// Начало Скрипта сокращение колличства карточек врачей в зависимости от ширины экрана
// const expertsSection = document.querySelector('.experts');
// const expertCard = expertsSection.querySelectorAll('.expert__card');
// const expertProf = expertsSection.querySelectorAll('.experts__prof');

// window.onresize = resize;

// function hiddenTitle() {
//     expertProf.forEach(el => {
//         el.style.setProperty("visibility", "hidden");
//         el.style.setProperty("height", "0");
//         el.style.setProperty("overflow", "hidden");
//     })
// }

// function visibileTitle() {
//     expertProf.forEach(el => {
//         el.style.setProperty("visibility", "visible");
//         el.style.setProperty("height", "auto");
//     })
// }

// function wdindowScreen() {
//     for (let index = 0; index < expertCard.length; index++) {
//         const element = expertCard[index];
//         if (window.screen.width < 670 && index > 2) {
//             element.style.setProperty("visibility", "hidden");
//             element.style.setProperty("height", "0");
//             element.style.setProperty("margin", "0");
//             hiddenTitle()
//         } else {
//             element.style.setProperty("visibility", "visible");
//             element.style.setProperty("height", "auto")
//             visibileTitle()
//         }
//     }
// }

// wdindowScreen();

// function resize() {
//     wdindowScreen();
// }
// Конец Скрипта сокращение колличства карточек врачей в зависимости от ширины экрана