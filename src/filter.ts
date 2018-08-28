import { Condition } from './enums';

export class Filter {
  constructor(public name: string = '', public value: any = null, public condition: Condition = Condition.Contains) {}
}
