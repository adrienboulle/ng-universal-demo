import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'home-view',
  template: `
    <h3>{{subs}}</h3>
    <input type="number" [(ngModel)]="valueA">
    <input type="number" [(ngModel)]="valueB">
    <span>{{valueA + valueB}}</span>
  `
})
export class HomeView implements OnInit {
  public subs: string;

  public valueA: number;
  public valueB: number;

  constructor(private _http: Http) {
    this.valueA = 0;
    this.valueB = 0;
  }

  ngOnInit() {
    this._http.get('http://localhost:8000/data')
    .toPromise()
    .then(rep => {
      const data = rep.json();

      this.subs =  `${data.greeting} ${data.name}`;
   });
  }
}
