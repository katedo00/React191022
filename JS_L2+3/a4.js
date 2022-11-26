/*-----------
Bài 10:
Sử dụng cấu trúc mảng sẽ gán 2 phần tử đầu tiên cho biến firstColor và secondColor và gán các phần tử còn lại cho biến otherColors. Hiển thị giá trị của 3 biến này.
Data test:
let colors = ["white", "blue", "yellow", "black", "red", "green"];

Bài 11:
Viết một hàm gọi là displayName () lấy một đối tượng làm đối số và in ra họ và tên của người đó. Sử dụng cấu trúc đối tượng trong đối số hàm.
Data Test:
person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
------------------*/
let colors = ["white", "blue", "yellow", "black", "red", "green"];
let firstColor = colors[0];
let secondColor = colors[1];
let otherColors = colors.slice(1);
console.log(`First Color is: ${firstColor} \nSecond Color is: ${secondColor}\nOther Colors are: ${otherColors.join(', ')}`);
console.log('---------------');
/*----------------*/
const person = 
{
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
};
function displayName(objPerson)
{
    let name = objPerson.first + ' ' + objPerson.last;
    return console.log(`This person full-name is: ${name}`);
};
displayName(person);
