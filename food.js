// Create a variable for the EventBrite API
const eventBriteApi = 'https://www.eventbriteapi.com/v3/events/120491528405/?token=BZU2AGMQK7AESWXYITBJ'


document.addEventListener('DOMContentLoaded', async () => {
    loadEventBrite()
    const video = await loadVideoData()
    addVideo(video)
})

async function loadEventBrite () {
    try {
        // Create the iFrame and append it to a selector from the html   
        let iFrame = document.createElement('iframe');  
        iFrame.setAttribute('id','iFrame');
        iFrame.height = '600'
        iFrame.width = '600'
        let divIframe = document.querySelector('#divIframe')
        divIframe.appendChild(iFrame)

        // Assign a variable called 'response' that fetch the API (Line 2)
        const response = await fetch(eventBriteApi)
        // Assign a variable called 'data' that store the response and format it to json
        const data = await response.json()
        // Assign a variable called 'link' that stores the url of the event within the data object
        const link = await data.url
        // Set the attribute of the iFrame to display the website from the variable 'link'
        iFrame.setAttribute('src', link)
        return data;

    } catch(err) {
    console.log(error)
    }
}


async function loadVideoData () {
    try {
        // Fetch the EventBrite API
        const response1 = await fetch (eventBriteApi);
        const data = await response1.json();
        // Assign a variable to take that data and have the YouTube API to search the text of that EventBrite name
        const youtubeData = `https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyA4oLid5kOieJZhkWcUb2zc0hM3t_vjusA
        `
        const response2 = await fetch(youtubeData);
        const data2 = await response2.json();
        // Return the first index of that name search from the YouTube API
        const video = data2.items[0];
        return video;
    }catch(err) {
    console.log(error)
    }
}

// Create a function to create another iframe and will pass the loadVideoData function as an argument
function addVideo (video) {
    try {
        let videoFrame = document.createElement('iframe')
        videoFrame.setAttribute('id','iFrame');
        videoFrame.height = '600'
        videoFrame.width = '600'
        let divIframe2 = document.querySelector('#divIframe2')
        divIframe2.height = '400'
        divIframe2.width = '400'
        divIframe2.appendChild(videoFrame)
        // Assign a variable to call the return video (line 48)
        let youTube = `https://www.youtube.com/embed/${video.id.videoId}`
        videoFrame.setAttribute('src',youTube)
        let p1 = document.createElement('p');           
        let titleDescrip = video.snippet.description             
        p1.textContent = titleDescrip              
        divIframe2.appendChild(p1)

    } catch (err) {
    console.log(error)
    }
}