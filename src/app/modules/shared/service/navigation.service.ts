import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NavigationService {
    menuEvent: EventEmitter<boolean> = new EventEmitter();
}
