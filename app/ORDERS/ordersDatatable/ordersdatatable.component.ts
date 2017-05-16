import {Component} from '@angular/core';

@Component({
    selector:"ordersdatatable",
    templateUrl:"ordersdatatable.component.html",
    moduleId:module.id
})

export class ORDERSDATATABLE {
    datatable:Object;
    constructor(){
        this.datatable = {
            header:[
                {text:"#",width:50,id:"1"},
                {text:"Employee",width:200,id:"2"},
                {text:"Customer",width:200,id:"3"},
                {text:"Status",width:100,id:"4"},
                {text:"Fee",width:100,id:"5"},
                {text:"Taxes",width:100,id:"6"},
                {text:"Total",width:100,id:"7"},
                {text:"Shipping",width:100,id:"8"},
                {text:"Payment",width:100,id:"9"},
                {text:"Date",width:100,id:"10"}
            ],
            rows:[
{"#":"1","Employee":"Ray M. Parra","Customer":"Sabrina N. Hermann","Status":"new","Fee":"$12.50","Taxes":"$23.03","Total":"$323.38","Shipping":"Shipping A","Payment":"Credit card","Date":"2014-08-11","Icon":"fa-trash-o"},
{"#":"2","Employee":"Lane E. Dion","Customer":"Bradly N. Mauro","Status":"new","Fee":"$12.00","Taxes":"$6.53","Total":"$100.13","Shipping":"Shipping C","Payment":"Wire transer","Date":"2014-08-11","Icon":"fa-trash-o"},
{"#":"3","Employee":"Ray M. Parra","Customer":"Stepanie P. Lilley","Status":"ready","Fee":"$25.00","Taxes":"$54.00","Total":"$1,429.00","Shipping":"Shipping A","Payment":"Credit card","Date":"2014-08-11","Icon":"fa-trash-o"},
{"#":"4","Employee":"Sudie V. Goldsmith","Customer":"Jettie P. Whelan","Status":"cancelled","Fee":"$10.00","Taxes":"$41.25","Total":"$1,082.50","Shipping":"Shipping A","Payment":"Credit card","Date":"2014-08-11","Icon":"fa-trash-o"},
{"#":"5","Employee":"Romaine B. Alley","Customer":"Amee A. Marshall","Status":"new","Fee":"$12.00","Taxes":"$9.13","Total":"$203.64","Shipping":"Shipping A","Payment":"Wire transer","Date":"2014-08-11","Icon":"fa-trash-o"},

            ]
        }
    }
}
