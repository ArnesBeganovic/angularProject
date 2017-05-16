import { Component,OnDestroy } from '@angular/core';
import { MessageService } from './servisZaUnost';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  moduleId: module.id
})

export class dashboardComponent {
  header:string;
  description:string;
 
 
  message: DataToSend;
  
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => { 
      this.header = message.header;
      this.description=message.description; });
  }


}

interface DataToSend{
    header:string;
    description:string;
    componentToDisplay:string;
}

