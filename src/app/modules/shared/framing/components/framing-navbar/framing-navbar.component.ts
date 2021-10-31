import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    fromEvent(window, 'click')
      .subscribe(event => {
        // handle outside click of dropdown
      });
  }

  public expandLink(link: NavigationLink): void {
    if (link.isExpanded) {
      link.isExpanded = false;
      return;
    }
    this.links.forEach(link => link.isExpanded = false);
    link.isExpanded = !link.isExpanded;
  }
}
