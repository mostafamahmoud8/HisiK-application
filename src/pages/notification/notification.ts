import { ScanPage } from './../scan/scan';
import { ProductPage } from './../product/product';
import { AUTHService } from './../../services/user/AUTH.service';
import { AppNotficationService } from './../../services/Notfcation/appnotification.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  Notification:any[]=[];
  isauthinticated:boolean=false;
  user :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AUTHService,public notififcatioService:AppNotficationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    if(this.authService.IsAuthinticated())
    {
      this.user=this.authService.getUser();
      this.ShowNotification(this.user.id);
      this.isauthinticated=true;
    }else
    { 
      this.isauthinticated=false;
    }
  }
  ShowNotification(userid)
  {
    this.notififcatioService.getUserNotification(userid).subscribe((data:any[])=>
    {
      if(data.length>0)
      {
        this.Notification=data;
      }
    });
  }
  openProduct(notificationId,Notifcation,product)
  {  
     let notification = Notifcation;
     notification.Status=true;
     this.notififcatioService.updateUserNotification(notificationId,notification).subscribe(data=>
      {
        this.navCtrl.push(ProductPage,{'product':product});
      });
  }
  openNotify(notificationId,Notifcation,review)
  {
    let notification = Notifcation;
     notification.Status=true;
     this.notififcatioService.updateUserNotification(notificationId,notification).subscribe(data=>
      {
        //this.navCtrl.push(ProductPage,{'product':review});
      });
  }
  openScan()
  {
    this.navCtrl.push(ScanPage);
  }

}
