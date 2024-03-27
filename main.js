// 1 -masala
// ixtiyoriy object yarating va uning keylari va value larini 
// array ga ko'chiradigan function lar yarating 

// function x(obj){
//     return Object.keys(obj);
// }
//  let a = {a : 1 , b : 2 , c : 3 }
//  console.log(x(a))

//  function y(obj){
//     return Object.values(obj);
// }
//  let b = {a : 1 , b : 2 , c : 3 }
//  console.log(y(b))

// 2 - masala

//  Ixtiyoriy sonlar arrayi yaratilsin. Shunday funksiya yaratinki shu
// funksiya parametri sifatida berilgan son array ichida bor yoki
// yo'qligi aniqlasin, array function ni ichida bo'lishi kerak

// let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function x(number){
//     for( let i = 0;  i < array.length; i++) {
//         if (array[i] === number){
//             return'son arrayda mavjud';
//         }
//     }
//     return'son arrayda mavjud emas';
// }
// console.log(x(6));

//  3-masala

// So'zlardan iborat array berilgan bo'lsin. So'zlarning ichidan
// funksiya parametri sifatida berilgan so'zni bor yoki yo'qligi
// aniqlansin.
// Array:
// ["olma","davlat", "xalq","dasturchi","dasturlash","google","boolean"]

// let array = [ "olma", "davlat","xalq" , "dasturchi", "dasturlash", "google", "boolean"];

// function x(soz){
//     for( let i = 0;  i < array.length; i++) {
//         if (array[i] === soz){
//             return'soz arrayda mavjud';
//         }
//     }
//     return'soz arrayda mavjud emas';
// }
// console.log(x('olma'));


// 4-masala

// Ixtiyoriy function yarating unga berilgan parametr 
// ixtiyoriy array ichida nechinchi index da turgani aniqlansin

// function x(array, element) {
//     return array.indexOf(element);
// }

// let myArray = [10, 20, 30, 40, 50];
// let elementToFind = 30;
// console.log(x(myArray, elementToFind));



// 5-masala

// Ixtiyoriy 3 ta key dan iborat bo'lgan 3 ta object 
// birlashmasi topilsin => Object.assign() dan foydalaning

// let obj1 = { a: 1 };
// let obj2 = { b: 2 };
// let obj3 = { c: 3 };

// let a = Object.assign({}, obj1, obj2, obj3);
// console.log(a);


// 6-masala


// value lari sonlardan iborat bo'lgan 2 ta object yaratilsin:
// 1. ularning birlashmasi topilsin
// 2. birlashmasining key larini array ga ko'chiring
// 3. birlashmasining valuesini array ga ko'chiring
// 4. birlashmasining valuelarining yig'indisi topilsin
 
// let obj1 = { a: 1 };
// let obj2 = { b: 2 };

// let a = Object.assign({}, obj1, obj2);

// const b = Object.keys(a);
// const c = Object.values(a);

// let count = 0;

// for (let i = 0; i < c.length; i++) {
//     count += Number(c[i]);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(count);
