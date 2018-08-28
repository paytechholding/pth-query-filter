import { QueryFilter } from '../query-filter';
import { Order, Operator } from '../enums';
import { Filter } from '../filter';
import { GenericFilter } from '../generic-filter';

test('Operador "or" en la busqueda generica.', () => {
  let queryFilter = new QueryFilter('name', Order.Asc);
  queryFilter.generic = new GenericFilter(["name"], "alfredo");
  queryFilter.filter = [new Filter("age", "23")];
  expect(queryFilter.compile().operator).toBe(Operator.Or);
});

test('Operador "and" en la busqueda no generica.', () => {
  let queryFilter = new QueryFilter('name', Order.Asc);
  queryFilter.filter = [new Filter("age", "23")];
  expect(queryFilter.compile().operator).toBe(Operator.And);
});