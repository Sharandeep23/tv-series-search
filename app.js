const formEl = document.querySelector('#searchForm');
const resultsEl = document.querySelector("#results")

formEl.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = formEl.elements.query.value;

    // Setting parameters programmatically
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    formEl.elements.query.value = '';
})

const makeImages = (shows) => {
    let images = ""
    for (let result of shows) {
        if (result.show.image) {
            images += `<img src="${result.show.image.medium}">`
        }
    }
    resultsEl.innerHTML = images;
}