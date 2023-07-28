import { NgModule } from '@angular/core';
import { LogoWhiteComponent } from './logo-white/logo-white.component';
import { BellIconComponent } from './bell-icon/bell-icon.component';
import { SearchLogoComponent } from './search-icon/search-icon.component';
import { MoneyIconComponent } from './money-icon/money-icon-component';
import { UserIconComponent } from './user-icon/user-icon.component';

// Import other SVG components from the 'assets' folder if needed.

@NgModule({
  declarations: [
    LogoWhiteComponent,
    BellIconComponent,
    SearchLogoComponent,
    MoneyIconComponent,
    UserIconComponent,
  ],
  exports: [
    LogoWhiteComponent,
    BellIconComponent,
    SearchLogoComponent,
    MoneyIconComponent,
    UserIconComponent,
  ],
})
export class SvgComponentsModule {}
