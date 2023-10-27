const handleCategory = async () => {
    const tabContainer = document.getElementById('tab-container');
    const res =await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    console.log(data);
    const categoryNameDetails = data.data.news_category;
    categoryNameDetails.slice(0,3).forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="tab">${category['category_name']}</a>
        `;
        tabContainer.appendChild(div);
    })
    console.log(categoryNameDetails);
}
handleCategory();