import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var slides = document.querySelector('ion-slides');

    // Optional parameters to pass to the swiper instance.
    // See https://swiperjs.com/swiper-api for valid options.
    slides.options = {
      initialSlide: 0,
      speed: 400,
      autoplay: true
    }    
  }

}
