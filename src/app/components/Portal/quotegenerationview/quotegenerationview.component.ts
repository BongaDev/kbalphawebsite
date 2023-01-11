import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Server/Models/Quote';
import { ClientDetails } from 'src/app/Server/Models/ClientDetails';
import { Project } from 'src/app/Server/Models/Project';
import {LocalDatabase} from 'src/app/Services/TempDataStore';
import { Equations } from 'src/app/Server/Utils/Equations';
import{QuoteDto} from 'src/app/Server/Models/QuoteDto';
import{KbalphabusinessapiService} from '../../../Services/kbalphabusinessapi.service';


@Component({
  selector: 'app-quotegenerationview',
  templateUrl: './quotegenerationview.component.html',
  styleUrls: ['./quotegenerationview.component.css']
})
export class QuotegenerationviewComponent implements OnInit {

  constructor(private apiConnection: KbalphabusinessapiService) { this.ngOnInit(); }

  tempData = new LocalDatabase();

  calculator = new Equations();

  // Object with the quote infomation
  quoteObj: Quote = new Quote();

  // Subtotal local variable
  subTotal = 0;

  pvtHoursRequired = 0;


  // Features requested by the client
  /* tempFeatureList: IFeatureListing[] = [
                                          { position: 1, feature: 'The Applciation must have GPS location	',
                                            importance: 'High', hoursRequired: 0, featureCost: 0},
                                          { position: 2, feature: 'It must be on Android and IOS',
                                            importance: 'High', hoursRequired: 0, featureCost: 0},
                                          { position: 3, feature: 'It must sign in with Google, facebook and linkdin',
                                            importance: 'High', hoursRequired: 0, featureCost: 0}
                                       ]; */

  // Get data from the quoteObj object
  quoteSubmissionDate = new Date().toDateString();

  // The local container for the list of quotes
  pvtlistOfAllQuotes: Quote[];

  // Dummy service DOA
  listOfAllQuotes: Quote[] = [
                                {
                                  quoteId: 50000,
                                  validityDateOfQuote: new Date(),
                                  acceptedQuote: false,
                                  dateTimeOfQuote: new Date(),
                                  projectReq: new Project(),
                                  clientDetails: new ClientDetails(),
                                  quoteAmount: null
                                },
                                {
                                  quoteId: 10001,
                                  validityDateOfQuote: new Date(),
                                  acceptedQuote: false,
                                  dateTimeOfQuote: new Date(),
                                  projectReq: new Project(),
                                  clientDetails: new ClientDetails(),
                                  quoteAmount: null
                                }
                            ];

  ngOnInit(): void {
    // 1. Get list of submitted quotes from the backend
    this.getQuotes();

  }

  getQuotes(): Quote[]{

    this.pvtlistOfAllQuotes = this.listOfAllQuotes;

    return this.pvtlistOfAllQuotes;
  }

  createQuote(quoteID){
      // set a local quote id
      const pvtId = quoteID;

      // try running the command
      try {

        if (pvtId != null){

          // 1. update the quote values format invoice

          // 2. send email to email address with link for accpeting the quote to set the quote accpted property to true if accepted

          // 3. remove from the current working list.
        }

      }
      catch (error) {
        console.log(error);
      }
  }
}
