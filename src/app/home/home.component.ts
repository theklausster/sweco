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
  
  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  private onSearch(searchInput) {
    console.log(_.upperCase(searchInput));
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
