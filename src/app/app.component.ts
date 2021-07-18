import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Http Interceptor</h1>

      <h2>Regular response:</h2>
      <pre *ngFor="let user of users" [innerHTML]="user | json"></pre>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users: any = [];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(resp => this.users = resp);
  }

}
