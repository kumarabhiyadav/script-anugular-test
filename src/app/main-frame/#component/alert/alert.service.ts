import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }

  showAlert(
    type: string,
    title: string,
    subTitle: string,
    keepAfterNavigationChange = false
  ) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: type, title: title, subTitle: subTitle });
  }

  //   error(title: string, subTitle: string, keepAfterNavigationChange = false) {
  //     this.keepAfterNavigationChange = keepAfterNavigationChange;
  //     this.subject.next({ type: 'error', title: title, subTitle: subTitle });
  //   }

  //   warning(title: string, subTitle: string, keepAfterNavigationChange = false) {
  //     this.keepAfterNavigationChange = keepAfterNavigationChange;
  //     this.subject.next({ type: 'warning', title: title, subTitle: subTitle });
  //   }

  //   info(title: string, subTitle: string, keepAfterNavigationChange = false) {
  //     this.keepAfterNavigationChange = keepAfterNavigationChange;
  //     this.subject.next({ type: 'info', title: title, subTitle: subTitle });
  //   }

  clearAlertMessage() {
    this.subject.next();
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
