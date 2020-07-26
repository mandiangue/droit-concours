import { AdmobFreeService } from './../service/admob-free.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentieux',
  templateUrl: './contentieux.page.html',
  styleUrls: ['./contentieux.page.scss'],
})
export class ContentieuxPage implements OnInit {

  constructor(public ads: AdmobFreeService) { }
  showInterstitial() {
    this.ads.InterstitialAd();
  }
  ngOnInit() {
  }

}
