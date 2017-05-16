import { Component, NgModule } from '@angular/core';
import { MessageService } from '../dashboard/servisZaUnost';

@Component({
    selector: 'mainMenu',
    templateUrl: './menu.component.html',
    moduleId: module.id
})

export class mainMenuComponent {
    //************************************************************************
    //*****************************Variables**********************************
    //************************************************************************
    public dashBoardHeader: string;
    public dashBoardDetails: string;
    public DataToSend:DataToSend;
    selectedRoute:string;
    menuBlocks: menuBlocks[];
    //************************************************************************
    //*****************************Constructor********************************
    //************************************************************************
    constructor(private messageService: MessageService) {       
        //get current route
        var urlSplit = document.location.href.split("/");
        this.selectedRoute = urlSplit[urlSplit.length - 1]

        //Messeage on dashboard when wrong route entered
        this.dashBoardHeader = this.selectedRoute;
        this.dashBoardDetails = "does not exists"

        //Data source for menu
        this.menuBlocks = [];
        this.menuBlocks.push(
            {
                id: 0,
                menuText: "Main",
                classState: true,
                statusClass: "menu_header_open",
                pileDirection: "fa-angle-down",
                subMenus: [
                    {
                        faIcon: "fa-home",
                        menuText: "Dashboard",
                        selected: false,
                        description: " reports and statistics ",
                        block:"1"
                    },
                    {
                        faIcon: "fa-check-square-o",
                        menuText: "Orders",
                        selected: false,
                        description: " order reports and editing ",
                        block:"2"
                    },
                    {
                        faIcon: "fa-cube",
                        menuText: "Products",
                        selected: false,
                        description: " all products ",
                        block:"3"
                    },
                    {
                        faIcon: "fa-pencil-square-o",
                        menuText: "Product Edit",
                        selected: false,
                        description: " changing product data  ",
                        block:"4"
                    }
                ]
            },
            {
                id: 1,
                menuText: "Components",
                classState: true,
                statusClass: "menu_header_close",
                pileDirection: "fa-angle-right",
                subMenus: [
                    {
                        faIcon: "fa-table",
                        menuText: "Datatables",
                        selected: false,
                        description: " datatable examples ",
                        block:"5"
                    },
                    {
                        faIcon: "fa-bar-chart-o",
                        menuText: "Charts",
                        selected: false,
                        description: "charts examples ",
                        block:"6"
                    },
                    {
                        faIcon: "fa-list-alt",
                        menuText: "Forms",
                        selected: false,
                        description: " forms examples ",
                        block:"7"
                    }
                ]
            }
        )

        //Select based on JSON
        for (var i = 0; i < this.menuBlocks.length; i++) {
            for (var j = 0; j < this.menuBlocks[i].subMenus.length; j++) {
                //console.log(this.menuBlocks[i].subMenus[j].route)
                
                if (this.menuBlocks[i].subMenus[j].block=="/" + this.selectedRoute) {
                    this.dashBoardHeader = this.menuBlocks[i].subMenus[j].menuText;
                    this.dashBoardDetails = this.menuBlocks[i].subMenus[j].description;
                    this.menuBlocks[i].subMenus[j].selected = true;
                }
            }
        }
    }

    //***********************************************************************
    //*****************************Functions*********************************
    //***********************************************************************

    //Send message to dashboard
    ngAfterContentInit() {
        this.DataToSend = {header:this.dashBoardHeader,description:this.dashBoardDetails,componentToDisplay:"1"}
        this.sendMessage("dashboard",this.DataToSend);
        this.selectMenuItem(0, "Dashboard");
    }

    //FUnction not in use but good to have code for sending messages between components
    sendMessage(receiver:string,dataToSend:DataToSend): void {
        // send message to subscribers via observable subject
        if(receiver=="dashboard"){
            this.messageService.sendMessagetoDashboard(dataToSend);
        } else if(receiver == "appComponent") {
            this.messageService.sendMessagetoAppComponent(dataToSend);
        }
    }

    //Set classes based on menu header click in order to make nice animation
    toggleClassOC(id: number) {
        if (this.menuBlocks[id].classState) {
            this.menuBlocks[id].statusClass = "menu_header_close";
            this.menuBlocks[id].pileDirection = "fa-angle-right";
            this.menuBlocks[id].classState = false;
        } else {
            this.menuBlocks[id].statusClass = "menu_header_open";
            this.menuBlocks[id].pileDirection = "fa-angle-down";
            this.menuBlocks[id].classState = true;
        }
    }

    //Change route based on user menu click
    selectMenuItem(id: number, menuText: string) {

        for (var i = 0; i < this.menuBlocks.length; i++) {
            for (var j = 0; j < this.menuBlocks[i].subMenus.length; j++) {
                if (this.menuBlocks[i].id == id && this.menuBlocks[i].subMenus[j].menuText == menuText) {
                    this.menuBlocks[i].subMenus[j].selected = true;
                    this.dashBoardHeader = this.menuBlocks[i].subMenus[j].menuText;
                    this.dashBoardDetails = this.menuBlocks[i].subMenus[j].description;
                    //this.sendMessage();
                    //console.log(this.menuBlocks[i].subMenus[j].route)
                    //document.location.href =  "/angular" + this.menuBlocks[i].subMenus[j].route;
                    this.DataToSend = {header:this.dashBoardHeader,description:this.dashBoardDetails,componentToDisplay:this.menuBlocks[i].subMenus[j].block}
                    this.sendMessage("appComponent",this.DataToSend);
                    this.sendMessage("dashboard",this.DataToSend)
                } else {
                    this.menuBlocks[i].subMenus[j].selected = false;
                }
            }
        }
    }
}

//***********************************************************************
//*****************************Interfaces********************************
//***********************************************************************
interface menuBlocks {
    id: number;
    menuText: string;
    classState: boolean;
    pileDirection: string;
    statusClass: string;
    subMenus: subMenuArray[]
}

interface subMenuArray {
    faIcon: string;
    menuText: string;
    selected: boolean;
    description: string;
    block:string;
}

interface DataToSend{
    header:string;
    description:string;
    componentToDisplay:string;
}
