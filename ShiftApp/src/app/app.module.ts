import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/Layout.component';
import { PagesComponent } from './Pages/Pages.component';
import { ServiciosComponent } from './Servicios/Servicios.component';

@NgModule({
  declarations: [				
    AppComponent,
      LayoutComponent,
      PagesComponent,
      PagesComponent,
      ServiciosComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
