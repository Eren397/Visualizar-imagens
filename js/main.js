const inputFile = document.querySelector('#files')
const viewer = document.querySelector('.viewer')
inputFile.addEventListener('change', loadImages)

function readImages(input) {
    let inputFile = input.files
    let inputFileArray = Array.from(inputFile)

    inputFileArray.forEach(file => {
        let reader = new FileReader()
        reader.onload = (e) => {
            let tagImg = document.createElement('img')
            tagImg.setAttribute('src', e.target.result)
            viewer.appendChild(tagImg)
        }
        reader.readAsDataURL(file)
    })
}   

function loadImages() {
    readImages(this)
}