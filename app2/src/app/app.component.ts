import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'app2';

  async ngOnInit() {
    // await import('app2/web-components')
  }

}
