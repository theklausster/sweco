import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { LocalstorageService } from '../services/localstorage.service';
import * as _ from 'lodash';


@Component({
  selector: 'home',
  styleUrls: [ './home.component.sass' ],
  templateUrl: './home.component.pug'
})
export class HomeComponent {
  private contacts = [];
  private activeItem;
  private filterTabs = [];
  private filteredContactsByTabsTemp = []; // for onSearch Function
  private filteredContactsByTabs = [];
  private tempContact: any = {}
  private newContact = {
      name: '',
      skills: []
  };
  private subscription;


  constructor(private contactService: ContactService, private localstorageService: LocalstorageService) {

  }

  ngOnInit() {
    this.subscription = this.localstorageService.observersList.subscribe(() => {
      this.populateContacts();
      this.resetTabs();
    });
    this.populateContacts();
    this.populateFilterTabs();
    this.addContactByTabs();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  private populateContacts() {      
      this.contacts = this.contactService.getContacts();
      console.log(this.contacts);
      
  }

  private onSearch(searchInput) {
      this.filteredContactsByTabs = _.filter(this.filteredContactsByTabsTemp, (contact: any) => contact.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1);
  }



  private itemClicked(item) {
      if (!this.activeItem) {
        this.activeItem = item;
      }
      else {
        this.activeItem = null;
      }
  }

  // Pushing all skills from all contact into a list
  // I use lodash to Capitalize every item
  // I use uniq so it removes duplicates
  private populateFilterTabs() {
      _.forEach(this.contacts, (item) => {
          if (item.skills) {
            _.forEach(item.skills, (skill) => {
              if (skill) {
                this.filterTabs.push(_.capitalize(skill));
              }
            });
          }
      });
      this.filterTabs = _.uniq(this.filterTabs)
  }

  // Looping throgh every contacts in list
  // Every contact has a [] of skills
  // If an item is found it wont push again
  private addContactByTabs() {
         _.forEach(this.contacts, (contact) => {
            _.forEach(contact.skills, (skill) => {
                  if (this.filteredContactsByTabs.indexOf(contact) === -1) {
                    let itemFound = _.find(this.filterTabs, (tab) => {
                      return tab.toLowerCase() === skill.toLowerCase();
                    });
                    if(itemFound) {
                      this.filteredContactsByTabs.push(contact);
                    }
                }
            });
      });
      this.filteredContactsByTabsTemp = this.filteredContactsByTabs;
  }

  // Looping throght each contact with skills
  // Counting tempcount because i want all tabs to be disabled before the contact is removed from the list
  // Adding multiple contact if statement is true and deleting them, when not looping.
  private removeContactByTabs() {
    let tempCount = 0;
    let tempArray = [];
        _.forEach(this.filteredContactsByTabs, (contact) => {
              _.forEach(contact.skills, (skill) => {
                  if (this.filterTabs.indexOf(_.capitalize(skill)) === -1)  {
                        tempCount++;
                        if (tempCount === contact.skills.length) {
                            tempArray.push(contact);
                            tempCount = 0;
                        }
                  }
                  else {
                       tempCount = 0;
                  }
              });
       });

      if(tempArray.length > 0) {
          _.forEach(tempArray, (itemForDeletion) => {
              _.remove(this.filteredContactsByTabs, (x) => {
                      return x === itemForDeletion;
                });
          });
          tempArray = [];
          this.filteredContactsByTabsTemp = this.filteredContactsByTabs;

      }

}

  // removes a tab
  private removeTab(item) {
      _.remove(this.filterTabs, (tab) => {
          return tab === item;
      });
      this.removeContactByTabs();
  }

  private resetTabs() {
    this.filterTabs = [];
    this.filteredContactsByTabs = [];
    this.populateFilterTabs();
    this.addContactByTabs();
  }

  private addSkill() {
      if(this.tempContact.skill) {
        this.newContact.skills.push(this.tempContact.skill);
        this.tempContact.skill = '';
      }
  }

  private removeSkill(input) {
      _.remove(this.newContact.skills, (item) => {
          return input === item;
      });
  }

  private saveNewPerson() {
    console.log(this.tempContact.name);
      if (this.tempContact.name) {
        this.newContact.name = this.tempContact.name;
        this.contactService.addItemToLocalStorage(this.newContact);
        this.newContact.name = '';
        this.newContact.skills = [];
        this.tempContact.name = '';
      }

  }



}
