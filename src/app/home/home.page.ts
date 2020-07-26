import { AdmobFreeService } from './../service/admob-free.service';
import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public subscription: any;
  constructor(public platform: Platform, public ads: AdmobFreeService) {}
  ionViewWillEnter() {
    this.ads.BannerAd();
    }
    showInterstitial() {
      this.ads.InterstitialAd();
    }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
        // tslint:disable-next-line:no-string-literal
        navigator['app'].exitApp();
    });
  }
}
