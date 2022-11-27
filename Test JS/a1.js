/* Yêu cầu sử dụng map, filter, reduce để làm những bài tập sau:
Bài 1: 
-Input: Cho 1 mảng
-Output: Tính tổng của những số dương
Bài 2:
-Input: Cho 1 mảng
-Output: Tính tổng của bình phương từng phần tử
Bài 3:
-Input: Một chuỗi gồm nhiều từ với một khoảng trắng duy nhất giữa mỗi từ trong số chúng.
-Output: Viết tắt tên và trả lại tên viết tắt.
Ví dụ: input: 'George Raymond Richard Martin' => output: 'GRRM' */
//----------------------Bai Tap 1-------------------------//
const input = [1, 6, 8,10,13];
function sumPositive(array, method) {
    let sum = 0;
    if (method == 'map')
    {
        const positiveNumber = array.map((el) => {
            if (typeof(el) === 'number' && el > 0) {
                return el;
            }
            else {return 0};
        });
        for (const value of positiveNumber) {
            sum += value;
        };
        return sum;
    }
    else if (method =='reduce')
    {
        sum = input.reduce((acc, cur) => {
            if (typeof(cur) === 'number' && cur > 0) {
                return acc + cur;
            }
            else {return acc};
        }, 0);
        return sum;
    }
    else if (method == 'filter')
    {
        const positiveNumber = input.filter((el) => {return typeof(el) === 'number' && el > 0});
        for (const value of positiveNumber) {
            sum += value;
        };
        return sum;
    }
}
console.log (`Map Function - Summary of input's positive numbers is ${sumPositive(input, 'map')}`);
console.log (`Reduce Function - Summary of input's positive numbers is ${sumPositive(input,'reduce')}`);
console.log (`Filter Function - Summary of input's positive numbers is ${sumPositive(input,'filter')}`);
//----------------------Bai Tap 2-------------------------//
function sumSquarePositive (input, method) {
    let sum = 0;
    if (method == 'map')
    {
        const squarePositiveNumber = input.map((el) => {
            if (typeof(el) === 'number' && el > 0) {
                return el * el;
            }
            else {return 0};
        });
        for (const value of squarePositiveNumber) {
            sum += value;
        };
        return sum;
    }
    else if (method == 'reduce')
    {
        sum = input.reduce((acc, cur) => {
            if (typeof(cur) === 'number' && cur > 0) {
                return acc + (cur * cur);
            }
            else {return acc};
        }, 0);
        return sum;
    }
    else if (method == 'filter')
    {
        const squarePositiveNumber = input.filter((el) => {return typeof(el) === 'number' && el > 0});
        for (const value of squarePositiveNumber) {
            sum += (value * value);
        };
        return sum;
    }
    else console.log('Please provide a method');
}
console.log(`Map Function - Summary of input's square positive numbers is ${sumSquarePositive(input, 'map')}`);
console.log(`Reduce Function - Summary of input's square positive numbers is ${sumSquarePositive(input, 'reduce')}`);
console.log (`Filter Function - Summary of input's square positive numbers is ${sumSquarePositive(input, 'filter')}`);

//----------------------Bai Tap 3-------------------------//
const inputStr = 'Do Thuy Trang Kate Tan';
function getShortcuts (string, method) {
    const input = string.split(' ');
    if (method =='map')
    {
        return input.map((el) => {
            return el[0].toUpperCase();
        }).join('');
    }
    else if (method =='reduce')
    {
    return input.reduce((acc, cur) => {
        acc = acc + cur[0].toUpperCase()
        return acc;
        }, '');
    }
    else if (method =='filter')
    {
        return input.map(el => {return el.split('').filter((_, index) => {return index === 0})}).join('');
    }
    else console.log('Please provide a method');
};
console.log (`Map Function - Input name in shortcut is ${getShortcuts(inputStr,'map')}`);
console.log (`Reduce Function - Input name in shortcut is ${getShortcuts(inputStr,'reduce')}`);
console.log (`Filter Function - Input name in shortcut is ${getShortcuts(inputStr,'filter')}`);



