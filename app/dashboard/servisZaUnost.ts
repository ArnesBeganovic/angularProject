import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    sendMessagetoDashboard(data:Object) {
        this.subject.next(data);
    }

    sendMessagetoAppComponent(data:Object) {
        this.subject.next({data});
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}

interface ActiveSheet {
  componentToDisplay: string;
}

