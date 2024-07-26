import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste-a',
  templateUrl: './teste-a.component.html',
  styleUrls: ['./teste-a.component.scss']
})
export class TesteAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.router.navigate([url])
  }
}
