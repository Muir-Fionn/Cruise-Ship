var slideshow = {
  slides: document.querySelectorAll('.slide'),
  index: 0,
  controls: document.querySelectorAll('.control'),
  active: document.querySelector('.active'),
  backgrounds: [
    'https://images.pexels.com/photos/286398/pexels-photo-286398.jpeg',
    'https://images.pexels.com/photos/68672/beach-beverage-caribbean-cocktail-68672.jpeg',
    'https://images.pexels.com/photos/169905/pexels-photo-169905.jpeg'
  ],

  showSlide: function (index) {
    this.active.classList.remove('active');
    this.slides[index].classList.add('active');
    this.active = this.slides[index];
    this.index = index;
  },

  changeSlide: function (num = 1) {
    var index = slideshow.index + num;
    var length = slideshow.slides.length - 1;

    if(index > length) {
      index = 0;
    }else if(index < 0) {
      index = length - 1;
    }

    slideshow.showSlide(index);
  },

  clickEvents: function () {
    this.controls[0].addEventListener('click', function() {
      slideshow.changeSlide(-1);
    });
    this.controls[1].addEventListener('click', function() {
      slideshow.changeSlide(1);
    });
  },

  interval: function() {
    setInterval(slideshow.changeSlide, 5000);
  },

  addBackgrounds: function () {
    for(var i=0; i < this.slides.length; i++) {
      this.slides[i].style.backgroundImage = 'url("' + this.backgrounds[i] + '")';
    }
    this.slides[0].style.backgroundPosition = 'center bottom';
  }
}

document.onreadystatechange = () => {
 if (document.readyState === 'complete') {
   slideshow.addBackgrounds();
   slideshow.clickEvents();
   slideshow.interval();
 }
};
