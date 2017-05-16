"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
core_2.enableProdMode();
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./mainMenu/menu.component");
var maintoolbar_component_1 = require("./mainPage/maintoolbar/maintoolbar.component");
var header_component_1 = require("./header/header.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var servisZaUnost_1 = require("./dashboard/servisZaUnost");
var mainPage_component_1 = require("./mainPage/mainPage.component");
var orders_component_1 = require("./mainPage/orders/orders.component");
var orders_component_2 = require("./ORDERS/orders.component");
var products_component_1 = require("./PRODUCTS/products.component");
var editproducts_component_1 = require("./EDITPRODUCTS/editproducts.component");
var datatables_component_1 = require("./DATATABLES/datatables.component");
var charts_component_1 = require("./CHARTS/charts.component");
var forms_component_1 = require("./FORMS/forms.component");
var ordersheader_component_1 = require("./ORDERS/ordersHeader/ordersheader.component");
var ordersdatatable_component_1 = require("./ORDERS/ordersDatatable/ordersdatatable.component");
//import {routing} from './app.routing';
//add routing to imports. It should look like this: imports: [BrowserModule,routing],
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent,
            header_component_1.headerComponent, menu_component_1.mainMenuComponent, dashboard_component_1.dashboardComponent,
            mainPage_component_1.mainPage, orders_component_2.ORDERS, products_component_1.PRODUCTS, editproducts_component_1.EDITPRODUCTS, datatables_component_1.DATATABLES, charts_component_1.CHARTS, forms_component_1.FORMS,
            maintoolbar_component_1.mainToolbarComponent, orders_component_1.ordersChart,
            ordersheader_component_1.ORDERHEADER, ordersdatatable_component_1.ORDERSDATATABLE],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            servisZaUnost_1.MessageService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map