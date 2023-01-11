import { Component, Input, OnDestroy, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ViewItem } from '../../view-item';
import { ViewComponent } from '../../view.component';
import { ViewDirective } from '../../view.directive';
import { ViewService } from '../../view.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  views: ViewItem[];

  selectedItem: Menu;

  menuitems: Menu[] =  [
    {menuItemText: 'Quotes', menuItemIcon: 'receipt', viewLink: ' ', viewID: 'quote'},
    {menuItemText: 'Current Projects', menuItemIcon: 'construction', viewLink: ' ', viewID: 'projects'},
    {menuItemText: 'Finances', menuItemIcon: 'attach_money', viewLink: '', viewID: 'finances'},
    {menuItemText: 'CRM', menuItemIcon: 'contacts', viewLink: '', viewID: 'crmConnect'},
    {menuItemText: 'Dev ops', menuItemIcon: 'code', viewLink: '', viewID: 'devopspage'},
    {menuItemText: 'Settings', menuItemIcon: 'construction', viewLink: '', viewID: 'settings'},
    {menuItemText: 'Trading', menuItemIcon: 'show_chart', viewLink: '', viewID: 'tradingPage'}
  ];


  constructor() { this.ngOnInit(); }

  ngOnInit(): void {
     // goes in the constructor --> private viewService: ViewService
     // this.views = this.viewService.getViews();
  }

}

export interface Menu{
  menuItemText: string;
  menuItemIcon: string;
  viewLink: string;
  viewID: string;
}
