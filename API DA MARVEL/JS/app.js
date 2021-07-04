//1625427388146 ts
const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1625427388146&apikey=0f13c347e3e301ea568d618e57fcc701&hash=f4fb2a9852a846059f11fa382230ccc3';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
            }
            container.innerHTML = contentHTML;
        })
    
    }
};
marvel.render();