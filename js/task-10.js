function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// // Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// // Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function createBoxes(amount) {

  const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${30 + i * 10}px`
    newDiv.style.height = `${30+i*10}px`
    newDiv.push(box)
};



function destroyBoxes (){

}



// const listRefs = ingredients.map((ingredient) => {
//   const listRef = document.createElement("li");
//   listRef.textContent = ingredient;
//   listRef.classList.add("item");
//   return listRef;
// });
