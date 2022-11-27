/* Bài 4:
url: https://jsonplaceholder.typicode.com/users
Tạo ra 1 thẻ input: 
-Yêu cầu: Khi gõ id là 1, 2 … vào ô input rồi ấn Enter thì sẽ trả ra dữ liệu của user có id vừa nhập vào ô input
-Dữ liệu đầu ra sẽ có định dạng như sau:
>> Ví dụ: Nếu gõ vào 1 thì sẽ trả ra dữ liệu của user có id là 1
>> Và thứ 2 là hãy tạo ra 1 card (html, css) chứa thông tin của user gồm: 
Name: name + username
Email: email
Address: street + suite + city
Phone: phone
Website: website
Company: name of comapy
>> Dạng card này sẽ là free style ai làm đẹp sẽ được điểm cao nhé với đầy đủ nội dung như trên */

//----------------------Bai Tap 4--------------------//

const list = document.getElementById("list");

// Render Users
const template = listItem => {
	return `
			<a class="list-item" href="#">
			  <div class="list-item__avatar">
              <i class="fa-solid fa-user-lock"></i> 
			  </div>
			  <div class="list-item__content" id="${listItem.id}>
                    <strong class="list-item__name">${listItem.name} ${listItem.username}</strong> <br> 
                    <span class="list-item__info"> Email: ${listItem.email} <br> 
                    Address: ${listItem.address.street}, ${listItem.address.suite}, ${listItem.address.city} <br>
                    Phone: ${listItem.phone} <br>
                    Website: ${listItem.website} <br>
                    Company: ${listItem.company.name} <br>
                    </span>
                </div>
			  <button type="button" class="list-item__button">
			  <svg class="feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
			  </button>
			</a>
  `;
};

fetch("https://jsonplaceholder.typicode.com/users", 
{
    method: "GET",
    headers: {
  
  }
}).then(response => response.json()).then(data =>
		data.forEach(result => (list.innerHTML += template(result)))).catch(error => console.log(error));

// Search
const userSearch = document.querySelector("[data-search]");

userSearch.addEventListener("keyup", filter);

function filter() {
	var term = document.querySelector("[data-search]").value.toString();
	var tag = document.querySelectorAll("[data-searchable] .list-item");
	for (i = 0; i < tag.length; i++) {
		if (tag[i].children[1].id.indexOf(term) !== -1) {
			tag[i].style.display = "flex";
		} else {
			tag[i].style.display = "none";
		}
	}
}

const recentSearch = document.querySelector(".recent-search");
const recentSearchList = document.querySelector(".recent-search__list");
const recentSearchTitle = document.querySelector(".recent-search__title");
const recentSearchCount = recentSearchList.childNodes.length;
const clearBtn = document.querySelector(".clear-btn");
const clearSearch = document.querySelector('.search__clear');

clearSearch.addEventListener('click', () => {
	userSearch.value = "";
	filter();
})

userSearch.addEventListener("keydown", event => {
	if (event.key == "Enter") {
		let inputText = userSearch.value.toLowerCase();
		recentSearchList.insertAdjacentHTML(
			"beforeend",
			`<span class="search-item" onclick="labelSearch('${inputText}')">${inputText}<span class="search-item__close">×</span></span>`
		);
		if (recentSearchList.childNodes.length > 0) {
			clearBtn.innerHTML = "Clear Items";
			clearBtn.removeAttribute("disabled");
			var btn = document.querySelectorAll(".search-item__close");

			for (var i = 0; i < btn.length; i++) {
				btn[i].addEventListener("click",function(e) {
						e.currentTarget.parentNode.remove();
					},false
				);
			}
		}
	} else {
	}
});

function labelSearch(x) {
	userSearch.value = x;
	filter();
}

const clearRecent = () => {
	recentSearchList.innerHTML = "";
	clearBtn.setAttribute("disabled", true);
	clearBtn.innerHTML = "No Recent Items";
	userSearch.value = '';
	filter();
};