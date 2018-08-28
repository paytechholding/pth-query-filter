import { Order } from './enums';

export class OrderField {
  constructor(public name: string = '', public order: Order = Order.Asc) {}
}
