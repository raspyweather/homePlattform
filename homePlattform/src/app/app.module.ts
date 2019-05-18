import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ScanReceiptComponent } from './scan-receipt/scan-receipt.component';
import { HomeComponent } from './home/home.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { DevicesComponent } from './devices/devices.component';
import { InventoryService } from './inventory.service';
import { TimelineComponent } from './timeline/timeline.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ScanReceiptComponent,
    InventoryListComponent,
    HomeComponent,
    UpdateListComponent,
    DevicesComponent,
    TimelineComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
