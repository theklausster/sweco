import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as _ from 'lodash';


@Injectable()
export class LocalstorageService {

    private observer: Observer<any>;
    public observersList: Observable<any>;

    constructor() {
        this.observersList = new Observable((observer: any) => 
            this.observer = observer);
    }

    public populateItems(item: any, key: string) {
        if (!this.itemExistsInList(item.name, key)) {
            let localList = this.getListFromLocalstorage(key);
            localList.push(item);
            window.localStorage.setItem(key, JSON.stringify(localList)); 
        }

    }

    public addItem(item, key) {
        this.populateItems(item, key);
        this.observer.next(true);
    }

    public deleteItemFromList(id: any, key: string) {
        let localList = this.getListFromLocalstorage(key);
        let index = _.findIndex(localList, (x: any) => {
            if (x) {
                return x.id === id;
            }
        });
        if (index > -1) {
            localList.splice(index, 1);
            window.localStorage.setItem(key, JSON.stringify(localList)); 
            this.observer.next(id);
        }
    }

    public itemExistsInList(name: any, key: string) {
        let localList = this.getListFromLocalstorage(key);
        let index = _.findIndex(localList, (x: any) => {
            if (x) {
                return x.name === name;
            }
        });
        if (index > -1) {
            return true;
        }
        return false;
    }


    public getListFromLocalstorage(key: string) {        
        let parsedList = window.localStorage.getItem(key);
        if (parsedList) {
            return JSON.parse(parsedList);
        }
        return [];
    }
}