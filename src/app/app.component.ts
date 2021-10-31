import { Component } from '@angular/core';
import { DEFAULT_NAVIGATION_LINKS } from './app-navigation-links.default';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DialogService } from './modules/shared/dialog';
import { NavigationLink } from './modules/shared/framing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public links: NavigationLink[] = DEFAULT_NAVIGATION_LINKS;
  
  constructor(
    private _dialogService: DialogService
  ) { }

  public open(): void {
    this._dialogService.open(ConfirmationDialogComponent, null);
  }
}
