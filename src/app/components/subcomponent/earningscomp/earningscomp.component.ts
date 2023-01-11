import { Component, OnInit } from '@angular/core';

// useful for typechecking
import { CalendarOptions } from '@fullcalendar/angular'; 

import {KbalphabusinessapiService} from '../../../../app/Services/kbalphabusinessapi.service';

@Component({
  selector: 'app-earningscomp',
  templateUrl: './earningscomp.component.html',
  styleUrls: ['./earningscomp.component.css']
})
export class EarningscompComponent implements OnInit {

  constructor(private apiConnect: KbalphabusinessapiService) { }

  //You can change the calendar view by changing the initialview value
  //1. you need to import the calendar type in app module
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  ngOnInit(): void {
    this.apiConnect.getEarningsDates();
  }

}
