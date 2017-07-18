import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowdataComponent } from './showdata/showdata.component';
import {routing} from './app.routing';
import { ConvertdatePipe } from './convertdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent,
    ConvertdatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
