const eventBriteApi = 'https://www.eventbriteapi.com/v3/events/120067319585/?token=BZU2AGMQK7AESWXYITBJ'

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






let toRadians = (deg) => deg * Math.PI / 180
let map = (val, a1, a2, b1, b2) => b1 + (val - a1) * (b2 - b1) / (a2 - a1)
document.addEventListener("DOMContentLoaded", function(event){
})
class Pizza {
constructor(id) {
this.canvas = document.getElementById(id)
this.ctx = this.canvas.getContext('2d')
this.sliceCount = 6
this.sliceSize = 80
this.width = this.height = this.canvas.height = this.canvas.width = this.sliceSize * 2 + 50
this.center = this.height / 2 | 0
this.sliceDegree = 360 / this.sliceCount
this.sliceRadians = toRadians(this.sliceDegree)
this.progress = 0
this.cooldown = 10
}
update() {
let ctx = this.ctx
ctx.clearRect(0, 0, this.width, this.height)
if (--this.cooldown < 0) this.progress += this.sliceRadians*0.01 + this.progress * 0.07
ctx.save()
ctx.translate(this.center, this.center)
for (let i = this.sliceCount - 1; i > 0; i--) {
    let rad
    if (i === this.sliceCount - 1) {
    let ii = this.sliceCount - 1
    rad = this.sliceRadians * i + this.progress
    ctx.strokeStyle = '#FBC02D'
    cheese(ctx, rad, .9, ii, this.sliceSize, this.sliceDegree)
    cheese(ctx, rad, .6, ii, this.sliceSize, this.sliceDegree)
    cheese(ctx, rad, .5, ii, this.sliceSize, this.sliceDegree)
    cheese(ctx, rad, .3, ii, this.sliceSize, this.sliceDegree)
    } else rad = this.sliceRadians * i
    // border
    ctx.beginPath()
    ctx.lineCap = 'butt'
    ctx.lineWidth = 11
    ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians)
    ctx.strokeStyle = '#F57F17'
    ctx.stroke()
    // slice
    let startX = this.sliceSize * Math.cos(rad)
    let startY = this.sliceSize * Math.sin(rad)
    let endX = this.sliceSize * Math.cos(rad + this.sliceRadians)
    let endY = this.sliceSize * Math.sin(rad + this.sliceRadians)
    let varriation = [0.9,0.7,1.1,1.2]
    ctx.fillStyle = '#FBC02D'
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(startX, startY)
    ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.fill()
    ctx.lineWidth = .3
    ctx.stroke()
    // meat
    let x = this.sliceSize * .65 * Math.cos(rad + this.sliceRadians / 2)
    let y = this.sliceSize * .65 * Math.sin(rad + this.sliceRadians / 2)
    ctx.beginPath()
    ctx.arc(x, y, this.sliceDegree / 6, 0, 2 * Math.PI)
    ctx.fillStyle = '#D84315'
    ctx.fill()
}
ctx.restore()
if (this.progress > this.sliceRadians) {
    ctx.translate(this.center, this.center)
    ctx.rotate(-this.sliceDegree * Math.PI / 180)
    ctx.translate(-this.center, -this.center)
    this.progress = 0
    this.cooldown = 20
}
}
}
function cheese(ctx, rad, multi, ii, sliceSize, sliceDegree) {
let x1 = sliceSize * multi * Math.cos(toRadians(ii * sliceDegree) - .2)
let y1 = sliceSize * multi * Math.sin(toRadians(ii * sliceDegree) - .2)
let x2 = sliceSize * multi * Math.cos(rad + .2)
let y2 = sliceSize * multi * Math.sin(rad + .2)
let csx = sliceSize * Math.cos(rad)
let csy = sliceSize * Math.sin(rad)
var d = Math.sqrt((x1 - csx) * (x1 - csx) + (y1 - csy) * (y1 - csy))
ctx.beginPath()
ctx.lineCap = 'round'
let percentage = map(d, 15, 70, 1.2, 0.2)
let tx = x1 + (x2 - x1) * percentage
let ty = y1 + (y2 - y1) * percentage
ctx.moveTo(x1, y1)
ctx.lineTo(tx, ty)
tx = x2 + (x1 - x2) * percentage
ty = y2 + (y1 - y2) * percentage
ctx.moveTo(x2, y2)
ctx.lineTo(tx, ty)
ctx.lineWidth = map(d, 0, 100, 20, 2)
ctx.stroke()
}
let pizza = new Pizza('pizza')
;(function update() {
requestAnimationFrame(update)
pizza.update()
}())