import { Item } from "./item";
import { Person } from "./person";

export interface Order {
    customerName: Person;
    date: Date;
    item: Item;
}
