const testSearch = document.querySelector('#search-form')
const searchBar = document.querySelector('.search-bar')

testSearch.addEventListener('submit', function(event){
    event.preventDefault();

    

    fetch('https://www.eventbriteapi.com/v3/events/119218470655/?token=BZU2AGMQK7AESWXYITBJ')
        .then(function(response){
            return response.json()
        })
        .then(function(data){ 
            console.log(data.name.text)
            
            fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyB5x3rJYXZmqWw9J4EIvLolwCvq-Ig_Jnk`)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                data.items.forEach(video => {
                    console.log(video.snippet.thumbnails.high.url)
                });
            })
        })
    
})
