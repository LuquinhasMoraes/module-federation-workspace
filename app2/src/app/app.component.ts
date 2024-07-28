import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'app2';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    console.log('navigate to: ', url);

    this.router.navigate([url])
  }

}
