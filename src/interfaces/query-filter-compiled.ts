import { Operator } from "../enums";
import { Filter } from "../filter";
import { OrderList } from "../order-list";

export interface IQueryFilterCompiled {
    pageNumber: number,
    pageSize: number,
    orderBy: OrderList,
    operator: Operator,
    filter: Filter[]
}