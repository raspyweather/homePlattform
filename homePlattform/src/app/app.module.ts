import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ScanReceiptComponent } from './scan-receipt/scan-receipt.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ScanReceiptComponent,
    InventoryListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
