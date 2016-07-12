import { Component } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'directives-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HighlightDirective]
})
export class AppComponent {
  private switch = true;
  private items = [1 ,2 ,3 ,4 ,5];
  onSwitch()  {
    this.switch = !this.switch;
  }
}
