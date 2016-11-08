import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service'; 
import * as _ from 'lodash';


@Component({
  selector: 'home',  
  styleUrls: [ './home.component.sass' ],
  templateUrl: './home.component.pug'
})
export class HomeComponent {
  private contacts = [];
  private activeItem;
  private filteredContacts;
  
  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = this.contacts; 
  
  }

  private onSearch(searchInput) {
      this.filteredContacts = _.filter(this.contacts, (contact: any) => contact.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1);
  }



  private itemClicked(item) {
      if (!this.activeItem) {
        this.activeItem = item;
      }
      else {
        this.activeItem = null;
      }
      console.log('this.activeitem', this.activeItem);
  }


 
}
