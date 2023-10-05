// ! НА ЩО ЗВЕРТАТИ УВАГУ ПРИ ВИКОНАННІ ЗАВДАННЯ:
// * В рядку, де написано "ВАШ КОД" починаєте писати код. Можете додавати після нього стільки рядків, скільки треба для виконання задачі.
// *  Після рядка "КіНЕЦЬ БЛОКУ КОДА" починається наступна задача.
// * Якщо в кінці рядку написано "видалити цей рядок", то просто видаляєте рядок.
// * Якщо написано "змінити рядок" - змінюєте код в рядку на той, що треба по задачі.
// ? Для того, щоб побачити кольорові коментарі встановть в редактор коду доповнення better comments
// ? https://plugins.jetbrains.com/plugin/10850-better-comments
// ? https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

'use strict';
// ! ###Оголошуємо змінні###

// * Змінна, яка зберігає кількість карток на дошці. Ініціалізувати із значенням 12.
const quantityCards = 12;

////////////////////////////////////////// ! КіНЕЦЬ БЛОКУ КОДА //////////////////////////////////////////

// * Змінна, яка зберігає час затримки перед перевертанням картки. Ініціалізувати зі значенням 1000.
const timeout = 1000;

////////////////////////////////////////// ! КіНЕЦЬ БЛОКУ КОДА //////////////////////////////////////////

// * Змінна, значення якої визначає чи маємо на дошці перевернуту картку. Ініціалізуємо зі значенням false.
let hasOpenedCard = false;

////////////////////////////////////////// ! КіНЕЦЬ БЛОКУ КОДА //////////////////////////////////////////

// * Змінні, значення яких зберігатиму першу та другу перевернуту картку. Тільки оголошуємо, без ініціалізації.
let firstCard;
let secondCard;

////////////////////////////////////////// ! КіНЕЦЬ БЛОКУ КОДА //////////////////////////////////////////
// ! ###Пишемо функції ###

// * Функція, яка скидає значення змінних дошки. Змінній, значення якої визначає, чи маємо на дошці перевернуту картку, ставимо вихідне значення. Змінним значення яких зберігають першу і другу перевернуту карту присвоюємо порожнє значення.
function resetCards() {
  firstCard = undefined;
  secondCard = undefined;
  hasOpenedCard = false;
}

////////////////////////////////////////// ! КіНЕЦЬ БЛОКУ КОДА //////////////////////////////////////////

// * Функція, яка визначає чи збігаються перевернуті картки. Функція як параметри приймає назву фреймворку першої картки та назву фреймворку другої картки. Якщо назви збігаються, вивести в консоль текст "Дія 1", інакше вивести в консоль текст "Дія 2";
function compareCards(card1, card2) {
  if (card1 === card2) {
    console.log('Дія 1');
  } else {
    console.log('Дія 2');
  }
}

////////////////////////////////////////// ! КіНЕЦЬ БЛОКУ КОДА //////////////////////////////////////////

// * Функція блокування першої та другої картки. Функція має виконати такі дії:
// * - вивести в консоль повідомлення "Перша картка заблокована"
// * - вивести в консоль повідомлення "Друга картка заблокована"
// * - викликати функцію скидання змінних дошки
function blockCards() {
  console.log('Перша картка заблокована');
  console.log('Друга картка заблокована');
  resetCards();
}
