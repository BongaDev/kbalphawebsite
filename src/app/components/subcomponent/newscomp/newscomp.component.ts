import { Component, OnInit } from '@angular/core';
import {KbalphabusinessapiService} from '../../../Services/kbalphabusinessapi.service';
import {TrendingNews} from '../../../Server/Models/TrendingNews';

@Component({
  selector: 'app-newscomp',
  templateUrl: './newscomp.component.html',
  styleUrls: ['./newscomp.component.css']
})
export class NewscompComponent implements OnInit {

  constructor(private apiConnect: KbalphabusinessapiService) { }

  regions: Regions[] = [
    {regionCode: "US", regionFlag: "https://img.icons8.com/color/48/000000/usa.png"},
    {regionCode: "AU", regionFlag: ""},
    {regionCode: "CA", regionFlag: ""},
    {regionCode: "FR", regionFlag: ""},
    {regionCode: "DE", regionFlag: ""},
    {regionCode: "HK", regionFlag: ""},
    {regionCode: "IT", regionFlag: ""},
    {regionCode: "ES", regionFlag: ""},
    {regionCode: "GB", regionFlag: ""},
  ];
  
  selectedRegion: string;

  tickerSymbolEntered: string;

  articles: TrendingNews[] = [];

  ngOnInit(): void {
    //Get default articles (US), set to US for now until select works
    //let data =  this.apiConnect.getTrendingStockNews("US");
  }

}

interface Regions{
  regionCode: string;
  regionFlag: string;
}
