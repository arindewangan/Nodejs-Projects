import url from 'url';
const myURL = new URL('https://cybs.xyz:8000');
myURL.pathname = '/images/person';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL);
console.log(myURL.href);