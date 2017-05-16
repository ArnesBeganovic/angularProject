import { NgModule } from '@angular/core';
import { enableProdMode }    from '@angular/core';
enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { mainMenuComponent } from './mainMenu/menu.component';
import { mainToolbarComponent } from './mainPage/maintoolbar/maintoolbar.component';
import { headerComponent } from './header/header.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { MessageService } from './dashboard/servisZaUnost';
import { mainPage } from './mainPage/mainPage.component';
import { ordersChart } from './mainPage/orders/orders.component';
import {ORDERS} from './ORDERS/orders.component';
import {PRODUCTS} from './PRODUCTS/products.component';
import {EDITPRODUCTS} from './EDITPRODUCTS/editproducts.component';
import {DATATABLES} from './DATATABLES/datatables.component';
import {CHARTS} from './CHARTS/charts.component';
import {FORMS} from './FORMS/forms.component';
import {ORDERHEADER} from './ORDERS/ordersHeader/ordersheader.component'
import {ORDERSDATATABLE} from './ORDERS/ordersDatatable/ordersdatatable.component'


//import {routing} from './app.routing';
//add routing to imports. It should look like this: imports: [BrowserModule,routing],


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, 
                   headerComponent, mainMenuComponent,dashboardComponent, //Frame componenents
                   mainPage,ORDERS,PRODUCTS,EDITPRODUCTS,DATATABLES,CHARTS,FORMS, //Routing Components
                   mainToolbarComponent,ordersChart,//mainPage components
                   ORDERHEADER,ORDERSDATATABLE], //ORDERS page components
    bootstrap: [AppComponent],
    providers: [
        MessageService
    ],
})
export class AppModule {

 }
