// Начало Скрипта для вопрос - ответ
const btnsDropdown = document.querySelectorAll('.answer');

btnsDropdown.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.target.offsetParent.classList.toggle('open');
        if (e.target.offsetParent.classList.value === 'answer open') {
            console.log('open');
            e.target.offsetParent.children[0].children.answerPlus.src = "/images/ico (1).svg";
            e.target.offsetParent.children[0].children.answerTitle.style.color = "rgba(215, 72, 85, 1)";
        } else {
            e.target.offsetParent.children[0].children.answerPlus.src = "/images/ico.svg";
            e.target.offsetParent.children[0].children.answerTitle.style.color = "rgba(96, 56, 19, 1)";
        }
        
    })
})
// Конец Скрипта для вопрос - ответ

// Начало Скрипта выдвижения окна слева
const headerSection = document.querySelector(".header");
const btnOpenWindow = headerSection.querySelector("#header-mobile__open-block");
const containerWindow = headerSection.querySelector('.header-mobile__container');
const btnCloseWindow = headerSection.querySelector('#header-mobile__close-block');

btnOpenWindow.addEventListener('click', function () {
    containerWindow.style.setProperty("left", "0px");
    btnCloseWindow.style.setProperty("left", "0px");
})
btnCloseWindow.addEventListener('click', function () {
    containerWindow.style.setProperty("left", "-390px");
    btnCloseWindow.style.setProperty("left", "-390px");
})
// Конец Скрипта выдвижения окна слева