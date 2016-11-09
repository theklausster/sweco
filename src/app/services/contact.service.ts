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
                name: 'Jimmy Lillegaard',
                skills: [
                    'java',
                    'c#',
                    'javascript'
                ]
            },
            {
                id: 2,
                name: 'Glenn Jensen',
                skills: [
                    'html',
                    'css',
                    'php'
                ]
            },
            {
                id: 3,
                name: 'Kenneth Olesen',
                skills: [
                    'php',
                    'jquery',
                    'ios'
                ]
            },
            {
                id: 4,
                name: 'Rune Bjerg',
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
                name: 'Lars Bilde',
                skills: [
                    'java',
                    'c#',
                    'javascript'
                ]
            },
            {
                id: 7,
                name: 'Stig Iversen',
                skills: [
                    'android',
                    'xamarin'
                ]
            },
            {
                id: 8,
                name: 'Bent Nielsen',
                skills: [
                    'java',
                    'sql',
                    'mongodb'
                ]
            },
            {
                id: 9,
                name: 'Kim Hansen',
                skills: [
                    'mean',
                    'fullstack',
                    'javascript'
                ]
            }
        ]   
    }






}