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
  cardContainer.innerHTML = "";

  specifiedData.map((item) => {
    const section = document.createElement("section");
    section.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src=${item.image_url}
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        ${item.title}
        <div class="badge badge-secondary p-5">${item.rating.badge}</div>
      </h2>
      <p>
        ${item.author.published_date}
      </p>
      <div class="card-footer flex justify-between mt-8">
        <div class="flex">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                  src=${item.author.img}
                />
              </div>
            </div>
          </div>
          <div class='ms-2'>
            <h6 class='mb-2'>${item.author.name}</h6>
            <h5>${item.total_view?item.total_view:'no viewer'}</h5>
          </div>
        </div>
        <div class="card-detaild-btn">
          <button onclick='handleModal("${item._id}")'
            class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
        `;

    cardContainer.appendChild(section);
  });
};

const handleModal = async (id) => {
  console.log(id);
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = '';
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`
  );
    const data = await res.json();
    const news = data.data;
    //   console.log(data.data);
    news.map((specificnews) => {
        const div = document.createElement("div");
  div.innerHTML = `
    

<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">${specificnews.title.slice(0,20)}</h3>
    <div>
        <figure>
            <img src=${specificnews.image_url}/>
        </figure>
    </div>
    <p class="py-4">${specificnews.details}</p>
    <div class="modal-action">
      <form method="dialog">
       
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    `;
    modalContainer.appendChild(div);
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
    
    })

  


};
handleCategory();
handleLoad("01");
