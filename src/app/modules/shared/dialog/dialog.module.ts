import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayComponent } from './components/overlay/overlay.component';
import { DialogService } from './services/dialog.service';

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
    DialogService
  ]
})
export class DialogModule { }
