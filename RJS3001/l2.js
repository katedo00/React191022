//* Array & Objects*//
// input
// - [2,3,6,8,9,23,16]
// - n = 6
// output
// - summary of input
// - check whether n is included inside input array => log: 'n thuoc array' + vi tri cua n trong array
// - remove n out of input
// ==
// input
// - [2,3,6,8,9,23,16]
// - startPoint = 3
// - endPoint = 5
// output:
// - extract an array that contains start point -> end point of input array
// - if endpoint = undefined => extract an array contains start point -> the end of input array

var input = [2,3,6,8,9,23,16]
var n=6;
var startPoint = 3;
var endPoint = 5;

// summary of input //
var sum = 0;
for (let i = 0; i < input.length; i++) {
    sum += input[i];
    if (i === input.length-1)
    {
        console.log('Input summary is: '+ sum);
    }
}
// check if n is included //
if (input.includes(n))
{
    console.log('n thuoc input' + ` va vi tri cua n la: ${input.indexOf(n)}`)
    // remove n out of input //
    input.splice(input.indexOf(n), 1)
    if (!input.includes(n))
    {console.log(`n=${n} is removed`)};
}
// extract array //
var newarr;
if (endPoint === undefined)
{
    newarr = input.slice(startPoint);
}
else newarr = input.slice(startPoint, endPoint+1);
console.log(newarr.toString());





