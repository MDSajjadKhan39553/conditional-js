// array er lenth / koto gula ache seta dekhote
const number = [1, 3, 4, 5, 6];
console.log(number.length);

// arry er index ber kora
console.log(number[1]);

// array te add korarjonno

const numbers = [23, 55, 45, 38, 47];
numbers.push(88);
console.log(numbers)

// array er ses element "pop" & first element ber korar jonno "shift" ber korar jonno
// surute element dhukate "unshift" seser dike add korote "push"

numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(999);
console.log(numbers);


// includes er jonno

const name = ['salam', 'kalam', 'balam', 'malam']
if (name.includes('salam')) {
    console.log("you are salam boy");
} else {
    console.log("you are not salam");
}
// position ber korar jonno indexof use hoy 
console.log(name.indexOf('kalam'));

// kono kicho array kina check korar jonni "Array.isArray" use hoy
console.log(Array.isArray(name));

// -----------------------array methods------------------------

// 1. includes
// 2. indexOf
// 3. isArray
// 4. join + or |
// 5. concat
// 6. slice
// 7. splice