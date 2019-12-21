import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  accessToken: string;
  refreshToken: string;
  constructor(private router: Router, private http: HTTP, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      let code = params['code'];
      let clientId = '06296f0d9e404010b3bab5ab0696e1a7';
      let clientSecret = 'secret';
      let auth = btoa(clientId + ':' + clientSecret);
      const url = 'https://dev70643.service-now.com/oauth_token.do';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + auth
      };
      const data = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:8100/oauth/callback',
        'client_id': clientId
      };
      this.http.post(url, data, headers)
              .then((res) => {
                  const data = JSON.parse(res['data']);
                  this.accessToken = data.access_token;
                  this.refreshToken = data.refresh_token;
                  this.router.navigateByUrl('/home');
              })
              .catch((error) => {
                  console.log(error);
              });
    });
  }

  // async getData() {
  //   try {
  //     console.log('code', this.code);
  //     const url = 'https://dev70643.service-now.com/oauth_token.do?grant_type=code&code='+code+'&redirect_uri=http://localhost:8100/oauth/callback&client_id=06296f0d9e404010b3bab5ab0696e1a7';
  //     const data = {};
  //     const headers = {};

  //     const response = await this.http.post(url, data, headers);

  //     console.log(response.status);
  //     console.log(JSON.parse(response.data)); // JSON data returned by server
  //     console.log(response.headers);

  //   } catch (error) {
  //     console.error(error.status);
  //     console.error(error.error); // Error message as string
  //     console.error(error.headers);
  //   }
  // }

}
