import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router, public routes: ActivatedRoute) {
    this.routes.queryParams.subscribe((params) => {
      this.back = params['back'];
    });
  }

  ngOnInit(): void {}
  back: boolean = true;

  backToHomePage() {
  }
}
