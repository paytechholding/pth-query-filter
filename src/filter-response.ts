export class FilterResponse {
  public pageNumber: number = 1;
  public pageSize: number = 10;
  public totalFiltered: number;
  public totalPages: number;
  public data: any[];
}
