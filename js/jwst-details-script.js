const detailsResult = document.querySelector(".details-result-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString); 
console.log(params);
const id = params.get("id");
console.log(id);


const url ="https://images-api.nasa.gov/search?q="+ id;



    async function fetchWebbMediaItem() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		const webbMediaItem = data.collection.items;
		console.log(webbMediaItem);

		detailsResult.innerHTML = "";

		createHTML(webbMediaItem);

		document.title = `${webbMediaItem[0].data[0].title}`;

	} catch (error) {
		console.log("error occured");
		detailsResult.innerHTML = errorMessage();
	}
}
fetchWebbMediaItem();



function createHTML(webbMediaItem) {

        detailsResult.innerHTML = `<div class="details-flex-wrap">
        <div class="details-image-container">
            <img class="details-image" src="${webbMediaItem[0].links[0].href}" alt="${webbMediaItem[0].data[0].title}">
        </div>
        <div class="details-info-container">
            <h1>${webbMediaItem[0].data[0].title}</h1>
            <div class="details-meta-container">
                <p class"details-meta"> <span>Date created&#58;</span> ${webbMediaItem[0].data[0].date_created}</p>
                <p class"details-meta"> <span>Keywords&#58;</span> ${webbMediaItem[0].data[0].keywords}</p>
                <p class"details-meta"><span>Science Facility&#58;</span> ${webbMediaItem[0].data[0].center}</p>
            </div>
        </div>
    </div>
    <div class="details-description-container">
            <h6>About&#58;</h6>
            <p class="details-description"> ${webbMediaItem[0].data[0].description}</p>
    </div>`;
}
