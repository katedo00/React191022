// Bài 1: Viết hàm
// -	Input: Cho vào chuỗi bất kì
// -	Output: Đếm xem chuỗi đó có bao nhiêu nguyên âm (Nguyên âm là a, e, I, o, u)
// Bài 2:  Viết hàm
// -	Input: Cho 1 mảng
// -	Output: Tìm số lần xuất hiện của các phần tử trong mảng
// Bài 3: Viết hàm
// -	Input: Cho 1 chuỗi
// -	Output: In ra chuỗi đảo ngược
// Bài 4:
// - Input: cho chuỗi có định dạng cách nhau bởi _ ví dụ: user_name. 
// - Output: Viết hàm để in ra viết hoa các kí tự đầu tiên và bỏ dấu _: ví dụ như user_name => UserName
// Bài 5: Viết function để đổi chỗ 2 số

// * Bai 1 * //
var string = "kate do is a pink bunny";
function vowelCount(str)
{
var count = 0;
for (let i=0; i <= str.length-1; i++ )
{
    if (['a', 'e', 'i', 'o', 'u'].includes(str.charAt(i)))
    {
        ++count;
    }
}
return console.log(`Number of vowels in string "${string}" is: ${count}`);
};
vowelCount(string);

// * Bai 2 * //
var array = [1,2,5,7,1,1,5,2,7,9];
function count_frequency(input)
{
    var i = 0;
    while (i<=input.length-1)
    {
        if (!input.slice(0,i).includes(input[i]))
        {
            var n=1;
            for (let ii = i+1;ii<=input.length-1;ii++)
            {
                if (input[i] === input[ii])
                {
                    ++n;
                };
            };
            console.log(`Number of time element ${input[i]} appears in input array is: ${n}`);
        };
        i++;
    }
}
count_frequency(array);

// * Bai 3 * //
var str = 'pinkbunnylovesyou'
function revert_string(input)
{
    var revert = [];
    for (let i = input.length-1; i>=0; i--)
    {
        revert.push(input.charAt(i));
    }
    console.log(`The reverted string of the input is: ${revert.join("")}`);
}
revert_string(str);

// * Bai 4 * //
var string = "user_name_is_pink_bunny"
function capitalize(input)
{
    var returnArray = input.split('_');
    for (let i=0; i<= returnArray.length-1; i++)
    {
        returnArray[i] = returnArray[i].charAt(0).toUpperCase() + returnArray[i].slice(1);
    };
    console.log(`The capitalized string of input string is: ${returnArray.join("")}`);
}
capitalize(string)

// * Bai 5 * //
function swichPlace(numberArray)
{
    if (numberArray.length === 2)
    {
        for (let i=0; i<= numberArray.length-1; i++)
        {
            numberArray.push(numberArray.splice(i,1));
        };
        console.log(`The new array with numbers switched place is: ${numberArray.toString()}`);
    }
    else console.log("Input Array is Invalid, please input an array that contains exactly 2 numbers");
}
swichPlace([31,13]);