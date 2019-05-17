import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanReceiptComponent } from './scan-receipt/scan-receipt.component';

const routes: Routes = [{
  component: ScanReceiptComponent,
  path: "scanner"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
