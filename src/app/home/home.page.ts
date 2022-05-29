import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Pagination, Navigation, IonicSlides]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor() {}
  
  ngOnInit() {}      
}
