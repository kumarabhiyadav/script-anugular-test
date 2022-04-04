import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  messageDetail: any;

  constructor() {}
  ngOnInit() {}
  ngOnDestroy(): void {}
  closeMessage() {}
  clickForTest(type: string) {}
}
