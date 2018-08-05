/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

function solution(str){
  let replaceV1 = str.replace(/::/gmi, "/").replace(/-/gmi, "_")
  let replaceV2 = replaceV1.replace(/([a-z])([A-Z])/g, "$1_$2")


  console.log(replaceV2)
  
}
solution("MAINCompany::BEST-MAINUser")
solution("HelloHowAreYou")

/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла
*/

/* TASK 1
По приложению phone-book;
1. Для каждой страницы у вас должен быть класс с одноименным названием
в отдельном файле
2. Каждый класс должен содержать методы render() - который рендерит всю страницу
3. Удалить jquery.js и bootstrap.js с проекта
-> Закончить keypad с прошлого занятия, добавить функционал для удаления номера
Сортировка таблицы!
Визуализировать страницы Edit contact, User, Add User;
TASK 2
1. keypad - сделать чтобы номер можно было набрать с клавиатуры (!)
2. Формат номера должен быть таким (099)-17-38-170
*/

/*
TASK 3
edit-contact,
- сделать данные редактируемыми (атрибут contentEditable) // input
- изменять backgroundColor
add-user при клике:
index.html/contacts.html - в поле search при вводе буквы,
добавить поиск по имени если имя включает хотя бы одну эту букву.
после ввода каждого символа, фильтровать отображаемых пользователей.
При удалении всех символов отобразить снова весь список
*/