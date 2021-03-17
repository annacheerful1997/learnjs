
 // 1. Обьекты это структуры которые могут сохранять в себе любые типы данных в формате ключ:значение
 // 2. Обьекты могут быть вложенные друг в друга
 // 3. Чтобы перебрать обьекты можно использовать конструкцию for in и внутри делать все что угодно как с ключами так и со значениями
 // 4. У обьектов бывают встроенные методы и свойства
 // 5. Для того чтобы обьект умел что то делать мы можем записывать в него функции
/*const option = {

    name : 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};
option.makeTest();

// Применяем деструктуризацию обьектов
// Помещаем те переменные которые хотим вытащим
// Указываем структуру откуда вытщить
const {border, bg} = option.colors;
console.log(bg);

console.log(Object.keys(option).length); // количество элементов в массиве

//console.log(option.colors.bg);

//delete option.colors.bg;

//console.log(option);

/*let counter = 0;
for (let key in option) {
    if(typeof(option[key]) === 'object') {
        for(let i in option[key]) {
            console.log(`Свойство ${key} имеет значение ${option[key][i]}`);
            
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter++;

    }
}
console.log(counter); // выведет сколько всего элементов*/

const arr = [1,2,3,4,24,33,56]; // 1, 2,24,33, 4,56
arr.sort();
console.log(arr);

// Удалим последний элемент из массива
//arr.pop();
//console.log(arr);

// Добавим элемент в кнец массива
//arr.push(1);

/*for(let value of arr) {
    console.log(value);
}*/

/*arr.forEach(function(item, i, arr) {
    console.log(`${i} : ${item} внутри массива ${arr}`);
});*/

/*const str = prompt("", "");
const products = str.split(", ");
console.log(products);*/
