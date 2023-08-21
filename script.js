// Начало Скрипта для вопрос - ответ
const btnsDropdown = document.querySelectorAll('.answer');

// "/images/ico (2).svg"
// e.target.offsetParent.children.id
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