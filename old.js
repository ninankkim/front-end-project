document.addEventListener('DOMContentLoaded', function (event) {
  one();
  two();
})

function one() {
  let iFrame = document.createElement('iframe');
  iFrame.setAttribute('id', 'iFrame');
  iFrame.height = '600'
  iFrame.width = '600'
  let divIframe = document.querySelector('#divIframe')
  divIframe.appendChild(iFrame)
  event.preventDefault();
  fetch('https://www.eventbriteapi.com/v3/events/120491528405/?token=BZU2AGMQK7AESWXYITBJ')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.url)
      const link = data.url
      iFrame.setAttribute('src', link)
    })
}

// Create function to store Youtube api onto iframe
function two() {
  fetch('https://www.eventbriteapi.com/v3/events/120491528405/?token=BZU2AGMQK7AESWXYITBJ')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data.name.text)
      fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyC26dSjpIa0W81IXM3L9YOwbnOtqZJ3QaA
          `)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          const video = data.items[0];
          console.log(video.id.videoId)
          let videoFrame = document.createElement('iframe')
          videoFrame.setAttribute('id', 'iFrame');
          videoFrame.height = '600'
          videoFrame.width = '600'
          let divIframe2 = document.querySelector('#divIframe2')
          divIframe2.height = '400'
          divIframe2.width = '400'
          divIframe2.appendChild(videoFrame)
          let youTube = `https://www.youtube.com/embed/${video.id.videoId}`
          videoFrame.setAttribute('src', youTube)
          let p1 = document.createElement('p');
          let titleDescrip = video.snippet.description
          p1.textContent = titleDescrip
          divIframe2.appendChild(p1)
        })

    })

}
