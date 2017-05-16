	import {ModuleWithProviders} from '@angular/core';
	import {Routes,RouterModule} from '@angular/router';

	
	
	//Sad unosim komponente koje zelim da se pojavljuju u url
	import {mainPage} from './mainPage/mainPage.component';
	import {ORDERS} from './ORDERS/orders.component';
	import {PRODUCTS} from './PRODUCTS/products.component';
    import {EDITPRODUCTS} from './EDITPRODUCTS/editproducts.component';
    import {DATATABLES} from './DATATABLES/datatables.component';
    import {CHARTS} from './CHARTS/charts.component';
    import {FORMS} from './FORMS/forms.component';

	//Sad ide arraj komponenti
	const appRoutes:Routes = [
		{
			path:'',
			component:mainPage
		},
		{
			path:'orders',
			component:ORDERS
		},
		{
			path:'products',
			component:PRODUCTS
		},
		{
			path:'editproducts',
			component:EDITPRODUCTS
		},
		{
			path:'datatables',
			component:DATATABLES
		},
		{
			path:'charts',
			component:CHARTS
		},
		{
			path:'forms',
			component:FORMS
		}
		
	]
	
	//Na kraju exportujem te komponente
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash:true});