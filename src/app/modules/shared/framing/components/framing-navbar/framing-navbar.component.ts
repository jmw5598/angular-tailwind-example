import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationLink } from '../../models/navigation-link.model';

@Component({
  selector: 'app-framing-navbar',
  templateUrl: './framing-navbar.component.html',
  styleUrls: ['./framing-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FramingNavbarComponent {
  @Input()
  public links: NavigationLink[] = [];

  public expandLink(link: NavigationLink): void {
    if (link.isExpanded) {
      link.isExpanded = false;
      return;
    }
    this.links.forEach(link => link.isExpanded = false);
    link.isExpanded = !link.isExpanded;
  }
}
