const eventBriteApi = 'https://www.eventbriteapi.com/v3/events/120467817485/?token=BZU2AGMQK7AESWXYITBJ'


async function loadEventBrite () {
    let iFrame = document.createElement('iframe');  
    iFrame.setAttribute('id','iFrame');
    iFrame.height = '600'
    iFrame.width = '600'
    let divIframe = document.querySelector('#divIframe')
    divIframe.appendChild(iFrame)
    const response = await fetch(eventBriteApi)
    const data = await response.json()
    const link = await data.url
    iFrame.setAttribute('src', link)
    return data;
}

async function loadVideoData () {
    const response1 = await fetch (eventBriteApi);
    const data = await response1.json();
    const youtubeData = `https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyA4oLid5kOieJZhkWcUb2zc0hM3t_vjusA
`
    const response2 = await fetch(youtubeData);
    const data2 = await response2.json();
    const video = data2.items[0];
    return video;
}

function addVideo (video) {
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
    let titleDescrip = video.snippet.description             
    p1.textContent = titleDescrip              
    divIframe2.appendChild(p1)
}



document.addEventListener('DOMContentLoaded', async () => {
    loadEventBrite()
    const video = await loadVideoData()
    addVideo(video)
})

    
    
    
    
    
    
