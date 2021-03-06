/*function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first(); 
second();

function LearnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}
//s
LearnJS('JavaScript', done);*/

const arr = ['Denis', 'Olga', 'Ivan', 'Max'];

/*Полчуить массив состоящий из элементов 
где каждый элемент является длинной строки каждого элемента из массива
[5, 4, 4, 3]*/

let newArr = [];

for(let i = 0; i < arr.length; i++) {
    //пушим длинну каждого элемента массива arr в массив newArr
    newArr.push(arr[i].length);
}

console.log(newArr);

let newArr2 = [];

for(let i = 0; i < arr.length; i++) {
    //пушим длинну каждого элемента массива arr в массив newArr
    newArr2.push(arr[i].toUpperCase());
}

console.log(newArr2);

function mapArray(arr, fn) {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        //пушим длинну каждого элемента массива arr в массив newArr
        res.push(fn(arr[i]));
    }

    return res;
}


