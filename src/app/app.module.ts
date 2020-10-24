import { ChangePipe } from './pipes/change.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule } from '@angular/forms';
import { CardTypeDirective } from './directives/card-type.directive';
import { CardHoverDirective } from './directives/card-hover.directive';
import { DelayDirective } from './directives/delay.directive';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectorPipe } from './pipes/change-detector.pipe';
import { NewsPipe } from './pipes/news.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    CardTypeDirective,
    CardHoverDirective,
    DelayDirective,
    ChangePipe,
    ChangeDetectorPipe,
    NewsPipe

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],


  providers: [StocksService, CurrencyPipe, PercentPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
