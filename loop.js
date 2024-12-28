
const numbers = [32, 34, 343, 54, 344, 30];
// -------------------------for loop---------------------
// for(const num of numbers){
//     console.log(num);
//     console.log('i went to read');
// }
// -----------------------while loop-------------------------
// let num = 0;
// while(num < 5){
//     console.log('looping');
//     // num = num+1;
//     // num +=1;
//     num++
// }
let num = 1
let sum = 0
while(num <= 10){
    console.log(num);
    sum = sum + num;
    console.log('sum', sum);
    num++
}