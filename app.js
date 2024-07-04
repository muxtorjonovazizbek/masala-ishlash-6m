// 1. nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array 
// ichida target teng bo'lgan qiymatning nechinchi indexda turganini aniqlang rasult=>[ index ]

// let nums = [4,5,6,7,0,1,2]
// let target = 0
// let index = "bu son yoq"

// for (let i = 0; i < nums.length; i++) {
//     if (target == nums[i]) {
//         console.log(nums);
//         index = i
//         break
       
//     }

// }
// console.log(index);



// 2. nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli 
// array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang 

// ↓ Bu o'sish tartibi boyicha

// let nums = [1,3,2,4,5,6,99,102]
// nums.sort(function(a,b){return a-b})
// let target = 5
// let index = "bu son yoq"

// for (let i = 0; i < nums.length; i++) {
//     if (target == nums[i]) {
//         console.log(nums);
//         index = i
//         break
       
//     }

// }
// console.log(index);



// ↓ Bu kamayish tartibi bo'yicha

// let nums = [1,3,2,4,5,6,99,102]
// nums.sort(function(a,b){return b - a})
// let target = 5
// let index = "bu son yoq"

// for (let i = 0; i < nums.length; i++) {
//     if (target == nums[i]) {
//         console.log(nums);
//         index = i
//         break
       
//     }

// }
// console.log(index);



// 3.ixtiyoriy object yaratilsin va key va valuesi kamida 4 ta bo'lsin
//  1. key larini ro'yxati chiqarilsin 2. value larining ro'yxati chiqarilsin

// let person1 = {
//     name: "Ali",
//     age: 21,
//     job:"pilot",
//     address:"Farg'ona"
// }
// let person2 = {
//     name: "Abdullo",
//     age: 23,
//     job:"teacher",
//     address:"Xiva"
// }
// let person3 = {
//     name: "Abdulboriy",
//     age: 25,
//     job:"architect",
//     address:"sportsman"
// }

// let keys1 = Object.keys(person1)
// let values1 = Object.values(person1)
// console.log(keys1, "Peroson1")
// console.log(values1, "Person1");

// let keys2 = Object.keys(person2)
// let values2 = Object.values(person2)
// console.log(keys2, "Peroson2")
// console.log(values2, "Person2");

// let keys3 = Object.keys(person3)
// let values3 = Object.values(person3)
// console.log(keys3, "Peroson3")
// console.log(values3, "Person3");



// 4. 2 ta 4 tadan element dan mavjud bo'lgan object yaratilsin 
// 1)  ularning birlashmasi topilsin 
// 2) birlashmasining keyi topilsin 
// 3) birlashmasining valuesi topilsin 
// 4) birlashmasining valuelarining yig'indisi topilsin 

// let person1 = {
//     name: "Ali",
//     age: 21,
//     job:"pilot",
//     address:"Farg'ona"
// }
// let person2 = {
//     name: "Abdullo",
//     age: 23,
//     job:"teacher",
//     address:"Xiva"
// }

// let combinaObj = Object.assign({}, person1, person2)
// let keys = Object.keys(combinaObj)
// let values = Object.values(combinaObj)


// console.log(combinaObj);
// console.log(keys);
// console.log(values);


// // Value lar yigindisi

// let totalValue = 0

// for(let key in combinaObj) {
//     if(typeof combinaObj[key] == "number") {
//         totalValue += combinaObj[key]
//     }
// }
// console.log(totalValue,"yig'indi");



// 5. Parametr sifatida istalgancha son qabul qiladigan funksiya yarating. 
// Bu funksiyada shu sonlarning yig'indisi hisoblansin.(rast operation bilan qilinsin)


// function toralNumbers(...params) {
//     let sum = 0;
//     for (let i = 0; i < params.length; i++) {
//         sum += params[i];
//     }
//     return sum;
// }


// console.log(toralNumbers(5, 10, 15)); 


// 6. Ixtiyoriy function va array yarating, functionga berilgan 
// parametr o'sish tartibida joylashgan array da nechinchi indexda, 
// kamayish tartibida joylashgan arraydagi index toping.

// Masalaga tushunmadim va ishlay olmadim qolgan hammasi bajarildi



// ↓ Pasdagi qoshimcha vazifa


// // Uyga vaazifa qoshimcha

// let string = 'fsf2j4b1j6';

// function sumOnlyNumbers(string) {
//     let total = 0;
//     for (let i = 0; i <= string.length; i++) {
        
//         if(!isNaN(string[i])) {
//             console.log(string[i]);
//             total += parseInt(string[i])
//         }
        
//     }
//     return total
// }

//  let result = sumOnlyNumbers(string)
//  console.log(result);





