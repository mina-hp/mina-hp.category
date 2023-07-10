const menu = [
    {
      id: 1,
      title: "2 * 2* 2",
      category: "breakfast",
      price: 15.99,
      img: "./assets/item-1.png",
      desc: `two eggs, two pieces of bacon or suasage and two pancakes `,
    },
    {
      id: 2,
      title: "steak sandwich",
      category: "main course",
      price: 13.99,
      img: "./assets/item-2.jpg",
      desc: `grilled steak, chips. served with garlic-buttered crunch roll  `,
    },
    {
      id: 3,
      title: "chocolate milkshake",
      category: "shakes",
      price: 6.99,
      img: "./assets/item-3.jpg",
      desc: `milk, chocolate with vanila and fresh strawberries`,
    },
    {
      id: 4,
      title: "supreme omelette",
      category: "breakfast",
      price: 20.99,
      img: "./assets/item-4.jpeg",
      desc: `egg, onion, green peppers, tomatoes and cheese. served with toast or baked biscuits `,
    },
    {
      id: 5,
      title: "creamy rasta pasta",
      category: "main course",
      price: 22.99,
      img: "./assets/item-5.jpg",
      desc: `pasta, chicken, cream. served with olive oil, bell peppers and unsalted butter `,
    },
    {
      id: 6,
      title: "peanut milkshake",
      category: "shakes",
      price: 18.99,
      img: "./assets/item-6.jpg",
      desc: `milk, vanila icecream with peanut and cream`,
    },
    {
      id: 7,
      title: "English breakfast",
      category: "breakfast",
      price: 8.99,
      img: "./assets/item-7.jpg",
      desc: `bacon, suasage, egg, baked beans, mushrooms, fried tomatoes and toast with tea or coffee `,
      
    },
    {
      id: 8,
      title: "fish & chips",
      category: "main course",
      price: 12.99,
      img: "./assets/item-8.jpg",
      desc: `lightly battered cod fillets, deep fired to a golden brown, served with french fries `,
    },
    {
      id: 9,
      title: "pineapple milkshake",
      category: "shakes",
      price: 16.99,
      img: "./assets/item-9.jpg",
      desc: `fresh pineapple with coconut milk and a cup of ice`,
    },
    {
      id: 10,
      title: "carrot cake",
      category: "cakes and pies",
      price: 22.99,
      img: "./assets/item-10.webp",
      desc: `moist, flavorful cake with nuts and delicious cream cheese`,
    },
  ];
  const addMenuList = (itemList = []) => {
    document.getElementById("menu-list").innerHTML = itemList
      .map(
        (food) => `
    <div class="food-item">
      <img src="${food.img}" alt="${food.title}" />
      <div class="food-desc">
        <div class="food-detail">
          <h3>${food.title}</h3>
          <p class="price">$${food.price}</p>
        </div>
        <p class="food-more">
        ${food.desc}
        </p>
      </div>
    </div>`
      )
      .join(" ");
  };
  const setActiveClass = (button) => {
    if (button) {
      document.querySelectorAll(".btn-category").forEach((b) => {
        b.classList.remove("active-btn");
      });
      button.classList.add("active-btn");
    }
  };
  const addCategoryButtons = () => {
    const categoryList = menu.reduce(
      (categories, item) => {
        if (item && item.category && !categories.includes(item.category)) {
          categories.push(item.category);
        }
        return categories;
      },
      ["all"]
    );
    const buttons = categoryList.map(
      (cat) =>
        `<button class="btn btn-category ${cat === 'all' ? 'active-btn' : ''}" category-id="${cat}">${cat}</button>`
    );
    if (buttons.length > 0) {
      document.getElementById("menu-categories").innerHTML = buttons.join(" ");
    }
  
    document.querySelectorAll(".btn-category").forEach((item) => {
      const categoryType = item.getAttribute("category-id");
  
      item.addEventListener("click", function () {
        setActiveClass(item);
        item.classList.add("active-btn");
        if (categoryType === "all") {
          addMenuList(menu);
          return;
        }
        const filteredList = menu.filter(
          (item) => item.category === categoryType
        );
        addMenuList(filteredList);
      });
    });
  };
  document.addEventListener("DOMContentLoaded", function () {
    addCategoryButtons();
    addMenuList(menu);
  });
  