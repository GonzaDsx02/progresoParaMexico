import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, Pagination, Navigation, IonicSlides]);
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    freeMode: true,
    breakpoints: {
      // when window width is <= 672px
      672: {
          slidesPerView: 1,
          spaceBetween: 30
      },
      // when window width is <= 720px
      720: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      // when window width is <= 1120px
      1120: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  }
  constructor() { }
  ngAfterContentChecked(){
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }

}
