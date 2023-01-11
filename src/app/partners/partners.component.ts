import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
 

  constructor() { }

  //Clients list
  clients: ClientObj[]=
  [
    {
      clientName: "SoLawyer",
      clientLogo: "",
      clientReview: "Great software developers, very proffesional",
      clientWebsite: "",
      clientSolutionNeeds: ""
    },
    {
      clientName: "Next Distro",
      clientLogo: "",
      clientReview: "We'll be working with them in the future",
      clientWebsite: "",
      clientSolutionNeeds: ""
    }
  ]

  //Partners list
  partners: PartnerObj[] = 
  [
      {
        partnerName: "Microsoft", 
        partnerLogo: "Microsoft-logo_rgb_c-gray.png", 
        partnerServices: [
          "Cloud Service Provider", 
          "Power BI licensing"
        ]
      },
      {
        partnerName:"Lenovo", 
        partnerLogo:"LenovoLogo-POS-Red.png", 
        partnerServices: [
          "Servers", 
          "Data storage"
        ]
      },
      {
      partnerName: "HPE", 
      partnerLogo: "hp logo.png", 
      partnerServices: [
        "Servers", 
        "Data storage"
      ]
      }
  ]

  ngOnInit(): void {
  }

}

interface PartnerObj{
  partnerName: string;
  partnerLogo: string;
  partnerServices: string[];
}

interface ClientObj{
  clientName: string;
  clientLogo: string;
  clientReview: string;
  clientWebsite: string;
  clientSolutionNeeds: string;
}
