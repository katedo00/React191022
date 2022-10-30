var number = -4;
var a = number % 2;
// if (a === 1)
// {
//     console.log( number + ' la so le');
// }
// else if (a === 0 )
// {
//     console.log(number + ' la so chan');
// }
// else console.log(number + ' khong xac dinh');
switch (a)
{ 
    case 1:
        console.log( number + ' la so le');
    break;
    case 0: 
        console.log(number + ' la so chan');
    break;
    default:
        console.log(number + ' khong xac dinh');
    break;
}
var b = 4;
if (b === 4)
{
    ++b;
}
if (b > 4)
{
    console.log(b);
}

