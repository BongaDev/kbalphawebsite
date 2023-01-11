import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { SoftwaredevserviceComponent } from './softwaredevservice/softwaredevservice.component';
import { SerapismedicalComponent } from './serapismedical/serapismedical.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ProcessanimationComponent } from './components/subcomponent/animation/processanimation/processanimation.component';
import { FinishanimationComponent } from './components/subcomponent/animation/finishanimation/finishanimation.component';
import { TechstackcomponentComponent } from './TechStack/techstackcomponent/techstackcomponent.component';
import { OurTeamComponent } from './Team/our-team/our-team.component';
import { LandingpagecomponentComponent } from './LandingPage/landingpagecomponent/landingpagecomponent.component';
import { PlatformofferingcomponentComponent } from './PlatformDevelopmentOfferings/platformofferingcomponent/platformofferingcomponent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScrollanimationComponent } from './components/subcomponent/animation/scrollanimation/scrollanimation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule, MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';
import { ContactyouanimationComponent } from './components/subcomponent/animation/communicationanimations/contactyouanimation/contactyouanimation.component';
import { ThankyoupopComponent } from './components/subcomponent/popups/thankyoupop/thankyoupop.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminViewComponent } from './components/Login/admin-view/admin-view.component';
import { DialogQuoteFormComponent } from './dialog-quote-form/dialog-quote-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { QuotegenerationviewComponent } from './components/Portal/quotegenerationview/quotegenerationview.component';
import { CurrentprojectsviewComponent } from './components/Portal/CurrentProjects/currentprojectsview/currentprojectsview.component';
import { FinancesviewComponent } from './components/Portal/Finances/financesview/financesview.component';
import { CrmdataviewComponent } from './components/Portal/CRMData/crmdataview/crmdataview.component';
import { AdminviewComponent } from './components/Portal/Admin/adminview/adminview.component';
import { ViewContainerComponent } from './components/Portal/ViewContainer/view-container/view-container.component';
import { AccpetedQuoteComponent } from './components/Portal/accpeted-quote/accpeted-quote.component';
import { LoginComponent } from './components/Portal/Login/login/login.component';
import {CommonModule} from '@angular/common';
import { DevopsviewComponent } from './components/Portal/DevOpsViews/devopsview/devopsview.component';
import { FormComponent } from './components/form/form.component';
import { PartnersComponent } from './partners/partners.component';
import { PortalsettingsComponent } from './components/Portal/PortalSettings/portalsettings/portalsettings.component';
import { TradingComponent } from './components/Portal/trading/trading.component';
import { CommodatiescompComponent } from './components/subcomponent/commodatiescomp/commodatiescomp.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { EquatiescompComponent } from './components/subcomponent/equatiescomp/equatiescomp.component';
import { NewscompComponent } from './components/subcomponent/newscomp/newscomp.component';
import { MacroeconomicsComponent } from './components/subcomponent/macroeconomics/macroeconomics.component';
import {EarningscompComponent} from './components/subcomponent/earningscomp/earningscomp.component';

// ########### Calendar library #########
 // must go before plugins (Calendar library)
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TradingviewcompComponent } from './components/subcomponent/tradingviewcomp/tradingviewcomp.component'; // a plugin!


 // register FullCalendar plugins
FullCalendarModule.registerPlugins([
  dayGridPlugin
]);

export function playerFactory(){
    return import('lottie-web');
}

export function loadEcharts() {
  return import('echarts');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftwaredevserviceComponent,
    SerapismedicalComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    ProcessanimationComponent,
    FinishanimationComponent,
    TechstackcomponentComponent,
    OurTeamComponent,
    LandingpagecomponentComponent,
    PlatformofferingcomponentComponent,
    ScrollanimationComponent,
    ContactyouanimationComponent,
    ThankyoupopComponent,
    AdminViewComponent,
    DialogQuoteFormComponent,
    QuotegenerationviewComponent,
    CurrentprojectsviewComponent,
    FinancesviewComponent,
    CrmdataviewComponent,
    AdminviewComponent,
    ViewContainerComponent,
    AccpetedQuoteComponent,
    LoginComponent,
    DevopsviewComponent,
    FormComponent,
    PartnersComponent,
    PortalsettingsComponent,
    TradingComponent,
    CommodatiescompComponent,
    EquatiescompComponent,
    NewscompComponent,
    MacroeconomicsComponent,
    TradingviewcompComponent,
    EarningscompComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory}),
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatChipsModule,
    MatRadioModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    NgxEchartsModule.forRoot({ echarts: loadEcharts }),
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
