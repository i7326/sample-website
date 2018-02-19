import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationService } from './service/navigation.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [NavigationComponent, HeaderComponent],
  exports: [NavigationComponent, HeaderComponent],
  providers: [NavigationService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
