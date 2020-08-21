import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { SoftwaredevserviceComponent } from './softwaredevservice/softwaredevservice.component';
import { SerapismedicalComponent } from './serapismedical/serapismedical.component';
//import { MongoClient } from 'mongodb';

// estblish a connection
// MongoClient.connect(process.env.KB_ALPHA_DB_URI,
//     // TODO: Connection Pooling
//   // Set the poolSize to 50 connections.
//   // TODO: Timeouts
//   // Set the write timeout limit to 2500 milliseconds.
//   {useNewUrlParser: true},
//   console.log('On port: ' + process.env.PORT)

//   );

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'softwaredevservice', component: SoftwaredevserviceComponent} ,
   {path: 'about', component: SoftwaredevserviceComponent} ,
   {path: 'serapismedical', component: SerapismedicalComponent},
   // { path: '**', component: HomeComponent },
 // { path: '**', component: HomeComponent },  // Wildcard route for a 404 page[PAGE NOT FOUND]
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
