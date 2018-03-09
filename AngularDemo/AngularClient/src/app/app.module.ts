import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SampleDataComponent } from './sample-data/sample-data.component';
import { BannerComponent } from './banner/banner.component';
import { SampleTextComponent } from './sample-text/sample-text.component';
import { ServerDataComponent } from './server-data/server-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleDataComponent,
    BannerComponent,
    SampleTextComponent,
    ServerDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
