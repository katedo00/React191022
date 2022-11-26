// * In ra những số chẵn < 20 * //
// * for * //
// for (let i=0; i<20; i++)
// {
//     if (i%2 === 0)
//     {
//     console.log(i);
//     }
// }
// let n=0;
// * while * //
let n = 0;
console.log('Output with "while": ');
while (n <= 20)
{
    if (n%2 === 0)
    {
        console.log(n);
    }
    ++n;
}
// * do-while * //
let n1 = 0;
console.log('Output with "do - while": ');
do {
    if (n1%2 === 0)
    {
        console.log(n1);
    }
    n1++;
}
while (n1 <= 20);
// *remove if* //
let n2 = 0;
console.log('Output "do - while" without "if": ');
do {
    console.log(n2);
    n2+=2;
}
while (n2%2 === 0 && n2 <= 20);