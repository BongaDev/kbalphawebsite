import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  

  ngOnInit(): void {
  }

  goToUrl()
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://material.angular.io/components/input/examples');
  }

}
