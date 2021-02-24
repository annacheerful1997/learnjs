/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
*/

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors:{},
    genres: [],
    privat: false
};

    // 1.  Автоматизируем вопросы пользователю про фильмы при помощи цикла
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один из просмотренных фильмов?', ''),
            b = prompt('На сколько оцениваете его', '');

            /* 2. Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
            отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
            возвращаем пользователя к вопросам опять */

            /* Если пользователь не нажал отмена и второй ответ не является отмененным.
            Значение а и b не бдет являться пустой строкой.
            Проверяем длину строки названия фильма
            */
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {

                // Пользователь ввел все верно записываем результат в БД
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');

                // Возвращаемся на цикл назад
                i--;
            }
        }

            /* 3.  При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
            "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
            "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"*/ 

            if(personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
                console.log('Вы классический зритель');
            } else if (personalMovieDB.count > 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            }

        
    

    console.log(personalMovieDB);

