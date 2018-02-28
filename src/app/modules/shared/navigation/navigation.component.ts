import { Component, Output, ViewChild, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PerfectScrollbarComponent, PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  scrollObs: Observable<any>;
  resizeObs: Observable<any>;
  pos: number;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild(PerfectScrollbarComponent) componentScroll: PerfectScrollbarComponent;

  @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
      console.log($event.target.documentElement.scrollTop)
    }

  public psConfig: PerfectScrollbarConfigInterface = {
    minScrollbarLength: 500,
  }

  menuItems: any[] = [{
      name: 'Works',
      description: 'What we do',
      child: [{
        name:'test1',
        route:'test1'
      },{
        name:'test2',
        route:'test2'
      },{
        name:'test3',
        route:'test3'
      },{
        name:'test4',
        route:'test4'
      },{
        name:'test5',
        route:'test5'
      },{
        name:'test6',
        route:'test6'
      }]
  },{
      name: 'Works',
      description: 'What we do',
      child: [{
        name:'test1',
        route:'test1'
      },{
        name:'test2',
        route:'test2'
      },{
        name:'test3',
        route:'test3'
      },{
        name:'test4',
        route:'test4'
      },{
        name:'test5',
        route:'test5'
      },{
        name:'test6',
        route:'test6'
      }]
  }];

  constructor() {
    // set initial value
    // this.manageScrollPos();
    //
    // // create observable that we can subscribe to from component or directive
    // this.scrollObs = Observable.fromEvent(window, 'scroll');
    //
    // // initiate subscription to update values
    // this.scrollObs.takeUntil(this.ngUnsubscribe)
    //               .subscribe(() => this.manageScrollPos());
    //
    // // create observable for changes in screen size
    // this.resizeObs = Observable.fromEvent(window, 'resize');
    //
    // // initiate subscription to update values
    // this.resizeObs.takeUntil(this.ngUnsubscribe)
    //               .subscribe(() => this.manageScrollPos());
  }

test(e){
// console.log(e);
}
}
