import { OrderField } from './order-field';

export class OrderList extends Array<OrderField> {
  constructor(items?: OrderField[]) {
    super(...items);
    Object.setPrototypeOf(this, Object.create(OrderList.prototype));
  }

  public add(orderField: OrderField) {
    const orderFieldFound = this.find(c => c.name === orderField.name);
    if (orderFieldFound) {
      orderFieldFound.order = orderField.order;
    } else {
      this.push(orderField);
    }
  }

  public remove(orderField: OrderField) {
    const index = this.findIndex(c => c.name === orderField.name);
    if (index > -1) {
      this.splice(index, 1);
    }
  }
}
