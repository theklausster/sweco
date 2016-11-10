import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import * as _ from 'lodash';


@Injectable()
export class ContactService {
    private LOCALSTORAGEKEY = "CONTACTS";
    private contacts = [];
    constructor(private localstoageService: LocalstorageService) { 
        this.populateContacts();
        this.populateLocalstorage();
    }

    public getContacts() {
        return this.localstoageService.getListFromLocalstorage(this.LOCALSTORAGEKEY);
    }

    private populateLocalstorage() {
        _.forEach(this.contacts, (item) => {
            this.localstoageService.populateItems(item, this.LOCALSTORAGEKEY);
        })
    }

    public addItemToLocalStorage(item) {
            this.localstoageService.addItem(item, this.LOCALSTORAGEKEY);

    }

    private populateContacts() {
        this.contacts = [{
                id: 1,
                name: 'Uffe Elbæk',
                skills: [
                    'java',
                    'c#',
                    'javascript'
                ]
            },
            {
                id: 2,
                name: 'Mette Frederiksen',
                skills: [
                    'html',
                    'css',
                    'php'
                ]
            },
            {
                id: 3,
                name: 'Kristian T Dahl',
                skills: [
                    'php',
                    'jquery'
                ]
            },
            {
                id: 4,
                name: 'Helle Thorning',
                skills: [
                    'react',
                    'pug',
                    'sass'
                ]
            },
            {
                id: 5,
                name: 'Klaus Jakobsen',
                skills: [
                    'java',
                    'c#',
                    'javascript',
                    'angular2',
                    'pug',
                    'typescript',
                    'sass',
                    'webpack'
                ]
            },
            {
                id: 6,
                name: 'Donald Trump',
                skills: [
                    'java',
                    'c#'
                ]
            },
            {
                id: 7,
                name: 'Hillary Clinton',
                skills: [
                    'javascript'
                ]
            },
            {
                id: 8,
                name: 'Anders Samuelsen',
                skills: [
                    'java'

                ]
            },
            {
                id: 9,
                name: 'Lars L Rasmussen',
                skills: [
                    'mean',
                    'fullstack',
                ]
            }
        ]   
    }






}