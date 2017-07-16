/**
 * Created by gilles on 16/07/17.
 */
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as firebase from 'firebase/app';

declare const FB: any;

export class Facebook {
	private appId: string
	
	public response = new BehaviorSubject<boolean>(false);
	public data = this.response.asObservable();
	
	constructor(appId: string) {
		this.appId = appId;
		
		this.init();
	}
	
	login(): Promise<any> {
		// return Promise.resolve(() => {
		return FB.login(function (response) {
			if (response.authResponse) {
				console.log("%cIndex fbAsyncInit response : ","font-weight: bold; color:blue;",response);
				if(response.status === 'connected') {
					console.log("%cCONNECTED ! ","font-weight: bold; color:green;",response);
					let uid = response.authResponse.userID;
					let accessToken = response.authResponse.accessToken;
					console.log("%cuid ","font-weight: bold; color:green;",uid);
					console.log("%caccessToken ","font-weight: bold; color:green;",accessToken);
					firebase.auth.FacebookAuthProvider.credential(accessToken);
					FB.api('/me', function(response) {
						console.log(JSON.stringify(response));
					});
				} else if (response.status === 'not_authorized') {
					console.log("%cLOGGED IN TO FB BUT NOT AUTHENTICATED APP ! ","font-weight: bold; color:orange;",response);
					// the user is logged in to Facebook,
					// but has not authenticated your app
					FB.login(function(response) {
						if (response.authResponse) {
							console.log('Welcome!  Fetching your information.... ');
							FB.api('/me', function(response) {
								console.log('Good to see you, ' + response.name + '.');
							});
						} else {
							console.log('User cancelled login or did not fully authorize.');
						}
					});
				} else {
					console.log("%NOT LOGGED IN TO FB ! ","font-weight: bold; color:orange;",response);
					// the user isn't logged in to Facebook.
				}
				
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', {fields: 'name,email'}, function (response) {
					console.log("%cFacebook login response ", "color: blue; font-weight:bold;", response);
					console.log('%cHello, ' + response.name + ' !', "color: blue; font-weight:bold;","");
					console.log('%cemail : ' + response.email, "color: blue; font-weight:bold;","");
					let credential = firebase.auth.FacebookAuthProvider.credential(response.email);
					let auth = firebase.auth();
					let currentUser = auth.currentUser;
					return response;
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		},
		{scope: 'public_profile,email'});
	}
	
	init() {
		let js,
			id = 'facebook-jssdk',
			ref = document.getElementsByTagName('script')[0];
		
		if (document.getElementById(id)) {
			return;
		}
		
		js = document.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.9&appId=1387457551345169";
		
		ref.parentNode.insertBefore(js, ref);
		
		js.onload = results => {
			this.initSDK()
		}
	}
	
	initSDK() {
		FB.init({
			appId: this.appId,
			xfbml: true,
			version: 'v2.9'
		});
		this.setCallback()
	}
	
	setCallback() {
		FB.getLoginStatus(response => {
			this.response.next(response)
		});
	}
}