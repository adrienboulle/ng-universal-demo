import {Component } from '@angular/core'

@Component({
  selector: 'demo-app',
  template: `
    <h1>Universal Demo</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <router-outlet></router-outlet>
  `,
  styles: [
    `h1 {
      color: green;
    }`
  ]
})
export class AppComponent { }
