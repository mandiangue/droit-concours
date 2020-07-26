import { AdmobFreeService } from './../service/admob-free.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonction',
  templateUrl: './fonction.page.html',
  styleUrls: ['./fonction.page.scss'],
})
export class FonctionPage implements OnInit {

  constructor(public ads: AdmobFreeService) { }
  showInterstitial() {
    this.ads.InterstitialAd();
  }
  ngOnInit() {
  }

}
