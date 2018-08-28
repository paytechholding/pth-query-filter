import { QueryFilter } from '../query-filter';
import { Order, Operator } from '../enums';
import { Filter } from '../filter';
import { GenericFilter } from '../generic-filter';

test('Clean Filters', () => {
  let queryFilter = new QueryFilter('name', Order.Asc);
  queryFilter.generic = new GenericFilter(["name"], "alfredo");
  queryFilter.filter = [new Filter("age", "23")];
  expect(queryFilter.compile().operator).toBe(Operator.Or);
});