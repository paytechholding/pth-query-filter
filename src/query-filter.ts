import { Filter, GenericFilter, OrderField, OrderList } from '.';
import { Operator, Order } from './enums';
import { IQueryFilterCompiled } from './interfaces/query-filter-compiled';

export class QueryFilter {
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public generic: GenericFilter = null;
  public orderBy: OrderList = new OrderList();
  public operator: Operator = Operator.And;
  public filter: Filter[] = [];
  private get hasGenericFilters (): boolean {
    return this.generic !== null && (this.generic.value !== null && this.generic.value.trim() !== "");
  }

  constructor(orderBy: string, orderMode: Order = Order.Asc) {
    this.orderBy.add(new OrderField(orderBy, orderMode));
  }

  public cleanFilters(): void {
    if (this.generic) {
      this.generic.clean();
    }
    this.filter = [];
  }

  public compile(): IQueryFilterCompiled {
    return {
      filter: this.hasGenericFilters ?
        this.generic.fields.map(c => new Filter(c, this.generic.value)) :
        this.filter,
      operator: this.hasGenericFilters ? Operator.Or : Operator.And,
      orderBy: this.orderBy,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    };
  }

  public toString(): string {
    return JSON.stringify(this.compile());
  }
}
