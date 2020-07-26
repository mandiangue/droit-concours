import { Injectable } from '@angular/core';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobFreeService {

  // Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    autoShow: false,
     id: 'ca-app-pub-3720208975341710/6848721440'
  };
  constructor(private admobFree: AdMobFree, public platform: Platform) {

    platform.ready().then(() => {

      // Load ad configuration
      this.admobFree.interstitial.config(this.interstitialConfig);
      // Prepare Ad to Show
      this.admobFree.interstitial.prepare()
        .then(() => {
          // alert(1);
        }).catch(e => console.log(e));

    });

    // Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => {
         // alert('Interstitial CLOSE');
        }).catch(e => console.log(e));
    });
  }
  BannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      autoShow: true,
      id: 'ca-app-pub-3720208975341710/8024898289'
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => console.log(e));
  }
  InterstitialAd() {
    // Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      // Will show prepared Ad
      this.admobFree.interstitial.show().then(() => {
      })
        .catch(e => console.log(e));
    })
      .catch(e => console.log(e));
  }
  }
