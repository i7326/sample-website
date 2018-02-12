import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.route';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    FlexLayoutModule
  ],
  exports: [

  ]
})
export class HomeModule { }
