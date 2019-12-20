import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    zoom : 'yes',//Android only ,shows browser zoom controls 
    toolbar: 'no',
    hideurlbar:'yes',//Or 'no'

};
  constructor(private iab: InAppBrowser, private spinnerDialog: SpinnerDialog) {}
  public login() {
    const browser = this.iab.create('https://dev70643.service-now.com/oauth_auth.do?response_type=token&redirect_uri=http://localhost:8100/oauth/callback&client_id=3d9a9f21e9310010b76416f30cb285ce&state="login"', '_blank', this.options);
    //browser.executeScript(...);
    //browser.insertCSS(...);

    browser.on('loadstart').subscribe((event) => {
      this.spinnerDialog.show();     
    }, err => {
      this.spinnerDialog.hide();
    });

    browser.on('loadstop').subscribe(event => {
      this.spinnerDialog.hide();
      //browser.insertCSS({ code: "body{color: red;" });
    });

    //browser.close();
  }

}
