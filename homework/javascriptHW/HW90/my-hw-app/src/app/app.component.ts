import { Component } from '@angular/core';
import { Order } from './shared/order';
import { Person } from './shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hw-app';
  
  customerName: Person = {
    firstName: 'Chaim',
    lastName: 'Cohen',

    address: {
      street: '325 6th Street',
      city: 'Lakewood',
      state: 'New Jersey',
      zip: '08701'
    }
  };
  order: Order = {
    customerName:this.customerName,
    date: new Date(),
    item: {
      itemName: 'book',
      itemPrice: 5
  }
  }
  
}
