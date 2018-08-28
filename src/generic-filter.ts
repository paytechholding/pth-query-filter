export class GenericFilter {
  constructor(public fields: string[] = [], public value: string = null) {}

  public clean(): void {
    this.value = null;
  }
}
