export default function displayDetails(data) {
  const detailsBox = `
    <div class="col-md-4">
      <figure>
        <img src="${data.thumbnail}" class="w-100" alt="details image" />
      </figure>
    </div>
    <div class="col-md-8">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item text-reset"><a href="#">Home</a></li>
            <li class="breadcrumb-item text-info" aria-current="page">${data.title}</li>
          </ol>
        </nav>
        <h1>${data.title}</h1>
        <h3>About ${data.title}</h3>
        <p>${data.short_description}</p>
        <button id="backBtn" class="btn btn-secondary mt-3">Back to Games</button>
      </div>
    </div>
  `;
  document.getElementById("detailsData").innerHTML = detailsBox;
  document.querySelector(".details").classList.remove("d-none");
  document.querySelector(".box").classList.add("d-none");

  document.getElementById("backBtn").addEventListener("click", () => {
    document.querySelector(".details").classList.add("d-none");
    document.querySelector(".box").classList.remove("d-none");
  });
}
