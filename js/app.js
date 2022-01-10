window.onload = function(){
    fetch(`https://newsapi.org/v2/everything?q=india&apiKey=660a56cc841b4579a52ad3dff34a3c17`).then(function(res){
        return res.json();
    }).then(function(data){
        var headerNews = data['articles'][0];
        document.querySelector('#top-brand').innerHTML = headerNews['source']['name'];
        document.querySelector('#top-title').innerHTML = headerNews['title'];
        document.querySelector('#top-title').setAttribute('href',headerNews['url']);
        document.querySelector('#top-img').setAttribute('src',headerNews['urlToImage']);
        /*********************************
         * Slider News
         *********************************/

      for(var i = 1;i< data.articles.length; i++)
      {
        var brand = data.articles[i]["source"]["name"];
        var title = data.articles[i]['title'];
        var image = data.articles[i]['urlToImage'];

        var template = `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-4">
            <img
              src="${image}"
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-n img-custom"
            />
          </div>
          <div class="col-8">
            <div class="card-body ps-1">
              <span class="brand mb-1">${brand}</span>
              <h6 class="fw-regular mb-0 header-custom">${title}</h6>
            </div>
          </div>
        </div>
      </div>
      `;

        document.querySelector("#news-con").innerHTML += template;
      }
    })

}
