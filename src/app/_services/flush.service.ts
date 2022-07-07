import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FlushService {
    private data: any = null;

    set Data(value) {
        this.data = value;
    }
    get Data() {
        const data = this.data;
        this.data = null;
        return data;
    }
}