import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OutageDataService } from 'src/services/outage-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShubInfoAccordionComponent } from './shub-info-accordion/shub-info-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    ShubInfoAccordionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OutageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
