"use strict";
var router_1 = require("@angular/router");
//Sad unosim komponente koje zelim da se pojavljuju u url
var mainPage_component_1 = require("./mainPage/mainPage.component");
var orders_component_1 = require("./ORDERS/orders.component");
var products_component_1 = require("./PRODUCTS/products.component");
var editproducts_component_1 = require("./EDITPRODUCTS/editproducts.component");
var datatables_component_1 = require("./DATATABLES/datatables.component");
var charts_component_1 = require("./CHARTS/charts.component");
var forms_component_1 = require("./FORMS/forms.component");
//Sad ide arraj komponenti
var appRoutes = [
    {
        path: '',
        component: mainPage_component_1.mainPage
    },
    {
        path: 'orders',
        component: orders_component_1.ORDERS
    },
    {
        path: 'products',
        component: products_component_1.PRODUCTS
    },
    {
        path: 'editproducts',
        component: editproducts_component_1.EDITPRODUCTS
    },
    {
        path: 'datatables',
        component: datatables_component_1.DATATABLES
    },
    {
        path: 'charts',
        component: charts_component_1.CHARTS
    },
    {
        path: 'forms',
        component: forms_component_1.FORMS
    }
];
//Na kraju exportujem te komponente
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map