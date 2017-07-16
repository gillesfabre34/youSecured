/**
 * Created by gilles on 16/07/17.
 */
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

declare const FB: any;

export class Facebook {
	private appId: string
	
	public response = new BehaviorSubject<boolean>(false);
	public data = this.response.asObservable();
	
	constructor(appId: string) {
		this.appId = appId;
		
		this.init();
	}
	
	login() {
		FB.login(function(response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', function(response) {
					console.log('Hello, ' + response.name + ' !');
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		});
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