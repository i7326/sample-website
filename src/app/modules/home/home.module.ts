import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.route';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
// import { MnFullpageModule } from 'ngx-fullpage';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    FlexLayoutModule,
    CommonModule
    // MnFullpageModule.forRoot()
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
