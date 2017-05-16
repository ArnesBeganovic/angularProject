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
var servisZaUnost_1 = require("./servisZaUnost");
var dashboardComponent = (function () {
    function dashboardComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.subscription = this.messageService.getMessage().subscribe(function (message) {
            _this.header = message.header;
            _this.description = message.description;
        });
    }
    return dashboardComponent;
}());
dashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: './dashboard.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [servisZaUnost_1.MessageService])
], dashboardComponent);
exports.dashboardComponent = dashboardComponent;
//# sourceMappingURL=dashboard.component.js.map