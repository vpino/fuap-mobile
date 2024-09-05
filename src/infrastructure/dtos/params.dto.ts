export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class SortOptions {
  direction: SortOrder | undefined;
}

export class ParamsDTO<T> {
  filter?: Record<string, any>;
  sort?: Record<string, SortOptions>;
  limit?: number;
  skip?: number;
  fieldSelected?: (keyof T)[];
  relations?: string[];
}
