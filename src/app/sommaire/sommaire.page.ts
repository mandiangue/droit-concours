import { AdmobFreeService } from './../service/admob-free.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sommaire',
  templateUrl: './sommaire.page.html',
  styleUrls: ['./sommaire.page.scss'],
})
export class SommairePage implements OnInit {

  constructor(public ads: AdmobFreeService) { }
  showInterstitial() {
    this.ads.InterstitialAd();
  }
  ngOnInit() {
  }

}
