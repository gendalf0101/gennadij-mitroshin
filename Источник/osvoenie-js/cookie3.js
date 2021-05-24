// получить значения всех cookies страницы
var cookies = document.cookie;
// выведем куки в консоль браузера
console.log(cookies);
// выведем с помощью функции alert
alert(cookies);

// name - ключ (имя) куки
// value - значение, связанное с ключом name
// attributes (необязательный параметр) - атрибуты куки в формате объекта
Cookies.set('name', 'value'[,attributes]);

Cookies.set('nameCookie', 'valueCookie'); // => "nameCookie=valueCookie; path=/"

Cookies.set('nameCookie', 'valueCookie', { expires: 30 }); // => "nameCookie=valueCookie; path=/; expires=Thu, 13 Apr 2017 13:00:15 GMT"

Cookies.set('nameCookie', 'valueCookie', { expires: 365, path: '' }); // => "nameCookie=valueCookie; expires=Wed, 14 Mar 2018 13:00:36 GMT"

Cookies.get('nameCookie'); // => "valueCookie"
Cookies.get('otherCookie'); // => undefined

Cookies.get(); // => {nameCookie: "valueCookie"}

Cookies.remove('nameCookie');

Cookies.set('name', 'value', { path: '' });
Cookies.remove('name', { path: '/' }); // не получится (не правильный путь)
Cookies.remove('name', { path: '' }); // удалится (указан правильный путь)

Cookies.set('name', 'value', { 
  expires: 365,
  path: '/partfolio/',
  domain: 'm.mydomain.ru',
  secure: true
}); // => "name=value; path=/news/; expires=Wed, 14 Mar 2018 12:54:28 GMT; domain=m.mydomain.ru; secure"

// функция, возвращающая дату, которая будет через указанное количество дней от текущей
function getDateExpires(days) {
  var date = new Date;
  date.setDate(date.getDate() + days);
  return date;
}
// запись cookie nameCookie=valueCookie
Cookies.set('nameCookie', 'valueCookie', { expires: getDateExpires(30) }); // => "nameCookie=valueCookie; path=/; expires=Thu, 13 Apr 2017 12:34:13 GMT"

Cookies.set('nameCookie', 'valueCookie', { path: '' }); // => "nameCookie=valueCookie"

Cookies.defaults = {
  path: '/',
  expires: 365
};
Cookies.set('nameCookie', 'valueCookie'); // => "nameCookie=valueCookie; path=/; expires=Wed, 14 Mar 2018 12:53:23 GMT"