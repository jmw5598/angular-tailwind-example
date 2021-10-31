import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DialogModule } from './modules/shared/dialog/dialog.module';
import { FramingModule } from './modules/shared/framing/framing.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    FramingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
