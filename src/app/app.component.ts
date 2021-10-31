import { Component } from '@angular/core';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DialogService } from './modules/shared/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _dialogService: DialogService
  ) { }

  public open(): void {
    this._dialogService.open(ConfirmationDialogComponent, null);
  }
}
