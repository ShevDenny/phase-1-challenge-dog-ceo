console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
let breedArray = []

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
    .then(data => renderBreed(data))
}

const renderBreed = function(data){
    breedArray = Object.keys(data.message)
    breedArray.forEach(breed =>{
    createLi(breed)
    if (data.message[breed].length > 0){
        data.message[breed].forEach(subBreed =>{
            createLi(subBreed)
        })        
    }
    })
}

getBreedUrls(breedUrl)

let breedDropDown = document.querySelector('select')

breedDropDown.addEventListener('change', (e)=>{
    let startLetter = e.target.value
    
    let filteredBreeds = breedArray.filter(breed => breed[0] === startLetter)
    document.querySelector('#dog-breeds').innerHTML = ''
    filteredBreeds.forEach(breed => createLi(breed))

})

function createLi(breed){
    let li = document.createElement("li")
    li.textContent = breed
    li.addEventListener('click', () => {
        li.style.color= "red"})
    document.querySelector('#dog-breeds').append(li)


}
