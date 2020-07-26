import { AdmobFreeService } from './../service/admob-free.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
})
export class ActionPage implements OnInit {
  constructor(public ads: AdmobFreeService) { }
  showInterstitial() {
    this.ads.InterstitialAd();
  }
  ngOnInit() {
  }

}
