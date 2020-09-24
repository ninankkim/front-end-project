const btn1 = document.querySelector('.btn1')

document.addEventListener('DOMContentLoaded', function(event){
    // code to load iframe when page loads
    let iFrame = document.createElement('iframe');

    
    iFrame.setAttribute('id','iFrame');
    iFrame.height = '600'
    iFrame.width = '600'
    let divIframe = document.querySelector('#divIframe')
    divIframe.appendChild(iFrame)
    // create prevent defeault
    event.preventDefault();
    //fetch data for eventbrite api to put in iframe
    fetch('https://www.eventbriteapi.com/v3/events/119218470655/?token=BZU2AGMQK7AESWXYITBJ')
    // return api response to a json
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.url)
        const link = data.url
        iFrame.setAttribute('src',link)
    })
    

    

})




btn1.addEventListener('click', function(event){
    event.preventDefault();

    

    fetch('https://www.eventbriteapi.com/v3/events/119218470655/?token=BZU2AGMQK7AESWXYITBJ')
        .then(function(response){
            return response.json()
        })
        .then(function(data){ 
            console.log(data.name.text)
            
            fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyBw7ldeQl94AT_dRmGV5mWjupsyaq2pBfI
            `)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                    const video = data.items[0];
                    console.log(video.id.videoId)
                    let videoFrame = document.createElement('iframe')
                    videoFrame.setAttribute('id','iFrame');
                    videoFrame.height = '600'
                    videoFrame.width = '600'
                    let divIframe2 = document.querySelector('#divIframe2')
                    divIframe2.height = '400'
                    divIframe2.width = '400'

                    divIframe2.appendChild(videoFrame)
                    let youTube = `https://www.youtube.com/embed/${video.id.videoId}`
                    videoFrame.setAttribute('src',youTube)
                    let p1 = document.createElement('p');
                    // let h1 = document.querySelector('.title');
                    // let title = video.snippet.title
                    let titleDescrip = video.snippet.description
                    // h1.innerText = title
                    p1.textContent = titleDescrip
                    
                    divIframe2.appendChild(p1)
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
            })
            
        })
    
})

