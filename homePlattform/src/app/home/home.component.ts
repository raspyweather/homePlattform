import { Component, OnInit } from '@angular/core';
import { coupon } from './coupon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ['https://www.lidl.de/de/asset/images/1918_Sixt_HPFB_Desktop_1182x300px.jpg', 'https://www.lidl.de/de/asset/images/1920_sis_Dessous_HPFB_Desktop_1182x300px.jpg', 'https://www.lidl.de/de/asset/images/1921_Mo_Mode_Theme_Hero.jpg'];

  coupons: coupon[] = [{title: "Duschgel Axe Dark Temptation", validUntil:"22. Mai 2019", percentage: 10}, {title: "Freeway Cola", validUntil: "30. Mai 2019", percentage: 5}]

  constructor() { }

  ngOnInit() {
  }

}
