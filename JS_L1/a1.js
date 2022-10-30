// Bài 1:
// -	Input: Cho 1 object hoặc mảng
// -	Output: kiểm tra xem object hoặc mảng đó rỗng không
var input = {1:'cars'};
var output = (Object.keys(input).length > 0) ? "is not an empty object" : "is an empty object"
console.log('Input ' + output);