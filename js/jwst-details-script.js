const mediaItemId = document.querySelector(".id")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailsResult = document.querySelector(".details-result-container");

const url ="https://images-api.nasa.gov/search?q=NHQ_2018_0627?api_key=C7eDacgnY1X1gtW85L1Eg6FmnzGQIz6qVG9KchOZ";


    async function fetchWebbMediaItem() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);

	/*	detailsResult.innerHTML = "";

		for (let i = 0; i < webbCollection.length; i++) {
            console.log(webbCollection[i]);

			detailsResult.innerHTML += `<img class="details-thumbnail" src="${webbCollection[i].links[0].href}" alt="${webbCollection[i].data[0].title}">
                <div class="details-info-container>
                    <h4>${webbCollection[i].data[0].title}</h4>

                
                </div>`;
		}*/
	} catch (error) {
		console.log("error occured");
		detailsResult.innerHTML = errorMessage();
	}
}
fetchWebbMediaItem();





