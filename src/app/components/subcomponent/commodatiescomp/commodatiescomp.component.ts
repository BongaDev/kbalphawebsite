import { Component, OnInit } from '@angular/core';
import {KbalphabusinessapiService} from '../../../Services/kbalphabusinessapi.service'
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-commodatiescomp',
  templateUrl: './commodatiescomp.component.html',
  styleUrls: ['./commodatiescomp.component.css']
})
export class CommodatiescompComponent implements OnInit {

  constructor(private kbAlphaService: KbalphabusinessapiService) 
  {
  
  }

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  codes: string[]=
  [
    "Coal",
    "Gold",
    "Silver"
  ]

  ngOnInit(): void 
  {
      //Get the codes using the kb alpha service 
      //Not in use until deseralization is figured
      //let codes_ = this.kbAlphaService.getCommodityCodes();
  }

}


