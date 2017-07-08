import { Component } from '@angular/core';

import { ContactsPage } from '../contacts/contacts';
import { VitalInformationsPage } from '../vital-informations/vital-informations';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactsPage;
  tab3Root = VitalInformationsPage;

  constructor() {

  }
}
