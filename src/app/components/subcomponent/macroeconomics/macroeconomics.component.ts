import { Component, OnInit } from '@angular/core';
import {KbalphabusinessapiService} from '../../../Services/kbalphabusinessapi.service'
import {Cpi} from '../../../../app/Server/Models/Cpi';
@Component({
  selector: 'app-macroeconomics',
  templateUrl: './macroeconomics.component.html',
  styleUrls: ['./macroeconomics.component.css']
})
export class MacroeconomicsComponent implements OnInit {

  constructor(private api: KbalphabusinessapiService) { }

  //List of data points
  cpiData: Cpi[] = [];

  ngOnInit(): void {
    //Get CPI data
    //this.api.getCpiData('monthly');

    //set the returned data to the list

    //Render chart by iterating through the list
  }

}
