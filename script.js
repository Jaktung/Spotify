const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artists');
const resultPlaylist = document.getElementById('result-playlist')

function requestApi(searchTerm) {
    const url = `https://localhost:5500/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))

}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
    });

    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden')
        return

    }

    requestApi(searchTerm)
})