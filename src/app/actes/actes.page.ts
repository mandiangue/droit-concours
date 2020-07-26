import { AdmobFreeService } from './../service/admob-free.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actes',
  templateUrl: './actes.page.html',
  styleUrls: ['./actes.page.scss'],
})
export class ActesPage implements OnInit {

  constructor(public ads: AdmobFreeService) { }
  showInterstitial() {
    this.ads.InterstitialAd();
  }
  ngOnInit() {
  }

}
