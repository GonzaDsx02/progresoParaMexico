import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor() {}
  ngOnInit(): void {
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
