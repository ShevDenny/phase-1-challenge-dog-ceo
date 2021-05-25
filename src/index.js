console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


function getUrls(imgUrl){
    fetch(imgUrl)
    .then(res =>res.json())
    .then(data => data.message.forEach(renderImg))
}



const renderImg = function(data){
    let img = document.createElement('img')
    img.src = data
    document.querySelector('#dog-image-container').append(img)
}
getUrls(imgUrl)