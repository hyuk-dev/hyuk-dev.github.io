// DOM 요소
const fruitList = document.getElementById('fruitList');
const veggieList = document.getElementById('veggieList');

const searchBox = document.getElementById('searchBox');
const sortSelect = document.getElementById('sortSelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let veggiePage = 0;

// 카드 렌더링 함수
function renderProducts(data, container) {
  //data는 과일 또는 야채의 배열
  container.innerHTML = '';
  data.forEach((item) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
        <a href="detail.html?id=${item.id}" class="text-decoration-none text-dark">
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-primary fw-bold">${item.price.toLocaleString()}원</p>
          </div>
          </a>
        </div>
      </div>`;
  });
}
////////아래 filterAndSortFruits() 와 loadVeggies() 완성하세요. /////////////////////////////////
/* 
  과일 출력
*/
function filterAndSortFruits() {
  let fruitProducts = fruits.filter((fruit) =>
    fruit.name.includes(searchBox.value)
  );
  switch (sortSelect.value) {
    case 'high':
      fruitProducts.sort((fruit1, fruit2) => fruit2.price - fruit1.price);
      break;
    case 'low':
      fruitProducts.sort((fruit1, fruit2) => fruit1.price - fruit2.price);
      break;
    default: // 이름순
      fruitProducts.sort((fruit1, fruit2) =>
        fruit1.name.localeCompare(fruit2.name)
      );
      break;
  }

  //화면에 다시 출력
  renderProducts(fruitProducts, fruitList);
}

let veggiesProducts = [];
// 채소 출력 (3개씩 증가)
function loadVeggies() {
  //화면에 다시 출력
  veggiesProducts = [...veggiesProducts, ...veggies.splice(0,3)];
  console.log(veggiesProducts)
  renderProducts(veggiesProducts, veggieList);
  if(veggies.length === 0) {
    console.log("끝에 도달")
    document.querySelector("#loadMoreBtn").remove();
  }
}
////////////////////////////////////////////////////////

// 이벤트 리스너
searchBox.addEventListener('input', filterAndSortFruits);
sortSelect.addEventListener('change', filterAndSortFruits);
loadMoreBtn.addEventListener('click', loadVeggies);

// 초기 실행
filterAndSortFruits();
loadVeggies();
