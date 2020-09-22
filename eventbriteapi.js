const testSearch = document.querySelector('#search-form')
const searchBar = document.querySelector('.search-bar')

testSearch.addEventListener('submit', function(event){
    event.preventDefault();

    

    fetch('https://www.eventbriteapi.com/v3/events/118513159049/?token=BZU2AGMQK7AESWXYITBJ')
        .then(function(response){
            return response.json()
        })
        .then(function(data){ 
            console.log(data.series_id)
            fetch(`https://www.eventbriteapi.com/v3/series/${data.series_id}/?token=BZU2AGMQK7AESWXYITBJ`)
        })
    
})
