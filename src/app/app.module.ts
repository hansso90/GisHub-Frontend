import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";

import { SearchComponent } from './search/search.component'
import { MenuComponent } from './menu/menu.component'

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, SearchComponent, MenuComponent, ItemComponent ],
  imports:      [ BrowserModule, NgSemanticModule ]
})
export class AppModule {}

