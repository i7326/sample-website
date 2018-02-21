import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
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

}
