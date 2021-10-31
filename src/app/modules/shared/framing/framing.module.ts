import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FramingNavbarComponent } from './components/framing-navbar/framing-navbar.component';

import { NgIconsModule } from '@ng-icons/core';
import { 
  HeroCalendar, 
  HeroChartBar, 
  HeroChevronDown,
  HeroBell,
  HeroFolder,
  HeroUser,
  HeroMail,
  HeroOfficeBuilding,
  HeroLogout } from '@ng-icons/heroicons';

@NgModule({
  declarations: [
    FramingNavbarComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      HeroCalendar,
      HeroChevronDown,
      HeroChartBar,
      HeroBell,
      HeroFolder,
      HeroUser,
      HeroMail,
      HeroOfficeBuilding,
      HeroLogout
    })
  ],
  exports: [
    FramingNavbarComponent
  ]
})
export class FramingModule { }
