const eventBriteApi = 'https://www.eventbriteapi.com/v3/events/119218470655/?token=BZU2AGMQK7AESWXYITBJ'

document.addEventListener('DOMContentLoaded', async () => {
    // loadEventBrite()
    // const video = await loadVideoData()
    // addVideo(video)
})

async function loadEventBrite () {
    try {
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
        
    } catch (error) {
        console.log(error)
    }
}

async function loadVideoData () {
    try {
        const response1 = await fetch (eventBriteApi);
        const data = await response1.json();
        const youtubeData = `https://www.googleapis.com/youtube/v3/search/?part=snippet&q=${data.name.text}&key=AIzaSyA4oLid5kOieJZhkWcUb2zc0hM3t_vjusA
    `
        const response2 = await fetch(youtubeData);
        const data2 = await response2.json();
        const video = data2.items[0];
        return video;
        
    } catch (error) {
        console.log(error)
    }
}

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
        let youTube = `https://www.youtube.com/embed/${video.id.videoId}`
        videoFrame.setAttribute('src',youTube)
        let p1 = document.createElement('p');           
        let titleDescrip = video.snippet.description             
        p1.textContent = titleDescrip              
        divIframe2.appendChild(p1)
        
    } catch (error) {
        console.log(error)
    }
}

// RAMEN CODE

(function() {
    var old = console.log;
    var logger = document.getElementById('log');
     var lineNum = -1;
    console.log = function(msg) {
      lineNum++;
      var span = document.createElement("span");
      span.setAttribute("id", "line-number");
      var numText = document.createTextNode(lineNum + ".");
      span.appendChild(numText);
      var image = document.createElement("img");
      image.setAttribute("src", "https://media.giphy.com/media/5jWIqTzFUXlSaXN21a/giphy.gif");
      image.setAttribute("id", "donut");
      logger.appendChild(span);
      logger.appendChild(image);
      if (typeof msg === 'undefined' ) {
        image.setAttribute("src", "https://media.giphy.com/media/3o6fJ8bYYnCW95ST0A/giphy.gif");
      }   else if ( msg === null && typeof msg === 'object') {
        msg.toString();
        image.setAttribute("src", "https://media.giphy.com/media/5SzpVxeeBUTUi6s0Eg/giphy.gif");
      }else if (typeof msg === 'boolean') {
        image.setAttribute("src", "https://media.giphy.com/media/l0HlQ3G4QVZJsKvte/giphy.gif");
      } else if (typeof msg === 'number') {
        image.setAttribute("src", "https://media.giphy.com/media/9Pmf3dqpfxX3XRC3il/giphy.gif");
      } else if (typeof msg === 'function') {
        image.setAttribute("src", "https://media.giphy.com/media/24FIh2qQLsTVyAL03I/giphy.gif");
      } else if (msg instanceof Array) {
        image.setAttribute("src", "https://media.giphy.com/media/2sfDnHIEFe7aAbArdZ/giphy.gif");
      } else if (msg instanceof Object) {
        image.setAttribute("src", "https://media.giphy.com/media/5Ypzkp2Ia3vI9ieJjK/giphy.gif");
      }
     for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
          var foo = arguments[i];
          logger.innerHTML += " " + JSON.stringify(arguments[i]) + " (Type of value:" + typeof arguments[i] + ")" + "</br>";
          for (var k = 0; k < foo.length; k++) {
            logger.innerHTML += "</br>" + JSON.stringify(foo[k]) + " is at index: " + k + " (Type of value is " + typeof foo[k] + ")" + "</br>"
          } // end of nested for
        } else {
          logger.innerHTML += " " + arguments[i] + " (Type of value:" + typeof arguments[i] + ")" + '<br />';
        } // end of else
      } // end of for
      for (var i = 0; i < arguments.length; i++) {
        if (msg == "[object Object]") {
          var indexProp = 0;
          for (var key in msg) {
            logger.innerHTML += key + ': ' + msg[key] + " (The index of this key:value pair is " + indexProp + ")" + "</br>"
            indexProp++;
          } // end of for
        } // end of if
      } // end of for
    } // end of console.log function
    console.clear = function() {
      var clearText = document.createTextNode("Clearing console..");
      var cloudImage = document.createElement("img");
      cloudImage.setAttribute("id", "cloud");
      cloudImage.setAttribute("src", "https://media.giphy.com/media/5e3IozdPgJY9f6HPxY/giphy.gif");
      var div = document.createElement("div");
      div.setAttribute("class", "col-lg-12");
      div.setAttribute("id", "clear-div");
      var consoleRow = document.getElementById("consolerow");
      div.appendChild(clearText);
      div.appendChild(cloudImage);
      document.body.appendChild(div)
      setTimeout(function() {
        div.innerHTML = "";
        logger.innerHTML = "";
      }, 3000);
    } //end of console clear
      console.warn = function(msg) {
       lineNum = lineNum + 1;
      var span2 = document.createElement("span");
      span2.setAttribute("id", "warning-span");
      var numText = document.createTextNode(lineNum + ".");
      var warningImage = document.createElement("img");
        warningImage.setAttribute("id","warning-img");
        warningImage.setAttribute("src","https://media.giphy.com/media/l4pTa6TmeYyYjD9ss/giphy.gif");
        var warningP= document.createElement("span");
        warningP.setAttribute("id","warning-text")
      var warningText =  document.createTextNode("If this is logging then it's a warning..");
        warningP.appendChild(warningText)
      span2.appendChild(numText);
        logger.appendChild(span2)
        logger.appendChild(warningP);
              logger.appendChild(warningImage);
        logger.innerHTML+= "</br>"
    } // end of console warn
   console.trace = function(funcName){
     lineNum = lineNum + 1;
     var span3 = document.createElement('span');
     span3.setAttribute('id',"caller-span");
     var numText = document.createTextNode(lineNum + ".");
     var callerImage= document.createElement("img");
     callerImage.setAttribute("id","caller-img");
     callerImage.setAttribute('src', "https://media.giphy.com/media/9xyQPqOG9oJjimtua3/giphy.gif");
     span3.appendChild(numText);
     logger.appendChild(span3);
     logger.appendChild(callerImage);
    logger.innerHTML+= " The caller of this function is traced to:" +"</br>" + funcName.caller + "</br>";
  }// end of console trace
  })();