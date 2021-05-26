console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
document.addEventListener('DOMContentLoaded', () => {

function getImgUrls(imgUrl){
    fetch(imgUrl)
    .then(res =>res.json())
    .then(data => data.message.forEach(renderImg))
}

const renderImg = function(data){
    let img = document.createElement('img')
    img.src = data
    document.querySelector('#dog-image-container').append(img)
}
getImgUrls(imgUrl)

function getBreedUrls(breedUrl){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => Object.keys(data.message).forEach(renderBreed))
}

const renderBreed = function(data){
    let li = document.createElement('li')
    li.textContent = data
    document.querySelector('#dog-breeds').append(li)

    li.addEventListener('click', () => {
        li.style.color= "red"
    })


}
getBreedUrls(breedUrl)

let dogBreed = document.querySelectorAll('option')
dogBreed.addEventListener('click', (e) => {
    //let startLetter= e.target.value;
    //document.querySelector('#dog-breeds').remove(li)
    console.log('test')

})
})

let dogList = document.querySelector('dog-breeds')
dogList.filter(()=> {
    let dropDown= document.getElementById('breed-dropdown');

    dropDown.appendChild(dropDownlist)

    
})
