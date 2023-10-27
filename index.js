const handleCategory = async () => {
  const tabContainer = document.getElementById("tab-container");
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await res.json();
  console.log(data);
  const categoryNameDetails = data.data.news_category;
  categoryNameDetails.slice(0, 3).forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick='handleLoad("${category.category_id}")' class="tab">${category["category_name"]}</a>
        `;
    tabContainer.appendChild(div);
  });
  console.log(categoryNameDetails);
};
const handleLoad = async (id) => {
  console.log(id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await res.json();
  specifiedData = data.data;
  console.log(specifiedData);
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = '';
    
  specifiedData.map((item) => {
    const section = document.createElement("section");
    section.innerHTML = `
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src=${item.image_url} alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
      <button class="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
        `;
        
    cardContainer.appendChild(section);
  });
};
handleCategory();
