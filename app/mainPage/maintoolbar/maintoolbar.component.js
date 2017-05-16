"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var mainToolbarComponent = (function () {
    function mainToolbarComponent() {
        this.bitniDijelovi = [];
        this.bitniDijelovi.push({ totalFaIcon: "fa-check-square-o", totalMainClass: "orders", totalAmount: "100.000 EUR", totalText: "Overdue Actions", totalItemType: "orders" });
        this.bitniDijelovi.push({ totalFaIcon: "fa-user", totalMainClass: "users", totalAmount: "200.000 EUR", totalText: "Overdue Actions", totalItemType: "users" });
        this.bitniDijelovi.push({ totalFaIcon: "fa-quote-right", totalMainClass: "feedbacks", totalAmount: "300.000 EUR", totalText: "Overdue Actions", totalItemType: "feedbacks" });
        this.bitniDijelovi.push({ totalFaIcon: "fa-line-chart", totalMainClass: "profit", totalAmount: "400.000 EUR", totalText: "Overdue Actions", totalItemType: "profit" });
    }
    return mainToolbarComponent;
}());
mainToolbarComponent = __decorate([
    core_1.Component({
        selector: 'mainToolbar',
        templateUrl: './maintoolbar.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [])
], mainToolbarComponent);
exports.mainToolbarComponent = mainToolbarComponent;
//# sourceMappingURL=maintoolbar.component.js.map