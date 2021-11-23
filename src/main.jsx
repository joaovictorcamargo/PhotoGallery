
class PhotoGallery{
    constructor(){
         this.API_KEY ='563492ad6f917000010000019e90fbfa486e4014a193105879dabc9d';
         this.galleryDIv = document.querySelector('.gallery');
         this.searchForm = document.querySelector('.right form');
         this.loadMore = document.querySelector('load-more');
         this.eventHandler();
    }
    eventHandler(){
        document.addEventListener('DOMContentLoaded',()=>{
            this.getImg();
        });
    }
    async getImg(){
        const baseURL = 'https://api.pexels.com/v1/';
        const data = await this.fetchImage(baseURL);
        this.GenerateHTML(data.photos)
        console.log(data)
    }
    async fetchImage(baseURL){
        const response = await fetch(baseURL, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: this.API_KEY
            }
        });
        const data = await response.json();
        return data;
    }
    GenerateHTML(photos){
photos.forEach(photo=>{
    const item = document.createElement('div');
    item.classList.add('i-item');
    item.innerHTML = `
    <a href="#">
<img src="${photo.src.medium}">
<h3>${photo.photographer}</h3>
    </a>
    `;
    this.galleryDIv.appendChild(item)
})
    }
}

const gallery = new PhotoGallery();