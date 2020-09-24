
// Create an event DOMContent listener to load APIs into iframe during page load
document.addEventListener('DOMContentLoaded', function(event){
    event.preventDefault();
    one();
    // two();
})
// create function to store eventbrite api onto iframe
function one(){
    // create element to make iframe box
    let iFrame = document.createElement('iframe');

    // set attr for iframe
    iFrame.setAttribute('id','iFrame');
    iFrame.height = '600'
    iFrame.width = '600'
    
    // append iFrame to html page
    let divIframe = document.querySelector('#divIframe')
    divIframe.appendChild(iFrame)
    
    // create prevent defeault
    event.preventDefault();
    
    //fetch data for eventbrite api to put in iframe 
    fetch('https://www.eventbriteapi.com/v3/events/109703516170/?token=BZU2AGMQK7AESWXYITBJ')
    
    // return api response to a json
    .then(function(response){
        return response.json();
    })
    
    // take api data and set it to the iframe to create a link
    .then(function(data){
        console.log(data.url)
        const link = data.url
        iFrame.setAttribute('src',link)
    })
}

// Create function to store Youtube api onto iframe
function two(){
    // fetch eventbrite api
    fetch('https://www.eventbriteapi.com/v3/events/109703516170/?token=BZU2AGMQK7AESWXYITBJ')
        .then(function(response){
            return response.json()
        })
        // store eventbrite api name
        .then(function(data){ 
            console.log(data.name.text)
            // use eventbrite api name to search Youtube video search query for api name
            fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyC26dSjpIa0W81IXM3L9YOwbnOtqZJ3QaA
            `)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                    // create variable to store the first array
                    const video = data.items[0];
                    console.log(video.id.videoId)
                    //create a separate iframe for Youtube video
                    let videoFrame = document.createElement('iframe')
                    videoFrame.setAttribute('id','iFrame');
                    videoFrame.height = '600'
                    videoFrame.width = '600'
                    let divIframe2 = document.querySelector('#divIframe2')
                    divIframe2.height = '400'
                    divIframe2.width = '400'

                    divIframe2.appendChild(videoFrame)
                    // create variable to store youtube link with video id from api
                    let youTube = `https://www.youtube.com/embed/${video.id.videoId}`
                    videoFrame.setAttribute('src',youTube)
                    let p1 = document.createElement('p');
                    
                    // create variable to store desciprtion of video and store onto <p> element
                    let titleDescrip = video.snippet.description
                    p1.textContent = titleDescrip
                    divIframe2.appendChild(p1)
                })
                
            })
        
}
                    
                    

// btn1.addEventListener('click', function(event){
//     event.preventDefault();
//     two();
// })