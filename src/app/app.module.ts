import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";

import { SearchComponent } from './search/search.component'
import { MenuComponent } from './menu/menu.component'

import { AppComponent } from './app.component';


@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, SearchComponent, MenuComponent ],
  imports:      [ BrowserModule, NgSemanticModule ]
})
export class AppModule {}

