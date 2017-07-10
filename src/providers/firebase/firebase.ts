import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { User } from "../../assets/collections/user";

/*
 Generated class for the FirebaseProvider provider.
 
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class FirebaseProvider {
	
	constructor(public http: Http, public afd: AngularFireDatabase) {
		console.log('Hello FirebaseProvider Provider');
	}
	
	getUsers() {
		return this.afd.list('/users/');
	}
	
	addUser(user: User) {
		this.afd.list('/users/').push(user);
	}
	
	removeUser(id) {
		this.afd.list('/users/').remove(id);
	}
}
