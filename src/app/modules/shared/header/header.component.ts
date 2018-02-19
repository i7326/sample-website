import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../service/navigation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuActive:boolean = false;
  menuEventEmitter:any;
  constructor(private _nav: NavigationService) {
    _nav.menuEvent.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
      this.menuEventEmitter = this._nav.menuEvent;
  }

  menuEvent($event) {
    this.isMenuActive = (this.isMenuActive) ? false : true;
    this.menuEventEmitter.emit(this.isMenuActive);
  }

  ngOnDestroy() {
    this.menuEventEmitter.unsubscribe()
  }

}
