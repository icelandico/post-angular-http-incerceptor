import { Component } from '@angular/core';

interface IBox {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeElement: string;
  boxCollection: IBox[] = [
    {
      id: 1,
      name: 'Uruguay'
    },
    {
      id: 2,
      name: 'Mongolia'
    },
    {
      id: 3,
      name: 'Japan'
    },
    {
      id: 4,
      name: 'Moldova'
    },
    {
      id: 5,
      name: 'Rwanda'
    }
  ];

  handleActiveClick(value: string): void {
    this.activeElement = value;
  }
}
