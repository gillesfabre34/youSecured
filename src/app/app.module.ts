import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactsPage } from "../pages/contacts/contacts";
import { VitalInformationsPage } from "../pages/vital-informations/vital-informations";

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAP2ki0fXy7RXJPKgKIIgCVjUqjWdcZ9-4",
	authDomain: "yousecured-79ddb.firebaseapp.com",
	databaseURL: "https://yousecured-79ddb.firebaseio.com",
	projectId: "yousecured-79ddb",
	storageBucket: "",
	messagingSenderId: "1027212125707"
};

@NgModule({
	declarations: [
		MyApp,
		ContactsPage,
		VitalInformationsPage,
		HomePage,
		TabsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ContactsPage,
		VitalInformationsPage,
		HomePage,
		TabsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		// NavController,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
	]
})
export class AppModule {}
