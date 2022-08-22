import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    public store(key:string, value:object) {
        const storeValue = JSON.parse(JSON.stringify(value))
        localStorage[key] = JSON.stringify(storeValue);
    }

    public load(key:string, defaultValue = null) {
        var value = localStorage[key] || defaultValue;
        return JSON.parse(value);
    }
}