/* Bài 8:
Cho dữ liệu sau:
Mọi người hãy sử dụng html, css để làm 1 card về bài viết có tên tác giả (name), title, description nhé.
Nếu description mà dài quá 50 kí tự thì hiển thị chữ read more. Người dùng ấn vào chữ read more sẽ show full cả description ra đồng thời xuất hiện nút read less. Ấn vào read less sẽ chỉ hiển thị 50 từ thôi.
Mọi người đọc thêm về dom để làm bài tập này nhé
*/
const items = [

    {
  
      name: "Neuer",
  
      title: "Học Javascript như thế nào",
  
      description: `An array of odd numbers.
  
      An array of numbers divisible by 2 or 5.
  
      An array of numbers divisible by 3 and then squared those numbers.
  
      The sum of the following: square the numbers divisible by 5.
  
      `
  
    },
  
    {
  
      name: "Neuer Goretzka",
  
      title: "Học React như thế nào",
  
      description: `An array of odd numbers.
  
      An array of numbers divisible by 2 or 5.
  
      An array of numbers divisible by 3 and then squared those numbers.
  
      The sum of the following: square the numbers divisible by 5.
  
      The sum of the following: square the numbers divisible by 5.
  
      The sum of the following: square the numbers divisible by 5.`
  
    },
  
    {
  
      name: "Goretzka Neuer",
  
      title: "Làm thế nào để trở lên tốt hơn",
  
      description: `An array of odd numbers.
  
      An array of numbers divisible by 2 or 5.
  
      An array of numbers divisible by 3 and then squared those numbers.
  
      The sum of the following: square the numbers divisible by 5.
  
      The sum of the following: square the numbers divisible by 5.
  
      The sum of the following: square the numbers divisible by 5.
  
      The sum of the following: square the numbers divisible by 5.
  
      The sum of the following: square the numbers divisible by 5.`
  
    },
  
  ];
items.forEach(item => {
    const newCont = document.createElement("article");
    if (item.name) {
        // Create an Author element
        const newNameEl = document.createElement("h2");
        // Populate with Author data
        newNameEl.innerText = item.name;
        // Add the Author element to the Container element
        newCont.appendChild(newNameEl);
    };
    if (item.title) {
        // Create a Title element
        const newTitleEl = document.createElement("h1");
        // Populate with Title data
        newTitleEl.innerText = item.title;
        // Add the Title element to the Container element
        newCont.appendChild(newTitleEl);
    };
    if (item.description) {
        // Create a Description element
        if (item.description.length <= 50)
        {
            const newDesEl = document.createElement('p');
            // Populate with Description data
            newDesEl.innerText = item.description;
            // Add the Description element to the Container element
            newCont.appendChild(newDesEl);
        }
        else {
            const newDesWrap = document.createElement("p");
            const shortText = document.createElement('span');
            shortText.innerText = item.description.slice(0,50);
            const restText = document.createElement('span');
            restText.innerText = item.description.slice(50);
            restText.style.display = 'none';
            const dots = document.createElement('span');
            dots.innerText = '.......';
            const toggle = document.createElement('a');
            toggle.style.display = 'block';
            toggle.innerText = 'Read More';
            toggle.onclick = function(){
              if (dots.style.display === "none") {
                dots.style.display = "inline-block";
                toggle.innerHTML = "Read More";
                restText.style.display = "none";
              } 
              else {
                dots.style.display = "none";
                toggle.innerHTML = `\n Read Less \n`;
                restText.style.display = "inline";
              };
            };
            newDesWrap.appendChild(shortText);
            newDesWrap.appendChild(restText);
            newDesWrap.appendChild(dots);
            // Add the Description element to the Container element
            newCont.appendChild(newDesWrap);
            newCont.appendChild(toggle);
        };
    }
    // Append the new article element to the DOM
    document.body.appendChild(newCont);
});