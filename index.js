/*
Задача 1
Нажатие на кновку "SHOW ME" должно выводить значение с поля ввода (смотрите на элементы в html-разметке)
*/
// const inputRef = document.querySelector("#alertInput");
// const btnRef = document.querySelector("#alertButton");

// btnRef.addEventListener("click", onBtnClick);
// function onBtnClick(event) {
//   const value = inputRef.value;
//   alert(value);
// }
// ===================================================
// ===================================================

/*
Задача 2
По нажатию на кнопку "SWAP ME" осуществляется обмен содержимым между двумя инпутами. 
можете понажимать на нее несколько раз или вручную сменить содержимое инпутов.
*/
// const btnRef = document.querySelector("#swapButton");
// const leftInputRef = document.querySelector("#leftSwapInput");
// const rightInputRef = document.querySelector("#rightSwapInput");

// btnRef.addEventListener("click", onBtnClick);
// function onBtnClick(event) {
//   const accValue = leftInputRef.value;
//   leftInputRef.value = rightInputRef.value;
//   rightInputRef.value = accValue;
// }
// ===================================================
// ===================================================

/*
Задача 3
Кнопка "Скрыть" прячет текст и заменяет название кнопки на
"Раскрыть", при повторном нажатии текст снова становится доступен
и кнопка принимает начальный вид.
*/
// const inputRef = document.querySelector("#passwordInput");
// const btnRef = document.querySelector("#passwordButton");

// btnRef.addEventListener("click", anBtnClick);
// function anBtnClick(event) {
//   inputRef.type === "text"
//     ? ((inputRef.type = "password"), (btnRef.textContent = "Показать"))
//     : ((inputRef.type = "text"), (btnRef.textContent = "Скрыть"));
//   if (inputRef.type === "text") {
//     inputRef.type = "password";
//     btnRef.textContent = "Показать";
//   } else {
//     inputRef.type = "text";
//     btnRef.textContent = "Скрыть";
//   }
// }
// ===================================================
// ===================================================

/*
Задача 4
Кнопка "Уменьшить" делает квадрат меньше на 10 пикселей, кпопка "Увеличить" - больше на 10 пикселей.
*/
// const divRef = document.querySelector("#box");
// const decreaseBtnRef = document.querySelector("#decrease");
// const increaseBtnRef = document.querySelector("#increase");

// decreaseBtnRef.addEventListener("click", onDecreaseBtnClick);
// function onDecreaseBtnClick(event) {
//   divRef.style.width = divRef.style.height = `${divRef.offsetWidth - 10}px`;
//   divRef.style.height = `${divRef.offsetHeight - 10}px`;
// }

// increaseBtnRef.addEventListener("click", onIncreaseBtnClick);
// function onIncreaseBtnClick() {
//   divRef.style.width = `${divRef.offsetWidth + 10}px`;
//   divRef.style.height = `${divRef.offsetHeight + 10}px`;
// }
// ===================================================
// ===================================================

/*
Задача 5
Навесьте слушатель по клику и определите, когда клик происходит
внутри элемента с id "place" и когда клик приходится вне зоны элемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/
// const divRef = document.querySelector("#place");
// document.addEventListener("click", onDocumentClick);
// function onDocumentClick(event) {
//   divRef.contains(event.target) ? console.log("Bingo") : console.log("Fiasco");
// }
// ===================================================
// ===================================================

/*
Задача 6
По клику на кнопку "Удвоить" увеличить значение
в каждом элементе списка в 2 раза
*/
// const btnRef = document.querySelector("#double");
// const itemsRef = document.querySelectorAll(".list .listItem");

// btnRef.addEventListener("click", onBtnClick);
// function onBtnClick(event) {
//   itemsRef.forEach((item) => {
//     item.textContent *= 2;
//   });
// }
// ===================================================
// ===================================================

/*
Задача 7
При клике на круг он должен следовать за курсором.
При повторном клике он становится в начальное положение.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
// const circleRef = document.querySelector(".outerCircle");
// circleRef.addEventListener("click", onCircleClick);
// function onCircleClick(event) {
//   if (event.currentTarget.style.position === "static") {
//     event.currentTarget.style.position = "absolute";
//     event.currentTarget.style.transform = "translate(-50%, -50%)";
//     console.log(event.target.style.position);
//     window.addEventListener("mousemove", onWindowMousemove);
//   } else {
//     event.currentTarget.style.position = "static";
//     event.currentTarget.style.transform = "translate(0)";
//     window.removeEventListener("mousemove", onWindowMousemove);
//   }
// }
// function onWindowMousemove(event) {
//   const top = event.pageY;
//   const left = event.pageX;

//   circleRef.style.top = `${top}px`;
//   circleRef.style.left = `${left}px`;
// }
// ===================================================
// ===================================================

/*
Задача 8
При клике на каждую из кнопок суммируются значения с data-атрибутов.
По нажатию на кнопку "Вывести результат" выводится сумма значения, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/

// ===================================================
// ===================================================

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

// ===================================================
// ===================================================

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

// ===================================================
// ===================================================

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/
