const handleCategory = async() => {
    const res =await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    console.log(data);
    const categoryNameDetails = data.data.news_category;
    console.log(categoryNameDetails);
}
handleCategory();