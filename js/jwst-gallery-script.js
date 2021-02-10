const apiResultsGallery = document.querySelector(".api-results-container");
const url =
	"https://images-api.nasa.gov/search?q=webb&keywords=webb,jwst?api_key=C7eDacgnY1X1gtW85L1Eg6FmnzGQIz6qVG9KchOZ";

async function fetchWebbNews() {
	try {
		const response = await fetch(url);
		const results = await response.json();
		const webbCollection = results.collection.items;
		console.log(webbCollection);

		apiResultsGallery.innerHTML = "";

		for (let i = 0; i < webbCollection.length; i++) {
			if (i === 50) {
				break;
			}
            loadMoreButton.disabled=false;

			apiResultsGallery.innerHTML += `<ul class="api-list-homepage">
            <li class="api-list-item-homepage">
                <img class="api-list-item-homepage-thumbnail" src="${webbCollection[i].links[0].href}" alt="${webbCollection[i].data[0].title}">
                <h4>${webbCollection[i].data[0].title}</h4>
                <div class="view-more-button-container">
                <a href="jwst-details.html?id=${webbCollection[i].data[0].nasa_id}"><span>
                    <button class="view-more-button" type="button" aria-label="view more button">View more</button>
                </span></a>
                </div>
            </li>
        </ul>`;
		}
	} catch (error) {
		console.log("error occured");
		apiResultsGallery.innerHTML = errorMessage();
	}
}
fetchWebbNews();




const loadMoreButton = document.querySelector(".load-more-button");

loadMoreButton.onclick = function(){

    async function fetchWebbNews() {
        try {
            const response = await fetch(url);
            const results = await response.json();
            const webbCollection = results.collection.items;
            console.log(webbCollection);
    
    
            for (let i = 50; i < webbCollection.length; i++) {
                if (i === 80) {
                    break;}
                    loadMoreButton.disabled=true;


                apiResultsGallery.innerHTML += `<ul class="api-list-homepage">
                <li class="api-list-item-homepage">
                    <img class="api-list-item-homepage-thumbnail" src="${webbCollection[i].links[0].href}" alt="${webbCollection[i].data[0].title}">
                    <h4>${webbCollection[i].data[0].title}</h4>
                    <div class="view-more-button-container">
                    <a href="jwst-details.html?id=${webbCollection[i].data[0].nasa_id}"><span>
                        <button class="view-more-button" type="button" aria-label="view more button">View more</button>
                    </span></a>
                    </div>
                </li>
            </ul>`;
            }
        } catch (error) {
            console.log("error occured");
            apiResultsGallery.innerHTML = errorMessage();
        }
    }
    fetchWebbNews();
}

