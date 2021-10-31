import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { NavigationLink } from '../../models/navigation-link.model';

@Component({
  selector: 'app-framing-navbar',
  templateUrl: './framing-navbar.component.html',
  styleUrls: ['./framing-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FramingNavbarComponent implements OnInit {
  @Input()
  public links: NavigationLink[] = [];

  constructor(
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    fromEvent(window, 'click')
      .subscribe(event => {
        this.links.forEach(e => e.isExpanded = false);
        this._changeDetectorRef.markForCheck();
      });
  }

  public expandLink($event: any, link: NavigationLink): void {
    $event.stopPropagation();
    if (link.isExpanded) {
      link.isExpanded = false;
      return;
    }
    this.links.forEach(link => link.isExpanded = false);
    link.isExpanded = !link.isExpanded;
  }
}
