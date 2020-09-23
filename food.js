const btn5 = document.querySelector('.btn5')

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
  fetch('https://www.eventbriteapi.com/v3/events/120467817485/?token=BZU2AGMQK7AESWXYITBJ')
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
  


    fetch('https://www.eventbriteapi.com/v3/events/120467817485/?token=BZU2AGMQK7AESWXYITBJ')
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