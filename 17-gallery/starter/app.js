function getElement(selection) {
  const element = document.querySelector(selection);
  if(element) {
    return element
  }
  throw new Error(
      `Please check "${selection}" selector, no such element exists`
    )
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  //target
  this.modal = document.querySelector('.modal');
  this.modalImg = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.nextBtn = document.querySelector('.next-btn');
  this.prevBtn = document.querySelector('.prev-btn');
  this.closeBtn = document.querySelector('.close-btn');

  //buttons
  // this.closeModal = this.closeModal.bind(this);
  // this.nextImage = this.nextImage.bind(this);
  // this.prevImage = this.prevImage.bind(this);
  // this.chooseImage = this.chooseImage.bind(this);

  this.container.addEventListener('click', function(e) {
    if(e.target.classList.contains('img')) {
      this.openModal(e.target, this.list);
    }
  }.bind(this)
  );
}
 // 
  // this.modalImg = selectedImage;
  // this.closeModal
Gallery.prototype.openModal = function(selectedImage, list) {
  this.setMainImage(selectedImage);
  this.modalImages = list.map(function(image) {
    return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" 
    class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`; 
  }).join('');
  this.modal.classList.add('.open');
  this.nextBtn.addEventListener('click', this.nextImage);
  this.prevBtn.addEventListener('click', this.prevImage);
  this.closeBtn.addEventListener('click', this.closeModal);
  this.modalImages.addEventListener('click', this.chooseImage);
}

Gallery.prototype.setMainImage = function(selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
}

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('.open');
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.nextBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
}
// Gallery.prototype.prevImage 
// Gallery.prototype.chooseImage 

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));