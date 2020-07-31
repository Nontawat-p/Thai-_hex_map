import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule,  HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highmaps from 'highcharts/modules/map.src';
import * as more from 'highcharts/highcharts-more.src';
import * as tilemap from 'highcharts/modules/tilemap.src'
import * as offlineExporting from 'highcharts/modules/offline-exporting.src';
import * as accessibility from 'highcharts/modules/accessibility.src';
import * as data from 'highcharts/modules/data.src';
import * as heatmap from 'highcharts/modules/heatmap.src';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,

  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => 
      [ highmaps,more,tilemap,offlineExporting,accessibility,data,heatmap ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
