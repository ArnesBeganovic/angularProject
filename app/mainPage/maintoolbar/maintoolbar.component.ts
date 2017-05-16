import {Component} from '@angular/core';

@Component({
    selector:'mainToolbar',
    templateUrl:'./maintoolbar.component.html',
    moduleId:module.id
})

export class mainToolbarComponent{
    totalAmount:string[];
    totalText:string[];
    totalFaIcon:string[];
    bitniDijelovi:BitniDijelovi[];
    constructor(){
        this.bitniDijelovi=[];
        this.bitniDijelovi.push({totalFaIcon:"fa-check-square-o",totalMainClass:"orders",totalAmount:"100.000 EUR",totalText:"Overdue Actions",totalItemType:"orders"});
        this.bitniDijelovi.push({totalFaIcon:"fa-user",totalMainClass:"users",totalAmount:"200.000 EUR",totalText:"Overdue Actions",totalItemType:"users"});
        this.bitniDijelovi.push({totalFaIcon:"fa-quote-right",totalMainClass:"feedbacks",totalAmount:"300.000 EUR",totalText:"Overdue Actions",totalItemType:"feedbacks"});
        this.bitniDijelovi.push({totalFaIcon:"fa-line-chart",totalMainClass:"profit",totalAmount:"400.000 EUR",totalText:"Overdue Actions",totalItemType:"profit"});
    }
}

interface BitniDijelovi{
    totalFaIcon:string,
    totalMainClass:string,
    totalAmount:string,
    totalText:string,
    totalItemType:string
}