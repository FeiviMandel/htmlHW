import { Component } from '@angular/core';
import { Category } from './shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw91-app';

  categoryList: Category[] = [
    {
      name: 'Judaica',
      items: [{
        name: 'Becher',
        price: 600
      },
      {
        name: 'Challah Board',
        price: 100
      }]
    },
    {
      name: 'Stationery',
      items: [{
        name: 'paper',
        price: 3
      },
      {
        name: 'Looseleaf',
        price: 6
      }]
    },
    {
      name: 'Clothing',
      items: []
    }
  ];
}
