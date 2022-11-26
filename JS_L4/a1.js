/* 
- Có 1 đối tượng là Person: name, age
- Có 1 đối tượng là Lớp: tên lớp, đầu vào của lớp (điểm)
- Có 1 đối tượng Student kế thừa từ Person=> class, khối, điểm của từng môn học
- 3 phương thức:
+ Tính học lực của student;
+ Dựa vào học lực => xếp student A => lớp chọn/giỏi
+ Xem môn nào là môn giỏi nhất và kém nhất của student A
*/

class Person 
{
    name;
    age;
    constructor(_name, _age)
    {
        this.name = _name;
        this.age = _age;
    }
}
class Class
{
    className;
    classMin;
    constructor (name, min)
    {
        this.className = name;
        this.classMin = min;
    }
}
class Student extends Person 
{
    constructor (name, age, _grade, _score)
    {
        super(name, age);
        this.grade = _grade;
        this.score = (_score.reduce((partialSum, a) => partialSum + a, 0))/(_score.length);
        if (this.score >= 8)
        {
            this.class = "Gioi";
        }
        else this.class = "Kha";
        this.findMinMax = function () {
            let min = Math.min(..._score);
            let max = Math.max(..._score);
            return `Min score: ${min} | Max score: ${max}`;
        }
    };
}
let A = new Student('Tuyet', 7, 2, [7,4,9,5,10]);
console.log(A.score + ',\n' + A.class + ',\n' + A.findMinMax());