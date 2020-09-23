const btn1 = document.querySelector('.btn1')


// async function pizzaInfo(){
//     const response = await fetch('https://www.eventbriteapi.com/v3/events/120605998789/?token=BZU2AGMQK7AESWXYITBJ')
//     const data = await response.json()
//     const youtube = await fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyB5x3rJYXZmqWw9J4EIvLolwCvq-Ig_Jnk`)
//     const video = await youtube.json()
//     video.items.forEach(video.snippet.thumbnails.high.url)

// }

// btn1.addEventListener('click', pizzaInfo())

btn1.addEventListener('click', function(event){
    event.preventDefault();


    fetch('https://www.eventbriteapi.com/v3/events/120067319585/?token=BZU2AGMQK7AESWXYITBJ')
        .then(function(response){
            return response.json()
        })
        .then(function(data){ 
            console.log(data.name.text)
            
            fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyC26dSjpIa0W81IXM3L9YOwbnOtqZJ3QaA`)
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
