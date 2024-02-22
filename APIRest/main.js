const url = "https://api.thedogapi.com/v1/images/search"

fetch(url)
.then(resp => resp.json())
.then(data => {
    
    const img = document.querySelector('img');
    img.src = data[0].url;
});