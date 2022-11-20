/*
Bài 7: Cho dữ liệu như sau:
+ Lấy mảng gồm tất cả names
+ Lấy mảng gồm tất cả height
+ Tìm những người có height nhỏ hơn 100
+ Tìm những người có mass lớn hơn 100
+ Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
*/
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
/* An array that contains all the names */
let allNames = characters.map(character => character.name);
console.log(`An array that contains all the names: ${allNames}`);
console.log('-----------------------');

/* An array that contains all the heights */
let allHeights = characters.map(character => character.height);
console.log(`An array that contains all the heights: ${allHeights}`);
console.log('-----------------------');

/* An array that contains all the heights < 100 */
let under100H = allHeights.reduce(filterHeights, []);
function filterHeights(acc, cur)
{
    if (cur.height < 100) 
    {
        return acc.push(cur);
    };
};
console.log(`An array that contains all the heights that under 100: ${JSON.stringify(under100H)}`);
console.log('-----------------------');

/* An array that contains all the mass > 100 */
let more100M = characters.reduce((acc, cur) => {
    if (cur.mass > 100) acc.push(cur);
    return acc;
}, []);
console.log(`An array that contains all the mass that more than 100:\n${JSON.stringify(more100M)}`);
console.log('-----------------------');

/* Sort Function */
function sort(option) {
    switch (option) {
        default:
            console.log('Please choose a valid sort option: ');
            console.log(options.join('\n'));
            break;
        case 'name':
            {
                characters.sort((a,b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
                console.log(characters);
            }
            break
        case 'mass':
            {
                characters.sort((a,b) => parseInt(a.mass) !== parseInt(b.mass) ? (parseInt(a.mass) < parseInt(b.mass) ? -1 : 1) : 0);
                console.log(characters);
            };
            break;
        case 'gender':
            {
                characters.sort((a,b) => a.gender !== b.gender ? a.gender < b.gender ? -1 : 1 : 0)
                console.log(characters);
            };
            break;
    }
};
console.log('All sort functions: ');
console.log('Sort by name: ');
sort('name');
console.log('Sort by mass: ');
sort('mass');
console.log('Sort by gender: ');
sort('gender');
console.log('-----------------------')
/*-------
Bài 9:
Định dạng địa chỉ ở dạng: address, district, province, city
Hãy cấu trúc dữ liệu để in ra địa chỉ dạng như trên
Hãy viết hàm để in ra địa chỉ dạng trên với dữ liệu đã cấu trúc
---------*/
class addressClass {
    address;
    district;
    province;
    city;
    fullAdress() {
        return console.log(`${this.address}, ${this.district} district, ${this.province} province, ${this.city} city`);
    };
}
const data = '3 Lane 132 Vo Chi Cong, Tay Ho, Hanoi, Hanoi'
function printFull(string)
{
    const arr = string.split(', ');
    const address = new addressClass;
    address.address = arr[0];
    address.district = arr[1];
    address.province = arr[2];
    address.city = arr[3];
    console.log('Bai 9: Print Adress: ');
    address.fullAdress();
}
printFull(data);








