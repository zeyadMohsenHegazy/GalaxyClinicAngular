import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css'],
})
export class DemoPageComponent {
  constructor(private translate: TranslateService) {
    translate.use('en');
  }
}
