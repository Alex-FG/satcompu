/**GALERIA IMAGENES */
{const images = document.querySelectorAll('.imge');
const containerImge = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
    addImage(image.getAttribute('src'),image.getAttribute('alt'))
    })
})

const addImage = (srcImg,altImg)=>{
    containerImge.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImg;
    copy.innerHTML = altImg;
}

containerImge.addEventListener('click',()=>{
    containerImge.classList.toggle('move');
    imageContainer.classList.toggle('show');
});
}