import { Component, OnDestroy } from '@angular/core';
import { MessageService } from './dashboard/servisZaUnost';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'arnes-app',
  templateUrl: './app.component.html',
  moduleId: module.id
})
export class AppComponent {
  componentToDisplay: string;

  message: DataToSend;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.componentToDisplay = "1";
    
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.componentToDisplay = message.componentToDisplay;
    });
  }
}

interface DataToSend{
    header:string;
    description:string;
    componentToDisplay:string;
}
