// Начало Скрипта для вопрос - ответ
const btnsDropdown = document.querySelectorAll('.answer');
const test = document.querySelector('.answer__container');

// const imgAnswer = btnsDropdown.querySelector('#answerPlus');
// const titleAnswer = btnsDropdown.querySelector('#answerTitle');

for (let index = 0; index < btnsDropdown.length; index++) {
    const element = btnsDropdown[index];
    element.id = index;
    console.log(element);
}

btnsDropdown.addEventListener('click', function (e) {
    console.log(e.target);
    // e.target.classList.toggle('open');
    // if (btnsDropdown.classList.value === "answer open") {
    //     // imgAnswer.src = "/images/ico (1).svg";
    //     // titleAnswer.style.color = "rgba(215, 72, 85, 1)";
    // } else {
    //     // imgAnswer.src = "/images/ico.svg";
    //     // titleAnswer.style.color = "rgba(96, 56, 19, 1)";
    // }
})



// btnsDropdown.forEach(btn => {
//     console.log(btn);
//     btn.id = 1;
// })

// Конец Скрипта для вопрос - ответ