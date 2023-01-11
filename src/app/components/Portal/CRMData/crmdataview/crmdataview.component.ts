import { Component, OnInit } from '@angular/core';
import {KbalphabusinessapiService} from 'src/app/Services/kbalphabusinessapi.service'

@Component({
  selector: 'app-crmdataview',
  templateUrl: './crmdataview.component.html',
  styleUrls: ['./crmdataview.component.css']
})
export class CrmdataviewComponent implements OnInit {

  constructor(private apiConnection: KbalphabusinessapiService) { }

  ngOnInit(): void {

    //Get the list of contacts from hubspot on loading page
    this.apiConnection.getContacts();
  }

}
